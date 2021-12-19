import "./Project.css";
export const Recommended = () => {

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

    return (
        <>
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
        </>
    )
}