import React from "react";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import FadeInUp from "../animations/FadeInUp";
import StaggerChildren, { StaggerItem } from "../animations/StaggerChildren";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "I build full-stack web apps, real-time applications, admin dashboards, and AI-powered tools. I also handle API & backend systems and React Native mobile interfaces to deliver end-to-end products.",
  },
  {
    question: "Are you available for freelance or remote work?",
    answer:
      "Yes, I'm actively available for freelance projects and long-term remote engagements. I work with clients internationally and can adapt to your team's timezone and workflow. Reach out via the contact form or email me at alisaleem.as719@gmail.com.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "My core stack includes Next.js, React, TypeScript, Node.js, and Express, with PostgreSQL and Redis for data, Socket.io for real-time features, and AI integrations for intelligent tools.",
  },
  {
    question: "How can I get in touch?",
    answer:
      "Use the contact form below or send a direct email to alisaleem.as719@gmail.com. For a quick sync, you can also book a free call via WhatsApp. I typically respond within 24 hours.",
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
              <h3 className="text-base font-bold text-primary mb-3">{question}</h3>
              <p className="text-sm text-body leading-relaxed">{answer}</p>
            </GlassCard>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </section>
  );
};

export default FAQ;
