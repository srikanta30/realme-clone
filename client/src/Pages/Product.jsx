import React from "react";
import "../Styles/Product.css";
import Header from "../Components/Header";
import FooterO from "../Components/FooterO";
import SearchForOthers from "../Components/SearchForOthers";
import { Recommended } from "../Components/Recommended";

export const Product = () => {
  const [count, setCount] = React.useState(1);
  const plusCount = () => {
    setCount(count + 1);
  }
  const minusCount = () => {
    setCount(count - 1);
  }
  return (
    <div>
      <Header />
      <SearchForOthers/>
          <div className="upperbar"><p>realme Type-C Cable</p><p>R-pass</p></div>
<hr/>
          <div className="product-container">
        <div className="leftcontainer">
          <img src="../Product/product1.png" alt="" style={{ width: 624 }} />
          <div className="previewbox">
            <img src="../Product/preview1.png" alt="" style={{ width: 75 }} />
            <img src="../Product/preview2.png" alt="" style={{ width: 75 }} />
            <img src="../Product/preview3.png" alt="" style={{ width: 75 }} />
            <img src="../Product/preview4.png" alt="" style={{ width: 75 }} />
          </div>
        </div>
        <div className="rightcontainer">
                  <h3>realme Type-C Cable (Black and Yellow)</h3>
                  <h1>₹ 299</h1>
                  <hr/>
                  <div className="newtag">New</div>
                  <div><p><strong>Freecharge:</strong> Get 15% cashback minimum upto Rs75/- </p></div>
                  <hr />
                  <div className="shippingstrip"><div><img src="../Product/circle.png" alt=""/> Free Shipping</div> <div><img src="../Product/circle.png" alt=""/> Secure Payment </div> <div><img src="../Product/circle.png" alt=""/> COD </div> </div>
                  <hr />
                  <h3>Color:</h3>
                  <div className="insidectabox"><button className="bybutton"><img src="../Product/yellowcircle.png" alt="" style={{width: 20, marginRight: 5}}/>Black and Yellow</button><button className="whbutton">White</button></div>
                  <h3 className="quantityheader">Quantity:</h3>
          <div className="counter"><img src="../Product/minus.png" alt="" onClick={minusCount}/><div><h3>{ count }</h3></div><img src="../Product/plus.png" alt="" onClick={plusCount}/></div>
                  <h4>Pincode:</h4>
                  <div className="pincodediv">
                      <input type="text" placeholder="Enter Pincode for delivery details" className="pincodebox"/>
                      <button className="checkbutton">Check</button>
                  </div>
                  <div className="ctabox">
            <div className="insidectabox"><p>Black and Yellow</p> <p>x{ count }</p> <p>₹ 299</p></div>
                      <div className="insidectabox"><p><strong>Total</strong></p> <h1>₹ { count * 299}</h1></div>
                      <div className="insidectabox"><button className="atcbutton">Add To Cart</button> <button className="bnbutton" onClick={()=>{window.location.href="/cart"}}>Buy Now</button></div>
                  </div>
        </div>
      </div>
      <div style={{textAlign:"center"}}>
      <div >
      <Recommended/>
      </div>
      <div>
          <img src="../Product/image1.jpg" alt="" style={{ width: 1226 }} />
          <img src="../Product/image2.jpg" alt="" style={{ width: 1226 }} />
          <img src="../Product/image3.jpg" alt="" style={{ width: 1226 }} />
          <img src="../Product/image4.jpg" alt="" style={{ width: 1226 }} />
          <img src="../Product/image5.jpg" alt="" style={{ width: 1226 }} />
          <img src="../Product/image6.jpg" alt="" style={{width: 1226}}/>
      </div>
        <FooterO />
        </div>
    </div>
  );
};
