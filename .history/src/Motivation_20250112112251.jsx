import React from 'react'
import "./Motivation.css";
import educationBar75 from "../assets/educationBar75.png";

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
            <div className="EduBar">
                    <img className="EduImg" src={motivation} alt="" />
                  </div>
          </div>
        </>
      );
}

export default Motivation