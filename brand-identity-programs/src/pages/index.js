import React from 'react';
// Components
import Footer from '../components/Footer';
import FrontPageLinks from '../components/FrontPageLinks';
import FrontPageHeader from '../components/FrontPageHeader';

const Home = () => {
  return (
    <div>
      {/* About */}
      <FrontPageHeader></FrontPageHeader>
      {/* Tabs */}
      <div>
        <FrontPageLinks></FrontPageLinks>
      </div>
      <Footer />
    </div>
  );
};
  
export default Home;