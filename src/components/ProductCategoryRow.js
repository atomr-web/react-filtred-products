import React from "react";

export default class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;

    return <div className="product-cat-name">{category}</div>;
  }
}
