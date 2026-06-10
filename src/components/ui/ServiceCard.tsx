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
    <GlassCard className="flex flex-col h-full justify-between hover:shadow-[0_0_25px_var(--color-emerald-accent-glow)] transition-all duration-300">
      <div>
        {/* Service Icon */}
        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-emerald-accent-dim/10 text-emerald-accent border border-emerald-accent-dim/20 mb-6 group-hover:scale-110 transition-transform duration-300">
          <IconComponent className="w-6 h-6" />
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-text-primary mb-3">{title}</h3>
        <p className="text-sm text-text-secondary leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {/* Outcome Section */}
      <div className="border-t border-glass-border/40 pt-4 mt-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-accent block mb-1">
          Outcome Delivered:
        </span>
        <p className="text-xs text-text-secondary/90 italic leading-relaxed">
          “{outcome}”
        </p>
      </div>
    </GlassCard>
  );
};

export default ServiceCard;
