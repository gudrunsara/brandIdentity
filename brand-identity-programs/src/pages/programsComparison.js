import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GoToTop from '../components/GoToTop.js';

import ProgramsComparisonComponent from '../components/ProgramsComparisonComponent';

  
const ProgramsComparison = () => {
  return (
    <div>
      <Navbar />
      <ProgramsComparisonComponent />
      <Footer />
      <GoToTop></GoToTop>
    </div>
  );
};
  
export default ProgramsComparison;