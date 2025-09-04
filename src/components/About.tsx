import { MapPin, Calendar, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-up">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate Computer Engineering student with a deep interest in 
              cybersecurity, web development, and emerging technologies. Currently pursuing 
              my Bachelor's degree at Politecnico di Torino with an exceptional academic record.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              As a Junior Entrepreneur at JEToP, I've gained hands-on experience in 
              developing real-world solutions for clients, managing projects, and working 
              with cutting-edge technologies including blockchain and cloud services.
            </p>
          </div>
          
          <div className="space-y-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-muted-foreground" />
              <span className="text-muted-foreground">Born September 27, 2002 (22 years)</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-muted-foreground" />
              <span className="text-muted-foreground">Ciriè (TO), Italy</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <Globe className="w-5 h-5 text-muted-foreground" />
              <span className="text-muted-foreground">Italian Nationality</span>
            </div>
            
            <div className="pt-4">
              <h3 className="font-semibold mb-2">Interests & Hobbies</h3>
              <div className="flex flex-wrap gap-2">
                {['Volleyball', 'Skiing', 'Swimming', 'Karate', 'Piano', 'Photography', 'Volunteering'].map((hobby) => (
                  <span 
                    key={hobby}
                    className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;