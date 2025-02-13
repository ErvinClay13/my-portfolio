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
      
      return (
        <>
          <div className="motivationContainer">
            <h1>Motivation</h1>
            <div className="motivationBox">
              <p className='motivationPara'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                accusamus facilis ratione voluptas quas, mollitia possimus quod
                architecto esse illum aliquam nostrum est! Saepe, animi nihil
                architecto officiis dignissimos labore.
              </p>
            </div>
            <div className="motivationBar">
                    <img className="motivationImg" src={motivation} alt="" />
                  </div>
          </div>
        </>
      );
}

export default Motivation