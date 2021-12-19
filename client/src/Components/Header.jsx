import "../Styles/header.modules.css";
import { DisplayAuth } from "../Contexts/SliderDisplay";
import { useContext } from "react";
function Header() {
  let { setState } = useContext(DisplayAuth);
  return (
    <>
      <div
        class="row"
        style={{
          // position: "-webkit-sticky",
          position: "sticky",
          top: "0px",
          background: "white",
        }}
      >
        <div className="top">
          <div className="top">
            <div className="topIn margin1">
              <p>realmenew</p>
            </div>
            <div className="topIn">Brand</div>
            <div className="topIn">Support</div>
            <div className="topIn">community</div>
            <div className="topIn">App</div>
            <div className="topIn">Bulk order</div>
            <div className="topIn">DIZO</div>
            <div className="topIn" style={{ borderRight: "none" }}>
              UI 3.0
            </div>
          </div>
          <div className="top">
            <div className="topIn" onClick={() => setState(true)}>
              Login
            </div>
            <div className="topIn">My Order</div>
            <div className="topIn margin2" style={{ borderRight: "none" }}>
              Cart
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
