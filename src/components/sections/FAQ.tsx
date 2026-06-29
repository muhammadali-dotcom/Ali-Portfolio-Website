import React from "react";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import FadeInUp from "../animations/FadeInUp";
import StaggerChildren, { StaggerItem } from "../animations/StaggerChildren";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "I offer full-stack web development, React Native mobile app development, interactive dashboard builds, and premium UI implementation. I also handle API design and third-party data integrations to deliver end-to-end digital products.",
  },
  {
    question: "Are you available for freelance or remote work?",
    answer:
      "Yes, I'm actively available for freelance projects and long-term remote engagements. I work with clients internationally and can adapt to your team's timezone and workflow. Reach out via the contact form or email me at alisaleem.as719@gmail.com.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "My core stack includes Next.js, React, TypeScript, and React Native for cross-platform apps. I also work with Node.js, PostgreSQL, Three.js for 3D interfaces, Framer Motion for animations, and Redux Toolkit for state management.",
  },
  {
    question: "How can I get in touch?",
    answer:
      "Use the contact form below or send a direct email to alisaleem.as719@gmail.com. For a quick sync, you can also book a free 15-minute call via Calendly. I typically respond within 24 hours.",
  },
];

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
            <GlassCard className="h-full">
              <h3 className="text-base font-bold text-emerald-accent mb-3">{question}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{answer}</p>
            </GlassCard>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </section>
  );
};

export default FAQ;
