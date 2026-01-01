import React, { useId } from 'react';

interface HexImageProps {
  src: string;
  alt?: string;
  size?: number;
  borderWeight?: number;
  className?: string; // You can now pass "text-gray-500" here
}

const HexImage: React.FC<HexImageProps> = ({
                                             src,
                                             alt = "",
                                             size = 300,
                                             borderWeight = 4,
                                             className = ""
                                           }) => {
  const id = useId();
  const clipPathId = `hex-${id}`;
  const hexPoints = "25,5 75,5 100,50 75,95 25,95 0,50";

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      style={{ overflow: 'visible' }}
      role="img"
      aria-label={alt}
    >
      <defs>
        <clipPath id={clipPathId}>
          <polygon points={hexPoints} />
        </clipPath>
      </defs>

      <g>
        <image
          href={src}
          width="100"
          height="100"
          preserveAspectRatio="xMidYMid slice"
          clipPath={`url(#${clipPathId})`}
        />

        <polygon
          points={hexPoints}
          fill="none"
          /* This is the magic: it inherits the CSS 'color' property */
          stroke="currentColor"
          strokeWidth={borderWeight}
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </g>
    </svg>
  );
};

export default HexImage;