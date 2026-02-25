'use client';

import { useEffect, useRef } from 'react';

export function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W: number, H: number, t = 0;

    function resize() {
      if (!canvas) return;
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    resize();

    function draw() {
      // Early return if ctx is null
      if (!ctx) return;
      
      ctx.fillStyle = 'rgba(26, 26, 26, 1)';
      ctx.fillRect(0, 0, W, H);

      const numLines = 32;
      const spacing = H / numLines;

      for (let i = 0; i <= numLines; i++) {
        ctx.beginPath();

        // Opacity varies: brighter in middle, dimmer at edges
        const norm = i / numLines;
        const brightness = 0.08 + 0.3 * Math.sin(norm * Math.PI);
        ctx.strokeStyle = `rgba(220, 38, 38, ${brightness * 0.8})`;
        ctx.lineWidth = 0.5;

        const points = 300;
        for (let x = 0; x <= points; x++) {
          const px = (x / points) * W;
          
          // Multiple wave layers for organic feel
          const wave1 = Math.sin((x / points) * Math.PI * 3 + t * 0.4 + i * 0.15) * (H * 0.04);
          const wave2 = Math.sin((x / points) * Math.PI * 1.5 - t * 0.25 + i * 0.08) * (H * 0.03);
          const wave3 = Math.sin((x / points) * Math.PI * 5 + t * 0.6 + i * 0.05) * (H * 0.01);

          // Arc/curve origin: lines emanate from bottom-left corner area
          const baseY = H * 0.85 - (i / numLines) * H * 1.1 + (px / W) * H * 0.5;

          const py = baseY + wave1 + wave2 + wave3;

          if (x === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }

        ctx.stroke();
      }

      t += 0.01;
    }

    function animate() {
      draw();
      animationRef.current = requestAnimationFrame(animate);
    }

    function handleResize() {
      resize();
      if (ctx) {
        ctx.fillStyle = '#1a1a1a';
        ctx.fillRect(0, 0, W, H);
      }
      draw();
    }

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="canvas-bg"
      style={{
        background: '#1a1a1a'
      }}
    />
  );
}
