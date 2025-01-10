import type { Metadata } from "next";
import "./globals.css"
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Portfolio | Anagho",
  description: "I build, create and deliver web solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
