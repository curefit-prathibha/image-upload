import React, { useEffect, useState } from 'react';
import './Analysis.css';
import Header from './Header';
import HelloAvatar from './HelloAvatar';
import DancingAvatar from './DancingAvatar';
import { useNavigate, useLocation } from 'react-router-dom';
import Modal from './Modal'; // Import the Modal component

const WorkoutsCompleted = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(true);
    }, 1000);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  const { userName } = location.state || {};

  const handleWorkoutsNotCompletedButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/workouts_not_completed');
  };

  return (
    <>
      <Header />
      <div style={{ textAlign: 'center' }}>
        <h2>Somebody's on a roll! You have been consistent for 2 weeks.</h2>
        <button onClick={handleWorkoutsNotCompletedButtonClick} style={buttonStyle}>
          Next
        </button>
        <div style={{ width: '100vw', height: '100vh' }}>
          {showMessage && <div className="speech">Well done {userName || 'Guest'}!</div>}
          <DancingAvatar />
        </div>
      </div>
      <Modal show={showModal} message="Vikas misses workouts for the next week." onClose={handleCloseModal} />
    </>
  );
};

// Inline style for the button (optional)
const buttonStyle = {
  float: 'right',
  marginTop: '20px',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  border: 'none',
  borderRadius: '5px',
  color: 'black',
  backgroundColor: 'white',
};

export default WorkoutsCompleted;
