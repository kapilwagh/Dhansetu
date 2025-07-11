
import React from 'react';
import styles from './Login.module.css';
import dhansetuLogo from '../assets/Dhansetu_logo.jpeg';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Lock from '@mui/icons-material/Lock';

const Login = () => {
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
              <TextField
                className={styles.input}
                type="email"
                placeholder="Email"
                autoComplete="username"
                variant="outlined"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle style={{ color: '#5e4ae3' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{ marginBottom: '18px', background: '#f8f7fc', borderRadius: '10px' }}
              />
              <TextField
                className={styles.input}
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                variant="outlined"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock style={{ color: '#5e4ae3' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{ marginBottom: '18px', background: '#f8f7fc', borderRadius: '10px' }}
              />
              <button className={styles.button}>Login</button>
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
