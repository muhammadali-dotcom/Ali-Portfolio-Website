import React from "react";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import FadeInUp from "../animations/FadeInUp";

interface PrivacyPolicyProps {
  headingLevel?: 1 | 2;
}

const LAST_UPDATED = "September 3, 2026";
const CONTACT_EMAIL = "alisaleem.as719@gmail.com";

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "1. Introduction",
    body: (
      <p>
        This Privacy Policy explains how Muhammad Ali (&quot;I&quot;, &quot;me&quot;, or &quot;this
        site&quot;) collects, uses, and protects information when you visit this portfolio website.
        By using this site, you agree to the practices described below.
      </p>
    ),
  },
  {
    title: "2. Information I Collect",
    body: (
      <>
        <p>I collect information in two ways:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>
            <strong className="text-heading">Information you provide:</strong> when you submit the
            contact form, I receive the name, email address, and message you enter. This is sent
            directly to my inbox to respond to your inquiry.
          </li>
          <li>
            <strong className="text-heading">Information collected automatically:</strong> if Google
            Analytics is enabled on this site, it may collect standard usage data such as pages
            visited, time on site, approximate location, device, and browser type, via cookies and
            similar technologies.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Cookies",
    body: (
      <p>
        This site uses cookies to improve your browsing experience and, where enabled, to gather
        anonymous analytics data via Google Analytics. A cookie notice is shown on your first visit
        so you&apos;re aware of this. You can disable cookies at any time through your browser
        settings, though some parts of the site may not function as intended without them.
      </p>
    ),
  },
  {
    title: "4. How I Use Your Information",
    body: (
      <ul className="list-disc pl-6 space-y-2">
        <li>To respond to messages sent through the contact form.</li>
        <li>To understand how visitors use the site and improve its content and performance.</li>
        <li>To maintain the security and proper functioning of the site.</li>
      </ul>
    ),
  },
  {
    title: "5. How Information Is Shared",
    body: (
      <>
        <p>Your information is never sold. It may only be shared with:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>
            <strong className="text-heading">Google Analytics</strong> — for anonymized site usage
            statistics, if enabled.
          </li>
          <li>
            <strong className="text-heading">Gmail / Google Workspace (via Nodemailer)</strong> —
            used solely to deliver contact form submissions to my personal inbox.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Data Retention",
    body: (
      <p>
        Contact form messages are retained in my email inbox for as long as needed to respond to and
        keep a record of the inquiry. Analytics data is retained according to Google Analytics&apos;
        standard retention settings.
      </p>
    ),
  },
  {
    title: "7. Your Rights",
    body: (
      <p>
        You may request access to, correction of, or deletion of any personal information you have
        submitted via the contact form by emailing me directly at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    ),
  },
  {
    title: "8. Security",
    body: (
      <p>
        This site is served over HTTPS, and contact form input is sanitized before being included in
        any email to prevent injection attacks. While I take reasonable steps to protect your
        information, no method of transmission over the internet is 100% secure.
      </p>
    ),
  },
  {
    title: "9. Children's Privacy",
    body: (
      <p>
        This site is not directed at children under the age of 13, and I do not knowingly collect
        personal information from children.
      </p>
    ),
  },
  {
    title: "10. Changes to This Policy",
    body: (
      <p>
        This Privacy Policy may be updated from time to time to reflect changes in practices or for
        other operational, legal, or regulatory reasons. The &quot;last updated&quot; date below
        will reflect the most recent revision.
      </p>
    ),
  },
  {
    title: "11. Contact",
    body: (
      <p>
        If you have any questions about this Privacy Policy, please reach out via{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
          {CONTACT_EMAIL}
        </a>{" "}
        or through the{" "}
        <a href="/contact" className="text-primary hover:underline">
          contact form
        </a>
        .
      </p>
    ),
  },
];

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ headingLevel = 2 }) => {
  return (
    <section className="relative overflow-hidden py-16 px-4 sm:px-6 lg:py-24 max-w-4xl mx-auto">
      <FadeInUp>
        <SectionHeading
          badge="Legal"
          title="Privacy Policy"
          subtitle={`Last updated: ${LAST_UPDATED}`}
          align="center"
          level={headingLevel}
        />
      </FadeInUp>

      <FadeInUp delay={0.15}>
        <GlassCard className="text-sm leading-relaxed text-body space-y-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-bold text-heading mb-3">{section.title}</h2>
              <div className="space-y-2">{section.body}</div>
            </div>
          ))}
        </GlassCard>
      </FadeInUp>
    </section>
  );
};

export default PrivacyPolicy;
