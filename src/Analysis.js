import React from 'react';
import { Route, useNavigate } from 'react-router-dom'; // Import useNavigate
import './Analysis.css'; // Optional: Create a CSS file for styling the analysis page
import Header from './Header';
import HelloAvatar from './HelloAvatar';

const Analysis = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleWorkoutsCompletedButtonClick = () => {
    navigate('/workouts_completed'); // Navigate to the "workouts_completed" route
  };

  const handleWorkoutsNotCompletedButtonClick = () => {
    navigate('/workouts_not_completed'); // Navigate to the "workouts_completed" route
  };

  const handleWorkoutsFlexingButtonClick = () => {
    navigate('/workouts_flexing'); // Navigate to the "workouts_completed" route
  };

  const [showMessage, setShowMessage] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setShowMessage(true)
    }, 3000)
  }, [])

  // const { userName } = location.state || {}; // Retrieve the name from the state

  return (
    <>
      <Header />
      <div style={{ textAlign: 'center' }}>
        <h2>Here, Meet your avatar!</h2>
        <button onClick={handleWorkoutsCompletedButtonClick} style={buttonStyle}>
            Go to Workouts Completed
          </button>
          <button onClick={handleWorkoutsNotCompletedButtonClick} style={buttonStyle}>
            Don't workout
          </button>
          <button onClick={handleWorkoutsFlexingButtonClick} style={buttonStyle}>
            Flex muscles
          </button>
        <div style={{ width: '100vw', height: '100vh' }}>
          {showMessage && <div className="speech">Hi Vikas!</div>}
          <HelloAvatar />
        </div>
      </div>
    </>
  );
};

// Inline style for the button (optional)
const buttonStyle = {
  marginTop: '20px',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  border: 'none',
  borderRadius: '5px',
  backgroundColor: '#007bff',
  color: 'white',
};

export default Analysis;
