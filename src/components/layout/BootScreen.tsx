"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const bootSteps = [
  "Initializing Interface...",
  "Loading Workspace...",
  "Connecting AI...",
  "Preparing Dashboard...",
  "Welcome back, Luke.",
];

export default function BootScreen() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step >= bootSteps.length - 1) return;

    const timer = setTimeout(() => {
      setStep((prev) => prev + 1);
    }, 500);

    return () => clearTimeout(timer);
  }, [step]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="mb-8 text-5xl font-bold tracking-[0.3em]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        LukeOS
      </motion.h1>

      <div className="w-[340px] space-y-4">
        {bootSteps.map((text, index) => (
          <motion.div
            key={text}
            className="flex items-center justify-between text-zinc-300"
            initial={{ opacity: 0, x: -15 }}
            animate={{
              opacity: index <= step ? 1 : 0,
              x: index <= step ? 0 : -15,
            }}
            transition={{ duration: 0.35 }}
          >
            <span>{text}</span>

            {index <= step && (
              <motion.span
                className="text-emerald-400"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >
                ✓
              </motion.span>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-10 h-1 w-[340px] overflow-hidden rounded-full bg-zinc-800">
        <motion.div
          className="h-full rounded-full bg-blue-500"
          initial={{ width: "0%" }}
          animate={{
            width: `${((step + 1) / bootSteps.length) * 100}%`,
          }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.div>
  );
}
