import {
  Code2,
  Server,
  Cloud,
  Database,
  Terminal,
  Globe,
  Shield,
} from "lucide-react";

const Skills = () => {
  // Flatten all skills into badges with category colors
  const allSkills = [
    // Cyber Security - Electric Blue
    {
      name: "Binary Exploitation",
      category: "security",
      color: "bg-electric text-white",
    },
    {
      name: "Reverse Engineering",
      category: "security",
      color: "bg-electric-dark text-white",
    },
    {
      name: "Hardware Attacks",
      category: "security",
      color: "bg-electric text-white",
    },
    {
      name: "Network Security",
      category: "security",
      color: "bg-electric-light text-white",
    },
    {
      name: "Web/OS Security",
      category: "security",
      color: "bg-electric text-white",
    },
    {
      name: "Applied Cryptography",
      category: "security",
      color: "bg-electric-dark text-white",
    },

    // Programming - Cyan variations
    {
      name: "Python",
      category: "programming",
      color: "bg-cyan-500 text-white",
    },
    { name: "C", category: "programming", color: "bg-cyan-600 text-white" },
    {
      name: "JavaScript/TypeScript",
      category: "programming",
      color: "bg-cyan-500 text-white",
    },
    {
      name: "HTML/CSS",
      category: "programming",
      color: "bg-cyan-400 text-white",
    },
    {
      name: "Assembly",
      category: "programming",
      color: "bg-cyan-700 text-white",
    },
    { name: "Go", category: "programming", color: "bg-cyan-600 text-white" },
    { name: "Java", category: "programming", color: "bg-cyan-500 text-white" },
    {
      name: "React Native",
      category: "programming",
      color: "bg-cyan-400 text-white",
    },
    { name: "Bash", category: "programming", color: "bg-cyan-600 text-white" },
    {
      name: "MATLAB",
      category: "programming",
      color: "bg-cyan-700 text-white",
    },

    // Tools - Sky Blue variations
    { name: "Git/GitHub", category: "tools", color: "bg-sky-500 text-white" },
    { name: "Ghidra", category: "tools", color: "bg-sky-600 text-white" },
    { name: "Docker", category: "tools", color: "bg-sky-500 text-white" },
    { name: "Wireshark", category: "tools", color: "bg-sky-400 text-white" },
    { name: "Streamlit", category: "tools", color: "bg-sky-600 text-white" },
    {
      name: "Tamarin Prover",
      category: "tools",
      color: "bg-sky-500 text-white",
    },
    { name: "MongoDB", category: "tools", color: "bg-sky-400 text-white" },
    { name: "Neo4J", category: "tools", color: "bg-sky-600 text-white" },

    // Cloud & Blockchain - Blue variations
    { name: "AWS", category: "cloud", color: "bg-blue-500 text-white" },
    { name: "Lambda", category: "cloud", color: "bg-blue-600 text-white" },
    { name: "API Gateway", category: "cloud", color: "bg-blue-500 text-white" },
    { name: "Cognito", category: "cloud", color: "bg-blue-400 text-white" },
    {
      name: "Managed Blockchain",
      category: "cloud",
      color: "bg-blue-600 text-white",
    },
    {
      name: "Hyperledger Fabric",
      category: "cloud",
      color: "bg-blue-500 text-white",
    },
    { name: "Ethereum", category: "cloud", color: "bg-blue-400 text-white" },

    // Database & Systems - Indigo variations
    {
      name: "SQL/MySQL",
      category: "database",
      color: "bg-indigo-500 text-white",
    },
    {
      name: "Database Design",
      category: "database",
      color: "bg-indigo-600 text-white",
    },
    {
      name: "Linux Systems",
      category: "database",
      color: "bg-indigo-500 text-white",
    },
    {
      name: "Network Analysis",
      category: "database",
      color: "bg-indigo-400 text-white",
    },

    // Operating Systems - Purple variations
    { name: "Linux", category: "os", color: "bg-purple-500 text-white" },
    { name: "macOS", category: "os", color: "bg-purple-600 text-white" },
    { name: "Windows", category: "os", color: "bg-purple-500 text-white" },
  ];

  // Duplicate the array for infinite scroll effect
  const skill1 = [
    ...allSkills.slice(0, Math.floor(allSkills.length / 4)),
    ...allSkills.slice(0, Math.floor(allSkills.length / 4)),
    ...allSkills.slice(0, Math.floor(allSkills.length / 4)),
  ];

  const skill2 = [
    ...allSkills.slice(
      Math.floor(allSkills.length / 4),
      Math.floor(allSkills.length / 2)
    ),
    ...allSkills.slice(
      Math.floor(allSkills.length / 4),
      Math.floor(allSkills.length / 2)
    ),
    ...allSkills.slice(
      Math.floor(allSkills.length / 4),
      Math.floor(allSkills.length / 2)
    ),
  ];

  const skill3 = [
    ...allSkills.slice(
      Math.floor(allSkills.length / 2),
      Math.floor((allSkills.length * 3) / 4)
    ),
    ...allSkills.slice(
      Math.floor(allSkills.length / 2),
      Math.floor((allSkills.length * 3) / 4)
    ),
    ...allSkills.slice(
      Math.floor(allSkills.length / 2),
      Math.floor((allSkills.length * 3) / 4)
    ),
  ];

  const skill4 = [
    ...allSkills.slice(
      Math.floor((allSkills.length * 3) / 4),
      allSkills.length
    ),
    ...allSkills.slice(
      Math.floor((allSkills.length * 3) / 4),
      allSkills.length
    ),
    ...allSkills.slice(
      Math.floor((allSkills.length * 3) / 4),
      allSkills.length
    ),
  ];

  // Duplicate the array for infinite scroll effect
  const duplicatedSkills = [...allSkills, ...allSkills];

  return (
    <section
      id="skills"
      className="py-20 px-4 md:px-8 bg-secondary overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-up">
          <span className="text-electric-gradient">Skills</span> & Technologies
        </h2>

        {/* Infinite scrolling badge wall */}
        <div className="relative flex flex-col gap-6 ">
          {/* Scrolling container - 1*/}
          <div className="flex gap-3 animate-scroll-left-mobile md:animate-scroll-left">
            {skill1.map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className={`
                inline-flex items-center px-4 py-2 rounded-full font-medium text-sm
                whitespace-nowrap shadow-md hover:shadow-lg transition-all duration-300
                hover:scale-110 cursor-default
                ${skill.color}
              `}
              >
                {skill.name}
              </div>
            ))}
          </div>
          {/* Scrolling container - 2*/}
          <div className="flex gap-3 animate-scroll-left-mobile md:animate-scroll-left">
            {skill2.map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className={`
                  inline-flex items-center px-4 py-2 rounded-full font-medium text-sm
                  whitespace-nowrap shadow-md hover:shadow-lg transition-all duration-300
                  hover:scale-110 cursor-default
                  ${skill.color}
                `}
              >
                {skill.name}
              </div>
            ))}
          </div>
          {/* Scrolling container - 3*/}
          <div className="flex gap-3 animate-scroll-left-mobile md:animate-scroll-left">
            {skill3.map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className={`
                  inline-flex items-center px-4 py-2 rounded-full font-medium text-sm
                  whitespace-nowrap shadow-md hover:shadow-lg transition-all duration-300
                  hover:scale-110 cursor-default
                  ${skill.color}
                `}
              >
                {skill.name}
              </div>
            ))}
          </div>
          {/* Scrolling container - 4*/}
          <div className="flex gap-3 animate-scroll-left-mobile md:animate-scroll-left">
            {skill4.map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className={`
                  inline-flex items-center px-4 py-2 rounded-full font-medium text-sm
                  whitespace-nowrap shadow-md hover:shadow-lg transition-all duration-300
                  hover:scale-110 cursor-default
                  ${skill.color}
                `}
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>

        {/* Category legend */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-electric rounded"></div>
            <span className="text-sm text-muted-foreground">
              Cyber Security
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-cyan-500 rounded"></div>
            <span className="text-sm text-muted-foreground">Programming</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-sky-500 rounded"></div>
            <span className="text-sm text-muted-foreground">Tools</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-500 rounded"></div>
            <span className="text-sm text-muted-foreground">
              Cloud & Blockchain
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-indigo-500 rounded"></div>
            <span className="text-sm text-muted-foreground">Database</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-purple-500 rounded"></div>
            <span className="text-sm text-muted-foreground">
              Operating Systems
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
