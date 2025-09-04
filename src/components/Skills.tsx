import { Code2, Server, Cloud, Database, Terminal, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-5 h-5" />,
      skills: [
        { name: "Python", level: "Advanced", proficiency: 95 },
        { name: "C", level: "Advanced", proficiency: 90 },
        { name: "JavaScript/TypeScript", level: "Advanced", proficiency: 92 },
        { name: "HTML/CSS", level: "Advanced", proficiency: 95 },
        { name: "Assembly MIPS", level: "Intermediate", proficiency: 60 },
        { name: "Bash", level: "Intermediate", proficiency: 70 },
        { name: "MATLAB", level: "Basic", proficiency: 50 },
      ],
    },
    {
      title: "Technologies & Tools",
      icon: <Server className="w-5 h-5" />,
      skills: [
        { name: "Git/GitHub", level: "Intermediate", proficiency: 80 },
        { name: "Docker", level: "Basic", proficiency: 60 },
        { name: "Wireshark", level: "Intermediate", proficiency: 70 },
        { name: "Streamlit", level: "Intermediate", proficiency: 75 },
      ],
    },
    {
      title: "Cloud & Blockchain",
      icon: <Cloud className="w-5 h-5" />,
      skills: [
        { name: "AWS (EC2, S3, RDS, Lambda)", level: "Intermediate", proficiency: 75 },
        { name: "Amazon Managed Blockchain", level: "Intermediate", proficiency: 70 },
        { name: "Hyperledger Fabric", level: "Basic", proficiency: 60 },
        { name: "Ethereum", level: "Basic", proficiency: 55 },
      ],
    },
    {
      title: "Database & Systems",
      icon: <Database className="w-5 h-5" />,
      skills: [
        { name: "SQL/MySQL", level: "Advanced", proficiency: 85 },
        { name: "Database Design", level: "Advanced", proficiency: 88 },
        { name: "Linux Systems", level: "Advanced", proficiency: 90 },
        { name: "Network Analysis", level: "Intermediate", proficiency: 75 },
      ],
    },
    {
      title: "Operating Systems",
      icon: <Terminal className="w-5 h-5" />,
      skills: [
        { name: "Linux", level: "Advanced", proficiency: 90 },
        { name: "macOS", level: "Advanced", proficiency: 95 },
        { name: "Windows", level: "Advanced", proficiency: 95 },
      ],
    },
    {
      title: "Languages",
      icon: <Globe className="w-5 h-5" />,
      skills: [
        { name: "Italian", level: "Native", proficiency: 100 },
        { name: "English", level: "C1 (IELTS 8.0)", proficiency: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 md:px-8 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-up">
          Skills & Technologies
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-background rounded-lg p-6 animate-fade-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-primary text-primary-foreground rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.proficiency}%`,
                          animationDelay: `${(categoryIndex * 0.1) + (index * 0.05)}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;