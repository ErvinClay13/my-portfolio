import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Motivation.css";
import motivation from "../assets/Motivation.png";

function Motivation() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger animation multiple times
    threshold: 0.2, // Trigger when 20% of the container is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start({ x: 30 }); // Move to the default position
    } else {
      controls.start({ x: "-50%" }); // Move back to the left
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="motivationContainer"
      initial={{ x: "-50%" }} // Start off-screen to the left
      animate={controls} // Controlled by scroll
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <h1>Motivation</h1>
      <div className="motivationBox">
        <p className="motivationPara">
        I love the ability to turn an idea into a functional, visually engaging product—whether it's a sleek portfolio, a business website, or a dynamic web app. Web development empowers me to solve real problems while expressing creativity through UI/UX design and modern frameworks.
        </p>
      </div>
      <div className="motivationBar">
        <img className="motivationImg" src={motivation} alt="Motivation" />
      </div>
    </motion.div>
  );
}

export default Motivation;