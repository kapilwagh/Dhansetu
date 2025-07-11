
import React from 'react';
import styles from './Login.module.css';
import dhansetuLogo from '../assets/Dhansetu_logo.jpeg';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Lock from '@mui/icons-material/Lock';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  // Dummy user credentials
  const DUMMY_USERS = [
    { phone: '9876543210', password: 'pass123' },
    { phone: '9123456789', password: 'test456' },
    { phone: '9001122233', password: 'demo789' },
    { phone: '9998887777', password: 'rmone', role: 'rm' },
    { phone: '8887776666', password: 'rmtwo', role: 'rm' },
    { phone: '7776665555', password: 'rmthree', role: 'rm' }
  ];
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const matchedUser = DUMMY_USERS.find(
      user => phone.trim() === user.phone && password.trim() === user.password
    );
    if (matchedUser) {
      setError('');
      navigate('/user');
    } else {
      setError('Invalid phone number or password');
    }
  };

  return (
    <div className={styles.loginBg}>
      <div className={styles.logoTopLeft}>
        <img src={dhansetuLogo} alt="Dhansetu Logo" className={styles.logo} />
      </div>
      <div className={styles.centerWrap}>
        <div className={styles.loginCardSlim}>
          <div className={styles.cardContentWrap}>
            <div className={styles.cardImageWrap}>
              <img src={dhansetuLogo} alt="Dhansetu Logo" className={styles.cardLogoImg} />
            </div>
            <div className={styles.formWrap}>
              <div className={styles.brand}>
                <span className={styles.title} style={{fontSize: '2.2rem'}}>Welcome Back</span>
              </div>
              <div className={styles.subtitle}>
                Your Wealth Bridge<br />
                <span style={{fontWeight: 400, fontSize: '1rem', color: '#23395d'}}>Login as User</span>
              </div>
              <form onSubmit={handleSubmit} style={{width: '100%'}}>
                <TextField
                  className={styles.input}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  label="Phone Number"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <span role="img" aria-label="phone" style={{fontSize:22, color:'#5e4ae3'}}>
                          📞
                        </span>
                      </InputAdornment>
                    ),
                  }}
                />
                {error && (
                  <div style={{ color: 'red', marginTop: 8, fontWeight: 500, fontSize: 15 }}>
                    {error}
                  </div>
                )}
                <TextField
                  className={styles.input}
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  variant="outlined"
                  fullWidth
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock style={{ color: '#5e4ae3' }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ marginBottom: '18px', background: '#f8f7fc', borderRadius: '10px' }}
                />
                <button className={styles.button} type="submit">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative SVG wave at bottom */}
      <svg className={styles.wave} viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,256L80,245.3C160,235,320,213,480,197.3C640,181,800,171,960,154.7C1120,139,1280,117,1360,106.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    </div>
  );
};

export default Login;
