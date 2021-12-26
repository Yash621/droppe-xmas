import React from 'react';
import './App.css';
import Main from "./components/Main";
import MyCart from "./components/MyCart/MyCart";
import AppCSS from "./App.module.css";
import { FaTree } from "react-icons/fa";

function App() {
  // Main Elements are All Childrens with the products and approved and discarded items components.
  //MyCart is the Modal with the Cart And there is also the Submit of the cart to the API.
  return (
    <div className="App">
      <h1 className={AppCSS.logo}>
        <FaTree /> Droppe Xmas <FaTree />
      </h1>
      <div style={{height: '100%'}}>
        <div
          style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <MyCart />
        </div>
        <Main />
      </div>
  
    </div>
  );
}

export default App;
