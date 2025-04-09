// Importing React
import React from "react";

// Importing styles for this component
import "./MyWork.css";

// Importing Swiper components and styles
import { Swiper, SwiperSlide } from "swiper/react";

// Core Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination"; 
import "swiper/css/navigation";

// Importing Swiper modules for special effects and functionality
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

// Importing images for projects
import Library from "../MyWork/Library-img.png";
import PregnancyTracker from "../MyWork/pregnanctTracker-img.png";
import RockPaperScissors from "../MyWork/RockPaperScissors-img.png";
import VogueWebsite from "../MyWork/VogueWebsite-img.png";
import TicTacToe from "../MyWork/TicTacToe-img.png";
import RecipePage from "../MyWork/recipePage-img.png";
import InteractiveRating from "../MyWork/interactive-rating.png";
import AllieResumeBuilder from "../MyWork/AllieResumeScreenshot.png";
import MemoGlow from "../MyWork/MemoGlowImg.png";
import 

// Functional component to display all your project work in a Swiper carousel
function MyWork() {
  return (
    <div className="workContainer">
      {/* Section heading */}
      <div className="workHead">
        <h1 className="myWorkHeader">My Work</h1>
      </div>

      {/* Swiper carousel wrapper */}
      <div id="work" className="carouselContainer">
        <Swiper
          effect={"coverflow"} // 3D slide effect
          grabCursor={true} // Makes the cursor a grab hand
          centeredSlides={true} // Center the active slide
          loop={true} // Enables infinite loop mode
          slidesPerView={3} // Number of slides visible
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }} // Enable clickable pagination
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]} // Modules used
          className="swiper_container"
        >

          {/* Each SwiperSlide contains a project */}
          <SwiperSlide>
            <div className="wrapper">
              <img className="workImg" src={PregnancyTracker} alt="Pregnancy Tracker" />
              <div className="slideContent">
                <h1>Pregnancy Tracker</h1>
                <p>Tracks a woman's pregnancy after entering last menstrual.</p>
                {/* Live site link */}
                <button className="gitLink">
                  <a href="https://ervinclay13.github.io/Pregnancy-Tracker/" target="_blank" rel="noopener noreferrer">
                    My Link
                  </a>
                </button>
                {/* GitHub code link */}
                <button className="gitLink">
                  <a href="https://github.com/ErvinClay13/Pregnancy-Tracker" target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          </SwiperSlide>

          {/* Repeat this pattern for all other projects */}
          <SwiperSlide>
            <div className="wrapper">
              <img className="workImg" src={AllieResumeBuilder} alt="Allie AI Resume Builder" />
              <div className="slideContent">
                <h1>AI Allie Resume Builder</h1>
                <p>AI Driven Resume Builder.</p>
                <button className="gitLink">
                  <a href="https://ervinclay13.github.io/Allie-AI-Resume/" target="_blank" rel="noopener noreferrer">
                    My Link
                  </a>
                </button>
                <button className="gitLink">
                  <a href="https://github.com/ErvinClay13/Allie-AI-Resume/tree/main/allie-resume-ai" target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="wrapper">
              <img className="workImg" src={MemoGlow} alt="Memo Glow" />
              <div className="slideContent">
                <h1>Memo Glow</h1>
                <p>Drag & Drop Glowing Sticky Notes</p>
                <button className="gitLink">
                  <a href="https://ervinclay13.github.io/Memo-Glow/" target="_blank" rel="noopener noreferrer">
                    My Link
                  </a>
                </button>
                <button className="gitLink">
                  <a href=" https://github.com/ErvinClay13/Memo-Glow" target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="wrapper">
              <img className="workImg" src={Library} alt="Library" />
              <div className="slideContent">
                <h1>Library</h1>
                <p>An online library application for book lovers.</p>
                <button className="gitLink">
                  <a href="https://ervinclay13.github.io/Library/" target="_blank" rel="noopener noreferrer">
                    My Link
                  </a>
                </button>
                <button className="gitLink">
                  <a href="https://github.com/ErvinClay13/Library" target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="wrapper">
              <img className="workImg" src={TicTacToe} alt="Tic Tac Toe" />
              <div className="slideContent">
                <h1>Tic Tac Toe</h1>
                <p>A fun game of strategy for two players.</p>
                <button className="gitLink">
                  <a href="https://ervinclay13.github.io/Tic-Tac-Toe/" target="_blank" rel="noopener noreferrer">
                    My Link
                  </a>
                </button>
                <button className="gitLink">
                  <a href="https://github.com/ErvinClay13/Tic-Tac-Toe" target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="wrapper">
              <img className="workImg" src={VogueWebsite} alt="Vogue Website" />
              <div className="slideContent">
                <h1>Vogue Website</h1>
                <p>A full website to display the Vogue-4Me-360 products and services.</p>
                <button className="gitLink">
                  <a href="https://ervinclay13.github.io/Vogue360-website/" target="_blank" rel="noopener noreferrer">
                    My Link
                  </a>
                </button>
                <button className="gitLink">
                  <a href="https://github.com/ErvinClay13/Vogue360-website" target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="wrapper">
              <img className="workImg" src={RockPaperScissors} alt="Rock Paper Scissors" />
              <div className="slideContent">
                <h1>Rock Paper Scissors</h1>
                <p>The classic game with a modern UI twist.</p>
                <button className="gitLink">
                  <a href="https://ervinclay13.github.io/Rock-Paper-Scissors/" target="_blank" rel="noopener noreferrer">
                    My Link
                  </a>
                </button>
                <button className="gitLink">
                  <a href="https://github.com/ErvinClay13/Rock-Paper-Scissors" target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="wrapper">
              <img className="workImg" src={RecipePage} alt="Recipe Page" />
              <div className="slideContent">
                <h1>Recipe Page</h1>
                <p>A sleek recipe page for culinary enthusiasts.</p>
                <div className="buttons">
                  <button className="gitLink">
                    <a href="https://ervinclay13.github.io/Recipe/" target="_blank" rel="noopener noreferrer">
                      My Link
                    </a>
                  </button>
                  <button className="gitLink">
                    <a href="https://github.com/ErvinClay13/Recipe" target="_blank" rel="noopener noreferrer">
                      Code
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="wrapper">
              <img className="workImg" src={InteractiveRating} alt="Interactive Rating" />
              <div className="slideContent">
                <h1>Interactive Rating</h1>
                <p>A modern feedback UI for user ratings.</p>
                <button className="gitLink">
                  <a href="https://ervinclay13.github.io/Interactive-Rating/" target="_blank" rel="noopener noreferrer">
                    My Link
                  </a>
                </button>
                <button className="gitLink">
                  <a href="https://github.com/ErvinClay13/Interactive-Rating" target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          </SwiperSlide>

          {/* Swiper navigation controls */}
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

// Exporting the component for use in the app
export default MyWork;
