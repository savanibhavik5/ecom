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
    <tr className="text-center  m-2">
      <td className="col p-2">{index + 1} </td>
      <td className="col p-2 ">
        <img
          src={product_image}
          heigth={80}
          width={80}
          alt=""
          className="p-2"
        />
      </td>
      <td className="col p-2">{productname} </td>
      <td className="col p-2">{totalprice} </td>
      <td className="col p-2 text-center">
        <div className="input-group align-items-center p-2">
          <button
            className="px-1 btn text-center btn-info item-button"
            disabled={quantity <= 1}
            onClick={removeQuantity}
          >
            -
          </button>
          <button type="text" className="btn  text-center  px-1" readOnly>
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
      </td>
      <td className="col">
        <button className="btn btn-danger" onClick={delitem}>
          Remove
        </button>
      </td>
    </tr>
  );
};

export default Cart;
