import Navbar from "./components/navbar/Navbar";
import Home from "./components/sections/Home";

function App() {
  return (
    <div>
      <div className="left">
        <Navbar />
      </div>
      <div className="right">
        <Home />
      </div>
    </div>
  );
}

export default App;
