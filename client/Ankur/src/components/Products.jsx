import "./products.modules.css";
import { productPhone } from "./productPlace";
function Products() {
  let productList1 = [
    {
      id: 1,
      src: "Assets/Card 1.png",
    },
    {
      id: 2,
      src: "Assets/Card 7.png",
    },
    {
      id: 3,
      src: "Assets/Card 8.png",
    },
    {
      id: 4,
      src: "Assets/Card 9.png",
    },
  ];
  let productList2 = [
    {
      id: 1,
      src: "Assets/Card 2.png",
    },
    {
      id: 2,
      src: "Assets/Card 11.png",
    },
    {
      id: 3,
      src: "Assets/Card 12.png",
    },
    {
      id: 4,
      src: "Assets/Card 13.png",
    },
  ];
  return (
    <>
      <div>
        <h2
          style={{ textAlign: "left", fontFamily: "Sans", marginLeft: "4.5vw" }}
        >
          Gone in Flash
        </h2>
        <div
          style={{ display: "flex", justifyContent: "space-around" }}
          class="row"
        >
          {productList1.map((e) => {
            return (
              <div key={e.id} class="col">
                <img src={e.src} />
              </div>
            );
          })}
        </div>
        <div>
          <h2
            style={{
              textAlign: "left",
              fontFamily: "Sans",
              marginLeft: "4.5vw",
            }}
          >
            ONLY HERE
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginLeft: "4vw",
            }}
            class="row"
          >
            {productList2.map((e) => {
              return (
                <div key={e.id} class="col">
                  <img src={e.src} />
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
            <div class="row">
              <p style={{ fontWeight: "bold" }} className="para" class="col">
                Recommended
              </p>
              <p style={{ fontWeight: "bold" }} className="para" class="col">
                New Launches
              </p>
              <p style={{ fontWeight: "bold" }} className="para" class="col">
                Bestsellers
              </p>
            </div>
          </div>
          <div style={{ color: "#999999" }} class="col">
            View more>
          </div>
        </div>
      </div>
      <div>
        <div class="row" style={{ width: "96vw", marginLeft: "3vw" }}>
          {productPhone.map((x) => {
            return (
              <div key={x.id} class="col">
                <img class="phones" src={x.src} />
              </div>
            );
          })}
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h2 style={{ textAlign: "left", marginLeft: "4vw" }}>Smart Life</h2>
        </div>
        <div class="col">
          <p
            style={{
              textAlign: "right",
              marginRight: "10vh",
              color: "#999999",
            }}
          >
            View more>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col" style={{ marginLeft: "4vw" }}>
          <img src="Assets/Frame 1038542.png" />
        </div>
        <div class="row">
          <div class="col" style={{ marginLeft: "3vw" }}>
            <img src="Assets/Frame 1038543.png" />
          </div>
          <div class="col">
            <img src="Assets/Large card 4.png" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Products;
