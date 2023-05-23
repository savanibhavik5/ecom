import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Product from "../Pages/Product";
import SideBarFilter from "../component/SideBarFilter";

const ProductComponent = () => {
  let [products, setProducts] = useState([]);

  const getProduct = () => {
    fetch("http://localhost:1234/product")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <Fragment>
      <div className="row m-2">
        <div className="col-md-3">
          <SideBarFilter />
        </div>
        <div className="col-md-9 ">
          <div className="row">
            {products?.map((product) => {
              return (
                <Product
                  key={product?.id}
                  id={product?.id}
                  productname={product?.productname}
                  price={product?.price}
                  stock={product?.stock}
                  detail={product?.detail}
                  product_image={product?.product_image}
                  product={product}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductComponent;
