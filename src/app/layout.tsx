import type { Metadata } from "next";
import { Arsenal } from "next/font/google";
import "./globals.css";

const arsenal = Arsenal({
  subsets: ['latin'],
  weight: "700",
  style: "normal"
});

export const metadata: Metadata = {
  title: "Sebi's Portfolio",
  description: "A personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${arsenal.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
