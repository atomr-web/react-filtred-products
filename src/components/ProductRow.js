import React from "react";

export default class ProductRow extends React.Component {
  render() {
    return (
      <div
        className={
          "product-row " + (this.props.product.stocked ? "instack" : "")
        }
      >
        <div className="product-row__name">{this.props.product.name}</div>
        <div className="product-row__price">{this.props.product.price}</div>
      </div>
    );
  }
}