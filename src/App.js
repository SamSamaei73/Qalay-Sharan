import { useState, useEffect } from "react";
import "./App.css";
import { css } from "@emotion/react";
import "./fonts/Inter.ttf";
import { Fade } from "react-awesome-reveal";
import Firstpage from "./components/Firstpage";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import ProductsPage from "./components/ProductsPage";
import ScrollToTop from "./components/Tools/ScrollTop";
import Login from "./components/Cpanel/Login";
import Cpanel from "./components/Cpanel/Cpanel";
import TableProduct from "./components/Cpanel/TableProduct";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const { t } = useTranslation();

  const override = css`
    display: flex;
    margin: 15rem auto;
  `;
  return (
    <div id="App">
      {/* {
  loading ?
  <HashLoader
  color={'#5979D1'} loading={loading} css={override} size={150} />

  : */}
      <div>
        <div className="container">
          <Router>
            <Routes>
              <Route exact path="/" element={<Firstpage />} />
              <Route exact path="/AboutUs" element={<AboutUs />} />
              <Route exact path="/Products" element={<Products />} />
              <Route exact path="/ProductsPage" element={<ProductsPage />} />
              <Route exact path="/Login" element={<Login />} />
              <Route exact path="/Cpanel" element={<Cpanel />} />
              <Route exact path="/TableProduct" element={<TableProduct />} />
            </Routes>
            <ScrollToTop/>
          </Router>
        </div>
      </div>
      {/* } */}
    </div>
  );
}

export default App;
