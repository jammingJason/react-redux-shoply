import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from './actions';
import { v4 as uuid } from 'uuid';
import { NavLink } from 'react-router-dom';

const Product = (item) => {
  // console.log(item);
  const dispatch = useDispatch();
  // alert(cart);
  const handleSubmit = (prod) => {
    dispatch(add(prod));
  };
  // console.log(item.item);
  return (
    <>
      <div
        className="col col-5 m-3"
        key={uuid()}
        style={{
          border: '1px solid white',
          boxShadow: '1px 1px 1px 1px white',
        }}
      >
        <div>
          <h2>
            <NavLink to={'/products/' + item.itemID}>
              {item.item.name.toUpperCase()}
            </NavLink>
          </h2>
        </div>
        <hr />
        <div>${item.item.price}</div>
        <div>{item.item.description}</div>
        <div>
          <button
            onClick={() => handleSubmit(item.itemID)}
            className="btn btn-success m-2"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
