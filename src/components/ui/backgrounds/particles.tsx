"use client";
import React, { useRef, useEffect } from 'react';

class Particle {
  x: number; y: number; vx: number; vy: number; radius: number;

  constructor(w: number, h: number) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    // Increased base velocity slightly because it's now multiplied by a small delta
    this.vx = (Math.random() - 0.5) * 50;
    this.vy = (Math.random() - 0.5) * 50;
    this.radius = Math.random() * 1.5 + 1;
  }

  // Delta time (dt) is in seconds (e.g., 0.016 for 60fps)
  update(w: number, h: number, dt: number) {
    this.x += this.vx * dt;
    this.y += this.vy * dt;

    if (this.x < 0) this.x = w; else if (this.x > w) this.x = 0;
    if (this.y < 0) this.y = h; else if (this.y > h) this.y = 0;
  }
}

export const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let w: number, h: number;
    let particles: Particle[] = [];
    let lastTime = performance.now();

    const initCanvas = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      particles = Array.from({ length: (w * h) / 10000 }, () => new Particle(w, h));
    };

    initCanvas();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      const dt = Math.min(deltaTime, 0.1);

      const currentDynamicColor = getComputedStyle(document.body)
        .getPropertyValue('--dynamic-color')
        .trim() || "#3b82f6";

      ctx.clearRect(0, 0, w, h);

      ctx.beginPath();
      ctx.fillStyle = currentDynamicColor;
      particles.forEach(p => {
        p.update(w, h, dt); // Pass delta time here
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      });
      ctx.fill();

      const buckets: Record<number, { x1: number, y1: number, x2: number, y2: number }[]> = {
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
            const bucketIndex = Math.ceil(alpha * 4);
            buckets[bucketIndex].push({ x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y });
          }
        }
      }

      ctx.strokeStyle = currentDynamicColor;
      ctx.lineWidth = 0.8;

      Object.entries(buckets).forEach(([index, lines]) => {
        if (lines.length === 0) return;
        ctx.beginPath();
        ctx.globalAlpha = (Number(index) / 4) * 0.3;
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
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-10"
    />
  );
};