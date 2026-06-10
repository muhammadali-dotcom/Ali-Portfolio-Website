import React from "react";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import FadeInUp from "../animations/FadeInUp";
import StaggerChildren, { StaggerItem } from "../animations/StaggerChildren";
import { Zap, Eye, Globe } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 px-6 max-w-7xl mx-auto">
      {/* Background Glow */}
      <div className="absolute top-[30%] right-[10%] w-[350px] h-[350px] radial-glow opacity-30 pointer-events-none" />

      <FadeInUp>
        <SectionHeading
          badge="About Me"
          title="Translating Complex Visions Into Premium Codebases"
          subtitle="I construct digital products that combine design precision with strong technical execution. My emphasis is on creating fast, interactive, and high-fidelity applications."
        />
      </FadeInUp>

      <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <StaggerItem>
          <GlassCard className="h-full flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-emerald-accent-dim/10 text-emerald-accent border border-emerald-accent-dim/20 mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-3">High Performance</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Aiming for 95+ Lighthouse scores. Optimizing bundle size, image processing, and server layouts to ensure lightning-fast site loads.
              </p>
            </div>
          </GlassCard>
        </StaggerItem>

        <StaggerItem>
          <GlassCard className="h-full flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-emerald-accent-dim/10 text-emerald-accent border border-emerald-accent-dim/20 mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-3">Cinematic Aesthetics</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Utilizing Three.js (React Three Fiber) and Framer Motion to develop engaging micro-interactions and smooth scroll triggers.
              </p>
            </div>
          </GlassCard>
        </StaggerItem>

        <StaggerItem>
          <GlassCard className="h-full flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-emerald-accent-dim/10 text-emerald-accent border border-emerald-accent-dim/20 mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-3">Remote Collaboration</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Working closely with clients across USA, UK, and EU timezones. Aligning design files, specs, and code implementations seamlessly.
              </p>
            </div>
          </GlassCard>
        </StaggerItem>
      </StaggerChildren>
    </section>
  );
};

export default About;
