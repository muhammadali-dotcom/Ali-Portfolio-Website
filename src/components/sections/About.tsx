import React from "react";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import FadeInUp from "../animations/FadeInUp";
import StaggerChildren, { StaggerItem } from "../animations/StaggerChildren";
import { Zap, Eye, Globe } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="relative overflow-hidden py-16 px-4 sm:px-6 lg:py-24 max-w-7xl mx-auto">
      {/* Background Glow */}
      <div className="absolute top-[30%] right-[10%] w-[350px] h-[350px] radial-glow opacity-30 pointer-events-none" />

      <FadeInUp>
        <SectionHeading
          badge="About Me"
          title="Translating Complex Visions Into Premium Codebases"
          subtitle="I'm Muhammad Ali, a Software Engineer based in Karachi, Pakistan. With hands-on experience building production web and mobile applications, I specialize in full-stack development, AI integration, and real-time systems with a strong focus on performance and user experience. I'm available for international remote work and freelance engagements—helping teams turn complex visions into reliable, intuitive digital products."
        />
      </FadeInUp>

      <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <StaggerItem>
          <GlassCard className="h-full flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-emerald-accent-dim/10 text-emerald-accent border border-emerald-accent-dim/20 mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-3">Scalable Systems</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Designing high-performance applications with clean architecture, efficient APIs, and maintainable codebases.
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
              <h3 className="text-lg font-bold text-text-primary mb-3">Modern User Experiences</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Creating responsive and interactive interfaces using modern technologies and thoughtful design principles.
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
              <h3 className="text-lg font-bold text-text-primary mb-3">Continuous Growth</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Constantly learning, experimenting, and refining my craft to stay ahead in an ever-evolving tech landscape.
              </p>
            </div>
          </GlassCard>
        </StaggerItem>
      </StaggerChildren>
    </section>
  );
};

export default About;
