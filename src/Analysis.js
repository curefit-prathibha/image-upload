import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
import './Analysis.css'; // Optional: Create a CSS file for styling the analysis page
import Header from './Header';
import HelloAvatar from './HelloAvatar';

const Analysis = () => {
  const navigate = useNavigate(); // Initialize navigate function
  const location = useLocation(); // Retrieve the location object
  const { userName } = location.state || {}; // Extract the userName from the state

  const handleWorkoutsCompletedButtonClick = () => {
    navigate('/workouts_completed'); // Navigate to the "workouts_completed" route
  };

  const [showMessage, setShowMessage] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setShowMessage(true)
    }, 1000)
  }, [])

  // const { userName } = location.state || {}; // Retrieve the name from the state

  return (
    <>
      <Header />
      <div style={{ textAlign: 'center' }}>
        <h2>Meet Your Avatar</h2> {/* Display the name here */}
        <button onClick={handleWorkoutsCompletedButtonClick} style={buttonStyle}>
            Next
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
export default Analysis;