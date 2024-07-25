import React, { useEffect, useState } from 'react';
import './Analysis.css'; // Optional: Create a CSS file for styling the analysis page
import Header from './Header';
import HelloAvatar from './HelloAvatar'
import DancingAvatar from './DancingAvatar';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation


const LastPage = () => {
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(true)
    }, 1000)
  }, [])
    const navigate = useNavigate(); // Initialize navigate function
  const location = useLocation(); // Retrieve the location object
  const { userName } = location.state || {}; // Extract the userName from the state


    // const handleWorkoutsNotCompletedButtonClick = () => {
    //     navigate('/workouts_not_completed'); // Navigate to the "workouts_not_completed" route
    //   };

  return (
    <>
      <Header />
      <div style={{textAlign: 'center'}}>
        {/* <h2>Somebody's on a roll! You have been consistent for 2 weeks.</h2> */}
        {/* <button onClick={handleWorkoutsNotCompletedButtonClick} style={buttonStyle}>
            Next
          </button> */}
        <div style={{width: '100vw', height: '100vh'}}>
        {showMessage && <div className="speech">Give it up for team Kaizen and Vikas!</div>}
        <DancingAvatar />
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
export default LastPage;
