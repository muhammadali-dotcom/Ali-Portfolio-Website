import React from "react";
import * as Icons from "lucide-react";
import { Service } from "@/types";
import GlassCard from "./GlassCard";

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { title, description, outcome, iconName } = service;

  // Dynamically resolve icon from Lucide React
  // Fallback to Server icon if not found
  const IconComponent = (Icons as any)[iconName] || Icons.Server;

  return (
    <GlassCard className="flex flex-col h-full justify-between hover:shadow-[0_12px_32px_rgba(15,23,42,0.08)] transition-all duration-300">
      <div>
        {/* Service Icon */}
        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10 text-primary border border-primary/20 mb-6 group-hover:scale-110 transition-transform duration-300">
          <IconComponent className="w-6 h-6" />
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-heading mb-3">{title}</h3>
        <p className="text-sm text-body leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {/* Outcome Section */}
      <div className="border-t border-border pt-4 mt-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">
          Outcome Delivered:
        </span>
        <p className="text-xs text-body/90 italic leading-relaxed">
          “{outcome}”
        </p>
      </div>
    </GlassCard>
  );
};

export default ServiceCard;
