import type { Metadata } from "next";
import { inter, kanit, roboto, roboto_condensed } from "./fonts";
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
          "bg-[#1b1b1b] text-white antialiased font-roboto"
        )}
      >
        {/* <NavBar /> */}
        {/* <div className="flex flex-col items-center"> */}
        {/* <div className=""> */}
        {children}
        <Toaster />
        {/* <Footer /> */}
        {/* </div> */}
      </body>
    </html>
  );
}
