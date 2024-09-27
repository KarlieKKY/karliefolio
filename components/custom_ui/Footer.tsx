"use client";
import { motion } from "framer-motion";
import FooterMobileContent from "./FooterMobileContent";
import FooterDesktopContent from "./FooterDesktopContent";
import FooterBanner from "./FooterBanner";

export default function Footer() {
  return (
    <motion.footer
      className="relative h-[500px] bg-neutral-900 text-white w-full"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-[calc(100vh+500px)] -top-[100vh] py-6">
        <div className="h-[500px] sticky top-[calc(100vh-500px)]">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10">
            <div className="flex flex-col justify-between items-center py-6">
              <FooterMobileContent />
              <FooterDesktopContent />
              {/* <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                © 2024 Karlie Guan. All rights reserved.
              </motion.p> */}
              <FooterBanner />
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
