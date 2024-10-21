"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { Menu, X, PawPrint, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navIsHidden, setNavIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setNavIsHidden(difference > 0);
      lastYRef.current = y;
    }
  });

  return (
    <div>
      <motion.div
        animate={navIsHidden ? "navHidden" : "navVisible"}
        whileHover="navVisible"
        onFocusCapture={() => setNavIsHidden(false)}
        variants={{ navHidden: { y: "-90%" }, navVisible: { y: "0%" } }}
        transition={{ duration: "0.2" }}
        className="fixed top-0 pt-5 w-full z-50"
      >
        <div className="text-sm lg:text-lg flex items-center justify-between bg-[#0b0b0b]/60 backdrop-blur py-2 lg:py-3 px-5 border-black/15 rounded-full mx-[17vw] border-2 border-pink-300/60">
          <div className="flex gap-3">
            <PawPrint className="h-5 w-5 lg:h-6 lg:w-6" />
            <h1 className="font-roboto-condensed">Karliefolio</h1>
          </div>
          <nav className="hidden md:flex gap-x-5">
            <Link href="#">Home</Link>

            <Link href="/projects">Works</Link>

            <Link href="/">Resume</Link>

            <Link href="/contact">Contact</Link>

            <Link href="/about">About</Link>
          </nav>
          <div className="hidden md:block">
            <Music className="h-5 w-5 lg:h-6 lg:w-6" />
          </div>
          <Button
            variant="ghost"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{
          opacity: isOpen ? 1 : 0,
          x: isOpen ? 0 : "100%",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed inset-0 bg-[#0b0b0b]/95 backdrop-blur-sm z-50 md:hidden"
      >
        <p>hey</p>
      </motion.div>
      {/* <div className="mx-auto px-4 sm:px-6 lg:px-8 font-medium">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div>
              <div className="flex-shrink-0">
                <div className="h-8 w-8">Logo</div>
                <h1>Karliefolio</h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                <Link
                  href="/"
                  className="hover:bg-gray-700 text-white px-5 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/projects"
                  className="hover:bg-gray-700 text-white px-5 py-2 rounded-md text-sm font-medium"
                >
                  Projects
                </Link>
                <Link
                  href="/about"
                  className="hover:bg-gray-700 text-white px-5 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="hover:bg-gray-700 text-white px-5 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-500 hover:from-10% hover:via-sky-500 hover:via-30% hover:to-emerald-500 hover:to-90% text-white font-bold py-2 px-4 rounded">
                Music
              </Button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <Button onClick={() => setIsOpen(!isOpen)}>
              <span className="sr-only">Open main menu</span>
              <Menu />
            </Button>
          </div>
        </div>
      </div> */}
      {/* <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed inset-0 flex flex-col z-50 bg-stone-950 md:hidden`}
      >
        <div className="flex items-center justify-between p-4">
          <div className="flex-shrink-0">
            <div className="h-8 w-8">Logo</div>
          </div>
          <Button
            className="bg-gray-700 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            onClick={() => setIsOpen(false)}
          >
            <span className="sr-only">Close main menu</span>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </motion.div> */}
    </div>
  );
}
