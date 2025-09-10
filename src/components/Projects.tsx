import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Github,
  ExternalLink,
  Folder,
  Video,
  Lock,
  Link,
  ChevronDown,
  ChevronUp,
  Play,
  Code,
  Shield,
  Cpu,
} from "lucide-react";

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(
    new Set()
  );

  const toggleProject = (index: number) => {
    setExpandedProjects((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const projects = [
    {
      title: "Rowhammer Exploitation",
      description:
        "Hardware security research demonstrating privilege escalation on modern Linux systems through sophisticated Rowhammer attacks. Utilized DRAM reverse engineering via DRAMA methodology to map physical memory addresses to DRAM geometry, exploited Linux buddy allocator for controlled memory layout, and employed Blacksmith's frequency-domain fuzzing to bypass Target Row Refresh (TRR) protections. Achieved kernel compromise through Page Table Page (PTP) corruption and virtual-to-physical address mapping manipulation.",
      technologies: [
        "Assembly (x86-64)",
        "C/C++ (Low-level)",
        "Linux Kernel Internals",
        "DRAM Architecture Analysis",
        "DRAMA Framework",
        "Blacksmith Rowhammer Fuzzer",
        "Physical Memory Debugging",
        "Page Table Manipulation",
      ],
      github: null,
      second_link: "https://youtube.com/watch?v=oIgPyQ8We7U&themeRefresh=1",
      second_icon: (
        <>
          <Video className="w-4 h-4 mr-2" />
          Video Demo
        </>
      ),
      features: [
        "DRAM reverse engineering using DRAMA methodology for bank/row/channel mapping",
        "Linux buddy allocator exploitation for aggressor-victim row adjacency control",
        "Blacksmith frequency-domain fuzzing to systematically discover vulnerable access patterns",
        "TRR bypass through non-uniform hammering sequences with optimized timing",
        "Page Table Page (PTP) corruption for virtual memory mapping manipulation",
        "End-to-end privilege escalation from unprivileged user to root kernel access",
        "Cross-layer attack demonstrating hardware-software security interdependencies",
      ],
      status: "Research Project - ETH Zurich Hardware Security",
      confidential: true,
    },
    {
      title: "Electric Vehicle Battery Passport",
      description:
        "Comprehensive prototype implementing EU Battery Regulation Article 77 compliance through a decentralized digital battery passport system. Built on AWS Managed Blockchain with Hyperledger Fabric, featuring Verifiable Credentials for secure battery lifecycle management, traceability, and ownership tracking across automotive supply chains.",
      technologies: [
        "AWS Managed Blockchain",
        "Hyperledger Fabric",
        "AWS Lambda",
        "API Gateway",
        "Amazon Cognito",
        "AWS Amplify",
        "DynamoDB",
        "WebSocket API",
        "Verifiable Credentials (W3C)",
        "TypeScript/Node.js",
        "Go",
        "Blockchain Smart Contracts",
      ],
      github: null,
      second_link:
        "https://medium.com/storm-reply/electric-vehicle-battery-passport-distributed-architecture-on-aws-managed-blockchain-f1c22c475769",
      second_icon: (
        <>
          <Link className="w-4 h-4 mr-2" />
          Medium Link
        </>
      ),
      features: [
        "Digital wallet creation and management for battery credentials",
        "Verifiable Credential (VC) generation and validation for battery authenticity",
        "Verifiable Presentation (VP) with selective disclosure capabilities",
        "Custom VC schema creation for diverse battery attributes",
        "Secure ownership transfer events and change tracking",
        "Credential revocation for battery disposal/transfer scenarios",
        "Multi-actor architecture (Issuer, Holder, Verifier) with role-based permissions",
        "Private blockchain channels for sensitive supply chain data sharing",
        "WebSocket-based real-time communication for holder-verifier interactions",
      ],
      status: "Research Prototype - Storm Reply",
      confidential: true,
    },
    {
      title: "Geometric Hashing Optimization",
      description:
        "Advanced Systems Lab project delivering real-time performance for geometric hashing algorithms critical in computer vision and robotics applications. Through systematic low-level optimizations, transformed a computationally intensive O(N³) algorithm into a practical solution achieving 810× faster preprocessing and 160× faster matching, enabling deployment in time-sensitive industrial automation and interactive vision systems.",
      technologies: [
        "C++ (Low-level)",
        "AVX2/SIMD Vectorization",
        "Assembly Optimization",
        "Intel x86-64 Architecture",
        "Cache-aware Programming",
        "Memory Pool Allocation",
        "Custom Hash Functions",
        "Valgrind/Callgrind Profiling",
        "STREAM Memory Benchmarking",
      ],
      github: "https://github.com/mattiabianco27/asl-project",
      second_link:
        "https://github.com/mattiabianco27/asl-project/blob/main/28_report.pdf",
      second_icon: (
        <>
          <Link className="w-4 h-4 mr-2" />
          Academic Report
        </>
      ),
      features: [
        "Eliminated computational bottlenecks through algorithmic refinements and mathematical simplifications",
        "Redesigned core data structures to maximize memory efficiency and cache locality",
        "Implemented custom memory management strategies to avoid dynamic allocation overhead",
        "AVX2 vectorization achieving theoretical peak performance with SIMD instructions",
        "Developed robust testing framework ensuring correctness throughout optimization process",
        "Demonstrated scalability improvements that increase with larger datasets",
      ],
      status: "Research Project - ETH Zurich Advanced Systems Lab",
      confidential: false,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-up">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isExpanded = expandedProjects.has(index);

            return (
              <Card
                key={index}
                className="group overflow-hidden border-border hover:border-electric/50 transition-all duration-300 animate-fade-up hover:shadow-xl cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => toggleProject(index)}
              >
                {/* Project Header with Icon */}
                <CardHeader className="relative pb-4">
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <div className="p-2 bg-electric/10 rounded-lg group-hover:bg-electric/20 transition-colors">
                      {project.confidential ? (
                        <Shield className="w-5 h-5 text-electric" />
                      ) : (
                        <Code className="w-5 h-5 text-electric" />
                      )}
                    </div>
                    <div className="p-2 bg-background rounded-lg">
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-electric" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-electric" />
                      )}
                    </div>
                  </div>
                  <div className="pt-[35px] md:pt-[0px] md:pr-24">
                    <CardTitle className="text-xl md:text-2xl mb-2">
                      {project.title}
                    </CardTitle>
                    <Badge
                      variant="outline"
                      className="mb-3 border-[0] px-[0px] rounded-[0] md:rounded-full md:px-3 md:border-[1px] border-electric text-electric-gradient"
                    >
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Short Description (Always Visible) */}
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {project.description}
                  </p>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="space-y-4 animate-fade-up">
                      {/* Full Description */}
                      <p className="text-sm text-muted-foreground">
                        {project.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-electric" />
                          Key Features:
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start pl-4">
                              <span className="text-electric mr-2">▸</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Technologies - Always Visible but Limited */}
                  <div className="pt-4 border-t border-border">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(isExpanded
                        ? project.technologies
                        : project.technologies.slice(0, 5)
                      ).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-electric/10 text-electric-dark border-electric/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {!isExpanded && project.technologies.length > 5 && (
                        <Badge
                          variant="secondary"
                          className="text-xs bg-electric/5 text-electric-muted"
                        >
                          +{project.technologies.length - 5} more
                        </Badge>
                      )}
                    </div>

                    {/* Action Buttons - Show when expanded */}
                    {isExpanded && (
                      <div
                        className="flex flex-col sm:flex-row gap-3 mt-[20px] sm:mt-0"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {project.confidential ? (
                          <>
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1 opacity-60 cursor-not-allowed border-muted-foreground/20 py-[5px] sm:py-0"
                              disabled
                            >
                              <Lock className="w-4 h-4 mr-2 shrink-0" />
                              <span className="truncate">
                                Code Confidential
                              </span>
                            </Button>
                            <Button
                              variant="default"
                              size="sm"
                              className="flex-1 bg-transparent text-electric border border-electric hover:bg-gradient-to-r hover:from-electric-light hover:to-electric-dark hover:border-[1px] hover:border-transparent hover:text-white transition-all py-[5px] sm:py-0"
                              asChild
                            >
                              <a
                                href={project.second_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center"
                              >
                                {project.second_icon}
                              </a>
                            </Button>
                          </>
                        ) : (
                          <>
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1 border-muted-dark/20 hover:bg-electric hover:text-white hover:border-electric py-[5px] sm:py-0"
                              asChild
                            >
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center"
                              >
                                <Github className="w-4 h-4 mr-2 shrink-0" />
                                <span className="truncate">Code</span>
                              </a>
                            </Button>
                            <Button
                              variant="default"
                              size="sm"
                              className="flex-1 bg-transparent text-electric border border-electric hover:bg-gradient-to-r hover:from-electric-light hover:to-electric-dark hover:border-[1px] hover:border-transparent hover:text-white transition-all py-[5px] sm:py-0"
                            >
                              <a
                                href={project.second_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center"
                              >
                                {project.second_icon}
                              </a>
                            </Button>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Coming Soon Cards - REMOVED FOR NOW */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
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
                <CardDescription>New project in development</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>*/}
      </div>
    </section>
  );
};

export default Projects;
