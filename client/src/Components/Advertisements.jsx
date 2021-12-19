import { laptops } from "./productPlace";
import "../Styles/advertisements.modules.css";
function Advertisement() {
  return (
    <>
      <div style={{ width: "90vw", marginLeft: "5vw" }}>
        <div class="row">
          {laptops.map((e) => {
            return (
              <div class="col phones">
                <img style={{ width: "15vw" }} src={e.src} alt="img" />
              </div>
            );
          })}
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h2>Smartphones</h2>
        </div>
        <div class="col">
          <div class="row" style={{ width: "600px" }}>
            <p style={{ fontWeight: "bold" }} className="para" class="col">
              Accessories
            </p>
            <p style={{ fontWeight: "bold" }} className="para" class="col">
              Audio
            </p>
            <p style={{ fontWeight: "bold" }} className="para" class="col">
              Lifestyle
            </p>
            <p style={{ fontWeight: "bold" }} className="para" class="col">
              Other Accessories
            </p>
          </div>
        </div>
        <div style={{ color: "#999999" }} class="col">
          View More...
        </div>
      </div>
      <div class="row">
        <div style={{ marginTop: "2vh", marginLeft: "10px" }}>
          <img src="Assets/Frame 1038540.png" alt="" />
        </div>

        <div style={{ marginTop: "2vh", marginLeft: "10px" }}>
          {" "}
          <img src="Assets/Frame 1038541.png" alt="" />
        </div>
      </div>
      <div class="row" style={{ width: "98vw", marginLeft: "1vw" }}>
        <img src="Assets/Footer image.png" alt="footer" />
      </div>
    </>
  );
}
export default Advertisement;
