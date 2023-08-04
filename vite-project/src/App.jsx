import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import arrowLeft from "./assets/arrowLeft.svg";
import { data } from "./data";
import Job from "./components/Job";

const App = () => {
  const handleBack = () => {
    // To add back button functionality here
    console.log("Back button clicked!");
  };

  return (
    <div className="header columnFlex">
      <BrowserRouter>
        <Navbar />
        <div className="jobDesciptionCard columnFlex">
          {/* Add link to for back button */}
          <Link to="/" className="backBtnContainer" onClick={handleBack}>
            <img src={arrowLeft} alt="" />
            <p className="backTxt">Inapoi la locurile de munca</p>
          </Link>
          <Routes>
            {/* To add future Routes here */}
            <Route
              path="/"
              exact
              element={
                <>
                  <Job {...data} />
                </>
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
