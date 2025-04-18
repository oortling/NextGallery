import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const font = Ubuntu({ weight: "400", subsets: ["latin"]  });

export const metadata: Metadata  = {
  title: "Kieran's Gallery",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {<Header />}
        {children}
      </body>
    </html>
  );
}
