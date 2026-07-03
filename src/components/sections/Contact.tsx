"use client";

import React, { useState } from "react";
import * as Icons from "lucide-react";
import * as CustomIcons from "@/components/ui/Icons";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import Button from "../ui/Button";
import FadeInUp from "../animations/FadeInUp";
import { socials } from "@/data/socials";
import { resolveIcon } from "@/lib/utils";

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus("sending");

  try {
    const response = await fetch("https://formspree.io/f/xaqzbklp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formState),
    });

    if (!response.ok) throw new Error("Network response was not ok");

    setStatus("success");
    setFormState({ name: "", email: "", message: "" });
  } catch (error) {
    console.error(error);
    setStatus("error");
  } finally {
    setTimeout(() => setStatus("idle"), 5000);
  }
};
 

  return (
    <section id="contact" className="relative overflow-hidden py-16 px-4 sm:px-6 lg:py-24 max-w-7xl mx-auto">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-[10%] w-[450px] h-[450px] radial-glow opacity-30 pointer-events-none" />

      <FadeInUp>
        <SectionHeading
          badge="Contact"
          title="Have an idea, product, dashboard, or automation you want to build?"
          subtitle="Let's turn it into clean, scalable software."
          align="center"
        />
      </FadeInUp>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12 items-stretch">
        
        {/* Left Side: Direct Contact Details */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          <FadeInUp delay={0.2} className="h-full">
            <GlassCard className="h-full flex flex-col justify-between hover:border-primary/20 transition-all duration-300">
              <div>
                <h3 className="text-2xl font-bold text-heading mb-4">Let&apos;s build together</h3>
                <p className="text-sm text-body leading-relaxed mb-8">
                  Whether you have an established design file ready for implementation, require a custom cross-platform app, or seek technical engineering consultation, my inbox is open.
                </p>

                {/* Direct links */}
                <div className="flex flex-col gap-4">
                  {socials.map((social) => {
                    const IconComponent = resolveIcon(
                      [Icons, CustomIcons],
                      social.iconName,
                      Icons.Link
                    );
                    return (
                      <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3.5 p-3 rounded-lg border border-border/40 hover:border-primary/40 bg-bg-soft/50 text-body hover:text-primary transition-all duration-200"
                      >
                        <motion.div
                          whileHover={{ y: [0, -4, 0] }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center text-primary"
                        >
                          <IconComponent className="w-5 h-5" />
                        </motion.div>
                        <div>
                          <span className="text-xs text-body/70 block uppercase tracking-wider font-semibold">
                            {social.platform}
                          </span>
                          <span className="text-sm font-semibold text-heading group-hover:text-primary">
                            {social.platform === "Email" ? "alisaleem.as719@gmail.com" : `Connect on ${social.platform}`}
                          </span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Book a call via WhatsApp */}
              <div className="border-t border-border/30 pt-6 mt-8">
                <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-2">
                  Need a direct discussion?
                </h4>
                <a
                  href="https://wa.me/923142181757"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-heading hover:text-primary transition-colors duration-200"
                >
                  Book a Free Call
                  <Icons.ArrowUpRight className="w-4 h-4 animate-[pulse_2s_infinite]" />
                </a>
              </div>
            </GlassCard>
          </FadeInUp>
        </div>

        {/* Right Side: Contact Form */}
        <div className="lg:col-span-7">
          <FadeInUp delay={0.4} className="h-full">
            <GlassCard className="h-full hover:border-primary/20 transition-all duration-300">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 h-full justify-between">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-heading mb-2">Send a Message</h3>

                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-body uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full bg-bg-soft border border-border hover:border-border focus:border-primary focus:ring-2 focus:ring-primary/10 rounded-lg px-4 py-3 text-sm text-heading placeholder-body/50 focus:outline-none transition-all duration-200"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-body uppercase tracking-wider mb-2">
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full bg-bg-soft border border-border hover:border-border focus:border-primary focus:ring-2 focus:ring-primary/10 rounded-lg px-4 py-3 text-sm text-heading placeholder-body/50 focus:outline-none transition-all duration-200"
                    />
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-body uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Describe your project, role, or proposal here..."
                      className="w-full bg-bg-soft border border-border hover:border-border focus:border-primary focus:ring-2 focus:ring-primary/10 rounded-lg px-4 py-3 text-sm text-heading placeholder-body/50 focus:outline-none transition-all duration-200 resize-none"
                    />
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={status === "sending"}
                    className="w-full sm:w-auto px-8"
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </Button>
                  
                  {status === "success" && (
                    <span className="text-sm text-primary font-semibold flex items-center gap-1.5 animate-pulse">
                      <Icons.CheckCircle2 className="w-4 h-4" />
                      Message sent successfully!
                    </span>
                  )}
                </div>
              </form>
            </GlassCard>
          </FadeInUp>
        </div>

      </div>
    </section>
  );
};

export default Contact;
