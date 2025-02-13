import React from "react";
import Heading from "./components/Heading";
import AboutMe from "./components/AboutMe";
import GetInTouch from "./components/GetInTouch";
import MySkillset from "./components/MySkillset";
// import MoreAboutMe from "./MoreAboutMe.jsx";
import MyWork from "./components/MyWork";
// import Footer from "./Footer.jsx";
import MyTechnologies from "./components/MyTechnologies";
import Carousel from "./components/MyWork";
import Education from "./components/Education";
self
// import MousePage from "./MousePage.jsx";


function App() {
  return (
    <>
    
      <Heading />
      <AboutMe />
      <GetInTouch />
      <MyWork />
      <MyTechnologies />
      <MySkillset />
      <Education />
      {/* <GetInTouch />
      
      
      <MoreAboutMe />
      <Education />
      <Footer /> */}
      
    </>
  );
}

export default App;
