"use client";
import React, {useEffect, useId, useState} from 'react';

interface MorphingImageProps {
  src: string;
  alt?: string;
  borderWeight?: number;
  className?: string;
}

const MorphImage: React.FC<MorphingImageProps> = ({
                                                       src,
                                                       alt = "",
                                                       borderWeight = 4,
                                                       className = ""
                                                     }) => {
  const id = useId();
  const clipId = `clip-${id}`;

  // Keyframes for the morph. Each string MUST have 6 coordinate pairs to morph smoothly.
  const blobLibrary = [
    "25,5 75,5 100,50 75,95 25,95 0,50",       // 01: Standard Hexagon
    "30,2 80,10 95,45 70,90 20,85 5,40",       // 02: Top-right Lean
    "20,10 70,0 100,45 85,95 15,90 0,55",      // 03: Bottom-heavy wide
    "40,5 90,20 98,60 60,95 10,80 5,35",       // 04: Sharp top-left
    "25,15 75,5 95,50 75,85 25,98 5,55",       // 05: Bottom-point sag
    "15,20 85,15 100,50 85,85 15,80 0,45",     // 06: Wide horizontal oval
    "35,0 65,0 90,40 90,70 50,100 10,60",      // 07: Shield-like
    "25,5 80,25 95,65 65,95 15,80 5,30",       // 08: Clockwise tilt
    "10,30 60,5 90,20 100,70 50,95 5,70",      // 09: Abstract pebble
    "30,10 70,10 100,40 80,80 20,80 0,40",     // 10: Soft rectangle-blob
    "45,5 95,30 85,75 50,95 15,75 5,30",       // 11: Vertical egg
    "20,5 80,15 95,55 75,90 30,95 2,50",       // 12: Left-side flat
    "25,0 75,20 98,50 75,80 25,100 0,50",      // 13: Diamond-ish blob
    "15,15 85,5 100,45 80,95 20,85 10,50",     // 14: Parallel lean
    "35,5 75,5 90,45 95,85 15,95 5,55",        // 15: Low-center gravity
    "20,10 70,20 95,50 85,90 25,80 5,45",      // 16: Right-side bulge
    "30,5 90,10 80,50 95,90 30,95 10,60",      // 17: Hourglass pinch
    "15,5 65,15 100,40 70,95 10,75 0,35",      // 18: Top-left stretch
    "25,20 75,20 95,50 75,80 25,80 5,50",      // 19: Squircle
    "40,0 80,20 90,60 60,90 20,70 10,30"       // 20: Jagged organic
  ];

  const [sequence, setSequence] = useState(blobLibrary[0]);

  useEffect(() => {
    // This only runs on the client
    const shuffled = [...blobLibrary].sort(() => Math.random() - 0.5);
    const fullSequence = [...shuffled, shuffled[0]].join('; ');
    setSequence(fullSequence);
  }, []);

  return (
    <svg
      viewBox="0 0 100 100"
      className={`w-full h-full aspect-square ${className}`}
      style={{ overflow: 'visible', color: 'var(--dynamic-color)' }}
      role="img"
      aria-label={alt}
    >
      <defs>
        <clipPath id={clipId}>
          <polygon>
            <animate
              attributeName="points"
              dur="60s"
              repeatCount="indefinite"
              values={sequence}
            />
          </polygon>
        </clipPath>
      </defs>

      <g>
        <polygon
          points={blobLibrary[0]}
          fill="none"
          stroke="currentColor"
          strokeWidth={borderWeight + 4}
          style={{ filter: 'blur(8px)', opacity: 0.6 }}
        >
          <animate attributeName="points" dur="60s" repeatCount="indefinite" values={sequence} />
        </polygon>

        <image
          href={src}
          width="100"
          height="100"
          preserveAspectRatio="xMidYMid slice"
          clipPath={`url(#${clipId})`}
        />

        <polygon
          fill="none"
          stroke="currentColor"
          strokeWidth={borderWeight}
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          style={{
            filter: 'drop-shadow(0 0 4px currentColor) drop-shadow(0 0 12px currentColor)',
            willChange: 'contents'
          }}
        >
          <animate
            attributeName="points"
            dur="60s"
            repeatCount="indefinite"
            values={sequence}
          />
        </polygon>
      </g>
    </svg>
  );
};

export default MorphImage;