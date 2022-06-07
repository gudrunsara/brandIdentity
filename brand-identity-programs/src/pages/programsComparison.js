import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import ProgramsComparisonComponent from '../components/ProgramsComparisonComponent';

  
const ProgramsComparison = () => {
  return (
    <div>
      <Navbar />
      <ProgramsComparisonComponent />
      <Footer />
    </div>
  );
};
  
export default ProgramsComparison;