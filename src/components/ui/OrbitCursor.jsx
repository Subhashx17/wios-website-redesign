import { useEffect, useRef } from 'react';

export default function OrbitCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const pointerQuery = window.matchMedia('(pointer: fine)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let targetX = -100;
    let targetY = -100;
    let currentX = targetX;
    let currentY = targetY;
    let targetWidth = 36;
    let targetHeight = 36;
    let currentWidth = targetWidth;
    let currentHeight = targetHeight;
    let frame;

    const animateCursor = () => {
      currentX += (targetX - currentX) * 0.22;
      currentY += (targetY - currentY) * 0.22;
      currentWidth += (targetWidth - currentWidth) * 0.22;
      currentHeight += (targetHeight - currentHeight) * 0.22;
      
      cursor.style.transform = `translate3d(${currentX - currentWidth / 2}px, ${currentY - currentHeight / 2}px, 0)`;
      cursor.style.width = `${currentWidth}px`;
      cursor.style.height = `${currentHeight}px`;
      frame = requestAnimationFrame(animateCursor);
    };

    const updateCursor = (event) => {
      if (!pointerQuery.matches || motionQuery.matches) return;

      // 🎯 MODIFIED LINE: Checks for .cursor-lock OR [data-cursor="box"] OR .cursor-box
      const target = event.target instanceof Element 
        ? event.target.closest('.cursor-lock, [data-cursor="box"], .cursor-box') 
        : null;

      if (target) {
        const bounds = target.getBoundingClientRect();
        targetX = bounds.left + bounds.width / 2;
        targetY = bounds.top + bounds.height / 2;
        // Expands around the box with a padding offset
        targetWidth = bounds.width + 12;
        targetHeight = bounds.height + 10;
      } else {
        targetX = event.clientX;
        targetY = event.clientY;
        targetWidth = 36;
        targetHeight = 36;
      }

      cursor.dataset.visible = 'true';
      cursor.dataset.locked = String(Boolean(target));
    };

    const hideCursor = () => {
      cursor.dataset.visible = 'false';
      cursor.dataset.locked = 'false';
    };

    const updateCapability = () => {
      if (!pointerQuery.matches || motionQuery.matches) hideCursor();
    };

    window.addEventListener('pointermove', updateCursor);
    document.documentElement.addEventListener('mouseleave', hideCursor);
    pointerQuery.addEventListener('change', updateCapability);
    motionQuery.addEventListener('change', updateCapability);
    frame = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener('pointermove', updateCursor);
      document.documentElement.removeEventListener('mouseleave', hideCursor);
      pointerQuery.removeEventListener('change', updateCapability);
      motionQuery.removeEventListener('change', updateCapability);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={cursorRef} className="orbit-cursor" data-visible="false" data-locked="false" aria-hidden="true">
      <span className="orbit-cursor__edge orbit-cursor__edge--top" />
      <span className="orbit-cursor__edge orbit-cursor__edge--right" />
      <span className="orbit-cursor__edge orbit-cursor__edge--bottom" />
      <span className="orbit-cursor__edge orbit-cursor__edge--left" />
      <span className="orbit-cursor__dot" />
    </div>
  );
}
