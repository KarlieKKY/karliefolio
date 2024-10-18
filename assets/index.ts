import { SVGProps } from "react";

import NextjsIccon from "./icons/nextjs.svg";
import ReactjsIcon from "./icons/reactjs.svg";
import NodejsIcon from "./icons/nodejs.svg";
import FramermotionIcon from "./icons/framer-motion.svg";
import TailwindcssIcon from "./icons/tailwind.svg";
import ShadcnIcon from "./icons/shadcn-logo.svg";
import TsIcon from "./icons/ts.svg";

import GithubIcon from "./icons/github-icon.svg";
import LinkedinIcon from "./icons/linkedin-icon.svg";
import MediumIcon from "./icons/medium-icon.svg";

export type IconType = React.FC<SVGProps<SVGSVGElement>>;

export const Icons = {
  nextjs: NextjsIccon as IconType,
  reactjs: ReactjsIcon as IconType,
  nodejs: NodejsIcon as IconType,
  framermotion: FramermotionIcon as IconType,
  tailwindcss: TailwindcssIcon as IconType,
  shadcn: ShadcnIcon as IconType,
  typescript: TsIcon as IconType,
  github: GithubIcon as IconType,
  linkedin: LinkedinIcon as IconType,
  medium: MediumIcon as IconType,
};

export {
  NextjsIccon,
  ReactjsIcon,
  NodejsIcon,
  FramermotionIcon,
  TailwindcssIcon,
  ShadcnIcon,
  TsIcon,
  GithubIcon,
  LinkedinIcon,
  MediumIcon,
};

export default Icons;
