import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cornell Data Science",
  description: "Cornell's Data Science Project Team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body>{children}</body>
      </html>
    </>
  );
}
