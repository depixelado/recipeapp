import React from "react";
import { shallow } from "enzyme";
import SearchBox from "./SearchBox";

describe("SearchBox", () => {
  const searchBox = shallow(<SearchBox />);

  it("renders the searchBox div", () => {
    expect(searchBox.find(".searchBox").exists()).toBe(true);
  });
});
