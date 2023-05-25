import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Singleproduct = () => {
  const product = useParams();
  const [pro, setPro] = useState([]);
  const getP = () => {
    axios.get(`http://localhost:1234/product?id=${product.id}`)
      .then((res) => console.log(res?.data))
      .then((serRes) => {
        // setPro(serRes[0]);
      });
  };
  useEffect(() => {
    getP(0);
  }, []);

  return (
    <div className="col-lg-9  p-1 ">
      <div className="image-container mx-2 ">
        <img src={pro.product_image} alt="" className="product-image" />
      </div>
      <div className="text-center p-2"> {pro.productname}</div>
      <div className="text-center p-2">Offer Price-{pro.price}</div>
      <div className="text-center">
        Orignal Price
        <del className="px-2">{pro.price + pro.price * 0.1}</del>
      </div>

      <div className="text-center">
        <button
          className="btn btn-outline-danger m-2"
          // onClick={addToCart.bind(this, product)}
        >
          Add to Cart
        </button>
        <button className="btn btn-outline-info m-2">
          <i className="fa-regular fa-heart"></i> Add Wishlist
        </button>
      </div>
    </div>
  );
};

export default Singleproduct;
