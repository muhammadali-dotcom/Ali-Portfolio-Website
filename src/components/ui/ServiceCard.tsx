"use client";

import React from "react";
import * as Icons from "lucide-react";
import type { IconComponent as IconComponentType } from "@/lib/utils";
import { Service } from "@/types";
import GlassCard from "./GlassCard";

interface ServiceCardProps {
  service: Service;
}

const iconSet = Icons as unknown as Record<string, IconComponentType>;

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { title, description, outcome, iconName } = service;

  // Dynamically resolve icon from Lucide React, falling back to Server if not found.
  const IconComponent = iconSet[iconName] ?? Icons.Server;

  return (
    <GlassCard className="group flex flex-col h-full justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-[0_16px_36px_rgba(59,130,246,0.15)]">
      <div>
        {/* Service Icon */}
        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10 text-primary border border-primary/20 mb-6 transition-transform duration-300 group-hover:scale-110">
          <IconComponent className="w-6 h-6" />
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-heading mb-3 transition-colors duration-300 group-hover:text-primary">
          {title}
        </h3>
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
