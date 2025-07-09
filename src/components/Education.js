
import React from 'react';
import { Fade } from "react-awesome-reveal";
import useMediaQuery from '../hooks/useMediaQuery';

const Education = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const educations = [
    {
      degree: "B.Tech in Information Technology",
      institution: "National Institute Of Technology Raipur",
      dates: "2022",
      details: "CPI: 9.13/10.0"
    },
    {
      degree: "High School",
      institution: "St. Francis Senior Secondary School Bilaspur",
      dates: "2004 - 2017",
      details: "88.6% in Class 12th | 9.2 CGPA in Class 10th"
    }
  ];

  const content = (
    <div className="container">
      <h2 className="text-center mb-4">Education</h2>
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">
            {educations.map((edu, index) => (
              <li key={index}>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>{edu.degree}</h4>
                    <p className="text-muted"><small>{edu.institution} | {edu.dates}</small></p>
                  </div>
                  <div className="timeline-body">
                    <p>{edu.details}</p>
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
    <section id="education" className="py-5 bg-dark">
      {isMobile ? content : <Fade direction="up" threshold={0.25}>{content}</Fade>}
    </section>
  );
}

export default Education;
