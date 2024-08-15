import { techIcons } from "./tech-icons";

export default function getTechIconPath(tech: string) {
  const normalizedTech = tech.toLowerCase();
  return techIcons[normalizedTech] || "/next.svg";
}
