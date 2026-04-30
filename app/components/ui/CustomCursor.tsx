'use client';

import { useEffect, useRef } from 'react';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const fogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    const fog = fogRef.current;
    if (!cursor || !ring || !fog) return;

    let mx = 0, my = 0;
    let rx = 0, ry = 0;
    let fx = 0, fy = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;

      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    };

    function animate() {
      // ring (medium delay)
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring!.style.left = rx + 'px';
      ring!.style.top = ry + 'px';

      // fog (slow delay → smooth trailing)
      fx += (mx - fx) * 0.06;
      fy += (my - fy) * 0.06;
      fog!.style.left = fx + 'px';
      fog!.style.top = fy + 'px';

      requestAnimationFrame(animate);
    }

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    // hover scaling
    const interactiveEls = document.querySelectorAll('a, button, [data-interactive]');

    const handleEnter = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(2.2)';
      ring.style.transform = 'translate(-50%, -50%) scale(1.6)';
    };

    const handleLeave = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      ring.style.transform = 'translate(-50%, -50%) scale(1)';
    };

    interactiveEls.forEach(el => {
      el.addEventListener('mouseenter', handleEnter);
      el.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveEls.forEach(el => {
        el.removeEventListener('mouseenter', handleEnter);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  return (
    <>
      {/* 🔥 FOG LAYER (TRAIL) */}
      <div
        ref={fogRef}
        className="fixed w-[300px] h-[300px] pointer-events-none z-[9997] -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-60"
        style={{
          background: `
            radial-gradient(circle,
              rgba(255,255,255,0.08),
              rgba(168,85,247,0.06),
              rgba(59,130,246,0.05),
              transparent 70%
            )
          `,
        }}
      />

      {/* INNER DOT */}
      <div
        ref={cursorRef}
        className="fixed w-3 h-3 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
        style={{
          background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
          boxShadow: '0 0 12px rgba(96,165,250,0.8), 0 0 20px rgba(167,139,250,0.6)',
        }}
      />

      {/* OUTER RING */}
      <div
        ref={ringRef}
        className="fixed w-10 h-10 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-transform duration-150"
        style={{
          border: '1px solid rgba(96,165,250,0.4)',
          boxShadow: '0 0 20px rgba(96,165,250,0.2)',
        }}
      />
    </>
  );
}