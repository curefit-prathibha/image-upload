import React, { useEffect, useState } from 'react';
import abdomenImg from './abdomen.jpeg';
import bicepsImg from './biceps.avif';
import shoulderImg from './shoulder.png';
import thighsImg from './thighs.jpeg';
import './Analysis.css'; // Optional: Create a CSS file for styling the analysis page
import Header from './Header';
import HelloAvatar from './HelloAvatar'

const Analysis = () => {
  const [showText, setShowText] = useState(false);


  useEffect(() => {
    const imageItems = document.querySelectorAll('.image-item');
    let currentIndex = 0;

    const blinkImages = () => {
      if (currentIndex < imageItems.length) {
        imageItems[currentIndex].classList.add('blink');
        setTimeout(() => {
          imageItems[currentIndex].classList.remove('blink');
          currentIndex++;
          blinkImages();
        }, 1000); // Adjust the timing if needed
      } else {
        setShowText(true);
      }
    };

    blinkImages();
  }, []);

  return (
    <>
      <Header />
      <div>
        {/* <h1>Analysis Results</h1>
        <h2>Evaluated areas:</h2> */}
        {/* <div className="image-container">
          <figure className="image-item">
            <img src={abdomenImg} alt="Abdomen" className="analysis-image" />
          </figure>
          <figure className="image-item">
            <img src={bicepsImg} alt="Biceps" className="analysis-image" />
          </figure>
          <figure className="image-item">
            <img src={shoulderImg} alt="Shoulder" className="analysis-image" />
          </figure>
          <figure className="image-item">
            <img src={thighsImg} alt="Thighs" className="analysis-image" />
          </figure>
        </div> */}
        <div style={{width: '100vw', height: '100vh'}}>
        <HelloAvatar />
        </div>
        {showText && <h2 className="final-text">YOUR AVATAR</h2>}
      </div>
    </>
  );
};

export default Analysis;
