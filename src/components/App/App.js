import React from "react";

import RecipeBox from "../RecipeBox/RecipeBox";
import SearchBox from "../SearchBox/SearchBox";

import "./styles.scss";

const url =
  "https://api.edamam.com/search?q=chicken&app_id=4b656b44&app_key= 203ba625f4419c5c9f0253448a19fc41";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  }

  loadRecipes() {
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ recipes: data.hits.map(hit => hit.recipe) });
      });
  }

  componentDidMount() {
    this.loadRecipes();
  }

  render() {
    console.log("render", this.state.recipes);

    return (
      <div className="app">
        <header>
          <img src="img/logo.png" />
          <SearchBox />
        </header>
        <div className="recipeList">
          {this.state.recipes.map(recipe => (
            <RecipeBox
              image={recipe.image}
              label={recipe.label}
              cookingTime={recipe.totalTime}
              calories={recipe.calories}
              source={recipe.url}
              dietType={recipe.dietLabels}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
