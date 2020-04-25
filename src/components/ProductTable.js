import React from "react";
import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";

export default class ProductTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const isStockOnly = this.props.isStockOnly;

    const items = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (isStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        items.push(
          <ProductCategoryRow
            key={product.category}
            category={product.category}
          />
        );
      }
      items.push(<ProductRow key={product.name} product={product} />);
      lastCategory = product.category;
    });

    return (
      <div className="product-table">
        <div className="product-table__names">
          <span>Name</span>
          <span>Price</span>
        </div>
        <div className="product-cat-container">
          <div className="product-rows">{items}</div>
        </div>
      </div>
    );
  }
}