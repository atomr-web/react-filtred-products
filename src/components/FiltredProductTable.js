import React, { Suspense } from "react";
import SearchBar from "./SearchBar";

// for imitation loading
const ProductTable = React.lazy(() => import("./ProductTable"));

export default class FiltredProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      isStockOnly: false,
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleCheckIsStack = this.handleCheckIsStack.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText,
    });
  }

  handleCheckIsStack(isStockOnly) {
    this.setState({
      isStockOnly: isStockOnly,
    });
  }

  render() {
    return (
      <div className="filtred-product-table">
        <SearchBar
          filterText={this.state.filterText}
          isStockOnly={this.state.isStockOnly}
          onFilterChangeText={this.handleFilterTextChange}
          onInStockChange={this.handleCheckIsStack}
        />
        <Suspense fallback={<div>Loading...</div>}>
          <ProductTable
            products={this.props.products}
            filterText={this.state.filterText}
            isStockOnly={this.state.isStockOnly}
          />
        </Suspense>
      </div>
    );
  }
}
