const Education = () => {
  const education = [
    {
      degree: "Bachelor's Degree in Computer Engineering",
      institution: "Politecnico di Torino",
      period: "July 2021 - Present",
      grade: "Average mark: 29.3/30",
    },
    {
      degree: "Scientific High School Diploma",
      institution: "Istituto Istruzione Superiore Fermi Galilei Ciriè",
      period: "2016 - 2021",
      grade: "Final grade: 100/100 cum laude",
    },
  ];

  return (
    <section id="education" className="py-20 px-4 md:px-8 bg-secondary">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-up">
          Education
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-transparent"></div>
          
          <div className="space-y-12">
            {education.map((item, index) => (
              <div
                key={index}
                className="relative animate-fade-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline dot with pulse effect */}
                <div className="absolute left-8 w-4 h-4 bg-primary rounded-full -translate-x-1/2">
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
                </div>
                
                {/* Content card - all on the right */}
                <div className="ml-16">
                  <div className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
                      {item.period}
                    </span>
                    <h3 className="text-xl font-semibold mb-2">{item.degree}</h3>
                    <p className="text-muted-foreground mb-2">{item.institution}</p>
                    <p className="font-medium bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                      {item.grade}
                    </p>
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

export default Education;