import GlassCard from "../ui/GlassCard";
import FadeInUp from "../animations/FadeInUp";

interface AboutProps {
  headingLevel?: 1 | 2;
}

export default function About({ headingLevel = 2 }: AboutProps) {
  const HeadingTag = headingLevel === 1 ? "h1" : "h2";

  return (
    <section id="about" className="relative mx-auto max-w-4xl px-4 sm:px-6 py-16 lg:py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 radial-glow opacity-20" />

      <FadeInUp>
        <GlassCard
          hoverable={false}
          className="glass-panel-strong relative z-10 p-8 text-center sm:p-12"
        >
          <HeadingTag className="text-3xl font-bold tracking-tight text-heading md:text-4xl">
            About Me — <span className="text-primary">Behind the Code</span>
          </HeadingTag>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-body lg:text-lg">
            I&apos;m a Full-Stack Software Engineer based in Karachi, Pakistan. I hold a BS in
            Computer Science from Sir Syed University of Engineering &amp; Technology (2021–2025)
            and have gained hands-on industry experience through internships at Saxon Digital
            Technologies, MyCabify, and Rhombix Technologies.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-body lg:text-lg">
            I specialize in transforming complex ideas into elegant, well-engineered solutions —
            whether that&apos;s frontend interfaces, backend systems, or full-stack applications.
            I&apos;m currently available for freelance and remote projects, focused on building
            scalable web apps, real-time systems, and AI-powered tools for international clients.
          </p>
        </GlassCard>
      </FadeInUp>
    </section>
  );
}
