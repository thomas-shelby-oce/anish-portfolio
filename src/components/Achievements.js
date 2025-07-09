import React from 'react';
import { Fade } from "react-awesome-reveal";

const Achievements = () => {
  const achievements = [
    {
      platform: "Codeforces",
      details: "Specialist, Highest Rating 1583",
      handle: "thomas_shelby_oce",
      url: "https://codeforces.com/profile/thomas_shelby_oce"
    },
    {
      platform: "Codechef",
      details: "4 star, Highest Rating 1905",
      handle: "anish_gupta",
      url: "https://www.codechef.com/users/a_nish_gupta"
    },
    {
      platform: "LeetCode",
      details: "Solved 500+ questions, Highest Rating 1795",
      handle: "thomas_shelby",
      url: "https://leetcode.com/thomas_shelby/"
    }
  ];

  return (
    <section id="achievements" className="py-5 bg-dark">
      <div className="container">
        <Fade direction="up">
          <h2 className="text-center mb-4">Coding Platform Handles</h2>
          <div className="row">
            {achievements.map((item, index) => (
              <div key={index} className="col-md-4 mb-3">
                <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <div className="card bg-light text-dark h-100 shadow-sm">
                    <div className="card-body text-center">
                      <h5 className="card-title">{item.platform}</h5>
                      <p className="card-text">{item.details}</p>
                      <p className="card-text"><small className="text-muted">{item.handle}</small></p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default Achievements;