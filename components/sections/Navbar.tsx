"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { Menu, X, PawPrint, Music } from "lucide-react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  Variants,
} from "framer-motion";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navIsHidden, setNavIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setNavIsHidden(difference > 0);
      lastYRef.current = y;
    }
  });

  const navLinkVariants: Variants = {
    initial: { y: 0 },
    hover: {
      y: [0, "-200%", "-200%", "-100%", "-100%", "0%", "0%"],
      transition: {
        times: [0, 0.05, 0.33, 0.38, 0.66, 0.71, 1],
        duration: 3,
        ease: "easeInOut",
      },
    },
  };

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
        <div className="text-xs md:text-sm lg:text-lg flex items-center justify-between bg-[#0b0b0b]/60 backdrop-blur py-2 lg:py-3 px-5 rounded-full mx-[17vw] border-2 border-white/40">
          <Link href="/">
            <div className="flex gap-3">
              <PawPrint className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
              {/* <div className="group relative overflow-hidden inline-block h-6"> */}
              <h1 className="font-roboto-condensed">Karliefolio</h1>
              {/* </div> */}
            </div>
          </Link>
          <nav className="hidden md:flex gap-x-5">
            <Link
              href="/"
              className="group relative overflow-hidden inline-block md:h-5 lg:h-6"
            >
              <div className="relative md:h-5 lg:h-6">
                <span className="block absolute transition-transform duration-200 group-hover:-translate-y-full">
                  Home
                </span>
                <span className="block transition-transform duration-200 translate-y-full group-hover:translate-y-0">
                  Home
                </span>
              </div>
            </Link>
            <Link
              href="/projects"
              className="group relative overflow-hidden inline-block md:h-5 lg:h-6"
            >
              <div className="relative md:h-5 lg:h-6">
                <span className="block absolute transition-transform duration-200 group-hover:-translate-y-full">
                  Projects
                </span>
                <span className="block  transition-transform duration-200 translate-y-full group-hover:translate-y-0">
                  Projects
                </span>
              </div>
            </Link>
            <Link
              href="/"
              className="group relative overflow-hidden inline-block md:h-5 lg:h-6"
            >
              <div className="relative md:h-5 lg:h-6">
                <span className="block absolute transition-transform duration-200 group-hover:-translate-y-full">
                  Resume
                </span>
                <span className="block  transition-transform duration-200 translate-y-full group-hover:translate-y-0">
                  Resume
                </span>
              </div>
            </Link>
            <Link
              href="/contact"
              className="group relative overflow-hidden inline-block md:h-5 lg:h-6"
            >
              <div className="relative md:h-5 lg:h-6">
                <span className="block absolute transition-transform duration-200 group-hover:-translate-y-full">
                  Contact
                </span>
                <span className="block  transition-transform duration-200 translate-y-full group-hover:translate-y-0">
                  Contact
                </span>
              </div>
            </Link>
            <Link
              href="/about"
              className="group relative overflow-hidden inline-block md:h-5 lg:h-6"
            >
              <div className="relative md:h-5 lg:h-6">
                <span className="block absolute transition-transform duration-200 group-hover:-translate-y-full">
                  About
                </span>
                <span className="block  transition-transform duration-200 translate-y-full group-hover:translate-y-0">
                  About
                </span>
              </div>
            </Link>
          </nav>
          <div className="hidden md:block">
            <Music className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
          </div>
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            <Menu className="h-4 w-4" />
          </motion.button>
        </div>
      </motion.div>

      <motion.nav
        animate={isOpen && !navIsHidden ? "open" : "closed"}
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        className="md:hidden bg-[#0b0b0b]/80 backdrop-blur-sm z-50 fixed top-16 w-[66%] mx-[17vw] border-2 border-white/40 rounded-2xl"
      >
        <div className="text-center mx-auto my-3 space-y-1">
          <motion.div variants={itemVariants}>
            <Link href="/">Home</Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link href="/projects">Works /Projects</Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link href="/#toolset">Tool set</Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link href="/#siteinfo">About this site</Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link href="/contact">Contact</Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link href="/">Resume</Link>
          </motion.div>
        </div>
      </motion.nav>
    </div>
  );
}
