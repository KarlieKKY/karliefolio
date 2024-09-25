"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { socialMediaIcons } from "@/utils/socialMedia-icons";
import { Button } from "../ui/button";

export default function Footer1() {
  return (
    <motion.footer
      className="relative h-[500px] bg-neutral-900 text-white w-full"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-[calc(100vh+500px)] -top-[100vh]">
        <div className="h-[500px] sticky top-[calc(100vh-500px)]">
          <motion.div
            className="bg-zinc-800 py-3 flex justify-center mt-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="font-semibold uppercase" variant="ghost">
                download cv
              </Button>
            </motion.div>
          </motion.div>
          <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10">
            <div className="flex flex-col justify-between items-center h-16">
              <motion.div
                className="flex flex-row space-x-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                {Object.keys(socialMediaIcons).map((icon) => {
                  return (
                    <motion.div
                      key={icon}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Image
                        src={socialMediaIcons[icon]}
                        alt={`${icon} icon`}
                        width={25}
                        height={25}
                        style={{ width: "25px", height: "25px" }}
                      />
                    </motion.div>
                  );
                })}
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                © 2024 Karlie Guan. All rights reserved.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
