import { Geist, Geist_Mono } from "next/font/google";
import Favicon from "@/public/favicon-removebg-preview.png";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Yash Bhakhar | Full Stack Developer Portfolio",
  description: "Full Stack Developer specializing in modern web technologies. Explore my projects, skills, and professional experience in web development.",
  metadataBase: new URL('https://your-domain.com'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Yash Bhakhar | Full Stack Developer Portfolio',
    description: 'Full Stack Developer specializing in modern web technologies. Explore my projects, skills, and professional experience in web development.',
    url: 'https://your-domain.com', // Replace with your actual domain
    siteName: 'Yash Bhakhar Portfolio',
    images: [
      {
        url: '/open-graph.png', // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: 'Yash Bhakhar - Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: Favicon.src,
    shortcut: Favicon.src,
    apple: Favicon.src,
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: Favicon.src,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
    // other verification codes as needed
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}