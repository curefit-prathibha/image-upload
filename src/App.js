import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import './App.css';

const App = () => {
  const [image, setImage] = useState(null);
  const webcamRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleCapture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Image Upload</h1>
      </header>
      <div className="content">
        <div className="upload-section">
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </div>
        <div className="camera-section">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="webcam"
          />
          <button onClick={handleCapture} className="capture-button">Capture Photo</button>
        </div>
      </div>
      {image && (
        <div className="preview-section">
          <h2>Preview</h2>
          <img src={image} alt="Uploaded or Captured" className="preview-image" />
        </div>
      )}
    </div>
  );
};

export default App;
