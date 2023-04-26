import React from "react";
import StarRatingComponent from "react-star-rating-component";

function Search({ search, setRate, newRate }) {
  const onStarClick = (nextValue) => {
    setRate(nextValue)
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search movies"
        onChange={(e) => search(e.target.value)}
      />
      <StarRatingComponent
        name="rate1"
        starCount={5}
        value={newRate}
        onStarClick={onStarClick}
      />
    </div>
  );
}

export default Search;
