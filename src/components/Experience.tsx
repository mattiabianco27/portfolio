import { Briefcase, Code, Users, Globe2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Junior Entrepreneur",
      company: "JEToP - Junior Enterprise of Politecnico di Torino",
      period: "April 2022 - Present",
      description: "Student-run Web Agency providing professional services to external clients. Developing web applications, managing projects, and collaborating with cross-functional teams.",
      skills: ["Web Development", "Docker", "Git", "AWS", "Project Management", "Teamwork"],
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      title: "Blockchain Developer Intern",
      company: "STORM Reply, Turin",
      period: "December 2023 - Present",
      project: "Electric Vehicle Battery Passport",
      description: "Developing blockchain network for electric vehicle battery identification using verifiable credentials. Working with cutting-edge blockchain technology in the automotive sector.",
      skills: ["AWS", "Amazon Managed Blockchain", "Hyperledger Fabric", "Ethereum"],
      icon: <Code className="w-5 h-5" />,
    },
    {
      title: "Flutter Workshop Participant",
      company: "Inceptum JE & University of Esprit",
      period: "May 8-13, 2023",
      location: "Tunis, Tunisia",
      description: "International mobile app development workshop. Cultural and technical exchange with Tunisian students, expanding Flutter development skills.",
      skills: ["Flutter", "Mobile Development", "International Collaboration"],
      icon: <Globe2 className="w-5 h-5" />,
    },
    {
      title: "Summer Camp Animator",
      company: "Ciriè Parish",
      period: "2018 - 2021",
      description: "Organized and led activities for youth summer camps, developing leadership and communication skills.",
      skills: ["Leadership", "Communication", "Team Coordination"],
      icon: <Users className="w-5 h-5" />,
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-up">
          Experience
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex items-start animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 w-4 h-4 bg-primary rounded-full -translate-x-1/2 hidden md:block"></div>
                
                <div className="md:ml-16 w-full">
                  <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-accent rounded-lg flex-shrink-0">
                          {exp.icon}
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-xl font-semibold">{exp.title}</h3>
                          <p className="text-muted-foreground break-words">{exp.company}</p>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground whitespace-nowrap ml-11 sm:ml-0">
                        {exp.period}
                      </span>
                    </div>
                    
                    {exp.project && (
                      <p className="font-medium mb-2">Project: {exp.project}</p>
                    )}
                    
                    {exp.location && (
                      <p className="text-sm text-muted-foreground mb-2">📍 {exp.location}</p>
                    )}
                    
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;