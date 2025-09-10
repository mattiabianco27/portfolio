import { MapPin, Calendar, Globe, Variable } from "lucide-react";
import variables from "../variables.json";

function getMyAge() {
  const today = new Date();
  const birthDate = new Date(2002, 8, 27); // Month is 0-indexed, so 8 = September
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  // If current month is earlier than birth month or same month but earlier day, subtract a year
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-up">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div
            className="space-y-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <p className="text-muted-foreground leading-relaxed">
              {variables.story}
            </p>
          </div>

          <div
            className="space-y-4 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-muted-foreground" />
              <span className="text-muted-foreground">
                2002 ({getMyAge()} years)
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-muted-foreground" />
              <span className="text-muted-foreground">
                {variables.actual_position}
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <Globe className="w-5 h-5 text-muted-foreground" />
              <span className="text-muted-foreground">Italian</span>
            </div>

            <div className="pt-4">
              <h3 className="font-semibold mb-2">Interests & Hobbies</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Volleyball",
                  "Skiing",
                  "Swimming",
                  "Karate",
                  "Piano",
                  "Photography",
                  "Volunteering",
                ].map((hobby) => (
                  <span
                    key={hobby}
                    className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
