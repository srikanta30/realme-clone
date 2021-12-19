import "../Styles/search.modules.css";
import { DisplayAuth } from "../Contexts/SliderDisplay";
import { useContext } from "react";
function SearchForOthers() {
  let { setDisplay } = useContext(DisplayAuth);
  function handleDiv() {
    //alert("open search div");
    let div = document.getElementById("searchBox");
    div.style.display = "block";
    setDisplay("none");
  }
  return (
    <>
      <div class="row">
        <div className="searchDiv">
          <div className="margin1">
            <img
              style={{ marginTop: "5px" }}
              src="../realme-logo 2.png"
              alt="logo"
            />
          </div>
          <div>realme smartphones</div>
          <div>narzo smartphones</div>
          <div>realme Tv</div>
          <div>Tablet & Laptop</div>
          <div>Audio</div>
          <div>Smart life</div>
          <div>Accessories & Lifestyles</div>
          <div className="margin2" onClick={handleDiv}>
            <img
              style={{ marginTop: "5px", cursor: "pointer" }}
              src="../Group.png"
            />
          </div>
        </div>
      </div>
      {/* <SearchDiv style={{ color: "red" }} /> */}
      <div class="row" id="searchBox">
        <div style={{ display: "grid", justifyContent: "center" }}>
          <div
            class="search"
            style={{
              width: "80vw",
              height: "6vh",
            }}
          >
            <input
              style={{
                border: "none",
                width: "90%",
                height: "5.3vh",
                paddingRight: "30%",
                outline: "none",
              }}
              placeholder="Search"
            />
            <img
              onClick={() => {
                alert("move to search page");
              }}
              src="../Icons/Group 8.png"
              alt=""
            />
          </div>
        </div>
        <div class="row" style={{ textAlign: "left" }}>
          <p style={{ marginLeft: "12.3vw", color: "#999999" }}>Hot searches</p>
          <p style={{ marginLeft: "12.3vw" }}>realme GT NEO 2</p>
          <p style={{ marginLeft: "12.3vw" }}>realme Narzo 50i</p>
          <p style={{ marginLeft: "12.3vw" }}>realme Narzo 50A</p>
          <p style={{ marginLeft: "12.3vw" }}>realme Book</p>
          <p style={{ marginLeft: "12.3vw" }}>realme GT Master Edition</p>
          <p style={{ marginLeft: "12.3vw" }}>realme GT 5G</p>
          <p style={{ marginLeft: "12.3vw" }}>realme narzo 30 5G</p>
          <p style={{ marginLeft: "12.3vw" }}>realme 8 5G</p>
          <p style={{ marginLeft: "12.3vw" }}>realme Buds Wireless 2 Neo</p>
        </div>
      </div>
    </>
  );
}
export default SearchForOthers;
