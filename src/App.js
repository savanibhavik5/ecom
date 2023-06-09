import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Product from "./Pages/Product";
import SideBarFilter from "./component/Filter";
import ProductComponent from "./component/ProductComponent";
import CartComponent from "./component/CartComponent";
import Men from "./Pages/Men";
import Baby from "./Pages/Baby";
import Women from "./Pages/Women";
import Singleproduct from "./Pages/Singleproduct";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid p-0">
        <Header />

        <div>
          <Routes>
            <Route exact path="/" element={<ProductComponent />} />
            <Route exact path="cart" element={<CartComponent />} />
            <Route exact path="/men" element={<Men />} />
            <Route exact path="/women" element={<Women />} />
            <Route exact path="/baby" element={<Baby />} />
            <Route
              exact
              path="/singleproduct/:id"
              element={<Singleproduct />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
