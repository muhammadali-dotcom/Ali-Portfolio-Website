"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type TechCard = {
    id: number;
    title: string;
    subtitle: string;
    logo: string;
    color: string;
    glow: string;
    bg: string;
    x: number;
    y: number;
    size: number;
    depth: number;
    floatSpeed: number;
    floatAmount: number;
};

type AnimatedCard = TechCard & {
    tx: number;
    ty: number;
    rotateX: number;
    rotateY: number;
    rotateZ: number;
};

const techCards: TechCard[] = [
    {
        id: 1,
        title: "TypeScript",
        subtitle: "Type Safety",
        logo: "TS",
        color: "#3178c6",
        glow: "rgba(49,120,198,0.35)",
        bg: "linear-gradient(145deg, rgba(8,23,42,0.98), rgba(2,8,20,0.98))",
        x: 17,
        y: 34,
        size: 155,
        depth: 1.25,
        floatSpeed: 1.2,
        floatAmount: 16,
    },
    {
        id: 2,
        title: "JavaScript",
        subtitle: "Core Language",
        logo: "JS",
        color: "#f7df1e",
        glow: "rgba(247,223,30,0.28)",
        bg: "linear-gradient(145deg, rgba(48,43,8,0.96), rgba(13,12,5,0.98))",
        x: 69,
        y: 30,
        size: 180,
        depth: 1.55,
        floatSpeed: 1.05,
        floatAmount: 20,
    },
    {
        id: 3,
        title: "Next.js",
        subtitle: "React Framework",
        logo: "N",
        color: "#ffffff",
        glow: "rgba(255,255,255,0.18)",
        bg: "linear-gradient(145deg, rgba(14,14,14,0.98), rgba(3,3,3,0.98))",
        x: 44,
        y: 82,
        size: 170,
        depth: 1.15,
        floatSpeed: 1.35,
        floatAmount: 18,
    },
    {
        id: 4,
        title: "React",
        subtitle: "UI Library",
        logo: "⚛",
        color: "#61dafb",
        glow: "rgba(97,218,251,0.30)",
        bg: "linear-gradient(145deg, rgba(3,37,48,0.96), rgba(2,13,18,0.98))",
        x: 88,
        y: 60,
        size: 145,
        depth: 1.8,
        floatSpeed: 1.42,
        floatAmount: 14,
    },
    {
        id: 5,
        title: "Node.js",
        subtitle: "Backend Runtime",
        logo: "JS",
        color: "#3c873a",
        glow: "rgba(60,135,58,0.38)",
        bg: "linear-gradient(145deg, rgba(4,53,18,0.96), rgba(2,17,8,0.98))",
        x: 25,
        y: 69,
        size: 205,
        depth: 1.4,
        floatSpeed: 1.16,
        floatAmount: 22,
    },
    {
        id: 6,
        title: "Tailwind CSS",
        subtitle: "Utility Styling",
        logo: "TW",
        color: "#38bdf8",
        glow: "rgba(56,189,248,0.28)",
        bg: "linear-gradient(145deg, rgba(4,42,50,0.96), rgba(2,17,22,0.98))",
        x: 67,
        y: 6,
        size: 150,
        depth: 1.6,
        floatSpeed: 1.25,
        floatAmount: 18,
    },
    {
        id: 7,
        title: "HTML / CSS",
        subtitle: "Frontend Base",
        logo: "5",
        color: "#f97316",
        glow: "rgba(249,115,22,0.32)",
        bg: "linear-gradient(145deg, rgba(66,22,10,0.96), rgba(18,7,4,0.98))",
        x: 72,
        y: 92,
        size: 195,
        depth: 1.3,
        floatSpeed: 1.1,
        floatAmount: 21,
    },
    {
        id: 8,
        title: "Express",
        subtitle: "REST APIs",
        logo: "EX",
        color: "#10b981",
        glow: "rgba(16,185,129,0.28)",
        bg: "linear-gradient(145deg, rgba(4,44,31,0.96), rgba(2,15,11,0.98))",
        x: 104,
        y: 42,
        size: 145,
        depth: 1.75,
        floatSpeed: 1.5,
        floatAmount: 17,
    },
    {
        id: 9,
        title: "MongoDB",
        subtitle: "Database",
        logo: "DB",
        color: "#22c55e",
        glow: "rgba(34,197,94,0.28)",
        bg: "linear-gradient(145deg, rgba(5,50,22,0.96), rgba(2,14,8,0.98))",
        x: -4,
        y: 54,
        size: 140,
        depth: 1.7,
        floatSpeed: 1.38,
        floatAmount: 16,
    },
];

const HeroDark = () => {
    const [cards, setCards] = useState<AnimatedCard[]>(
        techCards.map((card) => ({
            ...card,
            tx: 0,
            ty: 0,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
        }))
    );

    const mouseRef = useRef({ x: 0, y: 0 });
    const smoothRef = useRef({ x: 0, y: 0 });
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const x = (event.clientX / window.innerWidth) * 2 - 1;
            const y = (event.clientY / window.innerHeight) * 2 - 1;

            mouseRef.current = { x, y };
        };

        const handleMouseLeave = () => {
            mouseRef.current = { x: 0, y: 0 };
        };

        const animate = () => {
            const target = mouseRef.current;
            const smooth = smoothRef.current;

            smooth.x += (target.x - smooth.x) * 0.075;
            smooth.y += (target.y - smooth.y) * 0.075;

            const time = performance.now() / 1000;

            setCards(
                techCards.map((card, index) => {
                    const floatingY =
                        Math.sin(time * card.floatSpeed + index * 1.7) * card.floatAmount;

                    const floatingX =
                        Math.cos(time * (card.floatSpeed * 0.7) + index * 1.2) *
                        (card.floatAmount * 0.45);

                    return {
                        ...card,

                        /*
                          Increase these values if you want even more movement.
                          Because cards have different depth, every card moves differently.
                        */
                        tx: smooth.x * 170 * card.depth + floatingX,
                        ty: smooth.y * 70 * card.depth + floatingY,

                        rotateX: smooth.y * -9 * card.depth,
                        rotateY: smooth.x * 12 * card.depth,
                        rotateZ: smooth.x * 4 * card.depth,
                    };
                })
            );

            rafRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);

        rafRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);

            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, []);

    const backgroundStyle = useMemo(
        () => ({
            background:
                "radial-gradient(circle at 50% 45%, rgba(16,185,129,0.16), transparent 30%), radial-gradient(circle at 85% 25%, rgba(56,189,248,0.09), transparent 24%), radial-gradient(circle at 15% 75%, rgba(34,197,94,0.09), transparent 28%), #050607",
        }),
        []
    );

    return (
        <section
            className="relative min-h-screen overflow-hidden text-white"
            style={backgroundStyle}
        >
            {/* Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:56px_56px] opacity-30" />

            {/* Dark vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.34)_62%,rgba(0,0,0,0.86)_100%)]" />

            {/* Big soft blur behind heading */}
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[90px]" />

            {/* Side decorative blocks */}
            <div className="absolute -left-20 top-36 h-56 w-28 rounded-[2rem] border border-emerald-400/10 bg-emerald-500/5" />
            <div className="absolute -right-20 top-14 h-64 w-32 rounded-[2rem] border border-sky-400/10 bg-sky-500/5" />
            <div className="absolute -right-16 bottom-14 h-60 w-28 rounded-[2rem] border border-orange-400/10 bg-orange-500/5" />

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

            {/* Floating cards */}
            <div className="pointer-events-none absolute inset-0 z-10 hidden md:block">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="absolute rounded-[1.45rem] border border-white/10 shadow-[0_35px_95px_rgba(0,0,0,0.55)] will-change-transform"
                        style={{
                            width: card.size,
                            height: card.size,
                            left: `${card.x}%`,
                            top: `${card.y}%`,
                            background: card.bg,
                            boxShadow: `0 35px 95px rgba(0,0,0,0.55), 0 0 75px ${card.glow}`,
                            transform: `
                translate(-50%, -50%)
                translate3d(${card.tx}px, ${card.ty}px, 0)
                rotateX(${card.rotateX}deg)
                rotateY(${card.rotateY}deg)
                rotateZ(${card.rotateZ}deg)
              `,
                            transformStyle: "preserve-3d",
                        }}
                    >
                        <div
                            className="absolute inset-0 rounded-[1.45rem]"
                            style={{
                                background: `radial-gradient(circle at 50% 35%, ${card.glow}, transparent 55%)`,
                            }}
                        />

                        <div className="relative flex h-full flex-col items-center justify-center">
                            <div
                                className="flex items-center justify-center font-black leading-none"
                                style={{
                                    color: card.color,
                                    fontSize:
                                        card.logo.length > 1
                                            ? Math.max(card.size * 0.24, 28)
                                            : Math.max(card.size * 0.34, 40),
                                    textShadow: `0 0 28px ${card.glow}`,
                                    transform: "translateZ(34px)",
                                }}
                            >
                                {card.logo}
                            </div>

                            <p
                                className="mt-4 text-[11px] font-mono uppercase tracking-[0.28em]"
                                style={{
                                    color: card.color,
                                    opacity: 0.75,
                                    transform: "translateZ(26px)",
                                }}
                            >
                                {card.title}
                            </p>

                            <p
                                className="mt-2 text-[8px] font-mono uppercase tracking-[0.24em] text-white/35"
                                style={{
                                    transform: "translateZ(22px)",
                                }}
                            >
                                {card.subtitle}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile static small cards */}
            <div className="pointer-events-none absolute inset-0 z-10 md:hidden">
                {techCards.slice(0, 5).map((card, index) => (
                    <div
                        key={card.id}
                        className="absolute flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-black/50 font-black backdrop-blur-md"
                        style={{
                            left: index % 2 === 0 ? "7%" : "72%",
                            top: `${18 + index * 14}%`,
                            color: card.color,
                            boxShadow: `0 0 40px ${card.glow}`,
                        }}
                    >
                        {card.logo}
                    </div>
                ))}
            </div>

            {/* Hero content */}
            <main className="relative z-30 flex min-h-[calc(100vh-96px)] items-center justify-center px-6">
                <div className="text-center">
                    <p className="mb-5 text-xs font-mono uppercase tracking-[0.45em] text-emerald-400/70 md:text-sm">
            // Full Stack Developer
                    </p>

                    <div className="rounded-[1.25rem] border border-white/10 bg-black/20 px-7 py-5 shadow-[0_30px_100px_rgba(0,0,0,0.28)] backdrop-blur-xl md:px-10">
                        <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
                            I build the web
                            <span className="text-white/25">.</span>
                        </h1>
                    </div>

                    <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/45 md:text-base">
                        I create modern full stack web experiences using React, Next.js,
                        TypeScript, JavaScript, Node.js, Express, Tailwind CSS, and scalable
                        engineering practices.
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

                {/* Scroll indicator */}
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