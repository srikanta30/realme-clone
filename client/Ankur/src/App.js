import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Slider from "./components/Slider";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Advertisement from "./components/Advertisements";
import SignIn from "./components/modals/SignIn";
import { DisplayAuth } from "./contexts/SliderDisplay";
import { useContext } from "react";
import SignUp from "./components/modals/SignUp";
function App() {
  let { state, setState } = useContext(DisplayAuth);
  return (
    <div className="App">
      <Header />
      <Search />
      <Slider />
      <Products />
      <Advertisement />
      <Footer />
      <SignIn state={state} setState={setState} />
      {/* <SignUp state={state} setState={setState} /> */}
    </div>
  );
}

export default App;
