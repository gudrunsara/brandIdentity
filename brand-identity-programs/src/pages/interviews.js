import React, {Component } from 'react';
// Components
import Navbar from '../components/Navbar';
import InterviewsOverview from '../components/interviewsOverview';
import GoToTop from '../components/GoToTop.js';

  
class Interviews extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <InterviewsOverview />
        <GoToTop></GoToTop>
      </div>
    );
  }
}
  
export default Interviews;