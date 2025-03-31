// Importing CSS for styling
import "./MyTechnologies.css";

// Importing logos for various development tools and technologies
import babelLogo from "../assets/babelLogo.png";
import gitLogo from "../assets/gitLogo.png";
import githubLogo from "../assets/githubLogo.png";
import npmLogo from "../assets/npmLogo.png";
import vsCodeLogo from "../assets/vsCodeLogo.png";
import viteLogo from "../assets/viteLogo.png";
import unityLogo from "../assets/unityLogo.png"; // (Imported but not used)
import mayaLogo from "../assets/mayaLogo.png";
import zBrushLogo from "../assets/zBrushLogo.png"; // (Imported but not used)
import afterEffectsLogo from "../assets/afterEffectsLogo.png";

// Functional component to display the user's tools & technologies
function MyTechnologies() {
  return (
    <>
      {/* Section heading */}
      <div id="skills" className="techHeading">
        <h1>Technologies</h1>
        <h1>Tools</h1>
      </div>

      {/* Scrolling image slider container */}
      <div className="slideBody">
        <div className="slider">
          <div className="slide-track">
            {/* Each slide contains a tool logo */}
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
              <img className="imgSlide" src={afterEffectsLogo} alt="After Effects" />
            </div>

            {/* Duplicates to create infinite scrolling animation */}
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
              <img className="imgSlide" src={afterEffectsLogo} alt="After Effects" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Exporting the component so it can be used elsewhere in the app
export default MyTechnologies;
