import type { Metadata } from "next";
import { inter, roboto, roboto_condensed } from "./fonts";
import "./globals.css";
import NavBar from "@/components/custom_ui/Navbar";
import Footer from "@/components/custom_ui/Footer";

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
    <html
      lang="en"
      className={`${inter.variable} ${roboto.variable} ${roboto_condensed.variable}`}
    >
      <body className={"font-condensed bg-slate-900"}>
        <NavBar />
        <div className="flex flex-col items-center">
          {children}
          <Toaster />
          <Footer />
        </div>
      </body>
    </html>
  );
}
