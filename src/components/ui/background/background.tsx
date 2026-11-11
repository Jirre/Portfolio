"use client";
import React, { useRef, useEffect, memo } from 'react';

const TARGET_FPS = 20;
const FRAME_INTERVAL = 1000 / TARGET_FPS;
const MAX_PARTICLES = 150;
const MAX_PAIRS = (MAX_PARTICLES * (MAX_PARTICLES - 1)) / 2;
const MAX_DIST_SQ = 150 * 150;
const BUCKETS = 4;

class Particle {
  x: number; y: number; vx: number; vy: number; radius: number;

  constructor(w: number, h: number) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
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

export const Background = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let w = 0, h = 0;
    let particles: Particle[] = [];
    let lastTime = performance.now();
    let rafId = 0;
    let resizeTimeout: ReturnType<typeof setTimeout>;
    let currentDynamicColor = "#3b82f6";

    // Preallocated line buffers: no per-frame object allocation
    const lineBuffers = Array.from({ length: BUCKETS }, () => new Float32Array(MAX_PAIRS * 4));
    const lineCounts = new Int32Array(BUCKETS);

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const pollColor = () => {
      const color = getComputedStyle(document.body)
        .getPropertyValue('--dynamic-color')
        .trim();
      if (color) currentDynamicColor = color;
    };

    const initCanvas = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      const count = Math.min(Math.floor((w * h) / 10000), MAX_PARTICLES);
      particles = Array.from({ length: count }, () => new Particle(w, h));
      pollColor();
      if (reducedMotion.matches) draw(0); // static frame
    };

    const draw = (dt: number) => {
      ctx.clearRect(0, 0, w, h);

      ctx.beginPath();
      ctx.fillStyle = currentDynamicColor;
      for (const p of particles) {
        p.update(w, h, dt);
        ctx.moveTo(p.x + p.radius, p.y); // avoids stray connecting line between arcs
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      }
      ctx.fill();

      lineCounts.fill(0);
      const n = particles.length;
      for (let i = 0; i < n; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < n; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          if (dx > 150 || dx < -150) continue; // early-out
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < MAX_DIST_SQ) {
            const b = Math.ceil((1 - distSq / MAX_DIST_SQ) * BUCKETS) - 1;
            const buf = lineBuffers[b];
            const o = lineCounts[b] * 4;
            buf[o] = p1.x; buf[o + 1] = p1.y; buf[o + 2] = p2.x; buf[o + 3] = p2.y;
            lineCounts[b]++;
          }
        }
      }

      ctx.strokeStyle = currentDynamicColor;
      ctx.lineWidth = 0.8;
      for (let b = 0; b < BUCKETS; b++) {
        const count = lineCounts[b];
        if (count === 0) continue;
        const buf = lineBuffers[b];
        ctx.beginPath();
        ctx.globalAlpha = ((b + 1) / BUCKETS) * 0.3;
        for (let k = 0; k < count; k++) {
          const o = k * 4;
          ctx.moveTo(buf[o], buf[o + 1]);
          ctx.lineTo(buf[o + 2], buf[o + 3]);
        }
        ctx.stroke();
      }
      ctx.globalAlpha = 1.0;
    };

    const animate = (now: number) => {
      rafId = requestAnimationFrame(animate); // always track the latest id
      const elapsed = now - lastTime;
      if (elapsed < FRAME_INTERVAL) return; // frame cap
      lastTime = now - (elapsed % FRAME_INTERVAL);
      draw(Math.min(elapsed / 1000, 0.1));
    };

    const start = () => {
      if (rafId || reducedMotion.matches) return;
      lastTime = performance.now();
      rafId = requestAnimationFrame(animate);
    };

    const stop = () => {
      cancelAnimationFrame(rafId);
      rafId = 0;
    };

    const handleVisibility = () => (document.hidden ? stop() : start());

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(initCanvas, 150); // debounce
    };

    const handleMotionPref = () => {
      if (reducedMotion.matches) { stop(); draw(0); } else start();
    };

    const colorPollInterval = setInterval(() => {
      if (!document.hidden) pollColor();
    }, 1000);

    initCanvas();
    start();

    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibility);
    reducedMotion.addEventListener('change', handleMotionPref);

    return () => {
      stop();
      clearTimeout(resizeTimeout);
      clearInterval(colorPollInterval);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
      reducedMotion.removeEventListener('change', handleMotionPref);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-10"
    />
  );
});

Background.displayName = 'Background';