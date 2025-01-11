import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  // Access DOM elements || Store mutable value & persist value without triggering a re-render
  const cardRef = useRef();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTYxOTUxM2VkMTY1NmZmNzBhNDg1YzZiMTcyNGY2YSIsIm5iZiI6MTczNjE4ODY1OC44OTY5OTk4LCJzdWIiOiI2NzdjMjJmMjRiZjBmMGUzYjQ3NGQ1ZDkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.SzUJqvfAbfK-X6y5uNFKl_lqzbp4NMvbzEaJQyPDSKA",
    },
  };

  // Creating function handleWheel to handle the scrollLeft in webpage
  const handleWheel = (e) => {
    // use preventDefault just to make sure that it is scrolling the card_list not the page
    e.preventDefault();
    cardRef.current.scrollLeft += e.deltaY;
  };
  // Using useEffect to render when the component load
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "popular"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));
    cardRef.current.addEventListener("wheel", handleWheel);
  }, []);
  return (
    <div className="title_cards">
      <h1>{title ? title : "Popular on Netflix"}</h1>
      <div className="card_list" ref={cardRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt=""
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
