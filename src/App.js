import React from "react";
import MovieList from "./MovieList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Trailer from './Trailer'
import "./App.css";
import { useState } from "react";
import Search from "./Search";

function App() {
  const [keyword, setKeyword] = useState("");
  const [newRate, setNewrate] = useState(1);
  const [movies, setMovies] = useState([
    { id:1,
      title: "Bright",
      rating: "4",
      description:
        " Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for. ",
      posterURL:
        "https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg",
        trailer: "https://www.youtube.com/embed/6EZCBSsBxko",
    },
    {id:2,
      title: "Tomb Raider",
      rating: "5",
      description:
        "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
      posterURL: "https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg",
      trailer:"https://www.youtube.com/embed/8ndhidEmUbI"
    },
    {id:3,
      title: "Black Panther",
      rating: "1",
      description:
        "T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.",
      posterURL: "https://mr.comingsoon.it/imgdb/locandine/235x336/53715.jpg",
      trailer:"https://www.youtube.com/embed/xjDjIWPwcPU"
    },
  ]);
  const search = (text) => {
    setKeyword(text);
  };
  const setRate = (rate) => {
    setNewrate(rate);
  };
  const addMovie=(movie)=>{
    setMovies(movies.concat(movie))
  }
  return (
    <>
      <Search search={search} setRate={setRate} newRate={newRate} />
      <Routes>
      <Route path="/" element={    <MovieList
        addMovie={addMovie}
        movies={movies.filter(
          (el) =>
          el.rating >= newRate &&
          el.title.toLowerCase().includes(keyword.toLowerCase().trim())
        )}
      />} />
      <Route path="/movie/:id" element={<Trailer movies={movies}/>} />
    </Routes>
  
    </>
  );
}

export default App;
