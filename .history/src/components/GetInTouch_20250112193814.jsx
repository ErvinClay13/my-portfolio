import "./GetInTouch.css";
import instaLogo from "../assets/instaLogo.png";
import facebookLogo from "../assets/facebookLogo.png";
import tiktokLogo from "../assets/tiktokLogo.png";
import twitterLogo from "../assets/twitterLogo.png";
import youTubeLogo from "../assets/youTubeLogo.png";
import ApeCode from "../assets/ApeCode.png";
import githubLogo from "../assets/githubLogo.png";

function GetInTouch() {
  return (
    <>
      <div id="connect"  className="gitContainer">
        <div><img className="apeCodeImg2" src={ApeCode} alt="" /></div>
        <h1 className="getInTouchHeading">Get In Touch!</h1>
        <div className="contactBox">
          <div className="item">
            <img src={instaLogo} alt="" />
          </div>
          <div className="item">
            <img src={facebookLogo} alt="" />
          </div>
          <div className="item">
            <img src={githubLogo} alt="" />
          </div>
          <div className="item">
            <img src={tiktokLogo} alt="" <a
                    href="https://github.com/ErvinClay13/Recipe"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a> />
          </div>
          <div className="item">
            <img src={twitterLogo} alt="" />
          </div>
          <div className="item">
            <img src={youTubeLogo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default GetInTouch;