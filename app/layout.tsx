import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/custom_ui/Navbar";
import Footer from "@/components/custom_ui/Footer";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} bg-slate-900`}>
        <NavBar />
        <div className="flex flex-col items-center">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
