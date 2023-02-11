import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllServices from "./Pages/AllServices";
import Home from "./Pages/Home";
import Page404 from "./Pages/Page404";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Service from "./Pages/Service";
import FAQs from "./Pages/FAQs";
import ContactUs from "./Pages/ContactUs";
import Team from "./Pages/Team";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<AllServices />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/services/:title" element={<Service />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
