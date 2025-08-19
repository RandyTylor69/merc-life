import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Mercs from "./pages/Mercs";
import MercDetail from "./pages/MercDetail";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import "./App.css";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import HostMercs from "./pages/Host/HostMercs";
import HostMercDetail from "./pages/Host/HostMercDetail";
import HMInfo from "./pages/Host/HostMerc/HMInfo";
import HMPricing from "./pages/Host/HostMerc/HMPricing";
import HMPhotos from "./pages/Host/HostMerc/HMPhotos";
import InvalidPage from "./pages/InvalidPage";
import AuthRequired from "./components/AuthRequired";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="mercs" element={<Mercs />} />
          <Route path="login" element={<Login />} />
          <Route path="mercs/:id" element={<MercDetail />} />
          <Route path="*" element={<InvalidPage />} />

          {/** ------ Auth Route ----------------- */}

          <Route element={<AuthRequired />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="mercs" element={<HostMercs />} />

              <Route path="mercs/:id" element={<HostMercDetail />}>
                <Route index element={<HMInfo />} />
                <Route path="pricing" element={<HMPricing />} />
                <Route path="photos" element={<HMPhotos />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
