import logo from './logo.svg';
import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Home from './pages';
import Programs from './pages/programs';
import Links from './pages/links';
import Interviews from './pages/interviews';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/programs' element={<Programs />} />
        <Route path='/links' element={< Links/>} />
        <Route path='/interviews' element={< Interviews/>} />
      </Routes>
    </Router>
  );
}

export default App;
