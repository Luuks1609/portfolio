"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedMockup({ src }: { src: string }) {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercentage(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(`Current scroll percentage: ${scrollPercentage}%`);
  const maskWidth = 5 - scrollPercentage * 0.25; // Adjust mask width based on scroll

  return (
    <div className="w-full overflow-hidden relative">
      <motion.div
        className="absolute left-0 top-0 h-full bg-brand"
        style={{ width: `${maskWidth}%` }}
        initial={{ width: "10%" }}
        animate={{ width: `${maskWidth}%` }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="absolute right-0 top-0 h-full bg-brand"
        style={{ width: `${maskWidth}%` }}
        initial={{ width: "10%" }}
        animate={{ width: `${maskWidth}%` }}
        transition={{ duration: 0.5 }}
      />
      <img src={src} alt="" className="w-full object-cover" />
    </div>
  );
}
