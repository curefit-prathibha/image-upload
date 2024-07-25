import React, { useEffect, useState } from 'react';
import Header from './Header';
import HelloAvatar from './HelloAvatar'
import DancingAvatar from './DancingAvatar';
import FlexingAvatar from './FlexingAvatar';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
import { color, float } from 'three/examples/jsm/nodes/Nodes.js';


const WorkoutsFlexing = () => {
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(true)
    }, 1000)
  }, [])
    const navigate = useNavigate(); // Initialize navigate function
    const location = useLocation(); // Retrieve the location object
    const { userName } = location.state || {}; // Extract the userName from the state
  
      const handleHelloButtonClick = () => {
          navigate('/analysis'); // Navigate to the "workouts_flexing" route
        };

  return (
    <>
      <Header />
      <div style={{textAlign: 'center'}}>
        <h2>Look who is making gains</h2>
        <button onClick={handleHelloButtonClick} style={buttonStyle}>
            Next
          </button>
        <div style={{width: '100vw', height: '100vh'}}>
        {showMessage && <div className="speech">Fit and Proud!</div>}
        <FlexingAvatar />
        </div>
        {/* {showText && <h2 className="final-text">YOUR AVATAR</h2>} */}
      </div>
    </>
  );
};

// Inline style for the button (optional)
const buttonStyle = {
    float: "right",
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    color: 'black',
    backgroundColor: 'white',
    //color: 'white',
  };
export default WorkoutsFlexing;
