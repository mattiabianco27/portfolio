import { Mail, Phone, Linkedin, Github, ExternalLink } from "lucide-react";
import variables from "../variables.json";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 md:w-6 md:h-6" />,
      label: "Email",
      href: `mailto:${variables.email}`,
    },
    {
      icon: <Linkedin className="w-5 h-5 md:w-6 md:h-6" />,
      label: "LinkedIn",
      href: `https://www.linkedin.com/in/${variables.linkedin}/`,
    },
    {
      icon: <Github className="w-5 h-5 md:w-6 md:h-6" />,
      label: "GitHub",
      href: `https://github.com/${variables.github}`,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-up">
          Get In Touch
        </h2>

        <div
          className="text-center mb-12 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          <p className="text-xl text-muted-foreground mb-8">
            I'm always interested in new opportunities and collaborations. Feel
            free to reach out if you'd like to connect!
          </p>
        </div>

        <div className="flex justify-center items-center gap-5 md:gap-8">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="group p-4 bg-accent rounded-full hover:bg-primary hover:text-primary-foreground transition-all animate-fade-up hover:scale-110"
              style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              aria-label={item.label}
            >
              {item.icon}
            </a>
          ))}
        </div>

        <div
          className="text-center mt-16 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          <p className="text-sm text-muted-foreground">
            Currently based in {variables.actual_position} • Available for
            remote work
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
