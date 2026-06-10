"use client";

import React, { useEffect, useRef, useState } from "react";

type MouseState = {
    x: number;
    y: number;
};

type TechCard = {
    title: string;
    label: string;
    logo: string;
    color: string;
    background: string;
    width: number;
    height: number;
    top: string;
    left: string;
    movementX: number;
    movementY: number;
    zIndex: number;
};

const techCards: TechCard[] = [
    {
        title: "TypeScript",
        label: "TYPE SAFETY",
        logo: "TS",
        color: "#3178c6",
        background:
            "linear-gradient(145deg, rgba(8, 26, 48, 0.96), rgba(3, 8, 18, 0.98))",
        width: 210,
        height: 210,
        top: "28%",
        left: "18%",
        movementX: -80,
        movementY: -28,
        zIndex: 2,
    },
    {
        title: "JavaScript",
        label: "CORE LANGUAGE",
        logo: "JS",
        color: "#f7df1e",
        background:
            "linear-gradient(145deg, rgba(58, 51, 10, 0.95), rgba(14, 13, 5, 0.98))",
        width: 250,
        height: 250,
        top: "24%",
        left: "72%",
        movementX: 85,
        movementY: -24,
        zIndex: 2,
    },
    {
        title: "React",
        label: "UI LIBRARY",
        logo: "⚛",
        color: "#61dafb",
        background:
            "linear-gradient(145deg, rgba(5, 45, 58, 0.95), rgba(2, 14, 20, 0.98))",
        width: 185,
        height: 185,
        top: "60%",
        left: "10%",
        movementX: -95,
        movementY: 25,
        zIndex: 1,
    },
    {
        title: "Node.js",
        label: "BACKEND RUNTIME",
        logo: "JS",
        color: "#3c873a",
        background:
            "linear-gradient(145deg, rgba(5, 55, 22, 0.95), rgba(2, 16, 7, 0.98))",
        width: 260,
        height: 260,
        top: "74%",
        left: "48%",
        movementX: -20,
        movementY: 50,
        zIndex: 1,
    },
    {
        title: "Next.js",
        label: "FULLSTACK REACT",
        logo: "N",
        color: "#ffffff",
        background:
            "linear-gradient(145deg, rgba(18, 18, 18, 0.96), rgba(3, 3, 3, 0.98))",
        width: 210,
        height: 210,
        top: "58%",
        left: "88%",
        movementX: 95,
        movementY: 20,
        zIndex: 1,
    },
];

const HeroDark = () => {
    const [mouse, setMouse] = useState<MouseState>({ x: 0, y: 0 });

    const targetMouse = useRef<MouseState>({ x: 0, y: 0 });
    const animationRef = useRef<number | null>(null);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const x = event.clientX / window.innerWidth - 0.5;
            const y = event.clientY / window.innerHeight - 0.5;

            targetMouse.current = { x, y };
        };

        const animate = () => {
            setMouse((prev) => ({
                x: prev.x + (targetMouse.current.x - prev.x) * 0.08,
                y: prev.y + (targetMouse.current.y - prev.y) * 0.08,
            }));

            animationRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", handleMouseMove);
        animationRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);

            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    const getCardTransform = (card: TechCard) => {
        const moveX = mouse.x * card.movementX;
        const moveY = mouse.y * card.movementY;
        const rotateX = mouse.y * -8;
        const rotateY = mouse.x * 10;

        return {
            transform: `
        translate(-50%, -50%)
        translate3d(${moveX}px, ${moveY}px, 0)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
      `,
        };
    };

    return (
        <section className="relative min-h-screen overflow-hidden bg-[#050607] text-white">
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(16,185,129,0.13),transparent_32%),radial-gradient(circle_at_85%_25%,rgba(56,189,248,0.07),transparent_26%),radial-gradient(circle_at_15%_75%,rgba(34,197,94,0.08),transparent_28%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:56px_56px] opacity-25" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.34)_65%,rgba(0,0,0,0.88)_100%)]" />

            {/* Navbar */}
            <header className="relative z-40 flex items-center justify-between px-7 py-7 md:px-14 lg:px-20">
                <div className="text-2xl font-black tracking-tight">
                    MZ<span className="text-emerald-400">.</span>
                </div>

                <nav className="hidden md:flex items-center gap-10 text-[11px] font-mono uppercase tracking-[0.22em] text-white/50">
                    <a href="#projects" className="transition hover:text-white">
                        Projects
                    </a>
                    <a href="#about" className="transition hover:text-white">
                        About Me
                    </a>
                    <a href="#skills" className="transition hover:text-white">
                        Skills
                    </a>
                    <a href="#contact" className="transition hover:text-white">
                        Contact
                    </a>
                </nav>
            </header>

            {/* Floating Tech Cards */}
            <div className="pointer-events-none absolute inset-0 z-10 hidden md:block">
                {techCards.map((card) => (
                    <div
                        key={card.title}
                        className="absolute rounded-[1.6rem] border border-white/10 shadow-[0_35px_100px_rgba(0,0,0,0.55)] transition-transform duration-75 ease-out will-change-transform"
                        style={{
                            top: card.top,
                            left: card.left,
                            width: card.width,
                            height: card.height,
                            background: card.background,
                            zIndex: card.zIndex,
                            ...getCardTransform(card),
                        }}
                    >
                        <div
                            className="absolute inset-0 rounded-[1.6rem]"
                            style={{
                                background: `radial-gradient(circle at 50% 35%, ${card.color}26, transparent 55%)`,
                            }}
                        />

                        <div className="relative flex h-full flex-col items-center justify-center">
                            <div
                                className="flex items-center justify-center font-black leading-none"
                                style={{
                                    color: card.color,
                                    fontSize: card.logo.length > 1 ? 54 : 70,
                                    textShadow: `0 0 35px ${card.color}55`,
                                }}
                            >
                                {card.logo}
                            </div>

                            <p
                                className="mt-5 text-[11px] font-mono uppercase tracking-[0.3em]"
                                style={{ color: card.color }}
                            >
                                {card.title}
                            </p>

                            <p className="mt-2 text-[8px] font-mono uppercase tracking-[0.28em] text-white/35">
                                {card.label}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile fallback cards */}
            <div className="pointer-events-none absolute inset-0 z-10 md:hidden">
                <div className="absolute left-6 top-24 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-black/50 text-xl font-black text-[#3178c6]">
                    TS
                </div>

                <div className="absolute right-6 top-32 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-black/50 text-xl font-black text-[#f7df1e]">
                    JS
                </div>

                <div className="absolute bottom-36 left-7 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-black/50 text-xl font-black text-[#61dafb]">
                    ⚛
                </div>

                <div className="absolute bottom-28 right-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-black/50 text-xl font-black text-[#3c873a]">
                    JS
                </div>
            </div>

            {/* Main Content */}
            <main className="relative z-30 flex min-h-[calc(100vh-96px)] items-center justify-center px-6">
                <div className="text-center">
                    <p className="mb-5 text-xs font-mono uppercase tracking-[0.45em] text-emerald-400/70 md:text-sm">
            // Full Stack Developer
                    </p>

                    <div className="inline-block rounded-[1.35rem] border border-white/10 bg-black/25 px-7 py-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl md:px-10">
                        <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
                            I build the web
                            <span className="text-white/25">.</span>
                        </h1>
                    </div>

                    <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/45 md:text-base">
                        I create modern full stack web experiences using React, Next.js,
                        TypeScript, JavaScript, Node.js, and clean scalable development
                        practices.
                    </p>

                    <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <a
                            href="#projects"
                            className="group rounded-full bg-white px-8 py-4 text-sm font-semibold text-black shadow-[0_20px_60px_rgba(255,255,255,0.12)] transition-all duration-300 hover:bg-emerald-400 hover:text-black"
                        >
                            View my work
                            <span className="ml-2 inline-block transition-transform group-hover:translate-y-1">
                                ↓
                            </span>
                        </a>

                        <a
                            href="#contact"
                            className="group rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-emerald-400/50 hover:bg-emerald-400/10"
                        >
                            Let’s talk
                            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                                ↗
                            </span>
                        </a>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 z-40 hidden -translate-x-1/2 flex-col items-center gap-4 md:flex">
                    <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-white/35">
                        Scroll
                    </span>
                    <span className="h-14 w-[2px] overflow-hidden bg-white/10">
                        <span className="block h-6 w-full animate-scrollLine bg-emerald-400" />
                    </span>
                </div>
            </main>

            <style jsx>{`
        @keyframes scrollLine {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }

          35% {
            opacity: 1;
          }

          100% {
            transform: translateY(230%);
            opacity: 0;
          }
        }

        .animate-scrollLine {
          animation: scrollLine 1.6s ease-in-out infinite;
        }
      `}</style>
        </section>
    );
};

export default HeroDark;