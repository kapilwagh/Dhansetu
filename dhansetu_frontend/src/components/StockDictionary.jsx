import React from 'react';

const StockDictionary = () => {
  // TODO: Floating "?" icon, tooltip/modal, search bar
  return (
    <div style={{position: 'fixed', bottom: 32, right: 32, zIndex: 1000}}>
      <button style={{fontSize: 24, borderRadius: '50%', width: 48, height: 48}}>❓</button>
      {/* Modal/Tooltip will show on click */}
    </div>
  );
};

export default StockDictionary;
