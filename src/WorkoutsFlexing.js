import React, { useEffect, useState } from 'react';
import Header from './Header';
import HelloAvatar from './HelloAvatar'
import DancingAvatar from './DancingAvatar';
import FlexingAvatar from './FlexingAvatar';

const WorkoutsFlexing = () => {
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
        <h2>Flexing!</h2>
        <div style={{width: '100vw', height: '100vh'}}>
        {showMessage && <div className="speech">Fit and Proud!</div>}
        <FlexingAvatar />
        </div>
        {/* {showText && <h2 className="final-text">YOUR AVATAR</h2>} */}
      </div>
    </>
  );
};

export default WorkoutsFlexing;
