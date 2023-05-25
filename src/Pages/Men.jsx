import React, { useEffect, useState } from "react";
import Filter from "../component/Filter";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Men = () => {
  let [menitem, setMenItem] = useState([]);

  const getMenItem = async () => {
    const res = await axios.get(`http://localhost:1234/product`);
    const data = await res.data;
    setMenItem(data);
  };

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
          {menitem
            .filter((item) => item.category === "men")
            .map((item, index) => {
              return (
                <div className="col-lg-4 col-md-6 col-6 p-3" key={item.id}>
                  <Link to={`/singleproduct/${item.id}`} className="nav-link">
                    <div className="image-container">
                      <img
                        src={item.product_image}
                        alt=""
                        className="product-image"
                      />
                    </div>
                    <div className="text-center p-2"> {item.productname}</div>
                    <div className="text-center p-2">
                      Offer Price-{item.price}
                    </div>
                    <div className="text-center">
                      Orignal Price
                      <del className="px-2">
                        {item.price + item.price * 0.1}
                      </del>
                    </div>
                  </Link>
                  <div className="text-center">
                    <button className="btn btn-outline-danger m-2">
                      Add to Cart
                    </button>
                    <button className="btn btn-outline-info m-2">
                      <i className="fa-regular fa-heart"></i> Add Wishlist
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Men;
