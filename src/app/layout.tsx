import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Theme from "./theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "locus.news",
  description: "interactive news platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Theme>
        <body className={inter.className}>{children}</body>
      </Theme>
    </html>
  );
}
