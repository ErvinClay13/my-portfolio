import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Education.css";
import educationBar75 from "../assets/educationBar75.png";
import educationBar100 from "../assets/educationBar100.png";

function Education() {
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
      className="eduContainer"
      initial={{ x: "-50%" }} // Start off-screen to the left
      animate={controls} // Controlled by scroll
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <h1>Education</h1>

      <div className="eduBox">
        <p className="eduPara">
          Governors State University <br />
          - Completed extensive coursework in Computer Science, with a few credits remaining for a Bachelor's degree. <br />
          -Completed multiple coding boot camps and self-taught projects. <br />
          -Completed mutliple courses in the computer Science Field through Udemy. <br />
          -Certificate Of Completion from the Odin Project. 
        </p>
      </div>

      <div className="EduBar">
        <img
          className="EduImg"
          src={educationBar100}
          alt="Education progress: 100%"
        />
        <img
          className="EduImg"
          src={educationBar75}
          alt="Education progress: 75%"
        />
      </div>
    </motion.div>
  );
}

export default Education;
