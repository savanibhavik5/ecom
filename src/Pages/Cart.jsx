import React from "react";

const Cart = ({
  cartitem,
  index,
  addQuantity,
  delitem,
  totalitem,
  removeQuantity,
}) => {
  const {
    id,
    detail,
    price,
    product_image,
    totalprice,
    productname,
    quantity,
    stock,
  } = cartitem;

  return (
    <div className="text-center d-flex m-4">
      <div className="col-md-1">{index + 1} </div>
      <div className="col-md-3">
        <img src={product_image} heigth={80} width={80} alt="" />
      </div>
      <div className="col-md-2">{productname} </div>
      <div className="col-md-2">{totalprice} </div>
      <div className="col-md-2">
        <div className="input-group ">
          <button
            className="px-1 btn btn-info item-button"
            disabled={quantity <= 1}
            onClick={removeQuantity}
          >
            -
          </button>
          <button
            type="text"
            className="btn btn-info text-center px-1"
            readOnly
          >
            {quantity}
          </button>
          <button
            className=" px-1 btn item-button btn-info"
            disabled={quantity === stock}
            onClick={addQuantity}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-md-2">
        <button className="btn btn-danger" onClick={delitem}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default Cart;
