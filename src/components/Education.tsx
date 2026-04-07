import AnimatedSection from "./AnimatedSection";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    school: "Nanyang Technological University Singapore",
    degree: "Bachelor of Electrical and Electronic Engineering",
    period: "Aug 2023 – May 2026",
    gpa: "CGPA: 3.43 / 5",
    specialisation: "Power and Clean Energy",
  },
  {
    school: "Singapore Polytechnic",
    degree: "Diploma in Electrical and Electronic Engineering",
    period: "Apr 2016 – Apr 2018",
    gpa: "CGPA: 3.619 / 4",
    specialisation: "Power and Robotics",
  },
  {
    school: "ITE College West",
    degree: "Higher Nitec in Electrical Engineering",
    period: "Jan 2014 – Apr 2016",
    gpa: "CGPA: 4 / 4",
  },
];

const Education = () => (
  <section className="section-padding bg-secondary/30">
    <div className="section-container">
      <AnimatedSection>
        <div className="accent-line mb-6" />
        <h2 className="section-title">Education</h2>
      </AnimatedSection>
      <div className="mt-8 space-y-4">
        {educationData.map((edu, i) => (
          <AnimatedSection key={edu.school} delay={0.1 * (i + 1)}>
            <div className="card-elevated max-w-xl">
              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {edu.school}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">{edu.degree}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">{edu.period}</p>
                  {edu.specialisation && (
                    <p className="text-muted-foreground text-xs mt-0.5">
                      Specialisation: {edu.specialisation}
                    </p>
                  )}
                  <p className="text-primary text-sm font-medium mt-1">{edu.gpa}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
