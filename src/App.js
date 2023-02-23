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
            </Routes>
          </Router>
        </div>
      </div>
      {/* } */}
    </div>
  );
}

export default App;
