import "./App.css";
import Home from "./pages/home";

function App() {
  return (
    <div className="App w-[100%] h-screen bg-fixed bg-custom-image ">
      <div className="bg-gradient-to-br from-black to-black  rounded-md w-[100%] h-screen opacity-80 bg-fixed	">
        <Home />
      </div>
    </div>
  );
}

export default App;
