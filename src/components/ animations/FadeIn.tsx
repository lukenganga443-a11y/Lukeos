"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

type Props = {
  children: React.ReactNode;
};

export default function FadeIn({ children }: Props) {
  return (
    <motion.div variants={fadeIn} initial="hidden" animate="visible">
      {children}
    </motion.div>
  );
}
