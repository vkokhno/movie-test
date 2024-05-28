import React from "react";

import "./MovieItem.css";

export const MovieItem = ({ movie }) => (
  <div className="movie-item">
    <img
      src={movie.Poster !== "N/A" ? movie.Poster : "/public/placeholder.png"}
      alt={movie.Title}
    />
    <div className="movie-details">
      <h2>{movie.Title}</h2>
      <p>Year: {movie.Year}</p>
      <p>imdbID: {movie.imdbID}</p>
      <p>Type: {movie.Type}</p>
    </div>
  </div>
);
