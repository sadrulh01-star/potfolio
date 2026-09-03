import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sadrul Haque | AI/ML Student & Project Manager Portfolio",
  description:
    "Portfolio of Sadrul Haque — B.Tech Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning at Lovely Professional University. Discover projects, technical skills, certifications, and project management leadership.",
  keywords: [
    "Sadrul Haque",
    "Portfolio",
    "AI/ML",
    "Project Manager",
    "Lovely Professional University",
    "Buzz Box-Auto",
    "Machine Learning",
    "Python Developer",
    "Web Development",
    "Computer Science"
  ],
  authors: [{ name: "Sadrul Haque", url: "https://github.com/sadrulh01-star" }],
  creator: "Sadrul Haque",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sadrulhaque.dev",
    title: "Sadrul Haque | AI/ML Engineer & Project Manager",
    description:
      "B.Tech CSE AI/ML student at Lovely Professional University. Explore AI-powered digital platforms, embedded systems, certifications, and leadership.",
    siteName: "Sadrul Haque Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sadrul Haque | AI/ML Engineer & Project Manager",
    description:
      "B.Tech CSE AI/ML student at Lovely Professional University. Explore AI-powered digital platforms, embedded systems, certifications, and leadership.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-background text-slate-100 font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
