import React from "react";

const Header = () => {
  return (
    <div className="row  d-flex align-items-center justify-content-between p-0 header-position">
      <div className="col-md-4">
        <h3>
          <span className="bg-danger text-white logo-bg p-2">
            <i className="fa-solid fa-shop fa-fade"></i>
          </span>
          Capital Shop
        </h3>
      </div>
      <div className="col-md-6 ">
        <div className="d-flex justify-content-end p-2">
          <h6 className="px-2">Home</h6>
          <h6 className="px-2">Men</h6>
          <h6 className="px-2">Women</h6>
          <h6 className="px-2">Baby</h6>
          <h6 className="px-2">Blog</h6>
          <h6 className="px-2">Collection</h6>
        </div>
      </div>
      <div className="col-md-2 ">
        <div className="d-flex justify-content-end p-2">
          <i className="fa fa-user mx-2"></i>
          <i className="fa-solid fa-cart-shopping mx-2"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
