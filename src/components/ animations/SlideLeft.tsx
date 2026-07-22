"use client";

import { motion } from "framer-motion";
import { slideLeft } from "@/lib/animations";

type Props = {
  children: React.ReactNode;
};

export default function SlideLeft({ children }: Props) {
  return (
    <motion.div variants={slideLeft} initial="hidden" animate="visible">
      {children}
    </motion.div>
  );
}