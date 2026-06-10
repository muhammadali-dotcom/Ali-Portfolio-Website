

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useIsMobile } from "@/hooks/useIsMobile";
import TechSphere from "./TechSphere";
import { useRouter } from "next/navigation";
import { PageTransition } from "@/components/animations/PageTransition";

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
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + Math.floor(Math.random() * 4) + 1;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  const navigateWhenDone = () => {
    if (progress >= 100) router.push("/about");
  };

  // Mobile version – simplified layout
  if (isMobile) {
    return (
      <PageTransition onComplete={navigateWhenDone}>
        <div className="center-vertically">
          <div className="relative w-full min-h-[520px] flex items-center justify-center overflow-hidden rounded-[2rem] border border-emerald-accent/10 bg-[#030504]">
            {/* Background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(16,185,129,0.16),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.08),transparent_30%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:42px_42px] opacity-30" />

            {/* Top label */}
            <div className="absolute top-10 text-center">
              <p className="text-[11px] tracking-[0.45em] text-emerald-accent font-mono">// INITIALIZING</p>
              <h2 className="mt-4 text-4xl font-black tracking-[0.18em] text-white">TECH STACK</h2>
              <p className="mt-3 text-[10px] tracking-[0.45em] text-white/35 font-mono">SOFTWARE ENGINEER</p>
            </div>

            {/* Orbital rings */}
            <div className="absolute top-[190px] w-72 h-72 rounded-full border border-emerald-accent/10 animate-[spin_18s_linear_infinite]" />
            <div className="absolute top-[210px] w-60 h-60 rounded-full border border-emerald-accent/10 animate-[spin_12s_linear_infinite_reverse]" />
            <div className="absolute top-[240px] w-40 h-40 rounded-full border border-emerald-accent/20" />

            {/* Core glow */}
            <div className="absolute top-[265px] w-24 h-24 rounded-full bg-emerald-accent/20 blur-2xl animate-pulse" />
            <div className="absolute top-[280px] w-14 h-14 rounded-full bg-emerald-accent/20 border border-emerald-accent/40 shadow-[0_0_45px_rgba(16,185,129,0.45)]" />

            {/* Floating tags */}
            <div className="absolute top-[200px] left-8 px-3 py-1.5 bg-black/60 border border-emerald-accent/20 text-emerald-accent rounded-full text-xs font-mono backdrop-blur-md animate-[float_4s_ease-in-out_infinite]">React</div>
            <div className="absolute top-[245px] right-8 px-3 py-1.5 bg-black/60 border border-emerald-accent/20 text-emerald-accent rounded-full text-xs font-mono backdrop-blur-md animate-[float_5s_ease-in-out_infinite_1s]">Next.js</div>
            <div className="absolute bottom-36 left-10 px-3 py-1.5 bg-black/60 border border-emerald-accent/20 text-emerald-accent rounded-full text-xs font-mono backdrop-blur-md animate-[float_6s_ease-in-out_infinite_2s]">TypeScript</div>
            <div className="absolute bottom-28 right-10 px-3 py-1.5 bg-black/60 border border-emerald-accent/20 text-emerald-accent rounded-full text-xs font-mono backdrop-blur-md animate-[float_4.5s_ease-in-out_infinite_0.5s]">Three.js</div>

            {/* Loader */}
            <div className="absolute bottom-10 w-[70%] text-center">
              <div className="text-5xl font-black text-white font-mono tracking-tight">
                {progress}<span className="text-lg text-white/35 ml-1">%</span>
              </div>
              <div className="mt-4 h-[2px] w-full bg-white/10 overflow-hidden">
                <div className="h-full bg-emerald-accent shadow-[0_0_18px_rgba(16,185,129,0.9)] transition-all duration-300" style={{ width: `${progress}%` }} />
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    );
  }

  // Desktop version – full layout with 3D canvas
  return (
    <PageTransition onComplete={navigateWhenDone}>
      <div className="center-vertically">
        <section className="relative w-full min-h-[720px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#030504]">
          {/* Premium dark background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(16,185,129,0.14),transparent_34%),radial-gradient(circle_at_20%_75%,rgba(16,185,129,0.08),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(52,211,153,0.07),transparent_28%)]" />

          {/* Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />

          {/* Scan line */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-emerald-accent/10 to-transparent animate-[scan_5s_ease-in-out_infinite]" />

          {/* Header text */}
          <div className="absolute top-14 left-1/2 z-20 -translate-x-1/2 text-center pointer-events-none">
            <p className="text-[12px] tracking-[0.55em] text-emerald-accent font-mono">// INITIALIZING</p>
            <h2 className="mt-6 text-6xl lg:text-7xl font-black tracking-[0.18em] text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.12)]">{/* Muhammad Ali */}</h2>
            <p className="mt-5 text-[11px] tracking-[0.6em] text-white/35 font-mono">{/* SOFTWARE ENGINEER */}</p>
          </div>

          {/* Terminal card */}
          <div className="absolute left-10 bottom-16 z-20 w-[390px] rounded-2xl border border-white/10 bg-black/45 backdrop-blur-xl shadow-[0_0_60px_rgba(0,0,0,0.45)] overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10">
              <span className="w-3 h-3 rounded-full bg-red-400/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
              <span className="ml-3 text-xs text-white/35 font-mono">portfolio.init.ts</span>
            </div>
            <div className="p-5 space-y-3">
              {bootLines.map((line, index) => (
                <div key={line} className="flex items-center gap-3 text-xs font-mono" style={{ opacity: progress > index * 11 ? 1 : 0.25, transition: "opacity 400ms ease" }}>
                  <span className="text-emerald-accent">›</span>
                  <span className="text-white/65">{line}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Loader percentage */}
          <div className="absolute right-12 bottom-16 z-20 w-[300px] pointer-events-none">
            <div className="flex items-end justify-end">
              <span className="text-8xl font-black text-white font-mono leading-none tracking-tight">{progress}</span>
              <span className="text-2xl text-white/35 mb-3 ml-2 font-mono">%</span>
            </div>
            <div className="mt-6 h-[3px] w-full bg-white/10 overflow-hidden">
              <div className="h-full bg-emerald-accent shadow-[0_0_22px_rgba(16,185,129,1)] transition-all duration-300" style={{ width: `${progress}%` }} />
            </div>
            <p className="mt-4 text-right text-xs text-white/35 font-mono tracking-widest">rendering immersive interface</p>
          </div>

          {/* 3D Canvas */}
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

          {/* Bottom instruction */}
          <div className="absolute bottom-5 left-1/2 z-30 -translate-x-1/2 pointer-events-none text-xs text-white/40 select-none font-mono bg-black/50 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
            Drag to rotate • Explore the stack
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default TechSphereCanvas;