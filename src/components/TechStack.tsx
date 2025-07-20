import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { 
  Code2, 
  Palette, 
  Database, 
  Zap, 
  Brain, 
  Globe,
  Smartphone,
  Server,
  Cloud,
  GitBranch
} from 'lucide-react';

const TechStack = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const technologies = [
    { name: 'Frontend', icon: Code2, skills: ['React', 'Next.js', 'TypeScript', 'Vue.js'], color: 'neon-violet' },
    { name: 'Styling', icon: Palette, skills: ['Tailwind CSS', 'SCSS', 'Framer Motion', 'GSAP'], color: 'neon-cyan' },
    { name: 'Backend', icon: Server, skills: ['Node.js', 'Python', 'Express', 'FastAPI'], color: 'neon-blue' },
    { name: 'Database', icon: Database, skills: ['MongoDB', 'PostgreSQL', 'Firebase', 'Supabase'], color: 'neon-violet' },
    { name: 'AI/ML', icon: Brain, skills: ['OpenAI API', 'TensorFlow', 'PyTorch', 'Hugging Face'], color: 'neon-cyan' },
    { name: 'Cloud', icon: Cloud, skills: ['AWS', 'Vercel', 'Netlify', 'Docker'], color: 'neon-blue' },
    { name: 'Mobile', icon: Smartphone, skills: ['React Native', 'Flutter', 'PWA', 'Ionic'], color: 'neon-violet' },
    { name: 'Tools', icon: GitBranch, skills: ['Git', 'VS Code', 'Figma', 'Postman'], color: 'neon-cyan' }
  ];

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll('.tech-card');
    if (!cards) return;

    gsap.fromTo(cards, 
      {
        opacity: 0,
        y: 50,
        rotation: -5
      },
      {
        opacity: 1,
        y: 0,
        rotation: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const getColorClass = (color: string) => {
    switch (color) {
      case 'neon-violet': return 'text-neon-violet border-neon-violet/30 hover:border-neon-violet';
      case 'neon-cyan': return 'text-neon-cyan border-neon-cyan/30 hover:border-neon-cyan';
      case 'neon-blue': return 'text-neon-blue border-neon-blue/30 hover:border-neon-blue';
      default: return 'text-neon-violet border-neon-violet/30 hover:border-neon-violet';
    }
  };

  return (
    <section id="tech-stack" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">
          Digital <span className="text-neon-violet">Arsenal</span>
        </h2>
        <p className="text-xl text-muted-foreground">
          Cutting-edge technologies for next-generation solutions
        </p>
      </div>
      
      <div ref={containerRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {technologies.map((tech, index) => (
          <div 
            key={tech.name}
            className={`tech-card glass-card p-6 hover:glow-soft transition-all duration-500 hover:-translate-y-2 border-2 ${getColorClass(tech.color)} group cursor-pointer`}
          >
            <div className="text-center space-y-4">
              <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-${tech.color}/20 to-${tech.color}/10 flex items-center justify-center border border-${tech.color}/30 group-hover:scale-110 transition-transform duration-300`}>
                <tech.icon className={`w-8 h-8 ${getColorClass(tech.color).split(' ')[0]}`} />
              </div>
              
              <h3 className={`text-xl font-bold ${getColorClass(tech.color).split(' ')[0]}`}>
                {tech.name}
              </h3>
              
              <div className="space-y-2">
                {tech.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Orbiting Animation Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="relative w-full h-full">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-neon-violet/30 rounded-full animate-pulse"
              style={{
                left: `${20 + (i * 60) % 80}%`,
                top: `${30 + (i * 40) % 60}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + (i % 3)}s`
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;