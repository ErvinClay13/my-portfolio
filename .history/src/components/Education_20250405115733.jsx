// // Importing React and required hooks
// import React, { useEffect } from "react";

// // Importing Framer Motion for animation
// import { motion, useAnimation } from "framer-motion";

// // Importing hook to detect when component is in viewport
// import { useInView } from "react-intersection-observer";

// // Importing custom CSS for styling
// import "./Education.css";

// // Importing images to visually represent education progress
// import educationBar75 from "../assets/educationBar75.png";
// import educationBar100 from "../assets/educationBar100.png";

// // Functional component definition
// function Education() {
//   // Animation controller for Framer Motion
//   const controls = useAnimation();

//   // Hook to observe when component is in the viewport
//   const [ref, inView] = useInView({
//     triggerOnce: false, // Re-trigger animation every time it's in view
//     threshold: 0.2, // Trigger when 20% of the component is visible
//   });

//   // Side effect to start or reset animation based on scroll position
//   useEffect(() => {
//     if (inView) {
//       controls.start({ x: 30 }); // Animate to the right (visible position)
//     } else {
//       controls.start({ x: "-50%" }); // Animate off-screen to the left
//     }
//   }, [controls, inView]);

//   return (
//     // Animated container for the whole Education section
//     <motion.div
//       ref={ref} // Reference for viewport detection
//       className="eduContainer"
//       initial={{ x: "-50%" }} // Start off-screen
//       animate={controls} // Animate based on scroll/viewport
//       transition={{ type: "spring", stiffness: 100, damping: 20 }} // Smooth spring animation
//     >
//       <h1>Education</h1>

//       {/* Education description box */}
//       <div className="eduBox">
//         <p className="eduPara">
//           Governors State University <br />
//           - Completed extensive coursework in Computer Science, with a few credits remaining for a Bachelor's degree. <br />
//           - Completed multiple coding boot camps and self-taught projects. <br />
//           - Completed multiple courses in the Computer Science field through Udemy. <br />
//           - Certificate Of Completion from the Odin Project.
//         </p>
//       </div>

//       {/* Education progress bars */}
//       <div className="EduBar">
//         <img
//           className="EduImg"
//           src={educationBar100}
//           alt="Education progress: 100%"
//         />
//         <img
//           className="EduImg"
//           src={educationBar75}
//           alt="Education progress: 75%"
//         />
//       </div>
//     </motion.div>
//   );
// }

// // Exporting component for use elsewhere in the app
// export default Education;








import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Education.css";

import educationBar75 from "../assets/educationBar75.png";
import educationBar100 from "../assets/educationBar100.png";
import bgImage from "../assets/apeCodeBackground.png"; // optional: for background fallback

function Education() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ x: 30 });
    } else {
      controls.start({ x: "-50%" });
    }
  }, [controls, inView]);

  return (
    <div className="eduContainer">
      {/* Fake fixed background div */}
      <div className="eduBackground" />

      {/* Animated content */}
      <motion.div
        ref={ref}
        className="eduContent"
        initial={{ x: "-50%" }}
        animate={controls}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <h1>Education</h1>
        <div className="eduBox">
          <p className="eduPara">
            Governors State University <br />
            - Completed extensive coursework in Computer Science... <br />
            - Coding boot camps, self-taught projects, and Udemy courses. <br />
            - Certificate Of Completion from the Odin Project.
          </p>
        </div>

        <div className="EduBar">
          <img className="EduImg" src={educationBar100} alt="100% progress" />
          <img className="EduImg" src={educationBar75} alt="75% progress" />
        </div>
      </motion.div>
    </div>
  );
}

export default Education;
