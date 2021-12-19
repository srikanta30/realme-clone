import Header from "../Components/Header";
import Search from "../Components/Search";
import Slider from "../Components/Slider";
import Products from "../Components/Products";
import Footer from "../Components/Footer";
import Advertisement from "../Components/Advertisements";
import SignIn from "../Components/SignIn";
import { DisplayAuth } from "../Contexts/SliderDisplay";
import { useContext } from "react";
import SignUp from "../Components/SignUp";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Home = () => {
    let { state, setState } = useContext(DisplayAuth);
    return (
        <div style={{textAlign: 'center'}}>
      <Header />
      <Search />
      <Slider />
      <Products />
      <Advertisement />
      <Footer />
      {/* <SignIn state={state} setState={setState} /> */}
      <SignUp state={state} setState={setState} />
        </div>
    )
}

