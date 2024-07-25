import React, { useEffect, useState } from 'react';
import './Analysis.css'; // Optional: Create a CSS file for styling the analysis page
import Header from './Header';
import HelloAvatar from './HelloAvatar'
import DancingAvatar from './DancingAvatar';

const WorkoutsCompleted = () => {

  return (
    <>
      <Header />
      <div style={{textAlign: 'center'}}>
        <h2>Dancing!</h2>
        <div style={{width: '100vw', height: '100vh'}}>
        <div className="speech">GeeksForGeeks</div>
        <DancingAvatar />
        </div>
        {/* {showText && <h2 className="final-text">YOUR AVATAR</h2>} */}
      </div>
    </>
  );
};

export default WorkoutsCompleted;
