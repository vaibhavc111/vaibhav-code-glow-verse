import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Github, Linkedin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!"
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="contact" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">
          Let's <span className="text-neon-cyan">Connect</span>
        </h2>
        <p className="text-xl text-muted-foreground">
          Ready to build the future of healthcare technology together?
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="glass-card p-8 hover:glow-soft transition-all duration-300">
            <h3 className="text-2xl font-bold text-neon-violet mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-neon-violet/20 rounded-full flex items-center justify-center border border-neon-violet/30">
                  <Mail className="w-6 h-6 text-neon-violet" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">vibejz777@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-neon-cyan/20 rounded-full flex items-center justify-center border border-neon-cyan/30">
                  <Phone className="w-6 h-6 text-neon-cyan" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+91 9563738320</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-neon-blue/20 rounded-full flex items-center justify-center border border-neon-blue/30">
                  <MapPin className="w-6 h-6 text-neon-blue" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Calicut,India</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="font-medium mb-4">Follow me on</p>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-neon-violet/20 rounded-full flex items-center justify-center border border-neon-violet/30 hover:bg-neon-violet/30 transition-all duration-300 hover:glow-violet">
                  <Github className="w-6 h-6 text-neon-violet" />
                </a>
                <a href="#" className="w-12 h-12 bg-neon-cyan/20 rounded-full flex items-center justify-center border border-neon-cyan/30 hover:bg-neon-cyan/30 transition-all duration-300 hover:glow-cyan">
                  <Linkedin className="w-6 h-6 text-neon-cyan" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="glass-card p-8 hover:glow-soft transition-all duration-300">
          <h3 className="text-2xl font-bold text-neon-cyan mb-6">Send a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="bg-background/50 border-white/20 focus:border-neon-violet" />
              </div>
              <div>
                <Input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="bg-background/50 border-white/20 focus:border-neon-violet" />
              </div>
            </div>
            
            <div>
              <Input name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required className="bg-background/50 border-white/20 focus:border-neon-violet" />
            </div>
            
            <div>
              <Textarea name="message" placeholder="Your Message" rows={6} value={formData.message} onChange={handleChange} required className="bg-background/50 border-white/20 focus:border-neon-violet resize-none" />
            </div>
            
            <Button type="submit" disabled={isSubmitting} className="w-full bg-neon-violet hover:bg-neon-violet/80 text-white py-4 rounded-lg font-semibold glow-violet disabled:opacity-50">
              {isSubmitting ? 'Sending...' : <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </>}
            </Button>
          </form>
        </div>
      </div>
    </section>;
};
export default Contact;