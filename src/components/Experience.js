
import React from 'react';

const Experience = () => {

  const experiences = [
    {
      title: "Software Engineer",
      company: "New Relic",
      dates: "Oct 2024 - Present",
      description: [
        "Owned and maintained the New Relic iOS App, built using SwiftUI, leading development initiatives and ensuring code quality.",
        "Led the architecture and development of the new New Relic Plus App, built entirely in SwiftUI, following CLEAN architectural principles.",
        "Managed DevOps pipelines for iOS and Android apps using Jenkins.",
        "Led the vision and development of a Deep Link Handler to manage Universal Links.",
        "Developed a POC for a React Native charts library, potentially reducing maintenance efforts by up to 50%."
      ]
    },
    {
      title: "Software Development Engineer - 2",
      company: "Urban Company (UrbanClap)",
      dates: "June 2022 - October 2024",
      description: [
        "Worked as an iOS and React Native Developer to maintain the in-house hybrid frontend platform framework: Orion.",
        "Independently solved the distribution of iOS Apps by building Jenkins CI/CD pipeline using Fastlane for uploading apps to TestFlight. Used Fastlane to write scripts for automating the archival, code signing and TestFlight upload process on AWS EC2 Mac Instance.",
        "Owned and maintained the iOS repositories of the Customer and Partner apps by building iOS platform-level capabilities, several product features using UIKit and API Integrations, and code reviews.",
        "Reduced app size by 15% by replacing the legacy code in iOS Repo having 3rd party frameworks like RestKit and Magical Records with in-house code for persistent storage using Core Data. Also, analyzed and removed the dead code from the iOS Repos.",
        "Migrated Xcode adhering to guidelines stated by Apple. Analyzed the new and deprecated features, fixed bugs, and conducted Bug Bash during the process to ensure a smooth release.",
        "Involved in Problem Solving for implementing Deeplinks and Push Notifications in iOS at Platform level.",
        "Worked on maintaining the stability of the UI and Rendering Engine of Orion by owning its repository in React Native. Also, developed platform-level features to be used by Backend Developers.",
        "Solved crashes in the iOS Apps and maintained Crash Free Users at 99.9%. Integrated error and performance tracking platforms Sentry and Firebase Crashlytics in the iOS, Android, and Web App.",
        "Developed core animations in components like Scroll Header, Toast etc. via React Native Animated and Reanimated.",
        "Worked closely with the Design Team for the approvals of UI Components and features.",
        "Brought down 99.1% of Microfrontend errors (from 80 lakhs to 7 thousand) solely and ensured its maintenance by smart alerting.",
        "Ensured platform stability by writing fresh Unit Tests for UI Components Repository in React Native using Jest."
      ]
    },
    {
      title: "Summer Internship",
      company: "Optum Global Solutions (UnitedHealth Group)",
      dates: "May 2021 - July 2021",
      description: [
        "Created a prototype of an Interoperable Healthcare Portal using FHIR (Fast Healthcare Interoperability Resources).",
        "Worked with Express.js framework to build APIs and React.js for the Frontend."
      ]
    }
  ];

  const content = (
    <div className="container">
      <h2 className="text-center mb-4">Experience</h2>
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">
            {experiences.map((exp, index) => (
              <li key={index}>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>{exp.title}</h4>
                    <p className="text-muted"><small>{exp.company} | {exp.dates}</small></p>
                  </div>
                  <div className="timeline-body">
                    <ul>
                      {exp.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-5 bg-dark">
       {content}
    </section>
  );
}

export default Experience;
