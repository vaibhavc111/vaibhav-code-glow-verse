import React from 'react';
import project1 from '@/assets/project1.jpg';
import project2 from '@/assets/project2.jpg';
import project3 from '@/assets/project3.jpg';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Project Alpha",
      subtitle: "Smart Patient Dashboard",
      description: "A comprehensive healthcare dashboard featuring real-time patient monitoring, AI-powered analytics, and intuitive data visualization for medical professionals.",
      tech: ["React", "GSAP", "Firebase", "Chart.js"],
      image: project1,
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Project Beta", 
      subtitle: "Medical Appointment UI",
      description: "Modern appointment booking system with seamless calendar integration, doctor profiles, and smart scheduling algorithms for optimal patient care.",
      tech: ["Tailwind", "Framer Motion", "Next.js", "MongoDB"],
      image: project2,
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Project Gamma",
      subtitle: "AI Health Symptom Checker",
      description: "Intelligent symptom analysis platform powered by machine learning, providing preliminary health assessments and treatment recommendations.",
      tech: ["Next.js", "Node.js", "OpenAI", "PostgreSQL"],
      image: project3,
      demoLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">
          <span className="text-neon-violet">Innovation</span> in{' '}
          <span className="text-neon-cyan">Action</span>
        </h2>
        <p className="text-xl text-muted-foreground">
          Healthcare technology solutions that make a difference
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={project.title}
            className="glass-card group hover:glow-soft transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Project Image */}
            <div className="relative overflow-hidden rounded-t-xl">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            {/* Content */}
            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-xl font-bold text-neon-violet">{project.title}</h3>
                <p className="text-neon-cyan font-medium">{project.subtitle}</p>
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-neon-violet/20 text-neon-violet text-xs rounded-full border border-neon-violet/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <Button size="sm" className="btn-neon flex-1">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
                <Button size="sm" variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;