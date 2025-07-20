import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Animate progress bar
    tl.to({}, {
      duration: 3,
      ease: "power2.out",
      onUpdate: function() {
        setProgress(Math.round(this.progress() * 100));
      }
    });
    
    // Fade out preloader
    tl.to('.preloader', {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        gsap.set('.preloader', { display: 'none' });
      }
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="preloader fixed inset-0 z-50 bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-neon-violet mb-8 animate-glow">
          VAIBHAV
        </h1>
        <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-neon-violet to-neon-cyan transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xl text-muted-foreground mt-4">{progress}%</p>
      </div>
    </div>
  );
};

export default Preloader;