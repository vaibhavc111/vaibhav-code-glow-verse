import React from 'react';
import { Heart, Code2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 text-lg">
            <span>Built with</span>
            <Heart className="w-5 h-5 text-neon-violet animate-pulse" />
            <span>and</span>
            <Code2 className="w-5 h-5 text-neon-cyan" />
            <span>by Vaibhav</span>
          </div>
          
          <p className="text-muted-foreground">
            © {currentYear} Vaibhav Code Glow Verse. Crafting the future of healthcare technology.
          </p>
          
          <div className="flex justify-center space-x-1 text-sm text-muted-foreground">
            <span>Powered by</span>
            <span className="text-neon-violet">React</span>
            <span>•</span>
            <span className="text-neon-cyan">GSAP</span>
            <span>•</span>
            <span className="text-neon-blue">Tailwind</span>
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-neon-violet/30 rounded-full animate-float"
              style={{
                left: `${10 + (i * 90) / 8}%`,
                bottom: `${Math.random() * 100}px`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + (i % 2)}s`
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;