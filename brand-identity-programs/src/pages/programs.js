import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GoToTop from '../components/GoToTop.js';

import ProgramsComponent from '../components/ProgramsComponent';

  
const Programs = () => {
  return (
    <div>
      <Navbar />
      <ProgramsComponent />
      <Footer />
      <GoToTop></GoToTop>
    </div>
  );
};
  
export default Programs;