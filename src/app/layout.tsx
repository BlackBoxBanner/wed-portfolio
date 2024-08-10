import type {Metadata} from "next";
import {Maitree as FontSans} from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";
import Menu from "@/components/menu";
import {Toaster} from "@/components/ui/toaster";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "My Web Portfolio",
  description: "This is my website portfolio, built using Next.js.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased text-lg",
          fontSans.variable
        )}>
        <Toaster />
        <Menu />
        {children}
      </body>
    </html>
  );
}
