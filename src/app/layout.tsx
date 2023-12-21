import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.scss";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bookmark",
  description: "A Simple Bookmark Manager",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
