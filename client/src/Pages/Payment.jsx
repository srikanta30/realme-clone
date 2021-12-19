import React from "react";
import Payments from "../Components/Payments/Payment";
import Header from "../Components/Header";
import FooterO from "../Components/FooterO";
import SearchForOthers from "../Components/SearchForOthers";

export const Payment = () => {
  return (
    <div>
      <Header />
      <SearchForOthers />
      <Payments />
      <FooterO />
    </div>
  );
};
