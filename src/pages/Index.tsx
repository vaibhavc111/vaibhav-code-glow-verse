import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import TechStack from '../components/TechStack';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import Preloader from '../components/Preloader';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize smooth scrolling and scroll animations
    const container = containerRef.current;
    if (!container) return;

    // Smooth scroll setup
    gsap.set(container, { opacity: 0 });
    
    // Fade in container after preloader
    gsap.to(container, {
      opacity: 1,
      duration: 1,
      delay: 3.5, // After preloader finishes
      ease: "power2.out"
    });

    // Section animations
    gsap.utils.toArray('.section-animate').forEach((section: any) => {
      gsap.fromTo(section, 
        {
          opacity: 0,
          y: 100
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <Preloader />
      <CustomCursor />
      <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-background to-background/95">
        <Hero />
        
        <main className="relative z-10">
          <section className="section-animate">
            <About />
          </section>
          
          <section className="section-animate">
            <Projects />
          </section>
          
          <section className="section-animate">
            <TechStack />
          </section>
          
          <section className="section-animate">
            <Contact />
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
