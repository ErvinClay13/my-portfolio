// Importing CSS for styling the component
import "./GetInTouch.css";

// Importing social media and brand logo assets
import instaLogo from "../assets/instaLogo.png";
import facebookLogo from "../assets/facebookLogo.png";
import tiktokLogo from "../assets/tiktokLogo.png";
import twitterLogo from "../assets/twitterLogo.png";
import youTubeLogo from "../assets/youTubeLogo.png";
import ApeCode from "../assets/ApeCode.png";
import githubLogo from "../assets/githubLogo.png";

// Functional component to display social media links
function GetInTouch() {
  return (
    <>
      {/* Main container with ID for anchor navigation */}
      <div id="connect" className="gitContainer">

        {/* Branding image at the top (ApeCode logo) */}
        <div>
          <img className="apeCodeImg2" src={ApeCode} alt="" />
        </div>

        {/* Section heading */}
        <h1 className="getInTouchHeading">Where to find me</h1>

        {/* Container for social media icons */}
        <div className="contactBox">
          {/* Instagram link */}
          <div className="item">
            <a
              href="https://www.instagram.com/mr_ape_code/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instaLogo} alt="Instagram Profile" />
            </a>
          </div>

          {/* Facebook link */}
          <div className="item">
            <a
              href="https://www.facebook.com/profile.php?id=61571840894987"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookLogo} alt="Facebook Profile" />
            </a>
          </div>

          {/* GitHub link */}
          <div className="item">
            <a
              href="https://github.com/ErvinClay13"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubLogo} alt="GitHub Profile" />
            </a>
          </div>

          {/* TikTok link */}
          <div className="item">
            <a
              href="https://www.tiktok.com/@mr..ape.code?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tiktokLogo} alt="TikTok Profile" />
            </a>
          </div>

          {/* Twitter (X) link */}
          <div className="item">
            <a
              href="https://x.com/Mr_Ape_Code"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitterLogo} alt="Twitter Profile" />
            </a>
          </div>

          {/* YouTube link */}
          <div className="item">
            <a
              href="https://www.youtube.com/@apecode-88"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youTubeLogo} alt="YouTube Channel" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

// Exporting the component for use in other parts of the app
export default GetInTouch;
