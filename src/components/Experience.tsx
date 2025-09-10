import { Briefcase, Code, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const experiences = [
    {
      title: "Software Development Engineer Intern",
      company: "STORM Reply, Turin",
      company_link: "https://www.reply.com/storm-reply/en",
      period: "December 2023 - April 2024",
      project: "Electric Vehicle Battery Passport",
      description:
        "Developed prototype blockchain network for electric vehicle secure battery information sharing using AWS Managed Blockchain, Hyperledger Fabric, Lambda, API Gateway, and Amazon Cognito. Designed verifiable credentials and wallet-based architecture for selective disclosure, lifecycle tracking, and regulatory compliance. Published article on Medium detailing the project architecture.",
      skills: [
        "AWS Lambda",
        "API Gateway",
        "Amazon Cognito",
        "Amazon Managed Blockchain",
        "Hyperledger Fabric",
        "Verifiable Credentials",
        "Ethereum",
      ],
      icon: <Code className="w-5 h-5" />,
    },
    {
      title: "Junior Entrepreneur",
      company: "JEToP - Junior Enterprise of Politecnico di Torino",
      company_link: "https://jetop.com/en",
      period: "April 2022 - February 2024",
      description:
        "Led full-stack web development projects for external clients using TypeScript with React and related frameworks such as Vue and Next.js, leveraging AWS cloud services for hosting and backend integration. Progressed from IT Assistant to Deputy Head of IT and finally to Senior Consultant, gaining experience in technical leadership, project management, and mentoring junior developers. Strengthened teamwork skills while consistently delivering scalable web applications. Expanded mobile development expertise through an international Flutter workshop in Tunis, Tunisia in collaboration with Inceptum JE & University of Esprit, participating in cross-cultural technical exchange.",
      skills: [
        "TypeScript",
        "React",
        "Docker",
        "Git",
        "AWS",
        "Project Management",
        "Technical Leadership",
        "Team Work",
        "Flutter",
        "React Native",
        "Mobile Development",
        "International Collaboration",
      ],
      icon: <Briefcase className="w-5 h-5" />,
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
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-transparent"></div>

          <div className="space-y-6">
            {experiences.map((exp, index) => {
              const isExpanded = expandedIndex === index;
              const isMobile =
                typeof window !== "undefined" && window.innerWidth < 768;

              return (
                <div
                  key={index}
                  className="relative flex items-start animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 w-4 h-4 bg-primary rounded-full -translate-x-1/2 hidden md:block"></div>

                  <div className="md:ml-16 w-full">
                    <div className="bg-card border border-border rounded-lg p-4 md:p-6 hover:shadow-md transition-shadow">
                      {/* Header - Always visible */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2 md:mb-4">
                        <div className="flex items-center space-x-3 flex-1">
                          <div className="p-2 bg-accent rounded-lg flex-shrink-0">
                            {exp.icon}
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="text-lg md:text-xl font-semibold">
                              <span className="">{exp.title}</span>
                            </h3>
                            <p className="text-sm md:text-base text-muted-foreground break-words">
                              <a
                                href={exp.company_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" font-bold text-electric-gradient"
                              >
                                {exp.company}
                              </a>
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs md:text-sm text-muted-foreground whitespace-nowrap">
                            {exp.period}
                          </span>
                          {/* Mobile expand button */}
                          <button
                            onClick={() => toggleExpanded(index)}
                            className="md:hidden p-1 hover:bg-accent rounded transition-colors"
                            aria-label={isExpanded ? "Collapse" : "Expand"}
                          >
                            {isExpanded ? (
                              <ChevronUp className="w-4 h-4 text-electric" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-muted-foreground" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Collapsible content on mobile, always visible on desktop */}
                      <div
                        className={`${
                          isMobile && !isExpanded ? "hidden" : "block"
                        }`}
                      >
                        {exp.project && (
                          <p className="font-medium mb-2">
                            <span>Project:</span> {exp.project}
                          </p>
                        )}

                        <p className="text-sm md:text-base text-muted-foreground mb-4">
                          {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 bg-electric/10 text-electric-dark dark:text-electric-light rounded text-xs font-medium border border-electric/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
