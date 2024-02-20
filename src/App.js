import React from "react";
import { Analytics } from '@vercel/analytics/react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import MobileNav from "./components/MobileNav";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import AboutUs from "./components/AboutUs";
export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <MobileNav />
        <Routes>
          <Route element={<Home />} path="/"></Route>
          <Route element={<AboutUs />} path="about"></Route>
          <Route element={<Projects />} path="projects"></Route>
          <Route element={<Contact />} path="contact"></Route>
        </Routes>
      </Router>
      <Analytics />
    </>
  );
}
