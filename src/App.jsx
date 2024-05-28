import React, { useState } from "react";
import { Header } from "./components/Header/Header";
import { MovieList } from "./components/MovieList/MovieList";
import { Pagination } from "./components/Pagination/Pagination";

import "./App.css";

// Better to move to environment variables
const API_KEY = "8523cbb8";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchString, setSearchSting] = useState("");
  const [totalResults, setTotalResults] = useState();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async (searchString, page = 1) => {
    setIsLoading(true);
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchString}&page=${page}`
    );
    const data = await response.json();

    if (data.Response === "True") {
      setMovies(data.Search);
      setTotalResults(Number(data.totalResults));
    } else {
      setMovies([]);
      setTotalResults(0);
    }
    setIsLoading(false);
  };

  const handleSearch = (searchString) => {
    setPage(1);
    setSearchSting(searchString);
    fetchMovies(searchString, 1);
  };

  const handlePageChange = (nextPage) => {
    setPage(nextPage);
    fetchMovies(searchString, nextPage);
  };

  return (
    <div className="app">
      <Header onSearch={handleSearch} setSearch />
      {isLoading ? (
        <div className="loader">
          <p>Loading...</p>
        </div>
      ) : (
        <>
          {searchString && (
            <p>
              You searched for: {searchString}, {totalResults} results found
            </p>
          )}
          {movies.length > 0 && <MovieList movies={movies} />}
          {totalResults > 10 && (
            <Pagination
              page={page}
              totalPages={Math.ceil(totalResults / 10)}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}
    </div>
  );
};

export default App;
