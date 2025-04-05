//importing styles and assets
import "./AboutMe.css";
import "./"
import MyImg2 from "../assets/MyImg2.png";
import resume from "../assets/WebDevResume-ErvinClay.pdf";
import robot from "../assets/robot.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";

//Functional commponent definition
function AboutMe() {
//Typewriter hook to animate text
  const [text] = useTypewriter({
    words: ["Web Developer", "Web Designer", "Front-End Developer"],
    loop: true,
  });

  //JSX return statement for component UI
  return (
    <>
      <div id="about" className="aboutContainer">
        <div className="profileImgContainer">
          <h1 className="aboutMeHeading2">Ervin Clay Jr</h1>
          <img className="myProfile" src={MyImg2} alt="" />
          <a href={resume} target="_blank" rel="noopener noreferrer">
            <button className="resumeBtn">RESUME</button>
          </a>
        </div>

        <div className="ParaBox">
          <div className="contentContainer">

            {/* Robot image section */}
            <div className="robotContainer">
              <div className="robotImg">
                <img className="robot1" src={robot} alt="robot image" />
              </div>
            </div>

            {/* Typewriter effect text */}
            <div className="typewriterContainer">
              <h1 className="typeText" style={{ margin: "10px" }}>
                I'm a <span style={{ color: "rgb(200, 255, 0)" }}>{text}</span>
                <Cursor />
              </h1>
            </div>
          </div>
          <p className="aboutMePara">
            "I am a self-taught, entry-level front-end web developer with a
            passion for creating visually appealing and user-friendly websites.
            I specialize in using HTML, CSS, JavaScript, React.js, React Native 
            and more to bring ideas to life. I also have experience working with 
            frameworks like React to build interactive applications."
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
