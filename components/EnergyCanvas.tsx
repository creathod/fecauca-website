
import React, { useRef, useEffect } from 'react';

const EnergyCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let dots: Dot[] = [];
    let animationFrameId: number;

    // Palette Colors (Strict Adherence)
    const colors = {
      bg: 'transparent',     // Transparent Background
      dotIdle: '#334155',    // Dark Slate (Base state for dark mode)
      dotActive: '#FACC15',  // Yellow (Active state)
    };

    // Configuration
    const gap = 40; // Space between dots
    const mouseRadius = 200; // Interaction radius

    let width = container.clientWidth;
    let height = container.clientHeight;

    // Handle DPI for crisp rendering
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const mouse = {
      x: -1000,
      y: -1000
    };

    const handleResize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.touches[0].clientX - rect.left;
      mouse.y = e.touches[0].clientY - rect.top;
    };

    const handleLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    // Add to window to catch leaving the window/iframe
    window.addEventListener('mouseout', handleLeave);

    class Dot {
      x: number;      // Original X (Grid position)
      y: number;      // Original Y (Grid position)
      vx: number;     // Visual X (Current animated position)
      vy: number;     // Visual Y (Current animated position)
      size: number;
      baseSize: number;
      anchorX: number;
      anchorY: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.anchorX = x;
        this.anchorY = y;
        this.vx = x;
        this.vy = y;
        this.baseSize = 1.5;
        this.size = this.baseSize;
      }

      draw() {
        if (!ctx) return;

        // Distance to mouse
        const dx = mouse.x - this.vx;
        const dy = mouse.y - this.vy;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Calculate visual state based on distance
        let isActive = false;
        let scale = 1;

        if (distance < mouseRadius) {
          isActive = true;
          // Scale factor based on proximity (closer = bigger)
          const percent = (1 - distance / mouseRadius);
          scale = 1 + (percent * 1.5);
        }

        ctx.beginPath();
        ctx.arc(this.vx, this.vy, this.baseSize * scale, 0, Math.PI * 2);

        if (isActive) {
          ctx.fillStyle = colors.dotActive;
          // Add a glow effect only for active dots
          ctx.shadowBlur = 10;
          ctx.shadowColor = colors.dotActive;
        } else {
          ctx.fillStyle = colors.dotIdle;
          ctx.shadowBlur = 0;
        }

        ctx.fill();
        ctx.shadowBlur = 0;
      }

      update() {
        const dx = mouse.x - this.anchorX;
        const dy = mouse.y - this.anchorY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Physics: Spring-like return to anchor, Magnetic pull to mouse
        let targetX = this.anchorX;
        let targetY = this.anchorY;

        if (distance < mouseRadius) {
          // Calculate angle
          const angle = Math.atan2(dy, dx);
          // Magnetic Pull: Move slightly TOWARDS the mouse
          // To make it "repel", change '+' to '-' in the next two lines
          // We want "Magnetic Attraction" feel
          const force = (mouseRadius - distance) / mouseRadius;
          const moveDistance = force * 40; // Max pixels to move

          targetX = this.anchorX - Math.cos(angle) * moveDistance;
          targetY = this.anchorY - Math.sin(angle) * moveDistance;
        }

        // Ease towards target position (Smooth animation)
        this.vx += (targetX - this.vx) * 0.1;
        this.vy += (targetY - this.vy) * 0.1;

        this.draw();
      }
    }

    function init() {
      dots = [];
      // Create Grid
      for (let x = 0; x < width; x += gap) {
        for (let y = 0; y < height; y += gap) {
          // Offset every other row for honeycomb feel (optional, keeping square grid for minimalism)
          dots.push(new Dot(x + gap / 2, y + gap / 2));
        }
      }
    }

    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      if (!ctx) return;

      ctx.clearRect(0, 0, width, height);

      // Update all dots first
      for (let i = 0; i < dots.length; i++) {
        dots[i].update();
      }

      // Draw connections
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255,255,255,0.05)'; // Very subtle white lines for dark mode
      ctx.lineWidth = 1;

      for (let i = 0; i < dots.length; i++) {
        const p1 = dots[i];
        // Check neighbors (optimization: only check a subset or use grid, but for this count O(N^2) might be okay if N is small. 
        // Actually, let's just check the next few dots to avoid full N^2, or rely on the grid structure.
        // Since dots are in a grid, we can just connect to right and bottom neighbors? 
        // But the dots move. Let's do a distance check for nearby dots.

        for (let j = i + 1; j < dots.length; j++) {
          const p2 = dots[j];
          const dx = p1.vx - p2.vx;
          const dy = p1.vy - p2.vy;
          const distSq = dx * dx + dy * dy;

          // Connect if close enough (e.g., gap * 1.5)
          if (distSq < (gap * 1.8) ** 2) {
            ctx.moveTo(p1.vx, p1.vy);
            ctx.lineTo(p2.vx, p2.vy);
          }
        }
      }
      ctx.stroke();
    }

    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseout', handleLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden bg-transparent">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
    </div>
  );
};

export default EnergyCanvas;
