import { useState } from 'react'
import Navbar from './Sections/Navbar'
import Header from './Sections/Header'
import About from './Sections/About'
import Projects from './Sections/projects'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'
import './index.css'
function App() {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Projects />
    <Contact />
    <Footer />
    </>
  )
}

export default App
