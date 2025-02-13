import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Motivation.css";
import motivation from "../assets/Motivation.png";

function Motivation() {
  
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