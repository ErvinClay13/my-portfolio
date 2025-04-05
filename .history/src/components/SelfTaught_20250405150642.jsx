// Importing React and the useEffect hook
import React, { useEffect } from "react";

// Importing the component-specific CSS file
import "./SelfTaught.css";

// Importing Framer Motion for animations
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Importing image assets related to self-taught journey
import selfTaught from "../assets/selfTaught1.png";
import selfTaught2 from "../assets/selfTaught2.png";

// Functional component for the Self Taught section
function SelfTaught() {
  // Animation controller from Framer Motion
  const controls = useAnimation();

  // Hook to determine if the component is currently visible on the screen
  const [ref, inView] = useInView({
    triggerOnce: false, // Allow repeated triggering
    threshold: 0.2,      // Trigger animation when 20% of component is visible
  });

  // Effect to update animation based on visibility
  useEffect(() => {
    if (inView) {
      controls.start({ x: 0 }); // Animate to original position when in view
    } else {
      controls.start({ x: "50%" }); // Move to the right when out of view
    }
  }, [controls, inView]);

  return (
    // Animated container for the entire Self Taught section
    <motion.div
      ref={ref} // Element to be observed by useInView
      className="selfContainer"
      initial={{ x: "50%" }} // Start off-screen to the right
      animate={controls}     // Animate using controls
      transition={{ type: "spring", stiffness: 100, damping: 20 }} // Smooth spring animation
    >
      {/* Section heading */}
      <h1>Self Taught</h1>

      {/* Paragraph describing your journey */}
      <div className="selfBox">
        <p className="selfPara">
          My journey into web development began with curiosity and a drive to
          learn, which quickly evolved into a love for crafting dynamic and
          responsive designs. As a self-starter, I thrive on solving problems
          and continuously expanding my skills to stay current with emerging
          technologies. I'm excited to contribute my creativity and technical
          skills to bring innovative projects to life while growing within the
          ever-evolving tech industry.
        </p>
      </div>

      {/* Visual representation of self-taught progress */}
      <div className="selfBar">
        <img
          className="selfImg"
          src={selfTaught2}
          alt="Self-Taught Progress 1"
        />
        <img
          className="selfImg"
          src={selfTaught}
          alt="Self-Taught Progress 2"
        />
      </div>
    </motion.div>
  );
}

// Exporting the component so it can be used in other parts of the app
export default SelfTaught;
