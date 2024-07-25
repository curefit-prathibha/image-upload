import React, { useEffect, useState } from 'react';
import './Analysis.css';
import Header from './Header';
import HelloAvatar from './HelloAvatar';
import DancingAvatar from './DancingAvatar';
import LayingAvatar from './LayingAvatar';
import { useNavigate, useLocation } from 'react-router-dom';
import Modal from './Modal'; // Import the Modal component

const WorkoutsNotCompleted = () => {
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

  const handleWorkoutsFlexingButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/workouts_flexing');
  };

  return (
    <>
      <Header />
      <div style={{ textAlign: 'center' }}>
        <h2>🪫 Low on energy!</h2>
        <button onClick={handleWorkoutsFlexingButtonClick} style={buttonStyle}>
          Next
        </button>
        <div style={{ width: '100vw', height: '100vh' }}>
          {showMessage && <div className="speech">Not getting up, until you start working out again.</div>}
          <LayingAvatar />
        </div>
      </div>
      <Modal show={showModal} message="Vikas with renewed motivation, works out consistently for the next 2 months." onClose={handleCloseModal} />
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

export default WorkoutsNotCompleted;
