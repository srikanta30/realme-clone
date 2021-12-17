import "./header.modules.css";
import { DisplayAuth } from "../contexts/SliderDisplay";
import { useContext } from "react";
function Header() {
  let { setState } = useContext(DisplayAuth);
  return (
    <>
      <div
        style={{
          position: "-webkit-sticky",
          position: "sticky",
          top: "0px",
          background: "white",
        }}
      >
        <div className="top">
          <div className="top">
            <div className="topIn margin1">realmenew</div>
            <div className="topIn">Brand</div>
            <div className="topIn">Support</div>
            <div className="topIn">community</div>
            <div className="topIn">App</div>
            <div className="topIn">Bulk order</div>
            <div className="topIn">DIZO</div>
            <div className="topIn  border">UI 3.0</div>
          </div>
          <div className="top">
            <div className="topIn" onClick={() => setState(true)}>
              Login
            </div>
            <div className="topIn">My Order</div>
            <div className="topIn border  margin2">Cart</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
