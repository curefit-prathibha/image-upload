import React, { useEffect, useState } from 'react';
import Header from './Header';
import HelloAvatar from './HelloAvatar'
import DancingAvatar from './DancingAvatar';
import FlexingAvatar from './FlexingAvatar';

const WorkoutsFlexing = () => {

  return (
    <>
      <Header />
      <div style={{textAlign: 'center'}}>
        <h2>Flexing!</h2>
        <div style={{width: '100vw', height: '100vh'}}>
        <div className="speech">GeeksForGeeks</div>
        <FlexingAvatar />
        </div>
        {/* {showText && <h2 className="final-text">YOUR AVATAR</h2>} */}
      </div>
    </>
  );
};

export default WorkoutsFlexing;
