import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Notes from "./components/pages/Notes";
import PYQ from "./components/pages/PYQ";
import Resources from "./components/pages/Resources";
import Updates from "./components/pages/Updates";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";
import Members from "./components/pages/Members";
import Info from "./components/pages/Info";
import FAQ from "./components/pages/FAQ";
import Feedback from "./components/pages/Feedback";
import { Analytics } from "@vercel/analytics/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/pyq" element={<PYQ />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/members" element={<Members />} />
        <Route path="/info" element={<Info />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Analytics />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
