"use client";
import React, { useRef, useEffect } from 'react';

class Particle {
  x: number; y: number; vx: number; vy: number; radius: number;

  constructor(w: number, h: number) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.vx = (Math.random() - 0.5) * .5;
    this.vy = (Math.random() - 0.5) * .5;
    this.radius = Math.random() * 1.5 + 1;
  }

  update(w: number, h: number) {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0) this.x = w; else if (this.x > w) this.x = 0;
    if (this.y < 0) this.y = h; else if (this.y > h) this.y = 0;
  }
}

export const ParticlesBackground = ({ count = 160 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let w: number, h: number;
    let particles: Particle[] = [];
    let activeColor = "#3b82f6";

    const colorInterval = setInterval(() => {
      activeColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--dynamic-color').trim() || "#3b82f6";
    }, 500);

    const initCanvas = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      particles = Array.from({ length: (w * h) / 10000 }, () => new Particle(w, h));
    };

    initCanvas();

    const animate = () => {
      ctx.clearRect(0, 0, w, h);

      ctx.beginPath();
      ctx.fillStyle = activeColor;
      particles.forEach(p => {
        p.update(w, h);
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      });
      ctx.fill();

      const buckets: { [key: number]: { x1: number, y1: number, x2: number, y2: number }[] } = {
        1: [], 2: [], 3: [], 4: []
      };

      const maxDistSq = 150 * 150;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            const alpha = 1 - distSq / maxDistSq;
            // Assign to one of 4 buckets based on opacity (0.25 steps)
            const bucketIndex = Math.ceil(alpha * 4);
            buckets[bucketIndex].push({ x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y });
          }
        }
      }

      // 3. Render each bucket with its specific alpha
      ctx.strokeStyle = activeColor;
      ctx.lineWidth = 0.8;

      Object.entries(buckets).forEach(([index, lines]) => {
        if (lines.length === 0) return;
        ctx.beginPath();
        ctx.globalAlpha = (Number(index) / 4) * 0.3; // Scale opacity
        lines.forEach(l => {
          ctx.moveTo(l.x1, l.y1);
          ctx.lineTo(l.x2, l.y2);
        });
        ctx.stroke();
      });

      ctx.globalAlpha = 1.0;
      requestAnimationFrame(animate);
    };

    const handleResize = () => initCanvas();
    window.addEventListener('resize', handleResize);
    const animationId = requestAnimationFrame(animate);

    return () => {
      clearInterval(colorInterval);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-10"
    />
  );
};