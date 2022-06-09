import React from 'react';
// Components
import Footer from '../components/Footer';
import FrontPageLinks from '../components/FrontPageLinks';
import Navbar from '../components/Navbar';
import FrontPageHeader from '../components/FrontPageHeader';
import GoToTop from '../components/GoToTop.js';


const Home = () => {
  return (
    <div>
      <Navbar />
      {/* About */}
      <FrontPageHeader></FrontPageHeader>
      {/* Tabs */}
      <div>
        <FrontPageLinks></FrontPageLinks>
      </div>
      <Footer />
      <GoToTop></GoToTop>
    </div>
  );
};
  
export default Home;