import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Search } from "../Pages/Search";
import { Product } from "../Pages/Product";
import { Cart } from "../Pages/Cart";
import { Address } from "../Pages/Address";
import { Order } from "../Pages/Order";
import { Payment } from "../Pages/Payment";

const Router = () => {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/address" element={<Address />} />
        <Route path="/order" element={<Order />} />
        <Route path="/payment" element={<Payment/>} />
      </Routes>
    </div>
  );
};

export default Router;
