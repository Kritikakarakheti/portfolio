import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Biography from "./pages/Biography";
import Header from "./components/header/Header";
import Projects from "./pages/Projects";
import Research from "./pages/Research";
import Honors from "./pages/Honors";
import Gallary from "./pages/Gallary";
import Blog from "./pages/Blog";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/footer/Footer";
import ParticlesComponent from "./components/ParticlesComponent";

function App() {
  const location = useLocation();
  return (
    <React.StrictMode>
      <div className="App bg-secondary text-primary bg-[rgba(0,0,0,0.6)]">
        <div className="absolute z-[10] inset-0">
          <ParticlesComponent />
        </div>
        <section className="wrapper-whole-page">
          <Header />
          <AnimatePresence mode="wait">
            <Routes key={location.pathname} location={location}>
              <Route path="/" element={<Hero />} />
              <Route path="/biography" element={<Biography />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/research" element={<Research />} />
              <Route path="/honors" element={<Honors />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/gallary" element={<Gallary />} />
            </Routes>
            <Footer />
          </AnimatePresence>
        </section>
      </div>
    </React.StrictMode>
  );
}

export default App;
