import React from "react";
import Icon from "react-fontawesome";

import "./styles.scss";

function SearchBox() {
  return (
    <div className="searchBox">
      <input className="search" type="text" placeholder="Busca una receta" />
      <input className="searchBtn" type="button" value="Busca" />
    </div>
  );
}

export default SearchBox;
