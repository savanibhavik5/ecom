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
    <div className="row  m-1 ">
      <table className=" table table-responsive">
        <tbody>
          <tr rowSpan={3} className="d-flex h5 align-items-center ">
            {/* <th className="h4 ">Product Name :</th> */}
            <td rowSpan={3}>{pro.productname}</td>
          </tr>
          <tr className=" ">
            <td className="" colSpan={2}>
              <img src={pro.product_image} alt="" className="single-image" />
            </td>
            <td>
              <table>
                <tbody>
                  <tr>
                    <th className="h5">Product Detail:- </th>
                    <td className="">{pro.detail}</td>
                  </tr>
                  <tr>
                    <th className="h5">Offer Price:- </th>
                    <td className=""> {pro.price}</td>
                  </tr>
                  <tr>
                    <th className="h5">Orignal Price:- </th>

                    <td className="del">{pro.price + pro.price * 0.1}</td>
                  </tr>
                  <tr>
                    <td className="d-flex">
                      <button
                        className="btn btn-outline-danger m-2"
                        onClick={addToCart.bind(this, pro)}
                      >
                        Add to Cart
                      </button>
                      <button className="btn btn-outline-info m-2">
                        <i className="fa-regular fa-heart"></i> Add Wishlist
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Singleproduct;
