import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { Link, useParams } from "react-router-dom";
const Player = () => {
  const {id} = useParams()
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTYxOTUxM2VkMTY1NmZmNzBhNDg1YzZiMTcyNGY2YSIsIm5iZiI6MTczNjE4ODY1OC44OTY5OTk4LCJzdWIiOiI2NzdjMjJmMjRiZjBmMGUzYjQ3NGQ1ZDkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.SzUJqvfAbfK-X6y5uNFKl_lqzbp4NMvbzEaJQyPDSKA'
    }
  };
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  },[])
  
  return (
    <div className="player">
      <Link to="/">
      <img src={back_arrow_icon} alt="back_arrow" />
      </Link>
      
      <iframe
        src={`https://www.youtube.com/embed/${apiData.key}`}
        frameBorder="0"
        height="90%"
        width="90%"
        title="Trailer"
        allowFullScreen
      ></iframe>
      <div className="player_info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
