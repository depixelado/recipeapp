import React from "react";
import Icon from "react-fontawesome";

import "./styles.scss";

function RecipeBox({ label, cookingTime, calories, source, dietType }) {
  return (
    <div className="recipeBox">
      <div className="thumb"></div>
      <div className="content">
        <div className="label">{label}</div>
        <div className="info">
          <div className="cookingTime">
            <Icon name="clock-o" />
            <span> {cookingTime} Min</span>
          </div>
          <div className="calories">
            <Icon name="fire" />
            <span> {calories} Kcal</span>
          </div>
          <div className="dietType">
            <Icon name="cutlery" />
            <span> {dietType}</span>
          </div>
          <div className="source">
            <Icon name="external-link" />
            <span> {source}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeBox;
