import "./AboutMe.css";
import MyImg2 from "../assets/MyImg2.png";
import resume from "../assets/WebDevResumeNew.pdf";
import robot from "../assets/robot.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function AboutMe() {
  const [text] = useTypewriter({
    words: ["Web Developer", "Web Designer", "Front-End Developer"],
    loop: true,
  });

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
            <div className="robotContainer">
              <div className="robotImg">
                <img className="robot1" src={robot} alt="robot image" />
              </div>
            </div>
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
            I specialize in using HTML, CSS, and JavaScript to bring ideas to
            life. I also have experience working with frameworks like React to build
            interactive applications.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
