import { NextResponse } from "next/server";
import { Resend } from "resend";

// init resend
const resend = new Resend(process.env.RESEND_API_KEY);

// simple in-memory rate limit store
const rateLimitMap = new Map();
const RATE_LIMIT = 5; // max 5 requests
const TIME_WINDOW = 60 * 1000; // per 1 minute

export async function POST(req) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown";

    // rate limiting logic
    const now = Date.now();
    const userData = rateLimitMap.get(ip) || { count: 0, lastRequest: now };

    if (now - userData.lastRequest > TIME_WINDOW) {
      // reset window
      userData.count = 0;
      userData.lastRequest = now;
    }
    userData.count++;
    rateLimitMap.set(ip, userData);

    if (userData.count > RATE_LIMIT) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // parse body
    const body = await req.json();
    const { name, company, email, phone, note } = body;

    if (!name || !email || !note) {
      return NextResponse.json(
        { error: "Name, Email and Note are required" },
        { status: 400 }
      );
    }

    // send mail
    await resend.emails.send({
      from: "noreply@yourdomain.com", // recommended: use custom domain
      to: process.env.TO_EMAIL,
      subject: "New Contact Form Submission",
      text: `
        Name: ${name}
        Company: ${company || "N/A"}
        Email: ${email}
        Phone: ${phone || "N/A"}
        Note: ${note}
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
