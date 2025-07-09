import React, { useState, useEffect } from 'react';
// import { Fade } from 'react-awesome-reveal'; // Uncomment if using Fade

const Hero = () => {
  const fullText = "Mobile & Frontend Engineer";
  const typingSpeed = 100; // milliseconds per character

  // Keep track of the index in state
  const [currentIndex, setCurrentIndex] = useState(0);

  // The typedText is derived from the current index
  const typedText = fullText.substring(0, currentIndex);

  useEffect(() => {
    let intervalId;

    if (currentIndex < fullText.length) {
      intervalId = setInterval(() => {
        // Use functional update for setCurrentIndex to ensure latest state
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, typingSpeed);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [currentIndex, fullText, typingSpeed]); // Dependencies for useEffect

  return (
    <section id="hero" className="d-flex flex-column justify-content-center align-items-center text-center">
      {/* Assuming Fade is a valid component. Uncomment if used. */}
      {/* <Fade direction="down"> */}
        <h1>ANISH GUPTA</h1>
      {/* </Fade> */}
      {/* <Fade direction="up" delay={500}> */}
        <h2>{typedText}</h2>
      {/* </Fade> */}
      {/* <Fade direction="up" delay={1000}> */}
        <div className="container mt-4">
          <p className="lead w-75 mx-auto">A passionate Software Engineer with a primary focus on Mobile Development using iOS and React Native. I thrive on building scalable, efficient applications and creating intuitive user experiences across platforms.</p>
        </div>
      {/* </Fade> */}
    </section>
  );
}

export default Hero;