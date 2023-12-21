import "./App.css";
import Login from "./pages/login";
import Home from "./pages/home";
import { BrowserRouter, Router, Route, Link, Routes } from "react-router-dom";
import Favori from "./pages/favori";

function App() {
  return (
    <div className="App w-[100%] h-[100vh] overflow-y-auto position fixed bg-custom-image ">
      <div className="bg-gradient-to-br from-black to-black overflow-y-auto position fixed rounded-md w-[100%] h-[100vh] opacity-80 	">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/favori" element={<Favori />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
