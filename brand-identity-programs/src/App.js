import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Home from './pages';
import Programs from './pages/programs';
import ProgramsComparison from './pages/programsComparison';
import InterviewComparison from './pages/interviewComparison';
import Links from './pages/links';
import Interviews from './pages/interviews';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/programs' element={<Programs />} />
        <Route path='/Links' element={< Links/>} />
        <Route path='/interviews' element={< Interviews/>} />
        <Route path='/programs-comparison' element={< ProgramsComparison/>} />
        <Route path='/interviews-comparison' element={< InterviewComparison/>} />
      </Routes>
    </Router>
  );
}

export default App;
