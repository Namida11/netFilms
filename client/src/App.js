import "./App.css";
import Home from "./pages/home";

function App() {
  return (
    <div className="App w-[100%] h-[100vh] overflow-y-auto position fixed bg-custom-image ">
      <div className="bg-gradient-to-br from-black to-black overflow-y-auto position fixed rounded-md w-[100%] h-[100vh] opacity-80 	">
        <Home />
      </div>
    </div>
  );
}

export default App;
