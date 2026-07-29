import GlassCard from "../ui/GlassCard";
import FadeInUp from "../animations/FadeInUp";

interface AboutProps {
  headingLevel?: 1 | 2;
}

export default function About({ headingLevel = 2 }: AboutProps) {
  const HeadingTag = headingLevel === 1 ? "h1" : "h2";

  return (
    <section
      id="about"
      className="relative mx-auto max-w-4xl px-4 sm:px-6 py-16 lg:py-24"
    >
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
            I specialize in transforming complex ideas into elegant,
            well-engineered solutions. Whether it&apos;s frontend interfaces,
            backend systems, or full-stack applications, I deliver code
            that&apos;s not just functional, but a pleasure to maintain.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-body lg:text-lg">
            I combine technical expertise with a genuine passion for
            problem-solving. Over the years, I&apos;ve worked on diverse
            projects across web and mobile platforms, always focusing on
            writing maintainable code and delivering solutions that create
            real impact.
          </p>
        </GlassCard>
      </FadeInUp>
    </section>
  );
}
