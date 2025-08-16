import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
