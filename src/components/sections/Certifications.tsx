"use client";

import React from "react";
import Image from "next/image";
import { Award, ExternalLink } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import FadeInUp from "../animations/FadeInUp";
import StaggerChildren, { StaggerItem } from "../animations/StaggerChildren";
import { certifications } from "@/data/certifications";

interface CertificationsProps {
  headingLevel?: 1 | 2;
}

export const Certifications: React.FC<CertificationsProps> = ({ headingLevel = 2 }) => {
  return (
    <section id="certifications" className="relative overflow-hidden py-16 lg:py-24">
      <div className="absolute left-[5%] top-[10%] h-[380px] w-[380px] rounded-full bg-secondary/5 blur-[120px]" />
      <div className="absolute right-[10%] bottom-[15%] h-[340px] w-[340px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <FadeInUp>
          <SectionHeading
            badge="Credentials"
            title="Certifications."
            subtitle="Courses and credentials that back up the stack I work with."
            level={headingLevel}
          />
        </FadeInUp>

        <StaggerChildren className="grid grid-cols-1 gap-5 mt-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => {
            const CardContent = (
              <GlassCard className="flex h-full flex-col gap-4">
                <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl bg-bg-soft">
                  {cert.image ? (
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <Award className="h-10 w-10 text-primary/60" />
                  )}
                </div>
                <div className="flex flex-1 flex-col">
                  <h3 className="text-lg font-bold text-heading">{cert.title}</h3>
                  <p className="mt-1 text-sm text-body">{cert.issuer}</p>
                  <div className="mt-auto flex items-center justify-between pt-4">
                    <span className="text-xs font-medium uppercase tracking-wider text-body/70">
                      {cert.date}
                    </span>
                    {cert.credentialUrl && (
                      <ExternalLink className="h-4 w-4 text-primary" />
                    )}
                  </div>
                </div>
              </GlassCard>
            );

            return (
              <StaggerItem key={cert.id}>
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="link"
                    className="block h-full"
                  >
                    {CardContent}
                  </a>
                ) : (
                  CardContent
                )}
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
};

export default Certifications;
