import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Folder } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Project Template",
      description: "This is a template project description. Replace this with your actual project details, including the problem it solves and your approach.",
      longDescription: "A comprehensive solution that demonstrates modern development practices and innovative problem-solving. This project showcases technical expertise in various technologies and frameworks.",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      github: "#",
      demo: "#",
      features: [
        "Feature 1: Core functionality",
        "Feature 2: Advanced capabilities",
        "Feature 3: User experience enhancements"
      ],
      status: "In Development"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-up">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 animate-fade-up hover:shadow-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header with Icon */}
              <CardHeader className="relative pb-4">
                <div className="absolute top-4 right-4 p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Folder className="w-6 h-6 text-primary" />
                </div>
                <div className="pr-16">
                  <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                  <Badge variant="outline" className="mb-3">
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Description */}
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
                
                {/* Extended Description */}
                <p className="text-sm text-muted-foreground">
                  {project.longDescription}
                </p>
                
                {/* Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Technologies */}
                <div className="pt-4 border-t border-border">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 group/btn hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button 
                      variant="default" 
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Coming Soon Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[1, 2, 3].map((_, index) => (
            <Card 
              key={`coming-${index}`}
              className="border-dashed border-2 border-border/50 bg-secondary/30 animate-fade-up"
              style={{ animationDelay: `${(projects.length + index) * 0.1}s` }}
            >
              <CardHeader className="text-center py-12">
                <div className="mx-auto mb-4 p-3 bg-muted rounded-lg w-fit">
                  <Folder className="w-6 h-6 text-muted-foreground" />
                </div>
                <CardTitle className="text-lg text-muted-foreground">
                  Coming Soon
                </CardTitle>
                <CardDescription>
                  New project in development
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;