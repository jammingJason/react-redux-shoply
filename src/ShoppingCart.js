import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Product from './Product';

const ShoppingCart = () => {
  const products = [useSelector((state) => state.products)];
  const cart = useSelector((state) => state.cart);

  const viewShoppingCart = () => {
    document.location = '/cart';
  };

  const getProductInfo = (items) => {
    let prodArray = [];
    // console.log(items);
    for (const key in items.products) {
      if (Object.hasOwnProperty.call(items.products, key)) {
        const element = items.products[key];
        // console.log(key);
        prodArray.push(<Product itemID={key} item={element} />);
      }
    }
    return prodArray;
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col col-2">
            <NavLink to="/cart">
              <button type="button" className="btn btn-outline-warning">
                Shopping Cart - {cart.length}
              </button>
            </NavLink>
          </div>
        </div>
        <div className="row">
          {products.map((items) => getProductInfo(items))}
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
