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
              <p>I am a Software Engineer with 4 years of experience across mobile and web development. My strongest area is mobile development, where I work equally across native iOS and React Native, and I also bring strong frontend expertise with React, JavaScript, and TypeScript for web and cross-platform products.</p>
              <p>My recent work includes architecting mobile applications, building native and shared data visualization features, reusing web visualization components on mobile, managing DevOps pipelines, and applying AI-assisted development workflows with Claude, Gemini, GPT, and MCP-based tooling. I enjoy turning complex platform problems into reliable, intuitive user experiences across platforms.</p>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default About;
