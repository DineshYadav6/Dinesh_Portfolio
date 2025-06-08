import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Dinesh's Portfolio",
  description:
    "This portfolio website is a fully responsive, SEO-friendly showcase built using ReactJS, NextJS, and Tailwind CSS. It leverages TypeScript for type safety and includes various modern frontend libraries like shadCN for UI components and framer-motion for dynamic animations and transitions. The website is optimized for performance and accessibility across all devices, providing a smooth, responsive user experience. With NextJS, the site is highly optimized for SEO, ensuring fast load times and search engine visibility.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
