import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import '@tensorflow/tfjs';
import * as posenet from '@tensorflow-models/posenet';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import manBenchPress from './man_benchpress.gif';
import womanDeadlift from './weight_lifting_woman.gif';
import manDumbell from './man_dumbell.gif';
import Analysis from './Analysis'; // Import the Analysis component
import Header from './Header';

const App = () => {
  const [image, setImage] = useState(null);
  const [isCameraImage, setIsCameraImage] = useState(false);
  const [cameraVisible, setCameraVisible] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [highlightedImage, setHighlightedImage] = useState(null);
  const [mirrorWebcam, setMirrorWebcam] = useState(true);
  const [doneMessageVisible, setDoneMessageVisible] = useState(false);
  const [promptMessage, setPromptMessage] = useState('Please click your front angle');
  const [modalGif, setModalGif] = useState(manBenchPress);

  const webcamRef = useRef(null);
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
      setIsCameraImage(false);
      setCameraVisible(false);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleCapture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    setIsCameraImage(true);
    setCameraVisible(false);
  };

  const handleRetake = () => {
    setImage(null);
    setCameraVisible(true);
    setDoneMessageVisible(false);
  };

  const handleUseImage = async () => {
    if (promptMessage === 'Please click your front angle') {
      setPromptMessage('Please click your side angle');
      setImage(null);
      setCameraVisible(true);
      setIsCameraImage(false);
    } else {
      setShowModal(true);
      setImage(null);
      setCameraVisible(true);
      await startModalTimer();
      if (webcamRef.current) {
        const imageSrc = webcamRef.current.getScreenshot();
        const highlighted = await detectAndHighlightBiceps(imageSrc);
        setHighlightedImage(highlighted);
      }
    }
  };

  const startModalTimer = () => {
    const messages = [
      'Processing image..',
      'Removing noise and unnecessary information..',
      'Deconstructing your essence into digital form...',
      'Unleashing your digital twin...',
      'Almost there...'
    ];

    let messageIndex = 0;
    const intervals = [2000, 2000, 2000, 3000, 1000];
    const halfTime = intervals.reduce((a, b) => a + b, 0) / 2;

    setModalMessage(messages[messageIndex]);
    setModalGif(manDumbell);

    const interval = setInterval(() => {
      messageIndex++;
      if (messageIndex >= messages.length) {
        clearInterval(interval);
        setTimeout(() => {
          setShowModal(false);
          setDoneMessageVisible(true);
          navigate('/analysis');
        }, 1000);
      } else {
        setModalMessage(messages[messageIndex]);
        if (messageIndex * intervals[messageIndex] > halfTime) {
          setModalGif(womanDeadlift);
        }
      }
    }, intervals[messageIndex]);
  };

  const detectAndHighlightBiceps = async (imageSrc) => {
    const image = new Image();
    image.src = imageSrc;
    await new Promise((resolve) => {
      image.onload = () => resolve();
    });

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = image.width;
    canvas.height = image.height;
    context.drawImage(image, 0, 0);

    const net = await posenet.load();
    const pose = await net.estimateSinglePose(canvas, {
      flipHorizontal: false
    });

    const keypoints = pose.keypoints;

    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = 'yellow';
    ctx.lineWidth = 4;

    keypoints.forEach(point => {
      if (point.part === 'leftShoulder' || point.part === 'rightShoulder' || point.part === 'leftElbow' || point.part === 'rightElbow') {
        const { x, y } = point.position;
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, 2 * Math.PI);
        ctx.stroke();
      }
    });

    return canvas.toDataURL();
  };

  return (
    <>
      <Header />
      <div className="App">
        <header className="App-header">
          <h1 className="gradient-text">Welcome aboard, let's get you started!</h1>
        </header>
        <div className="content">
          <div className="upload-section">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              disabled={!cameraVisible}
            />
          </div>
          <h1 className='gradient-text'>OR</h1>
          {cameraVisible ? (
            <div className="camera-section">
              <div className="camera-prompt">
                <p>{promptMessage}</p>
              </div>
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                className={`webcam ${mirrorWebcam ? 'mirror' : ''}`}
                videoConstraints={{ facingMode: 'user' }}
              />
              <button onClick={handleCapture} className="capture-button">
                Capture Photo
              </button>
            </div>
          ) : (
            <div className="preview-section">
              <h2>Preview</h2>
              <img
                src={image}
                alt="Uploaded or Captured"
                className={`preview-image ${isCameraImage ? 'mirror' : ''}`}
              />
              <div className="button-group">
                <button onClick={handleRetake} className="retake-button">
                  {isCameraImage ? 'Retake Photo' : 'Take photo from camera'}
                </button>
                {image && (
                  <button onClick={handleUseImage} className="use-image-button">
                    {promptMessage === 'Please click your front angle' ? 'Use this image' : 'Use this image'}
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <img
                src={modalGif}
                alt="Loading"
                className="loading-icon"
              />
              <div className={`modal-text ${modalMessage === '' ? 'enter' : 'slide-out'}`}>
                {modalMessage}
              </div>
            </div>
          </div>
        )}
        {highlightedImage && (
          <div className="highlighted-image">
            <h2>Highlighted Image</h2>
            <img src={highlightedImage} alt="Highlighted Biceps" className="preview-image" />
          </div>
        )}
        {doneMessageVisible && (
          <div className="done-message">
            Done
          </div>
        )}
      </div>
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/analysis" element={<Analysis />} />
    </Routes>
  </Router>
);

export default AppWrapper;
