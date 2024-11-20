import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import LivingRoom from './pages/LivingRoom';
import Kitchen from './pages/Kitchen';
import Bedroom from './pages/Bedroom';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-neutral-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/living-room" element={<LivingRoom />} />
            <Route path="/kitchen" element={<Kitchen />} />
            <Route path="/bedroom" element={<Bedroom />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;