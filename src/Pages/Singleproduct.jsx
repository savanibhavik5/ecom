import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Singleproduct = () => {
  const product = useParams();
  const [pro, setPro] = useState("");
  const getP = () => {
    axios
      .get(`http://localhost:1234/product?id=${product.id}`)
      .then((res) => setPro(res?.data[0]));
  };

  const addToCart = async (pro) => {
    const response = await axios.post(`http://localhost:1234/cart`, {
      ...pro,
      quantity: 1,
      totalprice: pro.price,
    });
    const data = await response.data;
  };
  useEffect(() => {
    getP();
  }, []);

  return (
    <div className="row  p-4 ">
      <div className="d-flex h5 align-items-center">
        <div className="h4 ">Product Name :</div>
        <div>{pro.productname}</div>
      </div>
      <div className="row">
        <div className="col-lg-6 text-center">
          <img src={pro.product_image} alt="" className="single-image" />
        </div>
        <div className="col-lg-6">
          <div className="d-flex  align-items-center ">
            <div className="h5">Product Detail: </div>
            <div className="">{pro.detail}</div>
          </div>

          <div className=" d-flex  align-items-center">
            <div className="h5">Offer Price:- </div>
            <div className=""> {pro.price}</div>
          </div>
          <div className=" d-flex  align-items-center">
            <div className="h5">Orignal Price:- </div>
            <del className="">{pro.price + pro.price * 0.1}</del>
          </div>

          <div className="">
            <button
              className="btn btn-outline-danger m-2"
              onClick={addToCart.bind(this, pro)}
            >
              Add to Cart
            </button>
            <button className="btn btn-outline-info m-2">
              <i className="fa-regular fa-heart"></i> Add Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleproduct;
