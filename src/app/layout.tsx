import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({ 
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: '--font-space-mono',
});

export const metadata: Metadata = {
  title: "Tip Calculator | Splitter",
  description: "Split bills and calculate tips easily with our intuitive tip calculator app. Perfect for dining out with friends!",
  keywords: ["tip calculator", "bill splitter", "tip splitter", "calculate tip"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} font-mono antialiased`}>
        {children}
      </body>
    </html>
  );
}