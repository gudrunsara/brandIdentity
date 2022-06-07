import React, {Component } from 'react';
// Components
import Navbar from '../components/Navbar';
import InterviewsOverview from '../components/interviewsOverview';

  
class Interviews extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <InterviewsOverview />
      </div>
    );
  }
}
  
export default Interviews;