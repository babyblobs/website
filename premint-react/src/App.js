import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

window.addEventListener("load", AOS.refresh);

export default App;
