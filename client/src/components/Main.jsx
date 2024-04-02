import React from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";
// import Home from './components/Home';
import About from "./About";
import Footer from "./Footer";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Main() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Banner />
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
