
import React from 'react';
import { Fade } from "react-awesome-reveal";

const Skills = () => {
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: ["Swift", "C++", "JavaScript"]
    },
    {
      name: "iOS Development",
      skills: ["Xcode", "SwiftUI", "UIKit", "Storyboarding", "SPM", "CocoaPods", "Core Data", "Concurrency"]
    },
    {
      name: "Frameworks & Libraries",
      skills: ["React Native", "React.js", "TypeScript", "Node.js", "Express.js", "Jest", "Reanimated"]
    },
    {
      name: "Automation",
      skills: ["Jenkins", "Fastlane", "Shell scripts"]
    },
    {
      name: "Database",
      skills: ["MongoDB", "MySQL"]
    },
    {
      name: "Others",
      skills: ["Git", "Data Structures", "Algorithms", "Operating Systems", "OOPS"]
    }
  ];

  return (
    <section id="skills" className="py-5">
      <div className="container">
        <Fade direction="up">
          <h2 className="text-center mb-5">Skills</h2>
          {skillCategories.map((category, index) => (
            <div key={index} className="mb-4">
              <h4 className="text-center mb-3">{category.name}</h4>
              <div className="d-flex flex-wrap justify-content-center">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item bg-dark text-white rounded-pill px-3 py-2 m-2 shadow-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </section>
  );
}

export default Skills;
