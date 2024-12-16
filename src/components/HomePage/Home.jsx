import React from 'react';
import CanvasAnimation from './CanvasAnimation';
import './Home.css';

const Home = () => {
  return (
    <div className="main" id="main">
      <div className="wrapper">
        <div className="page1">
          <CanvasAnimation />
        </div>
        <div className="page2"></div>
        <div className="page3"></div>
        <div className="page4"></div>
      </div>
    </div>
  );
};

export default Home;
