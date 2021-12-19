import React from "react";
import "../Styles/Cart.css";

export const Cart = () => {
  return (
    <div>
      <div className="upperbar">
        <p>realme Type-C Cable</p>
        <p>R-pass</p>
      </div>
          <hr />
          <div className="belowupperbar"><h1>My Cart</h1></div>
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
          <div className="mainbar">
              <div className="innerfirsttop">
                  <input type="radio" />
                  <img src="https://picsum.photos/100/100" alt="cartimage" />
                  <div>
                      <h3>realme Type-C Cable</h3>
                      <p>realme Type-C Cable</p>
                  </div>
              </div>
              <div className="secondtop">
                  <p>Price</p>
                  <div>Quantity</div>
                  <p>Amount</p>
              </div>
              
          </div>
    </div>
  );
};
