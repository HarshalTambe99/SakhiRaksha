// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EmergencyPage from './pages/EmergencyPage';
import TipsPage from './pages/TipsPage';
import ResourcesPage from './pages/ResourcesPage';
import FeedbackPage from './pages/FeedbackPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/emergency" element={<EmergencyPage />} />
        <Route path="/tips" element={<TipsPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

