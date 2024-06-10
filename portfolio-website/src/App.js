import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Posts from "./pages/Posts";
import Contact from "./pages/Contact";

function App() {
   return (
      <div>
         <Navbar />
         <div style={{ padding: "20px" }}>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/portfolio" element={<Portfolio />} />
               <Route path="/posts" element={<Posts />} />
               <Route path="/contact" element={<Contact />} />
            </Routes>
         </div>
         <Footer />
      </div>
   );
}

export default App;
