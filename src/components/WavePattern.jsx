import React from 'react';
import "../styles/WavePattern.css"

const WavePattern = () => {
  return (
    <div className="wave-container">
      <svg className="wave" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path
          d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,74.7C672,75,768,53,864,48C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          fill="#6775E1"
        ></path>
      </svg>
    </div>
  );
};

export default WavePattern;