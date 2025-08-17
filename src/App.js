import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Mercs from "./pages/Mercs";
import MercDetail from "./pages/MercDetail";
import Layout from "./components/Layout";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mercs" element={<Mercs />} />
          <Route path="/mercs/:id" element={<MercDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
