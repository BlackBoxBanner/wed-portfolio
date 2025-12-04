import type {Metadata} from "next";
import {Outfit as FontSans} from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";
import Menu from "@/components/menu";
import {Toaster} from "@/components/ui/toaster";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Sueksit Vachirakumthorn | Full-Stack Developer",
  description: "Full-Stack Developer passionate about building web and mobile applications that solve real-world problems. Specializing in React, Next.js, React Native, and modern web technologies.",
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
