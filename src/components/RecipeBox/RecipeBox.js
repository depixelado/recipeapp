import React from "react";
import Icon from "react-fontawesome";

import "./styles.scss";

function RecipeBox({ image, label, cookingTime, calories, source, dietType }) {
  return (
    <div className="recipeBox">
      <div className="thumb">
        <img src={image} />
      </div>
      <div className="content">
        <div className="label">{label}</div>
        <div className="info">
          <div className="cookingTime">
            <Icon name="clock-o" />
            <span>
              {cookingTime != 0 ? ` ${cookingTime} Min` : " Not available"}
            </span>
          </div>
          <div className="calories">
            <Icon name="fire" />
            <span> {calories} Kcal</span>
          </div>
          {dietType && !!dietType.length && (
            <div className="dietType">
              <Icon name="cutlery" />
              <span> {dietType}</span>
            </div>
          )}

          <div className="source">
            <Icon name="external-link" />
            <a href={source}>Source</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeBox;
