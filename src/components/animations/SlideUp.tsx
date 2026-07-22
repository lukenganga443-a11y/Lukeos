"use client";

import { motion } from "framer-motion";
import { slideUp } from "@/lib/animations";

type Props = {
  children: React.ReactNode;
};

export default function SlideUp({ children }: Props) {
  return (
    <motion.div variants={slideUp} initial="hidden" animate="visible">
      {children}
    </motion.div>
  );
}
