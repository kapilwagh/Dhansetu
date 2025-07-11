import React from 'react';

const trendingStocks = [
  { symbol: 'TCS', name: 'Tata Consultancy', change: '+2.4%', price: 3890 },
  { symbol: 'RELIANCE', name: 'Reliance Ind.', change: '+1.8%', price: 2885 },
  { symbol: 'HDFCBANK', name: 'HDFC Bank', change: '+3.1%', price: 1720 },
  { symbol: 'INFY', name: 'Infosys', change: '-0.9%', price: 1495 },
  { symbol: 'LT', name: 'Larsen & Toubro', change: '+2.0%', price: 3725 },
];

import { useNavigate } from 'react-router-dom';

const TrendingStocksPanel = () => {
  const navigate = useNavigate();
  const handleStockClick = (stock) => {
    // Navigate to /analysis?symbol=XYZ
    navigate(`/analysis?symbol=${encodeURIComponent(stock.symbol)}`);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <div style={{ marginBottom: 32, background: '#f5f5fa', padding: 16, borderRadius: 12, boxShadow: '0 2px 8px #ece9f6', maxWidth: 650, width: '100%' }}>
        <h3 style={{ marginBottom: 16, color: '#5e4ae3' }}>Trending Stocks</h3>
      <div
  style={{
    display: 'flex',
    gap: 16,
    overflowX: 'auto',
    paddingBottom: 8,
    whiteSpace: 'nowrap',
  }}
>
        {trendingStocks.map(stock => (
          <div
            key={stock.symbol}
            onClick={() => handleStockClick(stock)}
            style={{
  cursor: 'pointer',
  flex: '0 0 auto', // prevents shrinking and enables horizontal layout
  minWidth: 160,
  background: '#fff',
  borderRadius: 10,
  padding: '16px 20px',
  boxShadow: '0 1px 4px #e4e2ee',
  transition: 'box-shadow 0.2s',
  borderLeft: stock.change.startsWith('+') ? '4px solid #5eeb8f' : '4px solid #ff5e5e',
  marginBottom: 8
}}
          >
            <div style={{fontWeight: 700, fontSize: 18}}>{stock.symbol}</div>
            <div style={{fontSize: 14, color: '#888', marginBottom: 4}}>{stock.name}</div>
            <div style={{fontWeight: 500, fontSize: 16}}>₹{stock.price}</div>
            <div style={{color: stock.change.startsWith('+') ? '#1db954' : '#e53935', fontWeight: 600}}>{stock.change}</div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default TrendingStocksPanel;
