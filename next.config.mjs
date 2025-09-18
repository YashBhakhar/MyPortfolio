/** @type {import('next').NextConfig} */
const nextConfig = {
    serverRuntimeConfig: {
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_SECURE: process.env.SMTP_SECURE,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
    TO_EMAIL: process.env.TO_EMAIL,
  },
};

export default nextConfig;
