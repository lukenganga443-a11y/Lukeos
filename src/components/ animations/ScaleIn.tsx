"use client";

import { motion } from "framer-motion";
import { scaleIn } from "@/lib/animations";

type Props = {
  children: React.ReactNode;
};

export default function ScaleIn({ children }: Props) {
  return (
    <motion.div variants={scaleIn} initial="hidden" animate="visible">
      {children}
    </motion.div>
  );
}
