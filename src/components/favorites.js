import React from "react";
import FavoriteComponent from "./favoritesList";

const Favorites = () => {
  return(
    <div className="list">
      <h1 className="left-fav">My Favorites</h1>
      <div className="container"  id="list">
        <div className="row">
          <FavoriteComponent/>
        </div>
      </div>
    </div>
  );
}

export default Favorites;