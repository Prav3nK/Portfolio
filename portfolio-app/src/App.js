import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import First from './components/First/first';
import About from './components/About/about';
import Projects from './components/Projects/project';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import Resume from './components/Resume/Resume'


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<First />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />

            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
