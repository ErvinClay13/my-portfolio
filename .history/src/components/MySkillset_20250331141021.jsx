// Importing the CSS file for styling
import "./MySkillset.css";

// Importing logo images for various technologies
import cssLogo from "../assets/cssLogo.png";
import htmlLogo from "../assets/htmlLogo.png";
import reactLogo from "../assets/reactLogo.png";
import canvaLogo from "../assets/canvaLogo.png";
import nodeLogo from "../assets/nodeLogo.png";
import jsLogo from "../assets/jsLogo.png";
import javaLogo from "../assets/javaLogo.png";
import firebaseLogo from "../assets/firebaseLogo.png";
import typescriptLogo from "../assets/typescriptLogo.png";

// Functional component for displaying skillsets
function MySkillset() {
    return (
        <>
            {/* Main container for the skillset section */}
            <div className="mySkillSetBox">

                {/* Languages Section */}
                <div>
                    <h1>Languages</h1>
                    <div className="languages">
                        {/* Displaying JavaScript, Java, and TypeScript logos */}
                        <div><img className="jImg" src={jsLogo} alt="js" /></div>
                        <div><img className="jImg" src={javaLogo} alt="java" /></div>
                        <div><img className="jImg" src={typescriptLogo} alt="typeScript" /></div>
                    </div>
                </div>

                {/* Front-End Section with horizontal scrolling animation */}
                <div>
                    <h1>Front-End</h1>
                    <div className="slideBody2">
                        <div className="slider2">
                            <div className="slide-track2">
                                {/* Repeating logos to create a smooth infinite scrolling effect */}
                                <div className="slide2"><img className="imgSlide2" src={cssLogo} alt="css" /></div>
                                <div className="slide2"><img className="imgSlide2" src={htmlLogo} alt="html" /></div>
                                <div className="slide2"><img className="imgSlide2" src={reactLogo} alt="react" /></div>
                                <div className="slide2"><img className="imgSlide2" src={canvaLogo} alt="canva" /></div>

                                {/* Duplicate slides to ensure the infinite scroll illusion works smoothly */}
                                <div className="slide2"><img className="imgSlide2" src={cssLogo} alt="css" /></div>
                                <div className="slide2"><img className="imgSlide2" src={htmlLogo} alt="html" /></div>
                                <div className="slide2"><img className="imgSlide2" src={reactLogo} alt="react" /></div>
                                <div className="slide2"><img className="imgSlide2" src={canvaLogo} alt="canva" /></div>

                                <div className="slide2"><img className="imgSlide2" src={cssLogo} alt="css" /></div>
                                <div className="slide2"><img className="imgSlide2" src={htmlLogo} alt="html" /></div>
                                <div className="slide2"><img className="imgSlide2" src={reactLogo} alt="react" /></div>
                                <div className="slide2"><img className="imgSlide2" src={canvaLogo} alt="canva" /></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back-End Section */}
                <div>
                    <h1>Back-End</h1>
                    <div className="back-end">
                        {/* Displaying logos for Node.js and Firebase */}
                        <div><img src={nodeLogo} alt="node.js" /></div>
                        <div><img src={firebaseLogo} alt="firebase" /></div>
                    </div>
                </div>
            </div>
        </>
    );
}

// Exporting the component so it can be used elsewhere in the app
export default MySkillset;
