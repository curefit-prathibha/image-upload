import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Analysis.css';
import Header from './Header';
import HelloAvatar from './HelloAvatar';
import Modal from './Modal';

const Analysis = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userName } = location.state || {};
  const [showModal, setShowModal] = React.useState(false);

  const handleWorkoutsCompletedButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/workouts_completed');
  };

  const [showMessage, setShowMessage] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setShowMessage(true);
    }, 1000);
  }, []);

  return (
    <>
      <Header />
      <div style={{ textAlign: 'center' }}>
        <h2>Meet Your Avatar</h2>
        <button onClick={handleWorkoutsCompletedButtonClick} style={buttonStyle}>
          Next
        </button>
        <div style={{ width: '100vw', height: '100vh' }}>
          {showMessage && <div className="speech">Hi {userName || 'Guest'}!</div>}
          <HelloAvatar />
        </div>
      </div>
      <Modal show={showModal} message="Vikas attends 8 classes in next two weeks..." onClose={handleCloseModal} />
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

export default Analysis;
