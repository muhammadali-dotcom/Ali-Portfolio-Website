import React from "react";
import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../ui/ServiceCard";
import ScrollReveal from "../animations/ScrollReveal";
import StaggerChildren, { StaggerItem } from "../animations/StaggerChildren";
import { services } from "@/data/services";

export const Services: React.FC = () => {
  return (
    <section id="services" className="relative overflow-hidden py-16 px-4 sm:px-6 lg:py-24 max-w-7xl mx-auto">
      {/* Background Glow */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] radial-glow opacity-30 pointer-events-none" />

      <ScrollReveal>
        <SectionHeading
          badge="What I Build"
          title="Software Built Around Your Business"
          subtitle="Outcome-focused engineering — from business platforms and real-time systems to AI tools and the APIs that power them."
        />
      </ScrollReveal>

      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {services.map((service) => (
          <StaggerItem key={service.id}>
            <ServiceCard service={service} />
          </StaggerItem>
        ))}
      </StaggerChildren>
    </section>
  );
};

export default Services;
