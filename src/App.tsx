import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Properties from './pages/Properties';
import PropertyDetail from './pages/PropertyDetail';
import Investment from './pages/Investment';
import Contact from './pages/Contact';
import './App.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-reroyal-darkest body">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/:slug" element={<PropertyDetail />} />
          <Route path="/investment" element={<Investment />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <BackToTop />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
