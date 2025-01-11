import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar//Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner_img" />
        <div className="hero_caption">
          <img src={hero_title} alt="" className="caption_img" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
            placeat illo alias magni optio eligendi id dolores culpa, ducimus
            tempore consequuntur dolorum labore officia hic enim provident
            ipsam. Natus, provident?
          </p>
          <div className="hero_btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark_btn">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more_cards">
      <TitleCards title={"Blockbuster Movies"} category={"now_playing"}/>
      <TitleCards title={"Only on Netflix"} category={"top_rated"}/>
      <TitleCards title={"Upcoming"} category={"upcoming"}/>
      {/* <TitleCards title={"Top Picks for You"}/> */}
      </div>
      <Footer />
    </div>
    
  );
};

export default Home;
