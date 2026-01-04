import {ReactNode} from "react";

export type SvgProps = {
  color?: string;
  size?: number | string;
  title?: string
  className?: string;
}

const SvgBase = ({
                    color = 'currentColor',
                    size = 24,
                    title,
                    className,
                    children
}: SvgProps & { children: ReactNode }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 24 24"
    fill={color}
    width={size}
    height={size}
    aria-label={title}
    className={className}
  >
    {title && <title>{title}</title>}
    {children}
  </svg>
)

export default SvgBase;