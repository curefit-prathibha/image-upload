import React, { useEffect, useState } from 'react';
import './Analysis.css'; // Optional: Create a CSS file for styling the analysis page
import Header from './Header';
import HelloAvatar from './HelloAvatar'
import DancingAvatar from './DancingAvatar';
import LayingModel from './LAYING_DOWN';
import LayingAvatar from './LayingAvatar';

const WorkoutsNotCompleted = () => {
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(true)
    }, 3000)
  }, [])
  return (
    <>
      <Header />
      <div style={{textAlign: 'center'}}>
        <h2>Lying down!</h2>
        <div style={{width: '100vw', height: '100vh'}}>
        {showMessage && <div className="speech">Lazy!!</div>}
        <LayingAvatar />
        </div>
      </div>
    </>
  );
};

export default WorkoutsNotCompleted;
