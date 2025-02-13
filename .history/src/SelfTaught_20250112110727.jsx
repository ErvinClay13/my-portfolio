import React from 'react'
import "./SelfTaught.css";
import selfTaught1 from "../assets/selfTaught1.png";
import educationBar100 from "../assets/educationBar100.png";


function SelfTaught() {
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
                    <img className="selfImg" src={selfTaught} alt="" />
            
                    <img className="selfImg2" src={selfTaught2} alt="" />
                  </div>
          </div>
        </>
      );

}

export default SelfTaught