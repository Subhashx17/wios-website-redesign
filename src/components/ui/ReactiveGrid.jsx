import { useEffect, useRef } from 'react';

const GRID_SIZE = 52;
const SAMPLE_SIZE = 13;
const INFLUENCE_RADIUS = 190;

export default function ReactiveGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pointer = { x: -1000, y: -1000, active: false };
    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    let frame;

    const resize = () => {
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const distort = (x, y) => {
      const dx = x - pointer.x;
      const dy = y - pointer.y;
      const distance = Math.hypot(dx, dy);

      if (!pointer.active || distance > INFLUENCE_RADIUS || distance === 0) return [x, y];

      const falloff = (1 - distance / INFLUENCE_RADIUS) ** 2;
      const strength = 28 * falloff;
      return [x + (dx / distance) * strength, y + (dy / distance) * strength];
    };

    const drawLine = (fromX, fromY, toX, toY) => {
      const distance = Math.hypot(toX - fromX, toY - fromY);
      const steps = Math.ceil(distance / SAMPLE_SIZE);
      context.beginPath();

      for (let step = 0; step <= steps; step += 1) {
        const progress = step / steps;
        const [x, y] = distort(fromX + (toX - fromX) * progress, fromY + (toY - fromY) * progress);
        if (step === 0) context.moveTo(x, y);
        else context.lineTo(x, y);
      }

      context.stroke();
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      context.strokeStyle = 'rgba(244, 243, 239, 0.075)';
      context.lineWidth = 1;

      for (let x = -GRID_SIZE; x <= width + GRID_SIZE; x += GRID_SIZE) drawLine(x, 0, x, height);
      for (let y = -GRID_SIZE; y <= height + GRID_SIZE; y += GRID_SIZE) drawLine(0, y, width, y);

      if (pointer.active) {
        const glow = context.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, INFLUENCE_RADIUS);
        glow.addColorStop(0, 'rgba(255, 61, 99, 0.09)');
        glow.addColorStop(1, 'rgba(255, 61, 99, 0)');
        context.fillStyle = glow;
        context.fillRect(pointer.x - INFLUENCE_RADIUS, pointer.y - INFLUENCE_RADIUS, INFLUENCE_RADIUS * 2, INFLUENCE_RADIUS * 2);
      }

      if (!motionQuery.matches) frame = requestAnimationFrame(draw);
    };

    const movePointer = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    };

    const clearPointer = () => {
      pointer.active = false;
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', movePointer, { passive: true });
    document.documentElement.addEventListener('mouseleave', clearPointer);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', movePointer);
      document.documentElement.removeEventListener('mouseleave', clearPointer);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0" aria-hidden="true" />;
}
