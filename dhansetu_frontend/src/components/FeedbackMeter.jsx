import React, { useState } from 'react';

const emojis = [
  { icon: '😞', label: 'Very Sad' },
  { icon: '😕', label: 'Sad' },
  { icon: '😐', label: 'Neutral' },
  { icon: '🙂', label: 'Happy' },
  { icon: '😄', label: 'Very Happy' },
];

const meterRadius = 100;
const emojiRadius = 80;
const center = meterRadius + 10;
const needleLength = 70;

function getCoords(index) {
  // 0 = leftmost, 4 = rightmost
  const angle = Math.PI * (1 - index / (emojis.length - 1)); // from pi to 0
  return {
    x: center + emojiRadius * Math.cos(angle),
    y: center - emojiRadius * Math.sin(angle),
    angle,
  };
}

const FeedbackMeter = ({ onSubmit }) => {
  const [selected, setSelected] = useState(2); // Default to Neutral
  const [submitted, setSubmitted] = useState(false);

  // Needle angle for selected emoji
  const needleAngle = Math.PI * (1 - selected / (emojis.length - 1));
  const needleX = center + needleLength * Math.cos(needleAngle);
  const needleY = center - needleLength * Math.sin(needleAngle);

  const handleSubmit = () => {
    setSubmitted(true);
    if (onSubmit) onSubmit(selected);
  };

  return (
    <div style={{marginBottom: 32, background: '#fff', borderRadius: 12, boxShadow: '0 1px 6px #ece9f6', padding: 24, maxWidth: 340}}>
      <h3 style={{marginBottom: 12, color: '#5e4ae3'}}>Feedback Meter</h3>
      <svg width={center * 2} height={center + 30} style={{display: 'block', margin: '0 auto'}}>
        {/* Arc background */}
        <path
          d={`M${center - meterRadius},${center} A${meterRadius},${meterRadius} 0 0,1 ${center + meterRadius},${center}`}
          fill="none"
          stroke="#ece9f6"
          strokeWidth={18}
        />
        {/* Needle */}
        <line
          x1={center}
          y1={center}
          x2={needleX}
          y2={needleY}
          stroke="#5e4ae3"
          strokeWidth={6}
          strokeLinecap="round"
          style={{transition: 'all 0.4s cubic-bezier(.4,2,.6,1)'}}
        />
        {/* Emojis */}
        {emojis.map((e, i) => {
          const { x, y } = getCoords(i);
          return (
            <g key={i} style={{cursor: submitted ? 'default' : 'pointer'}} onClick={() => !submitted && setSelected(i)}>
              <circle
                cx={x}
                cy={y}
                r={selected === i ? 25 : 20}
                fill={selected === i ? '#f8eefe' : '#fff'}
                stroke={selected === i ? '#5e4ae3' : '#ece9f6'}
                strokeWidth={selected === i ? 3 : 2}
                style={{transition: 'all 0.2s'}}
              />
              <text
                x={x}
                y={y + 8}
                textAnchor="middle"
                fontSize={selected === i ? 26 : 22}
                style={{userSelect: 'none'}}
              >
                {e.icon}
              </text>
            </g>
          );
        })}
      </svg>
      <div style={{textAlign: 'center', marginTop: 8, fontWeight: 500, color: '#5e4ae3'}}>
        {emojis[selected].label}
      </div>
      {!submitted ? (
        <button
          style={{
            margin: '16px auto 0', display: 'block', padding: '10px 32px', background: '#5e4ae3', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 600, fontSize: 16, cursor: 'pointer', boxShadow: '0 2px 8px #ece9f6', transition: 'background 0.2s'
          }}
          onClick={handleSubmit}
        >
          Submit Feedback
        </button>
      ) : (
        <div style={{textAlign: 'center', marginTop: 18, color: '#1db954', fontWeight: 600, fontSize: 17}}>
          Thank you for your feedback!
        </div>
      )}
    </div>
  );
};

export default FeedbackMeter;
