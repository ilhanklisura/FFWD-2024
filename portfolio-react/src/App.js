import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import "./App.css";

const App = () => {
   return (
      <>
         <Navbar />
         <div className="main-content">
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/portfolio" element={<Portfolio />} />
               <Route path="/blog" element={<Blog />} />
               <Route path="/contact" element={<Contact />} />
            </Routes>
         </div>
         <Footer />
      </>
   );
};

export default App;
