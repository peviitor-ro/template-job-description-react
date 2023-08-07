import React from "react";
import "./App.css";
import Header from "./components/Header";
import arrowLeft from "./assets/arrowLeft.svg";
import { data } from "./data";
import Job from "./components/Job";

const App = () => {
  return (
    <div className="app">
      <Header />

      <div className="jd">
        <main className="main">
          <div className="back__wrapper">
            <a href="/" className="backBtn">
              <img src={arrowLeft} alt="" />
              <p className="backTxt">Inapoi la locurile de munca</p>
            </a>
          </div>
          <Job {...data} />
        </main>
      </div>
    </div>
  );
};

export default App;
