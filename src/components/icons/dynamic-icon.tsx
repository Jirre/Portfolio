import { FC } from "react";
import { FaGlobe } from "react-icons/fa";
import { SiAndroid, SiApple, SiGogdotcom, SiItchdotio, SiSteam } from "react-icons/si";

type LinkIconProps = {
  name: string;
  size: number;
  className?: string;
}

export const DynamicIcon:FC<LinkIconProps> = ({name, size, className}) => {
  switch (name) {
    case 'android': return <SiAndroid size={size} className={className} />;
    case 'apple': return <SiApple size={size} className={className} />;
    case 'gog': return <SiGogdotcom size={size} className={className} />;
    case 'itch': return <SiItchdotio size={size} className={className} />;
    case 'steam': return <SiSteam size={size} className={className} />;
    case 'website': return <FaGlobe size={size} className={className} />;
  }
}