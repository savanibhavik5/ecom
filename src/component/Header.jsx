import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [cart, setCart] = useState([]);
  const getCartDetail = async () => {
    const cartItem = await axios.get(`http://localhost:1234/cart`);
    const data = cartItem.data;
    setCart(data);
  };

  let totalitem = 0;

  useEffect(() => {
    getCartDetail();
    totalitem = totalitem;
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <h3>
          <div className="nav-link">
            <span className="bg-danger text-white logo-bg p-2">
              <i className="fa-solid fa-shop fa-fade"></i>
            </span>
            Capital Shop
          </div>
        </h3>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse  " id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto ">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only"></span>
            </Link>
          </li>

          <li className="nav-item dropdown">
            <div
              to="/men"
              className="nav-link active dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
            >
              Men
            </div>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/men">
                All Collection's
              </Link>
              {/* <a className="dropdown-item" href="#">
                Shirt's
              </a>
              <a className="dropdown-item" href="#">
                T-Shirt's
              </a>
              <a className="dropdown-item" href="#">
                Jeans
              </a>
              <a className="dropdown-item" href="#">
                Shoe's
              </a>
              <a className="dropdown-item" href="#">
                Wallet & Belt
              </a>
              <a className="dropdown-item" href="#">
                Perfume
              </a> */}
            </div>
          </li>
          <li className="nav-item dropdown">
            <div
              className="nav-link dropdown-toggle active"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Women
            </div>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/women">
                All Collection's
              </Link>
              {/* <a className="dropdown-item" href="#">
                Sarree's
              </a>
              <a className="dropdown-item" href="#">
                Top's
              </a>
              <a className="dropdown-item" href="#">
                Jeans
              </a>
              <a className="dropdown-item" href="#">
                Shoe's
              </a>
              <a className="dropdown-item" href="#">
                Purse
              </a>
              <a className="dropdown-item" href="#">
                Make-up
              </a> */}
            </div>
          </li>
          <li className="nav-item dropdown">
            <div
              className="nav-link dropdown-toggle active"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
            >
              Baby Collection
            </div>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/baby">
                All Collection's
              </Link>
              {/* <a className="dropdown-item" href="#">
                T-Shirt's
              </a>
              <a className="dropdown-item" href="#">
                Diaper's
              </a>
              <a className="dropdown-item" href="#">
                Clothe's
              </a>
              <a className="dropdown-item" href="#">
                Shorts
              </a>
              <a className="dropdown-item" href="#">
                Baby Lotion
              </a> */}
            </div>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Blog
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Collection
            </a>
          </li>
        </ul>
        {/* <form className=" my-2 my-lg-0"> */}
        <div className="d-flex justify-content-end align-items-center p-2">
          <Link to="/useraccount" className="nav-link p-0">
            <i className="fa fa-user header-icon mx-2"></i>
          </Link>
          <Link
            to="/cart"
            className="nav-link d-flex justify-content-end p-0 align-items-center"
          >
            <i className="fa-solid fa-cart-shopping header-icon mx-2"></i>
            <div className="bg-danger cart-length rounded-circle">
              {/* {cart.length} */}
              {cart.length}
            </div>
          </Link>
        </div>
        {/* </form> */}
      </div>
    </nav>
  );
};

export default Header;
