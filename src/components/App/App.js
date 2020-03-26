import React from "react";

import RecipeBox from "../RecipeBox/RecipeBox";
import SearchBox from "../SearchBox/SearchBox";

import "./styles.scss";

function App() {
  return (
    <div className="app">
      <header>
        <img src="img/logo.png" />
        <SearchBox />
      </header>
      <div className="recipeList">
        <RecipeBox
          label="Paparajote"
          cookingTime={120}
          calories={1200}
          source="http://www.google.es"
          dietType="Mediterranean"
        />
        <RecipeBox
          label="Paella"
          cookingTime={120}
          calories={1200}
          source="http://www.google.es"
          dietType="Mediterranean"
        />
      </div>
    </div>
  );
}

export default App;
