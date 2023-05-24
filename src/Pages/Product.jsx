import React, { useState, useEffect } from "react";
import SideBarFilter from "../component/Filter";
import ProductComponent from "../component/ProductComponent";
import axios from "axios";

const Product = ({ product }) => {
  const { id, product_image, detail, productname, price, stock } = product;

  const addToCart = async (product) => {
    const response = await axios.post(`http://localhost:1234/cart`, {
      ...product,
      quantity: 1,
      totalprice: price,
    });
    const data = await response.data;
  };

  return (
    <div className="col-lg-4 col-md-6 p-3 ">
      <div className="image-container">
        <img src={product_image} alt="" className="product-image" />
      </div>
      <div className="text-center p-2"> {productname}</div>
      <div className="text-center p-2">Offer Price-{price}</div>
      <div className="text-center">
        Orignal Price<del className="px-2">{price + price * 0.1}</del>
      </div>
      <div className="text-center">
        <button
          className="btn btn-outline-danger m-2"
          onClick={addToCart.bind(this, product)}
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

export default Product;
