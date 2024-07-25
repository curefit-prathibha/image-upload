import React, { useEffect, useState } from 'react';
import './Analysis.css'; // Optional: Create a CSS file for styling the analysis page
import Header from './Header';
import HelloAvatar from './HelloAvatar'
import DancingAvatar from './DancingAvatar';
import LayingModel from './LAYING_DOWN';
import LayingAvatar from './LayingAvatar';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation



const WorkoutsNotCompleted = () => {
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(true)
    }, 1000)
  }, [])
    const navigate = useNavigate(); // Initialize navigate function
  const location = useLocation(); // Retrieve the location object
  const { userName } = location.state || {}; // Extract the userName from the state

    const handleWorkoutsFlexingButtonClick = () => {
        navigate('/workouts_flexing'); // Navigate to the "workouts_flexing" route
      };

  return (
    <>
      <Header />
      <div style={{textAlign: 'center'}}>
        <h2>Lying down!</h2>
        <button onClick={handleWorkoutsFlexingButtonClick} style={buttonStyle}>
            Next
          </button>
        <div style={{width: '100vw', height: '100vh'}}>
        {showMessage && <div className="speech">Lazy!!</div>}
        <LayingAvatar />
        </div>
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
export default WorkoutsNotCompleted;
