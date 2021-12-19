import Header from "../Components/Header";
import FooterO from "../Components/FooterO";
import SearchForOthers from "../Components/SearchForOthers";
import "../Styles/Success.css";

export const Success = () => {
  return (
    <>
      <Header />
          <SearchForOthers />
          <div className="maindiv">
          <h1>Order Successful</h1>
    <img class="imagegif" src="https://www.cntraveller.in/wp-content/themes/cntraveller/images/check-circle.gif" alt=""/>
              <h4>Thank you for shopping with us!</h4>
              <button className="bnbutton" onClick={() => {window.location.href="/"}}>Continue Shopping</button>
          </div>
          
      <FooterO />
    </>
  );
};
