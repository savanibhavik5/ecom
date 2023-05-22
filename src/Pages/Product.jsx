import React from "react";
import SideBarFilter from "../component/SideBarFilter";
import ProductComponent from "../component/ProductComponent";

const Product = ({ id, product_image, detail, productname, price, stock }) => {
  return (
    <div className="col-lg-3 col-md-6 p-2">
      <div className="image-container">
        <img src={product_image} alt="" className="product-image" />
      </div>
      <div className="text-center p-2"> {productname}</div>
      <div className="text-center p-2">
        Offer Price-{price}{" "}
        <del className="px-2">{parseInt(price + price * 0.1)}</del>
      </div>
    </div>
  );
};

export default Product;
