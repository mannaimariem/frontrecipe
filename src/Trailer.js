/* eslint-disable no-restricted-globals */
import React from "react";
import { useNavigate } from "react-router";
import {useParams} from 'react-router-dom'

function Trailer({ movies }) {
  let navigate = useNavigate();

  const BackHome = () => {
    navigate(-1);
  };
 const {id} = useParams()
 const foundMovie = movies.find((el)=> el.id === +id)

  return (
    <>
      <div class="info_section">
        <div class="movie_header">
          <h1>{foundMovie.title}</h1>
        </div>
        <div class="movie_desc">
          <p class="text">{foundMovie.description}</p>
        </div>
        <div>
          <iframe
            width="560"
            height="315"
            src={foundMovie.trailer}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <button onClick={BackHome}>Home</button>
        </div>
      </div>
    </>
  );
}

export default Trailer;
