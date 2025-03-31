// Importing React and the useEffect hook
import React, { useEffect } from "react";

// Importing Framer Motion for animation handling
import { motion, useAnimation } from "framer-motion";

// Importing hook to detect when an element is in the viewport
import { useInView } from "react-intersection-observer";

// Importing component-specific CSS
import "./Motivation.css";

// Importing motivation image asset
import motivation from "../assets/Motivation.png";

// Functional component for the Motivation section
function Motivation() {
  // Controls animation behavior
  const controls = useAnimation();

  // Detect if the component is visible in the viewport
  const [ref, inView] = useInView({
    triggerOnce: false, // Animation can be triggered multiple times
    threshold: 0.2, // Animation triggers when 20% of the element is in view
  });

  // Side effect to handle animation based on scroll position
  useEffect(() => {
    if (inView) {
      controls.start({ x: 30 }); // Animate into view (right position)
    } else {
      controls.start({ x: "-50%" }); // Animate out of view (off-screen to the left)
    }
  }, [controls, inView]);

  return (
    // Animated container for the motivation content
    <motion.div
      ref={ref} // Attach ref for intersection observer
      className="motivationContainer"
      initial={{ x: "-50%" }} // Initial position off-screen to the left
      animate={controls} // Animation controlled by scroll visibility
      transition={{ type: "spring", stiffness: 100, damping: 20 }} // Smooth spring transition
    >
      {/* Section heading */}
      <h1>Motivation</h1>

      {/* Text content box */}
      <div className="motivationBox">
        <p className="motivationPara">
          I love the ability to turn an idea into a functional, visually
          engaging product—whether it's a sleek portfolio, a business website,
          or a dynamic web app. Web development empowers me to solve real
          problems while expressing creativity through UI/UX design and modern
          frameworks.
        </p>
      </div>

      {/* Image container for visual representation */}
      <div className="motivationBar">
        <img className="motivationImg" src={motivation} alt="Motivation" />
      </div>
    </motion.div>
  );
}

// Exporting the component for use in other parts of the app
export default Motivation;
