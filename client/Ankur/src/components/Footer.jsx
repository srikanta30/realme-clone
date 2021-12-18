import "./footer.modules.css";
function Footer() {
  return (
    <>
      <div>
        <div
          class="row"
          style={{ width: "70vw", marginLeft: "15vw", marginTop: "8vh" }}
        >
          <div class="col">
            <img src="Icons/icon 1.png" />
          </div>
          <div class="col">
            <img src="Icons/icon 2.png" />
          </div>
          <div class="col">
            <img src="Icons/icon 3.png" />
          </div>
          <div class="col">
            <img src="Icons/icon 4.png" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "10vh",
          }}
          class="row"
        >
          <div class="col">
            <div>
              <h5 style={{ fontWeight: "bolder" }}>Recommended</h5>
            </div>
            <div class="paraDiv topSpace">
              <p className="para">realme narzo 5QA</p>
            </div>
            <div class="paraDiv">
              <p className="para">realme narzo 5QI</p>
            </div>
            <div class="paraDiv">
              <p className="para">realme Bs 5G</p>
            </div>
            <div class="paraDiv">
              <p className="para">realme Bi</p>
            </div>
            <div class="paraDiv">
              <p className="para">realme GT 5G</p>
            </div>
            <div class="paraDiv">
              <p className="para">realme GT Master Edition</p>
            </div>
            <div class="paraDiv">
              <p className="para">realme C25Y</p>
            </div>
            <div class="paraDiv">
              <p className="para">realme X7 Max 5G</p>
            </div>
            <div style={{ marginTop: "10vh" }}>
              <p>India(English/INR)</p>
              <p style={{ fontSize: "small" }}>
                2018-2021 realme. All Rights reserved.
              </p>
            </div>
          </div>
          <div class="col">
            <div>
              <h5
                style={{
                  fontWeight: "bolder",
                  textAlign: "left",
                  marginLeft: "4.5vw",
                }}
              >
                Support{" "}
              </h5>
            </div>
            <div class="paraDiv  topSpace">
              <p className="para">FAQ</p>
            </div>
            <div class="paraDiv">
              <p className="para">Troubleshooting</p>
            </div>
            <div class="paraDiv">
              <p className="para">User Guide</p>
            </div>
            <div class="paraDiv">
              <p className="para">Service Centers</p>
            </div>
            <div class="paraDiv">
              <p className="para">E waste Management</p>
            </div>
            <div class="paraDiv">
              <p className="para">realme coins</p>
            </div>
          </div>
          <div class="col">
            <div>
              <h5
                style={{
                  fontWeight: "bolder",
                  textAlign: "left",
                  marginLeft: "4.5vw",
                }}
              >
                About realme{" "}
              </h5>
            </div>
            <div class="paraDiv  topSpace">
              <p className="para">Our Brand</p>
            </div>
            <div class="paraDiv">
              <p className="para">Newsroom</p>
            </div>
            <div class="paraDiv">
              <p className="para">Real Store</p>
            </div>
            <div class="paraDiv">
              <p className="para">Bulk Order</p>
            </div>
            <div class="paraDiv">
              <p className="para">E waste Management</p>
            </div>
          </div>
          <div class="col">
            <div>
              <h5
                style={{
                  fontWeight: "bolder",
                  textAlign: "left",
                  marginLeft: "4.5vw",
                }}
              >
                Contact realme{" "}
              </h5>
            </div>
            <div class="paraDiv  topSpace">
              <p className="para">service@realme.com</p>
            </div>
            <div class="paraDiv">
              <p className="para">orders.in@realme.com</p>
            </div>
          </div>

          <div class="col" style={{ marginLeft: "-4vw" }}>
            <div style={{ marginTop: "15vh" }}>
              <h1>1800 102 2777</h1>
              <p style={{ margin: "0", color: "grey", fontSize: "small" }}>
                9:00, 18:00, MON-SUN <br /> Including Holidays
              </p>
              <button className="chatButton">
                <img src="Icons/Chat support.png" />
                CHAT SUPPORT
              </button>
              <p
                style={{
                  margin: "0",
                  color: "grey",
                  fontSize: "small",
                  marginTop: "3vh",
                }}
              >
                9:00, 18:00, MON-SUN <br /> Including Holidays
              </p>
              <div class="row" style={{ marginTop: "4vh" }}>
                <img
                  class="col"
                  style={{ width: "5px" }}
                  src="Icons/Social 2.png"
                  alt="twitter"
                />
                <img
                  class="col"
                  style={{ width: "5px" }}
                  src="Icons/Social 2.png"
                  alt=""
                />
                <img
                  class="col"
                  style={{ width: "5px" }}
                  src="Icons/Social 1.png"
                  alt=""
                />
                <img
                  class="col"
                  style={{ width: "5px" }}
                  src="Icons/Social 4.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
