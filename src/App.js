import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
