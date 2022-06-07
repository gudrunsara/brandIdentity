import React, {Component } from 'react';
import Navbar from '../components/Navbar';
import LinksComponent from '../components/Links';


  
class Links extends Component {
  render() {
  return (
    <div>
      <Navbar />
      <LinksComponent />
    </div>
  );
}
}
  
export default Links;