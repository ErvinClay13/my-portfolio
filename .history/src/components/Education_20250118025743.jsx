// import React from "react";
// import "./Education.css";
// import educationBar75 from "../assets/educationBar75.png";
// import educationBar100 from "../assets/educationBar100.png";

// function Education() {
//   return (
//     <>
//       <div className="eduContainer">
//         <h1>Education</h1>
//         <div className="eduBox">
//           <p className="eduPara">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
//             accusamus facilis ratione voluptas quas, mollitia possimus quod
//             architecto esse illum aliquam nostrum est! Saepe, animi nihil
//             architecto officiis dignissimos labore.
//           </p>
//         </div>

//         <div className="EduBar">
//         <img className="EduImg" src={educationBar100} alt="" />

//         <img className="EduImg" src={educationBar75} alt="" />
//       </div>
//       </div>
//     </>
//   );
// }

// export default Education;






// import React, { useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import "./Education.css";
// import educationBar75 from "../assets/educationBar75.png";
// import educationBar100 from "../assets/educationBar100.png";

// function Education() {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     triggerOnce: false, // Trigger animation multiple times
//     threshold: 0.2, // Trigger when 20% of the container is visible
//   });

//   useEffect(() => {
//     if (inView) {
//       controls.start({ x: 0 }); // Move to the left
//     } else {
//       controls.start({ x: "50%" }); // Move back to the center
//     }
//   }, [controls, inView]);

//   return (
//     <motion.div
//       ref={ref}
//       className="eduContainer"
//       initial={{ x: "50%" }} // Start from the center-right
//       animate={controls} // Controlled by scroll
//       transition={{ type: "spring", stiffness: 100, damping: 20 }}
//     >
//       <h1>Education</h1>
//       <div className="eduBox">
//         <p className="eduPara">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
//           accusamus facilis ratione voluptas quas, mollitia possimus quod
//           architecto esse illum aliquam nostrum est! Saepe, animi nihil
//           architecto officiis dignissimos labore.
//         </p>
//       </div>

//       <div className="EduBar">
//         <img className="EduImg" src={educationBar100} alt="Education Progress 100%" />
//         <img className="EduImg" src={educationBar75} alt="Education Progress 75%" />
//       </div>
//     </motion.div>
//   );
// }

// export default Education;







// import React, { useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import "./Education.css";
// import educationBar75 from "../assets/educationBar75.png";
// import educationBar100 from "../assets/educationBar100.png";

// function Education() {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     triggerOnce: false, // Trigger animation multiple times
//     threshold: 0.2, // Trigger when 20% of the container is visible
//   });

//   useEffect(() => {
//     if (inView) {
//       controls.start({ x: 30 }); // Move to the default position
//     } else {
//       controls.start({ x: "-50%" }); // Move back to the left
//     }
//   }, [controls, inView]);

//   return (
//     <motion.div
//       ref={ref}
//       className="eduContainer"
//       initial={{ x: "-50%" }} // Start off-screen to the left
//       animate={controls} // Controlled by scroll
//       transition={{ type: "spring", stiffness: 100, damping: 20 }}
//     >
//       <h1>Education</h1>
//       <div className="eduBox">
//         <p className="eduPara">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
//           accusamus facilis ratione voluptas quas, mollitia possimus quod
//           architecto esse illum aliquam nostrum est! Saepe, animi nihil
//           architecto officiis dignissimos labore.
//         </p>
//       </div>

//       <div className="EduBar">
//         <img className="EduImg" src={educationBar100} alt="Education Progress 100%" />
//         <img className="EduImg" src={educationBar75} alt="Education Progress 75%" />
//       </div>
//     </motion.div>
//   );
// }

// export default Education;





.eduContainer {
  display: flex;
  flex-direction: column;
  margin-top: 350px;
  align-items: center;
  align-content: center;
  position: relative; /* Required for Framer Motion positioning */
  width: 100%; /* Ensure the container takes the full width */
  max-width: 1200px; /* Optional, for larger screens */
  left: 0; /* Initial position */
  transform: translateX(0); /* Ensure it aligns with Framer Motion */
}

.EduBar {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  gap: 100px;
  flex-wrap: wrap; /* Allow wrapping for smaller screens */
}

.EduImg {
  width: 200px;
  height: 100px;
  border-radius: 20px;
  box-shadow: -10px 1px 1px rgb(200, 255, 0);
}

.eduPara {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  height: auto;
  background-color: rgb(61, 60, 60);
  border-radius: 20px;
  border: solid 1px rgb(200, 255, 0);
  padding: 1.5rem;
  color: white;
  line-height: 1.6;
  text-shadow: rgb(200, 255, 0);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: justify;
}

.eduPara:hover {
  box-shadow: 0 0 20px rgb(200, 255, 0);
  transform: scale(1.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Responsive adjustments for tablets */
@media (max-width: 768px) {
  .eduContainer {
    margin-top: 200px; /* Adjust spacing */
    padding: 0 1rem; /* Add horizontal padding */
  }

  .EduBar {
    gap: 50px; /* Reduce gap between elements */
  }

  .EduImg {
    width: 150px; /* Scale down images */
    height: 75px;
  }

  .eduPara {
    padding: 1rem; /* Adjust padding */
    font-size: 0.9rem; /* Reduce text size */
  }
}

/* Responsive adjustments for mobile devices */
@media (max-width: 480px) {
  .eduContainer {
    margin-top: 100px; /* Further adjust spacing */
  }

  .EduBar {
    flex-direction: column; /* Stack elements vertically */
    gap: 20px; /* Reduce gap further */
  }

  .EduImg {
    width: 120px; /* Scale down images */
    height: 60px;
  }

  .eduPara {
    padding: 0.75rem; /* Further adjust padding */
    font-size: 0.8rem; /* Reduce text size more */
  }
}
















