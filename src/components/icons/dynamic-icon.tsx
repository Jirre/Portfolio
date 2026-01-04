import { FC } from "react";
import { FaGlobe } from "react-icons/fa";
import { SiItchdotio } from "react-icons/si";

type LinkIconProps = {
  name: string;
  size: number;
  className?: string;
}

export const DynamicIcon:FC<LinkIconProps> = ({name, size, className}) => {
  switch (name) {
    case 'itch': return <SiItchdotio size={size} className={className} />;
    case 'website': return <FaGlobe size={size || 20} className={className || "mr-2"} />;
  }
}