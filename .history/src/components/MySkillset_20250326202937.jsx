import "./MySkillset.css";
import cssLogo from "../assets/cssLogo.png";
import htmlLogo from "../assets/htmlLogo.png";
import reactLogo from "../assets/reactLogo.png";
import canvaLogo from "../assets/canvaLogo.png";
import nodeLogo from "../assets/nodeLogo.png";
import jsLogo from "../assets/jsLogo.png";
import javaLogo from "../assets/javaLogo.png";
import firebaseLogo from "../assets/firebaseLogo.png";



function MySkillset() {
    return (
        <>
            <div className="mySkillSetBox">
                <div>
                    <h1>Languages</h1>
                    <div className="languages">
                        <div><img className="jImg" src={jsLogo} alt="js" /></div>
                        <div><img className="jImg" src={javaLogo} alt="java" /></div>
                    </div>
                </div>
                <div>
                    <h1>Front-End</h1>
                    <div className="slideBody2">
                        <div className="slider2">
                            <div className="slide-track2">
                        <div className="slide2"><img className="imgSlide2" src={cssLogo} alt="css" /></div>
                        <div className="slide2"><img className="imgSlide2" src={htmlLogo} alt="html" /></div>
                        <div className="slide2"><img className="imgSlide2" src={reactLogo} alt="react" /></div>
                        <div className="slide2"><img className="imgSlide2" src={canvaLogo} alt="canva" /></div>

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
                <div>
                    <h1>Back-End</h1>
                    <div className="back-end">
                        <div><img src={nodeLogo} alt="node.js" /></div>
                        <div><img src={nodeLogo} alt="node.js" /></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MySkillset;