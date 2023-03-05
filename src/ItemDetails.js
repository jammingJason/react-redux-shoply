import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { add } from './actions';

const ItemDetails = () => {
  const products = [useSelector((state) => state.products)];
  const [item, setItem] = useState([{ name: '', price: '', description: '' }]);
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    for (const key in products[0].products) {
      if (Object.hasOwnProperty.call(products[0].products, key)) {
        const element = products[0].products[key];
        if (key === id) {
          //   console.log(element);
          setItem([element]);
        }
      }
    }
  }, []);

  const handleSubmit = (prodID) => {
    dispatch(add(prodID));

    alert(prodID + ' has Been Added to your Cart');
  };

  const getInfo = (i) => {
    const prodInfo = i[0];
    console.log(prodInfo.name);
    return (
      <>
        <div className="col col-12">
          <img src={prodInfo.image_url} width="25%" />
        </div>
        <div className="col col-12">{prodInfo.name.toUpperCase()}</div>
        <div className="col col-12">${prodInfo.price}</div>
        <div className="col col-12">{prodInfo.description}</div>
      </>
    );
  };

  return (
    <>
      <div>
        <h1>{id}</h1>
      </div>
      <div>{getInfo(item)}</div>
      <div>
        <button
          onClick={() => handleSubmit(id)}
          className="btn btn-success m-2"
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default ItemDetails;
