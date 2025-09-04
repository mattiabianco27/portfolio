import { Mail, Phone, Linkedin, Github, ExternalLink } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "mattia.bianco@studenti.polito.it",
      href: "mailto:mattia.bianco@studenti.polito.it",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+39 329 151 2313",
      href: "tel:+393291512313",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "mattiabianco2709",
      href: "https://www.linkedin.com/in/mattiabianco2709/",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "View Profile",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-up">
          Get In Touch
        </h2>
        
        <div className="text-center mb-12 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <p className="text-xl text-muted-foreground mb-8">
            I'm always interested in new opportunities and collaborations.
            Feel free to reach out if you'd like to connect!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group bg-card border border-border rounded-lg p-6 hover:shadow-md transition-all animate-fade-up hover:scale-105"
              style={{ animationDelay: `${(index + 2) * 0.1}s` }}
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-accent rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                  <p className="font-medium flex items-center">
                    {item.value}
                    {item.href.startsWith('http') && (
                      <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-16 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-sm text-muted-foreground">
            Based in Ciriè (TO), Italy • Available for remote work
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;