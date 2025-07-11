import React, { useState } from 'react';
import { Button } from '@mui/material';

const dummySuggestions = [
  {
    id: 1,
    stock: 'TCS',
    message: 'Based on your profile, TCS is a stable long-term bet. Would you like to buy?',
    price: 3890,
    date: '2025-07-10',
  },
  {
    id: 2,
    stock: 'LT',
    message: 'L&T is showing strong momentum this week. Consider a short-term buy.',
    price: 3725,
    date: '2025-07-09',
  },
];

const StockRecommendations = () => {
  const [responses, setResponses] = useState({}); // { id: 'accepted' | 'rejected' }

  const handleAction = (id, action) => {
    setResponses(prev => ({ ...prev, [id]: action }));
    // TODO: Trigger feedback meter after action
  };

  return (
    <div style={{marginBottom: 32, background: '#fff', padding: 24, borderRadius: 12, boxShadow: '0 1px 6px #ece9f6'}}>
      <h3 style={{marginBottom: 16, color: '#5e4ae3'}}>Personalized Stock Recommendations</h3>
      {dummySuggestions.map(sug => (
        <div key={sug.id} style={{marginBottom: 24, borderBottom: '1px solid #eee', paddingBottom: 16}}>
          <div style={{fontWeight: 600, fontSize: 17, marginBottom: 4}}>
            {sug.stock} <span style={{color: '#888', fontWeight: 400, fontSize: 14}}>({sug.date})</span>
          </div>
          <div style={{marginBottom: 8}}>{sug.message}</div>
          <div style={{fontWeight: 500, marginBottom: 8}}>Current Price: ₹{sug.price}</div>
          {responses[sug.id] ? (
            <div style={{color: responses[sug.id] === 'accepted' ? '#1db954' : '#e53935', fontWeight: 500}}>
              {responses[sug.id] === 'accepted' ? 'You accepted this suggestion. Thank you!' : 'You declined this suggestion.'}
              {/* FeedbackMeter will be prompted here */}
            </div>
          ) : (
            <div style={{display: 'flex', gap: 12}}>
              <Button variant="contained" style={{background: '#5e4ae3'}} onClick={() => handleAction(sug.id, 'accepted')}>Accept</Button>
              <Button variant="outlined" color="error" onClick={() => handleAction(sug.id, 'rejected')}>Reject</Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StockRecommendations;
