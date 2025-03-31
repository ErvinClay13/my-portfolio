import React from "react";
import "./MyWork.css";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination"; 
import "swiper/css/navigation";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import Library from "../MyWork/Library-img.png";
import PregnancyTracker from "../MyWork/pregnanctTracker-img.png";
import RockPaperScissors from "../MyWork/RockPaperScissors-img.png";
import VogueWebsite from "../MyWork/VogueWebsite-img.png";
import TicTacToe from "../MyWork/TicTacToe-img.png";
import RecipePage from "../MyWork/recipePage-img.png";
import InteractiveRating from "../MyWork/interactive-rating.png";
import AllieResumeBuilder from "../MyWork/AllieResumeScreenshot.png";
import MemoGlow from "../MyWork/MemoGlowImg.png";

function MyWork() {
  return (
    <div className="workContainer">
      <div className="workHead">
        <h1 className="myWorkHeader">My Work</h1>
      </div>
      <div id="work" className="carouselContainer">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <div className="wrapper">
              <img
                className="workImg"
                src={PregnancyTracker}
                alt="Pregnancy Tracker"
              />
              <div className="slideContent">
                <h1>Pregnancy Tracker</h1>
                <p>Tracks a woman's pregnancy after entering last menstrual.</p>
                <button className="gitLink">
                  <a
                    href="https://ervinclay13.github.io/Pregnancy-Tracker/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    My Link
                  </a>
                </button>

                <button className="gitLink">
                  <a
                    href="https://github.com/ErvinClay13/Pregnancy-Tracker"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className="wrapper">
              <img
                className="workImg"
                src={AllieResumeBuilder}
                alt="Allie AI Resume Builder"
              />
              <div className="slideContent">
                <h1>AI Allie Resume Builder</h1>
                <p>AI Driven Resume Builder.</p>
                <button className="gitLink">
                  <a
                    href="https://ervinclay13.github.io/Allie-AI-Resume/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    My Link
                  </a>
                </button>

                <button className="gitLink">
                  <a
                    href="https://github.com/ErvinClay13/Allie-AI-Resume/tree/main/allie-resume-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className="wrapper">
              <img
                className="workImg"
                src={MemoGlow}
                alt="Memo Glow"
              />
              <div className="slideContent">
                <h1>Memo Glow</h1>
                <p>Drag </p>
                <button className="gitLink">
                  <a
                    href="https://ervinclay13.github.io/Memo-Glow/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    My Link
                  </a>
                </button>

                <button className="gitLink">
                  <a
                    href=" https://github.com/ErvinClay13/Memo-Glow"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                  <a
                    href="https://ervinclay13.github.io/Library/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    My Link
                  </a>
                </button>

                <button className="gitLink">
                  <a
                    href="https://github.com/ErvinClay13/Library"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                  <a
                    href="https://ervinclay13.github.io/Tic-Tac-Toe/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    My Link
                  </a>
                </button>

                <button className="gitLink">
                  <a
                    href="https://github.com/ErvinClay13/Tic-Tac-Toe"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                <p>A Full website to display the Vogue-4Me-360 products and services.</p>
                <button className="gitLink">
                  <a
                    href="https://ervinclay13.github.io/Vogue360-website/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    My Link
                  </a>
                </button>

                <button className="gitLink">
                  <a
                    href="https://github.com/ErvinClay13/Vogue360-website"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="wrapper">
              <img
                className="workImg"
                src={RockPaperScissors}
                alt="Rock Paper Scissors"
              />
              <div className="slideContent">
                <h1>Rock Paper Scissors</h1>
                <p>The classic game with a modern UI twist.</p>
                <button className="gitLink">
                  <a
                    href="https://ervinclay13.github.io/Rock-Paper-Scissors/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    My Link
                  </a>
                </button>

                <button className="gitLink">
                  <a
                    href="https://github.com/ErvinClay13/Rock-Paper-Scissors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                  <a
                    href="https://ervinclay13.github.io/Recipe/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    My Link
                  </a>
                </button>

                <button className="gitLink">
                  <a
                    href="https://github.com/ErvinClay13/Recipe"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="wrapper">
              <img
                className="workImg"
                src={InteractiveRating}
                alt="Interactive Rating"
              />
              <div className="slideContent">
                <h1>Interactive Rating</h1>
                <p>A modern feedback UI for user ratings.</p>
                <button className="gitLink">
                  <a
                    href="https://ervinclay13.github.io/Interactive-Rating/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    My Link
                  </a>
                </button>

                <button className="gitLink">
                  <a
                    href="https://github.com/ErvinClay13/Interactive-Rating"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              {/* <img className="arrow-back" src={arrow1} alt="" /> */}
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

export default MyWork;

