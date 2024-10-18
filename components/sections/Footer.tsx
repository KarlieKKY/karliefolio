"use client";
import { motion } from "framer-motion";
import FooterBanner from "../custom_ui/footer/FooterBanner";
import FooterContent from "@/components/custom_ui/footer/FooterContent";

export default function Footer() {
  return (
    <motion.div
      className="relative h-[600px] bg-[#2A2A2A] rounded-t-3xl w-full"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-[calc(100vh+600px)] -top-[100vh] py-6">
        <div className="h-[600px] sticky top-[calc(100vh-600px)]">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10">
            <div className="flex flex-col justify-between items-center py-6">
              <FooterContent />
              <FooterBanner />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
