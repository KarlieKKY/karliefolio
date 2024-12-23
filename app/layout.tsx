import type { Metadata } from "next";
import { inter, kanit, roboto, roboto_condensed, flex } from "./fonts";
import { twMerge } from "tailwind-merge";
import "./globals.css";
import NavBar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Karliefolio",
  description: "",
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
          roboto.variable,
          roboto_condensed.variable,
          kanit.variable,
          flex.variable,
          "bg-[#1b1b1b] text-white antialiased font-roboto"
        )}
      >
        <NavBar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
