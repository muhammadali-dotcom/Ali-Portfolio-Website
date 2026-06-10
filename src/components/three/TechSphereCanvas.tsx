"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

import { useIsMobile } from "@/hooks/useIsMobile";
import PageTransition from "@/components/animations/PageTransition";
import TechSphere from "./TechSphere";

const bootLines = [
  "const Ali = new Engineer();",
  'Ali.stack = ["React", "Next.js", "TS"];',
  "await Ali.initialize();",
  "Ali.buildSomethingGreat();",
  "compiling portfolio...",
  "loading assets...",
  "rendering interface...",
  "almost there...",
];

export const TechSphereCanvas: React.FC = () => {
  const isMobile = useIsMobile(768);
  const [progress, setProgress] = useState(0);

  // Increment progress until 100
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return Math.min(prev + Math.floor(Math.random() * 4) + 1, 100);
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  // Scroll to About section when loading is complete
  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        const aboutSection = document.getElementById("about");
        aboutSection?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  if (isMobile) {
    return (
      <PageTransition className="h-full w-full">
        <div className="relative flex h-full min-h-[520px] w-full items-end justify-center">
          <div className="relative flex h-[520px] w-full items-center justify-center overflow-hidden rounded-[2rem] border border-emerald-accent/10 bg-[#030504]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(16,185,129,0.16),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.08),transparent_30%]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:42px_42px] opacity-30" />

            <div className="absolute top-10 text-center">
              <p className="font-mono text-[11px] font-semibold tracking-[0.45em] text-emerald-accent">// INITIALIZING</p>
              <h2 className="mt-4 text-4xl font-black tracking-[0.18em] text-white">TECH STACK</h2>
              <p className="mt-3 font-mono text-[10px] tracking-[0.45em] text-white/35">SOFTWARE ENGINEER</p>
            </div>

            <div className="absolute top-[190px] h-72 w-72 animate-[spin_18s_linear_infinite] rounded-full border border-emerald-accent/10" />
            <div className="absolute top-[210px] h-60 w-60 animate-[spin_12s_linear_infinite_reverse] rounded-full border border-emerald-accent/10" />
            <div className="absolute top-[240px] h-40 w-40 rounded-full border border-emerald-accent/20" />

            <div className="absolute top-[265px] h-24 w-24 animate-pulse rounded-full bg-emerald-accent/20 blur-2xl" />
            <div className="absolute top-[280px] h-14 w-14 rounded-full border border-emerald-accent/40 bg-emerald-accent/20 shadow-[0_0_45px_rgba(16,185,129,0.45)]" />

            <div className="absolute left-8 top-[200px] animate-[float_4s_ease-in-out_infinite] rounded-full border border-emerald-accent/20 bg-black/60 px-3 py-1.5 font-mono text-xs text-emerald-accent backdrop-blur-md">React</div>
            <div className="absolute right-8 top-[245px] animate-[float_5s_ease-in-out_infinite_1s] rounded-full border border-emerald-accent/20 bg-black/60 px-3 py-1.5 font-mono text-xs text-emerald-accent backdrop-blur-md">Next.js</div>
            <div className="absolute bottom-36 left-10 animate-[float_6s_ease-in-out_infinite_2s] rounded-full border border-emerald-accent/20 bg-black/60 px-3 py-1.5 font-mono text-xs text-emerald-accent backdrop-blur-md">TypeScript</div>
            <div className="absolute bottom-28 right-10 animate-[float_4.5s_ease-in-out_infinite_0.5s] rounded-full border border-emerald-accent/20 bg-black/60 px-3 py-1.5 font-mono text-xs text-emerald-accent backdrop-blur-md">Three.js</div>

            <div className="absolute bottom-10 w-[70%] text-center">
              <div className="font-mono text-5xl font-black tracking-tight text-white">
                {progress}<span className="ml-1 text-lg text-white/35">%</span>
              </div>
              <div className="mt-4 h-[2px] w-full overflow-hidden bg-white/10">
                <div className="h-full bg-emerald-accent shadow-[0_0_18px_rgba(16,185,129,0.9)] transition-all duration-300" style={{ width: `${progress}%` }} />
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition className="h-full w-full">
      <div className="relative flex h-full min-h-[560px] w-full items-end justify-center">
        <section className="relative h-[min(680px,calc(100vh-9rem))] min-h-[540px] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#030504]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(16,185,129,0.14),transparent_34%),radial-gradient(circle_at_20%_75%,rgba(16,185,129,0.08),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(52,211,153,0.07),transparent_28%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />
          <div className="absolute inset-x-0 top-0 h-32 animate-[scan_5s_ease-in-out_infinite] bg-gradient-to-b from-emerald-accent/10 to-transparent" />
          <div className="pointer-events-none absolute left-1/2 top-12 z-20 -translate-x-1/2 text-center">
            <p className="font-mono text-[12px] font-semibold tracking-[0.55em] text-emerald-accent">// INITIALIZING</p>
          </div>

          <div className="absolute bottom-12 left-8 z-20 w-[390px] overflow-hidden rounded-2xl border border-white/10 bg-black/45 shadow-[0_0_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              <span className="ml-3 font-mono text-xs text-white/35">portfolio.init.ts</span>
            </div>
            <div className="space-y-3 p-5">
              {bootLines.map((line, index) => (
                <div key={line} className="flex items-center gap-3 font-mono text-xs transition-opacity duration-300" style={{ opacity: progress > index * 11 ? 1 : 0.25 }}>
                  <span className="text-emerald-accent">›</span>
                  <span className="text-white/65">{line}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-12 right-10 z-20 w-[280px]">
            <div className="flex items-end justify-end">
              <span className="font-mono text-7xl font-black leading-none tracking-tight text-white">{progress}</span>
              <span className="mb-2 ml-2 font-mono text-2xl text-white/35">%</span>
            </div>
            <div className="mt-5 h-[3px] w-full overflow-hidden bg-white/10">
              <div className="h-full bg-emerald-accent shadow-[0_0_22px_rgba(16,185,129,1)] transition-all duration-300" style={{ width: `${progress}%` }} />
            </div>
            <p className="mt-4 text-right font-mono text-xs tracking-widest text-white/35">rendering immersive interface</p>
          </div>

          <div className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing">
            <Canvas camera={{ position: [0, 0, 7.2], fov: 55 }} gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }} dpr={[1, 1.8]}>
              <ambientLight intensity={1.2} />
              <pointLight position={[5, 5, 5]} intensity={2.2} color="#ffffff" />
              <pointLight position={[-6, -4, -6]} intensity={1.6} color="#10b981" />
              <pointLight position={[0, 0, 4]} intensity={1.1} color="#34d399" />
              <Stars radius={80} depth={40} count={900} factor={2} saturation={0} fade speed={0.3} />
              <Suspense fallback={null}>
                <TechSphere />
              </Suspense>
              <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.45} maxPolarAngle={Math.PI / 1.35} minPolarAngle={Math.PI / 3.3} />
            </Canvas>
          </div>

          <div className="pointer-events-none absolute bottom-4 left-1/2 z-30 -translate-x-1/2 select-none rounded-full border border-white/10 bg-black/50 px-4 py-2 font-mono text-xs text-white/40 backdrop-blur-md">
            Drag to rotate • Explore the stack
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default TechSphereCanvas;