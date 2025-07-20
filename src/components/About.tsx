import React from 'react';
import profileImage from '@/assets/profile.jpg';

const About = () => {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'GSAP',
    'TypeScript', 'Next.js', 'Tailwind CSS', 'Firebase', 'MongoDB', 'Python'
  ];

  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-violet to-neon-cyan rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
          <div className="relative w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-neon-violet glow-violet">
            <img 
              src={profileImage}
              alt="Vaibhav Profile"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
        
        {/* Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-neon-violet">Meet the Coder</h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            I design and build user-first, AI-powered interfaces that make technology feel human. 
            From frontend finesse to futuristic health-tech integration, I code with care.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Specializing in React, GSAP animations, and modern web technologies, I create 
            immersive digital experiences that bridge the gap between complex healthcare 
            systems and intuitive user interfaces.
          </p>
          
          {/* Skills Grid */}
          <div>
            <h3 className="text-xl font-semibold text-neon-cyan mb-4">Tech Arsenal</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
              {skills.map((skill, index) => (
                <div 
                  key={skill}
                  className="glass-card p-3 text-center text-sm font-medium hover:glow-soft transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;