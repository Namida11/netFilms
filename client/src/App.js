import "./App.css";
import Login from "./pages/login";
import Home from "./pages/home";
import { BrowserRouter, Router, Route, Link, Routes } from "react-router-dom";
import Favori from "./pages/favori";
import Registration from "./pages/registration";


function App() {
  
  return (
    <div className="App w-[100%] h-[100vh] overflow-y-auto position fixed  text-white bg-custom-image relative z-10 ">
      <div className="bg-custom-image fixed w-full h-full opacity-80 z-0"></div>
      <div className="bg-gradient-to-br from-black to-black overflow-y-auto  rounded-md w-full h-full opacity-80 z-0	">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/favori" element={<Favori />} />
            <Route path="/register" element={<Registration />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
