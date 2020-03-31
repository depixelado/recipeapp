import React from "react";

import RecipeBox from "../RecipeBox/RecipeBox";
import SearchBox from "../SearchBox/SearchBox";

import "./styles.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
    this.loadRecipes = this.loadRecipes.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  loadRecipes(searchQuery) {
    const url = `https://api.edamam.com/search?q=${searchQuery}&app_id=4b656b44&app_key=203ba625f4419c5c9f0253448a19fc41`;
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ recipes: data.hits.map(hit => hit.recipe) });
      });
  }

  handleSearch(searchQuery) {
    this.loadRecipes(searchQuery);
  }

  render() {
    return (
      <div className="app">
        <header>
          <img src="img/logo.png" />
          <SearchBox
            searchBtnText="Find!"
            placeholder="Look for a recipe name"
            onSearch={this.handleSearch}
          />
        </header>
        <div className="recipeList">
          {this.state.recipes.length == 0 ? (
            <div>Search the ingredient to see a list of recipes</div>
          ) : (
            this.state.recipes.map(recipe => (
              <RecipeBox
                img={recipe.image}
                label={recipe.label}
                cookingTime={recipe.totalTime}
                calories={recipe.calories}
                source={recipe.url}
                dietType={recipe.dietLabels}
                key={recipe.uri}
              />
            ))
          )}
        </div>
      </div>
    );
  }
}

export default App;
