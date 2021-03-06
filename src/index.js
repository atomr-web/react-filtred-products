import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.css';
import './index.css';

import FiltredProductTable from './components/FiltredProductTable'

const PRODUCTS = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
]

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Product filtred table</h1>
        <hr />
        <FiltredProductTable products={PRODUCTS}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)