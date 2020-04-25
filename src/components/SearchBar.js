import React from "react";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleCheckIsStack = this.handleCheckIsStack.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterChangeText(e.target.value);
  }

  handleCheckIsStack(e) {
    this.props.onInStockChange(e.target.checked);
  }

  render() {
    return (
      <form>
        <input
          type="search"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
        <label>
          <input
            type="checkbox"
            checked={this.props.isStockOnly}
            onChange={this.handleCheckIsStack}
          />
          Only show products in stock
        </label>
      </form>
    );
  }
}
