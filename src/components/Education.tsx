const Education = () => {
  const education = [
    {
      degree: "Master's Degree in Cyber Security",
      institution: "ETH Zurich",
      institution_link: "https://ethz.ch/en.html",
      period: "Sep 2024 - Present",
      grade: "Minor in Machine Intelligence",
      coursework:
        "Hardware Security, Network Security, Applied Cryptography, Security of Wireless Networks, Machine Perception",
    },
    {
      degree: "Bachelor's Degree in Computer Engineering",
      institution: "Politecnico di Torino",
      institution_link: "https://www.polito.it/en",
      period: "Sep 2021 - Jul 2024",
      grade: "GPA: 29.3/30, Final Grade: 110/110 with Honours",
      special:
        "Selected for INTRAPRENDENTI program - highly selective honors pathway for top-performing students",
      special_link: "https://bestr.it/award/show/yubRx7USRo-HPItZ1Txdvg",
    },
    // {
    //   degree: "Scientific High School Diploma",
    //   institution: "Istituto Istruzione Superiore Fermi Galilei Ciriè",
    //   period: "2016 - 2021",
    //   grade: "Final grade: 100/100 cum laude",
    // },
  ];

  return (
    <section id="education" className="py-20 px-4 md:px-8 bg-secondary">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-up">
          Education
        </h2>

        <div className="relative">
          {/* Desktop Timeline - Keep the same */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-transparent"></div>

          {/* Mobile Connecting Lines */}
          <div className="md:hidden">
            {education.map(
              (_, index) =>
                index < education.length - 1 && (
                  <div
                    key={`connector-${index}`}
                    className="absolute left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-electric to-electric-light"
                    style={{
                      top: `${(index + 1) * 200 + index * 32}px`,
                    }}
                  />
                )
            )}
          </div>

          <div className="space-y-8 md:space-y-12">
            {education.map((item, index) => (
              <div
                key={index}
                className="relative animate-fade-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Desktop Timeline dot */}
                <div className="hidden md:block absolute left-8 w-4 h-4 bg-primary rounded-full -translate-x-1/2">
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
                </div>

                {/* Mobile connector dot */}
                <div className="md:hidden absolute left-1/2 -translate-x-1/2 -top-4 w-3 h-3 bg-primary rounded-full"></div>

                {/* Content card */}
                <div className="md:ml-16">
                  <div className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-border md:border-none">
                    <div className="flex flex-col md:flex-row md:justify-between">
                      <h3 className="text-xl font-semibold mb-2">
                        {item.degree}
                      </h3>
                      <span className="hidden md:flex text-sm text-muted-foreground whitespace-nowrap ml-11 sm:ml-0">
                        {item.period}
                      </span>
                    </div>
                    {/* Laptop version */}
                    <p className="hidden md:flex text-muted-foreground mb-2 text-electric-gradient font-bold">
                      <a
                        href={item.institution_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-electric transition-colors"
                      >
                        {item.institution}
                      </a>
                    </p>
                    {/* Mobile version */}
                    <p className="md:hidden text-muted-foreground mb-2">
                      {item.period},{" "}
                      <a
                        href={item.institution_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-electric transition-colors"
                      >
                        {item.institution}
                      </a>
                    </p>
                    <p className="font-medium">{item.grade}</p>
                    {item.coursework && (
                      <p className="text-sm text-muted-foreground mt-2">
                        <span className="font-semibold">
                          Relevant Coursework:
                        </span>{" "}
                        {item.coursework}
                      </p>
                    )}
                    {item.special && (
                      <p className="text-sm font-medium text-primary/80 mt-2">
                        <span className="font-semibold">
                          Special Recognition:
                        </span>{" "}
                        {item.special} (
                        <a
                          href={item.special_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-electric hover:underline"
                        >
                          Certificate
                        </a>
                        )
                      </p>
                    )}
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
