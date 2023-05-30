import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Routes from "./components/Routes/Routes.jsx"
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <br/>
        <Routes/>
      </Router>
    </div>
  );
}

export default App;
