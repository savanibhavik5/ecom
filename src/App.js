import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Carousel from "./component/Carousel";
import Product from "./Pages/Product";
import SideBarFilter from "./component/SideBarFilter";
import ProductComponent from "./component/ProductComponent";
import CartComponent from "./component/CartComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid p-0">
        <Header />
        {/* <Carousel /> */}
        <div className="p-3">
          <Routes>
            <Route exact path="/" element={<ProductComponent />} />
            <Route exact path="/cart" element={<CartComponent />} />
          </Routes>
          {/* <ProductComponent /> */}
          {/* <CartComponent /> */}
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
