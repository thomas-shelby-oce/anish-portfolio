import React, { useRef, useEffect } from 'react';

const MatrixBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()_+{\"<>?|[];',./`~"; // Meticulously re-written string literal
    const font_size = 24; // Increased font size
    const columns = canvas.width / font_size;
    const drops = [];

    const densityFactor = 0.12; // Increased density slightly

    for (let x = 0; x < columns; x++) {
      // Initialize drops at random positions within the screen height to make them immediately visible
      if (Math.random() < densityFactor) {
        drops[x] = Math.floor(Math.random() * (canvas.height / font_size)); 
      } else {
        drops[x] = -1; // Mark as inactive
      }
    }

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00BCD4"; // Blue characters
      ctx.font = font_size + "px arial";

      for (let i = 0; i < drops.length; i++) {
        if (drops[i] === -1) continue; // Skip inactive drops

        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        // Reset drop if it goes off screen, or randomly based on densityFactor
        if (drops[i] * font_size > canvas.height || Math.random() < 0.005) { // Increased chance of reset for sparsity
          if (Math.random() < densityFactor) { // Only reactivate if within density
            drops[i] = 0;
          } else {
            drops[i] = -1; // Deactivate
          }
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 80); // Slower animation for less density

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const newColumns = canvas.width / font_size;
      const oldDrops = [...drops]; // Copy current drops
      drops.length = newColumns; // Resize drops array

      for (let x = 0; x < newColumns; x++) {
        if (x < oldDrops.length) {
          drops[x] = oldDrops[x]; // Keep existing drops
        } else {
          if (Math.random() < densityFactor) {
            drops[x] = Math.floor(Math.random() * (canvas.height / font_size)); // Initialize new drops sparsely and visibly
          }
          else {
            drops[x] = -1;
          }
        }
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default MatrixBackground;