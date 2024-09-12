// src/components/SafetyTips.js
import React from 'react';

const SafetyTips = () => {
  const tips = [
    'Always be aware of your surroundings.',
    'Share your location with trusted contacts.',
    'Keep emergency numbers on speed dial.',
    'Avoid walking alone in dark areas.',
  ];

  return (
    <div className="safety-tips">
      <h2>Safety Tips</h2>
      <ul>
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
};

export default SafetyTips;
