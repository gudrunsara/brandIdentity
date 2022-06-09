import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import InterviewComparisonComponent from '../components/InterviewComparisonComponent';
import GoToTop from '../components/GoToTop.js';


  
const InterviewComparison = () => {
  return (
    <div>
      <Navbar />
      <InterviewComparisonComponent />
      <Footer />
      <GoToTop></GoToTop>
    </div>
  );
};
  
export default InterviewComparison;