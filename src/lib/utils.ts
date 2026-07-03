import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ComponentType, SVGProps } from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export function resolveIcon(
  iconSets: Record<string, unknown>[],
  name: string,
  fallback: IconComponent
): IconComponent {
  for (const set of iconSets) {
    if (name in set) return set[name] as IconComponent;
  }
  return fallback;
}
