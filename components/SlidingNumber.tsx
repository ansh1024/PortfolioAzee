"use client";
import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring, useTransform, motion } from "framer-motion";

export function SlidingNumber({ value, suffix = "", decimals = 0 }: { value: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mql.matches);
  }, []);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });

  useEffect(() => {
    if (isReducedMotion) {
      motionValue.set(value);
    } else if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value, isReducedMotion]);

  const display = useTransform(springValue, (current) =>
    current.toFixed(decimals)
  );

  return (
    <span ref={ref} className="inline-flex">
      <motion.span>{display}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}
