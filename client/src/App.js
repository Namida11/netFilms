import "./App.css";
import Home from "./pages/home";

function App() {
  return (
    <div className="App w-[100%] h-[100vh] bg-custom-image">
      <div className="bg-gradient-to-br from-black to-black  rounded-md w-[100%] h-[100vh] opacity-80 	">
        <Home />
      </div>
    </div>
  );
}

export default App;
