import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./banner.css";
function Banner() {
  const [headMovie, setHeadMovie] = useState([]);
  useEffect(() => {
    async function fetchHeadMovieData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setHeadMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchHeadMovieData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
          "https://image.tmdb.org/t/p/original/${headMovie?.backdrop_path}"
          )`,
        backgroundPosition: "center center"
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {headMovie?.title || headMovie?.name || headMovie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{headMovie?.overview}</h1>
      </div>
      <div className="banner-fadeBottom" />
    </header>
  );
}
export default Banner;
