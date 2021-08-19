import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./row.css";

const imageBaseUrl = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLarge }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            className={`row_poster ${isLarge && "row_posterLarge"}`}
            key={movie.id}
            src={`${imageBaseUrl}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}
export default Row;
