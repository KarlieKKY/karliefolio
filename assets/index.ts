import { SVGProps } from "react";

import NextjsIccon from "./icons/nextjs.svg";
import ReactjsIcon from "./icons/reactjs.svg";
import NodejsIcon from "./icons/nodejs.svg";
import FramermotionIcon from "./icons/framer-motion.svg";
import TailwindcssIcon from "./icons/tailwind.svg";
import ShadcnIcon from "./icons/shadcn-logo.svg";
import TsIcon from "./icons/ts.svg";

export type IconType = React.FC<SVGProps<SVGSVGElement>>;

export const Icons = {
  nextjs: NextjsIccon as IconType,
  reactjs: ReactjsIcon as IconType,
  nodejs: NodejsIcon as IconType,
  framermotion: FramermotionIcon as IconType,
  tailwindcss: TailwindcssIcon as IconType,
  shadcn: ShadcnIcon as IconType,
  typescript: TsIcon as IconType,
};

export {
  NextjsIccon,
  ReactjsIcon,
  NodejsIcon,
  FramermotionIcon,
  TailwindcssIcon,
  ShadcnIcon,
  TsIcon,
};

export default Icons;
