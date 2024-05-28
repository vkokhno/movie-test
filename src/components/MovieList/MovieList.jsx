import React from "react";

import { MovieItem } from "../MovieItem/MovieItem";

import "./MovieList.css";

export const MovieList = ({ movies }) => (
  <div className="movie-list">
    {movies.map((movie) => (
      <MovieItem key={movie.imdbID} movie={movie} />
    ))}
  </div>
);
