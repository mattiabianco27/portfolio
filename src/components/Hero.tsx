import { useState, useEffect } from "react";
import { ArrowDown, Download } from "lucide-react";
import variables from "../variables.json";
import { title } from "process";

const Hero = () => {
  const roles = variables.titles;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-4 md:px-8">
      <div className="text-center space-y-8 animate-fade-up">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          <span className="block mb-4">Mattia Bianco</span>
        </h1>

        <div className="text-2xl md:text-4xl font-light h-16 flex items-center justify-center">
          <span className="text-muted-foreground">I am a </span>
          <span className="ml-3 font-medium text-electric-gradient animate-text-morph">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-8">
          {variables.description}
        </p>

        <div
          className="mt-8 animate-fade-up flex justify-center"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href="/cv.pdf"
            download="cv.pdf"
            className="flex items-center justify-center w-fit gap-2 px-6 py-3 bg-transparent text-electric border border-electric hover:bg-gradient-to-r hover:from-electric-light hover:to-electric-dark hover:border-[1px] hover:border-transparent hover:text-white rounded-lg transition-all z-10"
          >
            <Download className="w-5 h-5" />
            <p>Download Resume</p>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 animate-float">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
