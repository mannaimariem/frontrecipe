import React from "react";
import MovieCard from "./MovieCard";
import { useState } from "react";
import Add from "./Add";

const MovieList = ({ movies, addMovie }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <button onClick={handleShow}> Add </button>
      <Add show={show} handleClose={handleClose} addMovie={addMovie} />
      {movies.map((el) => (
        <MovieCard movie={el} />
      ))}
    </div>
  );
};

export default MovieList;
