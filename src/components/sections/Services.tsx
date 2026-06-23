import React from "react";
import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../ui/ServiceCard";
import FadeInUp from "../animations/FadeInUp";
import StaggerChildren, { StaggerItem } from "../animations/StaggerChildren";
import { services } from "@/data/services";

export const Services: React.FC = () => {
  return (
    <section id="services" className="relative overflow-hidden py-16 px-4 sm:px-6 lg:py-24 max-w-7xl mx-auto">
      {/* Background Glow */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] radial-glow opacity-30 pointer-events-none" />

      <FadeInUp>
        <SectionHeading
          badge="Services"
          title="How I Can Help You"
          subtitle="Offering tailored development services designed to convert visitors into clients and ship high-quality products."
        />
      </FadeInUp>

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
