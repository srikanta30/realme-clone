import React from "react";
import "../Styles/Cart.css";
import Header from "../Components/Header";
import FooterO from "../Components/FooterO";
import SearchForOthers from "../Components/SearchForOthers";
import { Recommended } from "../Components/Recommended";
import Commodity2 from "../Components/Address/Commodity2";

export const Cart = () => {
  return (
    <div>
      <Header />
      <SearchForOthers />
      <div className="upperbar">
        <p>realme Type-C Cable</p>
        <p>R-pass</p>
      </div>
      <hr />
      <div className="belowupperbar">
        <h1>My Cart</h1>
      </div>
      <div className="outertop">
        <div className="firsttop">
          <input type="radio" />
          <p>All</p>
        </div>
        <div className="secondtop">
          <p>Price</p>
          <p>Count</p>
          <p>Amount</p>
        </div>
      </div>
      <Commodity2 />
      <div className="pincodediv">
              <h3>Check Pincode:</h3>
              <div className="pincontainer">
              <input
          type="text"
          placeholder="Enter Pincode for delivery details"
          className="pincodebox"
        />
        <button className="checkbutton">Check</button>
              </div>
        
      </div>
      <div className="belowcart">
        <div>
          <h3>Continue Shopping</h3>₹ 200 More To Enjoy Free Shipping
        </div>
        <div>
          <div className="bottomflex"><p>Count</p><p>x1</p></div>
          <div className="bottomflex"><p><strong>Total</strong></p><p><strong>₹ 299</strong></p></div>
          <button className="buybutton" onClick={() => {window.location.href="/address"}}>Place Order (1)</button>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <div>
          <Recommended />
        </div>
        <FooterO />
      </div>
    </div>
  );
};
