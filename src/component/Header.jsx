import axios from "axios";
import React, { useEffect, useState } from "react";

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
      <a className="navbar-brand" href="#">
        <h3>
          <span className="bg-danger text-white logo-bg p-2">
            <i className="fa-solid fa-shop fa-fade"></i>
          </span>
          Capital Shop
        </h3>
      </a>
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
            <a className="nav-link" href="#">
              Home <span className="sr-only"></span>
            </a>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link active dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              // aria-expanded="false"
            >
              Men
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item " href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle active"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Women
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle active"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              // aria-expanded="false"
            >
              Baby Collection
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
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
          <i className="fa fa-user header-icon mx-2"></i>
          <div className="d-flex justify-content-end align-items-center">
            <i className="fa-solid fa-cart-shopping header-icon mx-2"></i>
            <div className="bg-danger cart-length rounded-circle">
              {/* {cart.length} */}
              {cart.length}
            </div>
          </div>
        </div>
        {/* </form> */}
      </div>
    </nav>
  );
};

export default Header;
