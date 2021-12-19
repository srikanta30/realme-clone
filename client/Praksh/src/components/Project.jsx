import { useEffect, useState } from "react";
import "./Project.css";
{
  /* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> */
}
// copy this link inside index.html flie in real project
export const Project = () => {
  const [array, setArray] = useState([
    {
      id: 1,
      Image: "Assets/product1.png",
      Name: "realme Type C Cable 1",
      Detail: "",
      Price: 229,
    },
    {
      id: 2,
      Image: "/Assets/product2.png",
      Name: "realme Type C Cable ",
      Detail: "",
      Price: 599,
    },
    {
      id: 3,
      Image: "/Assets/product3.png",
      Name: "realme Type C Cable ",
      Detail: "",
      Price: 249,
      opinion: ["New", "Best Seller"],
    },
    {
      id: 4,
      Image: "/Assets/product4.png",
      Name: "realme Type C Super dart Ga... ",
      Detail: "7.6mm ultra narrow elb...",
      Price: 599,
      opinion: ["New"],
    },
    {
      id: 5,
      Image: "/Assets/product5.png",
      Name: "realme C20",
      Detail: "Scale up your fitness",
      Price: 1999,
      opinion: ["Use upto 4000 coins"],
    },
    {
      id: 6,
      Image: "/Assets/product6.png",
      Name: "realme 5 iconic case",
      Detail: "Scale up your fitness",
      Price: 3999,
      opinion: [],
    },
    {
      id: 7,
      Image: "/Assets/product7.png",
      Name: "realme smart scale",
      Detail: "Protect realme 5 forever",
      Price: 1499,
      opinion: [],
    },
    {
      id: 8,
      Image: "/Assets/product8.png",
      Name: "realme narzo 50A",
      Detail: "Mighty Performance inside",
      Price: 11999,
      opinion: ["New"],
    },
    {
      id: 9,
      Image: "/Assets/product9.png",
      Name: "realme C25 Y",
      Detail: "50 MP AI Camera",
      Price: 10999,
      opinion: [],
    },
    {
      id: 10,
      Image: "/Assets/product10.png",
      Name: "realme C21 Y",
      Detail: "Triple Camera, Real performance",
      Price: 10999,
      opinion: [],
    },
    {
      id: 11,
      Image: "/Assets/product11.png",
      Name: "realme GT NEO 2",
      Detail: "Everything in Neo",
      Price: 15999,
      opinion: ["Use upto 4000 coins"],
    },
    {
      id: 12,
      Image: "/Assets/product12.png",
      Name: "realme narzo 30",
      Detail: "Unleast Peak Performance",
      Price: 8999,
      opinion: ["Use upto 4000 coins"],
    },
  ]);

  const list = [
    {
      id: 1,
      Image: "Assets/product1.png",
      Name: "realme Type C Cable 1",
      Detail: "",
      Price: 229,
    },
    {
      id: 2,
      Image: "/Assets/product2.png",
      Name: "realme Type C Cable ",
      Detail: "",
      Price: 599,
    },
    {
      id: 3,
      Image: "/Assets/product3.png",
      Name: "realme Type C Cable ",
      Detail: "",
      Price: 249,
      opinion: ["New", "Best Seller"],
    },
    {
      id: 4,
      Image: "/Assets/product4.png",
      Name: "realme Type C Super dart Ga... ",
      Detail: "7.6mm ultra narrow elb...",
      Price: 599,
      opinion: ["New"],
    },
    {
      id: 5,
      Image: "/Assets/product5.png",
      Name: "realme C20",
      Detail: "Scale up your fitness",
      Price: 1999,
      opinion: ["Use upto 4000 coins"],
    },
    {
      id: 6,
      Image: "/Assets/product6.png",
      Name: "realme 5 iconic case",
      Detail: "Scale up your fitness",
      Price: 3999,
      opinion: [],
    },
    {
      id: 7,
      Image: "/Assets/product7.png",
      Name: "realme smart scale",
      Detail: "Protect realme 5 forever",
      Price: 1499,
      opinion: [],
    },
    {
      id: 8,
      Image: "/Assets/product8.png",
      Name: "realme narzo 50A",
      Detail: "Mighty Performance inside",
      Price: 11999,
      opinion: ["New"],
    },
    {
      id: 9,
      Image: "/Assets/product9.png",
      Name: "realme C25 Y",
      Detail: "50 MP AI Camera",
      Price: 10999,
      opinion: [],
    },
    {
      id: 10,
      Image: "/Assets/product10.png",
      Name: "realme C21 Y",
      Detail: "Triple Camera, Real performance",
      Price: 10999,
      opinion: [],
    },
    {
      id: 11,
      Image: "/Assets/product11.png",
      Name: "realme GT NEO 2",
      Detail: "Everything in Neo",
      Price: 15999,
      opinion: ["Use upto 4000 coins"],
    },
    {
      id: 12,
      Image: "/Assets/product12.png",
      Name: "realme narzo 30",
      Detail: "Unleast Peak Performance",
      Price: 8999,
      opinion: ["Use upto 4000 coins"],
    },
  ];

  // setArray(list);
  const Recommended = [
    {
      id: 1,
      Image: "/Assets/Recommended1.png",
      Name: "realme GT Master Edition",
      Detail: "Matery Beyond Speed",
      Price: "Rs 25,000",
      opinion: ["Use upto 4000 coins"],
    },
    {
      id: 2,
      Image: "/Assets/Recommended2.png",
      Name: "realme narzo 50i",
      Detail: "Mighty Performance Inside",
      Price: "Rs 7499",
      opinion: ["Use upto 4000 coins"],
    },
    {
      id: 3,
      Image: "/Assets/Recommended3.png",
      Name: "realme smart scale",
      Detail: "50 MP AI Camera",
      Price: "rs 10,999",
      opinion: ["New", "Best Seller"],
    },
    {
      id: 4,
      Image: "/Assets/Recommended4.png",
      Name: "realme Watch 2",
      Detail: "Scale up your fitness",
      Price: "Rs 2999",
      opinion: ["Use upto 4000 coins"],
    },
    {
      id: 5,
      Image: "/Assets/Recommended5.png",
      Name: "realme Buds Q2 Neo",
      Detail: "Quite Clear, Trust Wireless",
      Price: "Rs 1229",
      opinion: ["Use upto 4000 coins"],
    },
    {
      id: 6,
      Image: "/Assets/Recommended6.png",
      Name: "realme Type-C Cable",
      Detail: "",
      Price: "Rs 249",
      opinion: [],
    },
    {
      id: 7,
      Image: "/Assets/Recommended7.png",
      Name: "realme Micro-usb Cable",
      Detail: "",
      Price: "Rs 229",
      opinion: ["Use upto 200 coins"],
    },
  ];

  function sortingConditon() {
    let x = list.sort((a, b) => a.Price - b.Price);
    setArray(x);
    console.log("x", x);
  }

  return (
    <div>
      <div id="ProductTop">
        <div id="TopRow1">
          <input type="text" id="ProductInput" placeholder="type c cable" />
          <i class="fa fa-search" id="searchBar"></i>
        </div>

        <div id="TopRow2">
          <div>Category</div>
          <div id="TopRow2col2">
            <div className="TopRow2col2Left">
              <span> Newly Launched </span> | <span> realme Smartphones </span> | <span> narzo Smartphones </span> | <span>Laptops
              & Tablets  </span> | <span> Audio  </span> | <span>Smart Life</span> | <span>realme TV</span>
            </div>
            <div className="TopRow2col2Left">
              <span>Power Banks</span> | <span>Lifestyle</span> | <span> Accessories</span> | <span>Luggage and Backpacks</span>
            </div>
          </div>
          <div>
            <button
              id="FilterBtn"
              onClick={() => {
                sortingConditon();
              }}
            >
              <img src="/Assets/fliterVector.png" />
              Fliter
            </button>{" "}
          </div>
        </div>
      </div>
      <div id="ProductOuterBox">
        <div id="AllBtn">
          {["All", "Latest", "Sales", "Price"].map((el, i) => {
            return (
              <button id="ProductFilterBtn" key={i}>
                {el}
              </button>
            );
          })}
        </div>
 
        <p id="Heading1">Search results for “type c cable”</p>
        <div id="GridBox1">
          {array.map((ele, i) => {
            return (
              <div id="EachProduct" key={i}>
                <img id="ProductImg" src={ele.Image} alt="prod1" />
                <p id="ProductName">{ele.Name}</p>
                <p>{ele.Detail}</p>
                <p id="ProductPrice">Rs {ele.Price}</p>
              </div>
            );
          })}
        </div>
        <img src="Assets/nextPages.png" alt="paginationImg" id="paginationimage" />
        {/* pagination is remaining */}
        <p id="Heading1">Recommended</p>
        <div id="GridBox1">
          {Recommended.map((ele, i) => {
            return (
              <div id="EachProduct" key={i}>
                <img id="ProductImg" src={ele.Image} alt="prod1" />
                <p id="ProductName">{ele.Name}</p>
                <p>{ele.Detail}</p>
                <p id="ProductPrice">{ele.Price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
