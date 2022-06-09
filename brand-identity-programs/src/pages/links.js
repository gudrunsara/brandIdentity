import React, {Component } from 'react';
import Navbar from '../components/Navbar';
import LinksComponent from '../components/Links';
import GoToTop from '../components/GoToTop.js';



  
class Links extends Component {
  render() {
  return (
    <div>
      <Navbar />
      <LinksComponent />
      <GoToTop></GoToTop>
    </div>
  );
}
}
  
export default Links;