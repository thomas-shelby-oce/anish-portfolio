import React from 'react';
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <Fade direction="up" >
          <h2 className="text-center mb-4">About Me</h2>
          <div className="row">
            <div className="col-lg-4 text-center">
              {/* Placeholder for professional headshot */}
              <img src={process.env.PUBLIC_URL + "/Anish_Picture.jpg"} alt="Anish Gupta" className="img-fluid rounded-circle mb-3" />
            </div>
            <div className="col-lg-8">
              <p>I am a Software Engineer with 3 years of experience. While my primary focus and passion lies in Mobile Development in iOS and React Native, I also have experience in web development with React, JavaScript, and TypeScript. This combination of skills allows me to build comprehensive and consistent user experiences across both mobile and web platforms.</p>
              <p>My experience includes architecting new applications, managing DevOps pipelines, and improving application performance and stability. I am passionate about solving complex problems, creating intuitive user interfaces, and continuously learning new technologies to drive impactful projects as a well-rounded software developer.</p>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default About;