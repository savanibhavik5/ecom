import axios from "axios";
import React, { useState, useEffect } from "react";

const Carousel_Img = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide pb-2"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
      </ol>
      <div className="carousel-inner carousel_div">
        <div className="carousel-item active carousel_img">
          <img
            className="d-block w-100 carousel_img"
            src="https://cdn1.expertreviews.co.uk/sites/expertreviews/files/2019/08/best_online_clothes_shops.jpg"
            alt="Second slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100 carousel_img"
            src="https://www.ecommercenext.org/wp-content/uploads/2020/03/shutterstock_746773891.jpg"
            alt="Third slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100 carousel_img"
            src="https://static.vecteezy.com/system/resources/previews/001/591/062/non_2x/fashion-clothes-store-background-free-vector.jpg"
            alt="Third slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100 carousel_img"
            src="https://fintechnations.com/wp-content/uploads/2021/01/online-shopping-3d-rendering-clothes-online-shop-online-payment-delivery-concept-sale-banner-bag-dis-scaled.jpg"
            alt="Third slide"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next text-dark"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span
          className="carousel-control-next-icon text-dark"
          aria-hidden="true"
        ></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel_Img;
