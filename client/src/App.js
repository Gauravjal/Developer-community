import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Routes from "./components/Routes/Routes.jsx";
import { fetchAllQuestions } from "./actions/Question";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions());
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <br />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
