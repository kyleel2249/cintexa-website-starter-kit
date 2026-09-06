"use client";

import { Suspense, lazy, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Preload } from "@react-three/drei";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const BusinessCore = lazy(() => import("@/components/3d/BusinessCore"));

const HERO_STATS = [
  { label: "Operate", sublabel: "Systems" },
  { label: "Sell", sublabel: "Commerce" },
  { label: "Engage", sublabel: "Customers" },
  { label: "Automate", sublabel: "Workflows" },
  { label: "Analyze", sublabel: "Intelligence" },
];

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-16 h-16 border-2 border-cx-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-radial-gradient">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        {isLoaded && !prefersReducedMotion && (
          <Suspense fallback={<LoadingFallback />}>
            <Canvas
              camera={{ position: [0, 2, 8], fov: 60, near: 0.1, far: 100 }}
              dpr={[1, 2]}
              gl={{ antialias: true, alpha: true }}
              style={{ background: "transparent" }}
            >
              <BusinessCore />
              <Preload all />
            </Canvas>
          </Suspense>
        )}

        {/* Fallback for reduced motion or loading */}
        {(prefersReducedMotion || !isLoaded) && (
          <div className="absolute inset-0 bg-gradient-radial from-cx-dark via-cx-deep to-cx-deep" />
        )}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Badge variant="glow" className="mb-6">
            <span className="w-1.5 h-1.5 bg-cx-accent rounded-full animate-pulse mr-2" />
            AI-Powered Business Commerce Technology
          </Badge>
        </motion.div>

        <motion.h1
          className="font-display text-display-xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          The Technology Behind{" "}
          <span className="gradient-text">Better Business.</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-cx-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          CINTEXA connects AI, commerce, software and business operations into 
          intelligent digital systems built to help businesses operate, sell, 
          automate and make better decisions.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Button size="lg" variant="primary" href="/start-project">
            Build Your Business System
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
          <Button size="lg" variant="secondary" href="/solutions">
            Explore CINTEXA
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 sm:gap-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl font-bold gradient-text">
                {stat.label}
              </div>
              <div className="text-xs text-cx-text-muted uppercase tracking-widest mt-1">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-cx-border rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-cx-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
