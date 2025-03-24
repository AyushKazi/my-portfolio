import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/navbar";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - AyushKazi",
  description:
    "Explore the portfolio of Ayush Kazi Shrestha, a skilled frontend developer specializing in Next.js, React, and modern web technologies.",
  keywords: [
    "Ayush Kazi Shrestha",
    "Frontend Developer",
    "Next.js",
    "React",
    "Web Development",
    "Portfolio",
    "JavaScript",
    "TypeScript",
    "UI/UX",
    "Tailwind CSS",
  ],
  authors: [
    {
      name: "Ayush Kazi Shrestha",
      url: "https://my-portfolio-alpha-three-87.vercel.app/",
    },
  ],
  openGraph: {
    title: "Ayush Kazi Shrestha - Portfolio",
    description:
      "Showcasing my projects, skills, and experience in frontend development.",
    url: "https://my-portfolio-alpha-three-87.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://my-portfolio-alpha-three-87.vercel.app/portfolio.png",
        width: 1200,
        height: 630,
        alt: "Ayush Kazi Shrestha Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Kazi Shrestha - Portfolio",
    description: "Showcasing my projects and skills in web development.",
    images: ["https://my-portfolio-alpha-three-87.vercel.app/portfolio.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ActiveSectionContextProvider>
          <Navbar />
          {children}
        </ActiveSectionContextProvider>
        <Toaster richColors closeButton position="top-right" />
      </body>
    </html>
  );
}
