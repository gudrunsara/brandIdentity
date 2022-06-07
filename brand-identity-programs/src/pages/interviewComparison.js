import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import InterviewComparisonComponent from '../components/InterviewComparisonComponent';

  
const InterviewComparison = () => {
  return (
    <div>
      <Navbar />
      <InterviewComparisonComponent />
      <Footer />
    </div>
  );
};
  
export default InterviewComparison;