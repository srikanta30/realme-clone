import React from "react";
import "../Styles/Product.css";

export const Product = () => {
  return (
      <div>
          <div className="upperbar"><p>realme Type-C Cable</p><p>R-pass</p></div>
<hr/>
          <div className="product-container">
        <div className="leftcontainer"></div>
        <div className="rightcontainer">
                  <h3>realme Type-C Cable (Black and Yellow)</h3>
                  <h1>₹ 299</h1>
                  <hr/>
                  <div>New</div>
                  <div><p><strong>Freecharge:</strong> Get 15% cashback minimum upto Rs75/- <a href="/home">Learn More...</a> </p></div>
                  <hr />
                  <div>Free Shipping Secure Payment COD</div>
                  <hr />
                  <h3>Color:</h3>
                  <div className="insidectabox"><button>Black and Yellow</button><button>White</button></div>
                  <h3>Quantity:</h3>
                  <div>Choose Quantity</div>
                  <h4>Pincode:</h4>
                  <div>
                      <input type="text" placeholder="Enter Pincode for delivery details" />
                      <button>Check</button>
                  </div>
                  <div className="ctabox">
                      <div className="insidectabox"><p>Black and Yellow</p> <p>x1</p> <p>₹ 299</p></div>
                      <div className="insidectabox"><p><strong>Total</strong></p> <h1>₹ 299</h1></div>
                      <div className="insidectabox"><button>Add To Cart</button> <button>Buy Now</button></div>
                  </div>
        </div>
      </div>
    </div>
  );
};
