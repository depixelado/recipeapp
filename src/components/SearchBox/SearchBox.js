import React from "react";
import Icon from "react-fontawesome";

import "./styles.scss";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.searchInputRef = React.createRef();
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    const searchQuery = this.searchInputRef.current.value;
    const { onSearch } = this.props;
    onSearch(searchQuery);
  }

  render() {
    const { searchBtnText, placeholder } = this.props;
    return (
      <div className="searchBox">
        <input
          ref={this.searchInputRef}
          className="search"
          type="text"
          placeholder={placeholder}
        />
        <input
          onClick={this.handleSearch}
          className="searchBtn"
          type="button"
          value={searchBtnText}
        />
      </div>
    );
  }
}

export default SearchBox;
