import "./MyTechnologies.css";
import babelLogo from "../assets/babelLogo.png";
import gitLogo from "../assets/gitLogo.png";
import githubLogo from "../assets/githubLogo.png";
import npmLogo from "../assets/npmLogo.png";
import vsCodeLogo from "../assets/vsCodeLogo.png";
import viteLogo from "../assets/viteLogo.png";
import unityLogo from "../assets/unityLogo.png";
import mayaLogo from "../assets/mayaLogo.png";
import zBrushLogo from "../assets/zBrushLogo.png";
import afterEffectsLogo from "../assets/afterEffectsLogo.png";

function MyTechnologies() {
  return (
    <>
        <div id="skills" className="techHeading">
            <h1>Technologies</h1>
            <h1>Tools</h1>
        </div>
        <div className="slideBody">
          <div className="slider">
            <div className="slide-track">
              <div className="slide">
                <img className="imgSlide" src={babelLogo} alt="Babel" />
              </div>
              <div className="slide">
                <img className="imgSlide" src={gitLogo} alt="git" />
              </div>
              <div className="slide">
                <img className="imgSlide" src={githubLogo} alt="github" />
              </div>
              <div className="slide">
                <img className="imgSlide" src={npmLogo} alt="npm" />
              </div>
              <div className="slide">
                <img className="imgSlide" src={vsCodeLogo} alt="vsCode" />
              </div>
              <div className="slide">
                <img className="imgSlide" src={viteLogo} alt="Vite" />
              </div>
              <div className="slide">
                <img className="imgSlide" src={mayaLogo} alt="Maya" />
              </div>
              <div className="slide">
                <img
                  className="imgSlide" src={afterEffectsLogo} alt="After Effects"/>
              </div>

              <div className="slide">
                <img className="imgSlide" src={babelLogo} alt="Babel" />
              </div>
              <div className="slide">
                <img className="imgSlide" src={gitLogo} alt="git" />
              </div>
              <div className="slide">
                <img className="imgSlide" src={githubLogo} alt="github" />
              </div>
              <div className="slide">
                <img className="imgSlide" src={npmLogo} alt="npm" />
              </div>
              <div className="slide">
                <img className="imgSlide" src={vsCodeLogo} alt="vsCode" />
              </div>
              <div className="slide">
                <img className="imgSlide" src={viteLogo} alt="Vite" />
              </div>
              <div className="slide">
                <img className="imgSlide" src={mayaLogo} alt="Maya" />
              </div>
               <div className="slide">
                <img className="imgSlide" src={babelLogo} alt="Babel" />
              </div>
              <div className="slide">
                <img className="imgSlide" src={gitLogo} alt="git" />
              </div>
              <div className="slide">
                <img className="imgSlide" src={githubLogo} alt="github" />
              </div>
              <div className="slide">
                <img className="imgSlide" src={npmLogo} alt="npm" />
              </div>
              <div className="slide">
                <img className="imgSlide" src={afterEffectsLogo}alt="After Effects" />
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
    </>
  );
}

export default MyTechnologies;
