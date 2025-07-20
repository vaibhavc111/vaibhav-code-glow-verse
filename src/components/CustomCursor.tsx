import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    if (!cursor || !trail) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX - 10,
        y: e.clientY - 10,
        duration: 0.1,
        ease: "power2.out"
      });
      
      gsap.to(trail, {
        x: e.clientX - 15,
        y: e.clientY - 15,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, { scale: 1.5, duration: 0.2 });
      gsap.to(trail, { scale: 1.2, duration: 0.2 });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, { scale: 1, duration: 0.2 });
      gsap.to(trail, { scale: 1, duration: 0.2 });
    };

    document.addEventListener('mousemove', moveCursor);
    
    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div 
        ref={trailRef}
        className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-difference"
        style={{
          background: 'radial-gradient(circle, hsla(264, 100%, 67%, 0.3), transparent)',
          borderRadius: '50%',
        }}
      />
      <div 
        ref={cursorRef}
        className="fixed w-5 h-5 bg-neon-violet pointer-events-none z-50 mix-blend-difference rounded-full glow-violet"
      />
    </>
  );
};

export default CustomCursor;