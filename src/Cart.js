import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const products = [useSelector((state) => state.products)];
  const [item, setItem] = useState([]);
  useEffect(() => {
    let tempArray = [];
    cart.map((prod) => {
      for (const key in products[0].products) {
        if (Object.hasOwnProperty.call(products[0].products, key)) {
          const element = products[0].products[key];
          if (key === prod) {
            tempArray.push(element);
            // setItem([...item, element]);
          }
        }
      }
    });
    setItem(tempArray);
  }, []);

  if (item.length === 0) {
    return (
      <>
        Your Cart <i className="fa-solid fa-cart-shopping"></i> is Empty!
      </>
    );
  }
  return (
    <>
      <div>{item.length} item(s) in your Cart</div>
      <div className="container">
        <div className="row">
          <div className="col">
            <hr />
          </div>
        </div>
        <div className="row">
          {item.map((prod) => (
            <>
              <div className="col col-4 p-2">
                <img src={prod.image_url} width="100px" />
                <div>{prod.name.toUpperCase()}</div>
                <div>${prod.price}</div>
                <div>{prod.description}</div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
