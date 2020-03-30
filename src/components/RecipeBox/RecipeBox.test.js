import React from "react";
import { shallow } from "enzyme";
import RecipeBox from "./RecipeBox";

describe("RecipeBox", () => {
  const recipeBox = shallow(<RecipeBox />);

  it("renders the recipeBox div", () => {
    expect(recipeBox.find(".recipeBox").exists()).toBe(true);
  });
});
