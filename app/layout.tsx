import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pratyaksh Danidharia — Full-Stack & Machine Learning Developer",
  description:
    "Portfolio of Pratyaksh Danidharia, a full-stack and machine learning developer in Bengaluru, India.",
  applicationName: "Pratyaksh Danidharia Portfolio",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Pratyaksh Danidharia — Full-Stack & Machine Learning Developer",
    description:
      "I build thoughtful full-stack applications, browser extensions, and practical AI tools.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
