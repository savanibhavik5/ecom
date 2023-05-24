import axios from "axios";
import React, { useState, useEffect } from "react";
import Cart from "../Pages/Cart";

const CartComponent = () => {
  const [cartdata, setCartData] = useState([]);
  const getCartData = async () => {
    const response = await axios.get("http://localhost:1234/cart");
    const data = await response.data;
    setCartData(data);
  };

  const addQuantity = async (index) => {
    var pdata = cartdata[index];
    var pid = cartdata[index].id;
    var newquntity = cartdata[index].quantity + 1;
    pdata["quantity"] = newquntity;
    var newprice = pdata.price * newquntity;
    pdata["totalprice"] = newprice;
    const res = await axios.put(`http://localhost:1234/cart/${pid}`, pdata);
    const data = await res.data;
    getCartData();
  };

  const removeQuantity = async (index) => {
    var pdata = cartdata[index];
    var pid = cartdata[index].id;
    var newquantity = cartdata[index].quantity - 1;
    pdata.quantity = newquantity;
    var newprice = pdata.price * newquantity;
    pdata.totalprice = newprice;
    const res = await axios.put(`http://localhost:1234/cart/${pid}`, pdata);
    const data = await res.data;
    getCartData();
  };

  const delitem = async (id) => {
    const res = await axios.delete(`http://localhost:1234/cart/${id}`);
    const data = await res.data;
    getCartData();
  };
  let total = 0;
  let totalitem = 0;

  useEffect(() => {
    getCartData();
  }, []);
  return (
    <div className="container ">
    
      {cartdata.length === 0 ? (
        <div className="row m-5">
          <h1 className="text-center mt-5">Your Cart is Empty</h1>
        </div>
      ) : (
        <div className="row m-2">
          <div className="col-md-9">
            <table className="table-responsive">
              <thead>
                <tr className="text-center">
                  <th>SrNo</th>
                  <th>Product Image</th>
                  <th>Name</th>
                  <th>Total Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="">
                {cartdata.map((item, index) => {
                  total = total + item.totalprice;
                  totalitem = totalitem + item.quantity;
                  return (
                    <Cart
                      key={item?.id}
                      index={index}
                      cartitem={item}
                      addQuantity={addQuantity.bind(this, index)}
                      removeQuantity={removeQuantity.bind(this, index)}
                      delitem={delitem.bind(this, item?.id)}
                      totalitem={totalitem}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-md-3  border-left">
            <h3>Cart Summary</h3>
            total:- {total}
            <br /> Total Item:-{totalitem}
            <div className="text-center m-3">
              <button className="btn btn-outline-success">Place Order</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartComponent;
