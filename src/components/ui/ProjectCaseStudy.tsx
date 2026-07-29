import React from "react";
import { Project } from "@/types";
import TechBadge from "./TechBadge";

interface ProjectCaseStudyProps {
  project: Project;
}

export const ProjectCaseStudy: React.FC<ProjectCaseStudyProps> = ({ project }) => {
  const { problem, solution, result, features, tech } = project;

  return (
    <div className="space-y-5">
      <div>
        <h4 className="mb-1.5 text-xs font-bold uppercase tracking-wider text-secondary">
          Problem
        </h4>
        <p className="text-sm leading-relaxed text-body">{problem}</p>
      </div>

      <div>
        <h4 className="mb-1.5 text-xs font-bold uppercase tracking-wider text-secondary">
          Solution
        </h4>
        <p className="text-sm leading-relaxed text-body">{solution}</p>
      </div>

      <div>
        <h4 className="mb-1.5 text-xs font-bold uppercase tracking-wider text-secondary">
          Result
        </h4>
        <p className="text-sm leading-relaxed text-body">{result}</p>
      </div>

      <div>
        <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-secondary">
          Key Features
        </h4>
        <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-sm leading-relaxed text-body"
            >
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-secondary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-1.5 pt-1">
        {tech.map((item) => (
          <TechBadge key={item} name={item} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCaseStudy;
