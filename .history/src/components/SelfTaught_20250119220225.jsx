import React, { useEffect } from "react";
import "./SelfTaught.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import selfTaught from "../assets/selfTaught1.png";
import selfTaught2 from "../assets/selfTaught2.png";

function SelfTaught() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ x: 0 });
    } else {
      controls.start({ x: "50%" });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="selfContainer"
      initial={{ x: "50%" }}
      animate={controls}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <h1>Self Taught</h1>
      <div className="selfBox">
        <p className="selfPara">
          My journey into web development began with curiosity and a drive to
          learn, which quickly evolved into a love for crafting dynamic and
          responsive designs. As a self-starter, I thrive on solving
            problems and continuously expanding my skills to stay current with
            emerging technologies. I'm excited to contribute my creativity and
            technical skills to bring innovative projects to life while growing
            within the ever-evolving tech industry.
        </p>
      </div>

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

export default SelfTaught;
