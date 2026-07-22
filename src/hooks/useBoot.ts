"use client";

import { useEffect, useState } from "react";

export default function useBoot() {
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBooting(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return isBooting;
}
