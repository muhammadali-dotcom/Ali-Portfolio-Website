import React from "react";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import ScrollReveal from "../animations/ScrollReveal";
import StaggerChildren, { StaggerItem } from "../animations/StaggerChildren";
import { Target, Code2, Sparkles } from "lucide-react";

const cardClass =
  "group h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-[0_16px_36px_rgba(59,130,246,0.15)]";
const iconClass =
  "w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10 text-primary border border-primary/20 mb-6 transition-transform duration-300 group-hover:scale-110";

export const HowIBuild: React.FC = () => {
  return (
    <section id="how-i-build" className="relative overflow-hidden py-16 px-4 sm:px-6 lg:py-24 max-w-7xl mx-auto">
      <div className="absolute top-[30%] right-[10%] w-[350px] h-[350px] radial-glow opacity-30 pointer-events-none" />

      <ScrollReveal>
        <SectionHeading
          badge="How I Work"
          title="How I Build Software"
          subtitle="Every project I take on runs through the same lens — is it solving the right problem, is it built to last, and does it feel good to use."
        />
      </ScrollReveal>

      <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <StaggerItem>
          <GlassCard className={cardClass}>
            <div>
              <div className={iconClass}>
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-heading mb-3 transition-colors duration-300 group-hover:text-primary">
                Business-first thinking
              </h3>
              <p className="text-sm text-body leading-relaxed">
                I do not build features only because they look good. I focus on solving the real business problem.
              </p>
            </div>
          </GlassCard>
        </StaggerItem>

        <StaggerItem>
          <GlassCard className={cardClass}>
            <div>
              <div className={iconClass}>
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-heading mb-3 transition-colors duration-300 group-hover:text-primary">
                Clean and scalable code
              </h3>
              <p className="text-sm text-body leading-relaxed">
                I care about maintainable structure, reusable components, clean APIs, and readable logic.
              </p>
            </div>
          </GlassCard>
        </StaggerItem>

        <StaggerItem>
          <GlassCard className={cardClass}>
            <div>
              <div className={iconClass}>
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-heading mb-3 transition-colors duration-300 group-hover:text-primary">
                User experience matters
              </h3>
              <p className="text-sm text-body leading-relaxed">
                A product should not only work. It should feel smooth, fast, and easy to use.
              </p>
            </div>
          </GlassCard>
        </StaggerItem>
      </StaggerChildren>
    </section>
  );
};

export default HowIBuild;
