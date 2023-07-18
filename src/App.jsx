import React from 'react'
import Navbar from './sections/navbar/Navbar';
import Home from './sections/home/Home';
import About from './sections/about/About';
import Skills from './sections/skills/Skills';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import { Route, Routes } from "react-router-dom"
import Testimonials from './sections/testimonials/Testimonials';


const App = () => {
  return (
    <main>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Skills" element={<Skills />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App