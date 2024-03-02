import "./globals.css";
import type { Metadata } from "next";
import { ChildrenType } from "@/core/interface/children.interface";
import { Urbanist } from "next/font/google";
const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rajan Raj Shah 🤟",
  description: "Rajan Raj Shah's Portfolio",
};

export default function RootLayout({ children }: ChildrenType) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Text:wght@100..900&family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lateef:wght@200;300;400;500;600;700;800&family=Lexend:wght@100..900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className={urbanist.className}>{children}</body>
    </html>
  );
}
