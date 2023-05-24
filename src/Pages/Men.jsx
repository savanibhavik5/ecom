import React, { useEffect, useState } from "react";
import Filter from "../component/Filter";
import axios from "axios";

const Men = () => {
  let [menitem, setMenItem] = useState([]);

  const getMenItem = async () => {
    const res = await axios.get(`http://localhost:1234/men?/allcollection?/shirt?/`);
    const data = await res.data;
    console.log(data);
    setMenItem(data);
  };
    // console.log("112255", menitem);
  useEffect(() => {
    getMenItem();
  }, []);

  return (
    <div className="row m-2">
      <div className="col-md-3">
        <Filter />
      </div>
      <div className="col-md-9 ">
        <div className="row">
         
          <div className="col-lg-4 col-md-6 col-6 p-3">
            <div className="image-container">
              <img
                src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest1.jpg"
                alt=""
                className="product-image"
              />
            </div>
            <div className="text-center p-2"> {}</div>
            <div className="text-center p-2">Offer Price-{}</div>
            <div className="text-center">
              Orignal Price<del className="px-2">{}</del>
            </div>
            <div className="text-center">
              <button className="btn btn-outline-danger m-2">
                Add to Cart
              </button>
              <button className="btn btn-outline-info m-2">
                <i className="fa-regular fa-heart"></i> Add Wishlist
              </button>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-6 p-3">
            <div className="image-container">
              <img
                src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest3.jpg"
                alt=""
                className="product-image"
              />
            </div>
            <div className="text-center p-2"> {}</div>
            <div className="text-center p-2">Offer Price-{}</div>
            <div className="text-center">
              Orignal Price<del className="px-2">{}</del>
            </div>
            <div className="text-center">
              <button className="btn btn-outline-danger m-2">
                Add to Cart
              </button>
              <button className="btn btn-outline-info m-2">
                <i className="fa-regular fa-heart"></i> Add Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Men;
