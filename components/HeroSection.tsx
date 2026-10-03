"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { Icon } from "./icons";

export function HeroSection() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const revealTransition = prefersReducedMotion ? { duration: 0 } : undefined;

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate min-h-[50rem] overflow-hidden border-b border-primary/15 bg-background px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-44"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-20"
        aria-hidden="true"
      >
        <Image
          src="/images/hero-dark.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-image hero-image-dark object-cover object-center"
        />
        <Image
          src="/images/hero-light.png"
          alt=""
          fill
          sizes="100vw"
          className="hero-image hero-image-light object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/20" />
        <div className="absolute inset-0 bg-gradient-to-l from-background/90 via-background/35 to-transparent" />
      </div>
      <div className="absolute left-[-8rem] top-[-10rem] -z-10 h-[30rem] w-[30rem] rounded-full border border-primary/20 blur-[1px] sm:left-[-5rem]" />

      <div className="py-32 mx-auto md:py-10 max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={revealTransition ?? { duration: 0.6 }}
          className="mb-8 [font-size:var(--font-body)] uppercase tracking-[0.35em] text-text-secondary"
        >
          پاییز / زمستان ۱۴۰۵
        </motion.p>
        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={revealTransition ?? { duration: 0.8, delay: 0.1 }}
          className="hero-title max-w-4xl text-balance [font-size:var(--font-hero-size)] text-text-primary"
        >
          کالکشن فصل سرد
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={revealTransition ?? { duration: 0.8, delay: 0.3 }}
          className="mt-12 flex max-w-xl flex-col gap-8 sm:mr-[10%] sm:flex-row sm:items-end sm:justify-between"
        >
          <a
            href="#collection"
            className="group inline-flex w-fit items-center gap-2 border-b border-primary pb-1 [font-size:var(--font-body)] tracking-[-0.2rem] text-text-primary transition-colors hover:text-primary"
          >
            مشاهده کالکشن
            <Icon name="arrow-up-left" size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
