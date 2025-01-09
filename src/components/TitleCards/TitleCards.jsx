import React, { useEffect, useRef } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";

const TitleCards = ({ title, category }) => {
  // Access DOM elements || Store mutable value & persist value without triggering a re-render
  const cardRef = useRef();
  // Creating function handleWheel to handle the scrollLeft in webpage
  const handleWheel = (e) => {
    // use preventDefault just to make sure that it is scrolling the card_list not the page
    e.preventDefault();
    cardRef.current.scrollLeft += e.deltaY;
  };
  // Using useEffect to render when the component load
  useEffect(() => {
    cardRef.current.addEventListener("wheel", handleWheel);
  }, []);
  return (
    <div className="title_cards">
      <h1>{title ? title : "Popular on Netflix"}</h1>
      <div className="card_list" ref={cardRef}>
        {cards_data.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img src={card.image} alt="" />
              <p>{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
