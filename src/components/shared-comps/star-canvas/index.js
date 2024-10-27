import React, { useRef, useEffect } from "react";

const StarryCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();

    const stars = [];
    const FPS = 60;
    const starCount = 100;
    const mouse = { x: 0, y: 0 };

    // Initialize stars with random positions and velocities
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 1,
        vx: Math.random() * 50 - 25,
        vy: Math.random() * 50 - 25,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";

      stars.forEach((star) => {
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fill();
      });

      // Optional: Reduce the black line drawing
      ctx.beginPath();
      stars.forEach((starI) => {
        ctx.moveTo(starI.x, starI.y);
        if (distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
        stars.forEach((starII) => {
          if (distance(starI, starII) < 150) {
            ctx.lineTo(starII.x, starII.y);
          }
        });
      });

      ctx.lineWidth = 0.02; // Make the lines thinner
      ctx.strokeStyle = "#000"; // Optional: Change to a lighter color or remove
      ctx.stroke();
    };

    const distance = (point1, point2) => {
      const xs = point2.x - point1.x;
      const ys = point2.y - point1.y;
      return Math.sqrt(xs * xs + ys * ys);
    };

    const update = () => {
      stars.forEach((star) => {
        star.x += star.vx / FPS;
        star.y += star.vy / FPS;
        if (star.x < 0 || star.x > canvas.width) star.vx = -star.vx;
        if (star.y < 0 || star.y > canvas.height) star.vy = -star.vy;
      });
    };

    const animate = () => {
      draw();
      update();
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      updateCanvasSize();
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
      }}
    />
  );
};

export default StarryCanvas;
