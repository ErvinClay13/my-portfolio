import React from 'react'
import "./SelfTaught.css";
import { useInView } from "react-intersection-observer";
import selfTaught from "../assets/selfTaught1.png";
import selfTaught2 from "../assets/selfTaught2.png";


function SelfTaught() {
  const controls = useAnimation();
  
    return (
        <>
          <div className="selfContainer">
            <h1>Self Taught</h1>
            <div className="selfBox">
              <p className='selfPara'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                accusamus facilis ratione voluptas quas, mollitia possimus quod
                architecto esse illum aliquam nostrum est! Saepe, animi nihil
                architecto officiis dignissimos labore.
              </p>
            </div>

            <div className="selfBar">
                    <img className="selfImg" src={selfTaught2} alt="" />
            
                    <img className="selfImg" src={selfTaught} alt="" />
                  </div>
          </div>
        </>
      );

}

export default SelfTaught