import React from 'react';
import { Avatar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Dhansetu_logo from '../assets/Dhansetu_logo.jpeg';
const DashboardHeader = ({ userName = "Amit Shah", role = "User" }) => {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '24px 0 16px 0', marginBottom: 24, borderBottom: '1px solid #ece9f6'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <img src={Dhansetu_logo} alt="Dhansetu Logo" style={{ width: 44, height: 44, borderRadius: 12, marginRight: 10, boxShadow: '0 1px 6px #ece9f6' }} />
        <div>
          <div style={{ fontWeight: 700, fontSize: 20, color: '#5e4ae3' }}>Dhansetu</div>
          <div style={{ fontSize: 14, color: '#888', fontWeight: 500 }}>Your Wealth Bridge</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
    
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontWeight: 600, fontSize: 16 }}>{userName}</div>
          <div style={{ fontSize: 13, color: '#888' }}>{role}</div>
        </div>
        <Avatar sx={{ bgcolor: '#5e4ae3', width: 40, height: 40 }}>
          <AccountCircleIcon fontSize="large" />
        </Avatar>
      </div>
    </div>
  );
};

export default DashboardHeader;
