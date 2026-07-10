import React from "react";
import { MessageCircleQuestion } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import FadeInUp from "../animations/FadeInUp";
import StaggerChildren, { StaggerItem } from "../animations/StaggerChildren";
import { faqs } from "@/data/faq";

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="relative overflow-hidden py-16 px-4 sm:px-6 lg:py-24 max-w-7xl mx-auto">
      <div className="absolute top-[20%] left-[5%] w-[350px] h-[350px] radial-glow opacity-20 pointer-events-none" />

      <FadeInUp>
        <SectionHeading
          badge="FAQ"
          title="Common Questions"
          subtitle="Quick answers to what most people ask before reaching out."
        />
      </FadeInUp>

      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {faqs.map(({ question, answer }) => (
          <StaggerItem key={question}>
            <GlassCard className="group h-full transition-colors duration-300 hover:border-primary/25">
              <div className="mb-3 flex items-start gap-2.5">
                <MessageCircleQuestion className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                <h3 className="text-base font-bold text-primary">{question}</h3>
              </div>
              <p className="text-sm text-body leading-relaxed">{answer}</p>
            </GlassCard>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </section>
  );
};

export default FAQ;
