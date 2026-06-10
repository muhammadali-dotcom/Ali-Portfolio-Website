import { Experience } from "@/types";

export const experience: Experience[] = [
  {
    id: "exp-1",
    role: "Software Engineer",
    company: "Freelance & Remote Consulting",
    duration: "2024 - Present",
    achievements: [
      "Led development of a Web3 portfolio tracker, resulting in a 40% reduction in client page load times using Next.js App Router.",
      "Shipped 5+ high-fidelity mobile apps to Apple App Store & Google Play Store using React Native and Expo.",
      "Consulted for US/EU startups, improving Google PageSpeed / Lighthouse scores from 65 to 98 on core landing pages."
    ]
  },
  {
    id: "exp-2",
    role: "Software Engineer",
    company: "Apex Tech Labs",
    duration: "2022 - 2024",
    achievements: [
      "Managed a team of 4 frontend developers building a data-rich analytics dashboard with complex charting metrics.",
      "Established standard shared component libraries using Tailwind CSS and Framer Motion, cutting product UI design-to-code time in half.",
      "Integrated secure authentication protocols and dynamic API data mapping across a distributed SaaS environment."
    ]
  },
  {
    id: "exp-3",
    role: "Software Engineer",
    company: "Innovate Digital Agency",
    duration: "2020 - 2022",
    achievements: [
      "Developed fully responsive custom eCommerce themes and booking panels for high-traffic client portals.",
      "Collaborated closely with UX/UI designers to craft rich interactive landing pages incorporating custom GSAP and WebGL visualizers.",
      "Optimized bundler pipelines using Webpack and Vite, yielding a 25% reduction in production asset payloads."
    ]
  }
];
