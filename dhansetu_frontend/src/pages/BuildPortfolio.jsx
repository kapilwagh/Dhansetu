import React, { useState } from 'react';
import Dhansetu_logo from '../assets/Dhansetu_logo.jpeg';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import styles from './BuildPortfolio.module.css';

const sectorOptions = [
  'Information Technology (IT)',
  'Financials (Banking, Insurance, NBFCs)',
  'Pharmaceuticals & Healthcare',
  'Energy (Oil, Gas, Renewables)',
  'Consumer Goods (FMCG)',
  'Automobile',
  'Metals & Mining',
  'Telecommunication',
  'Real Estate',
  'Industrial & Manufacturing',
];

const tradingFrequencyOptions = [
  'Daily',
  'Weekly',
  'Monthly',
  'Infrequently',
];

const BuildPortfolio = () => {
  const [form, setForm] = useState({
    tenure: '',
    amount: '',
    sector: '',
    age: '',
    dependants: '',
    drawdown: '',
    investmentType: '',
    annualSalary: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!form.tenure || isNaN(form.tenure) || +form.tenure < 1 || +form.tenure > 40) newErrors.tenure = '1-40 years';
    if (!form.amount || isNaN(form.amount) || +form.amount <= 0) newErrors.amount = 'Enter a valid amount';
    if (!form.sector) newErrors.sector = 'Select sector';
    if (!form.age || isNaN(form.age) || +form.age < 18 || +form.age > 100) newErrors.age = '18-100';
    if (!form.dependants || isNaN(form.dependants) || +form.dependants < 0 || +form.dependants > 8) newErrors.dependants = '0-8';
    if (form.drawdown === '' || isNaN(form.drawdown) || +form.drawdown < 0 || +form.drawdown > 100) newErrors.drawdown = '0-100%';
    if (!form.investmentType) newErrors.investmentType = 'Select investment type';
    if (!form.annualSalary || isNaN(form.annualSalary)) newErrors.annualSalary = 'Enter a valid salary';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // For now, just show an alert or navigate
      alert('Portfolio preferences submitted!');
      // navigate('/some-next-page');
    }
  };

  return (
    <div className={styles.centerWrap}>
      <img src={Dhansetu_logo} alt="Dhansetu Logo" className={styles.logoTopLeft} />
      <div className={styles.card}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <TextField
              label="Tenure (Years)"
              name="tenure"
              type="number"
              InputProps={{ inputProps: { min: 1, max: 40 }, endAdornment: <InputAdornment position="end">years</InputAdornment> }}
              value={form.tenure}
              onChange={handleChange}
              error={!!errors.tenure}
              helperText={errors.tenure}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Investment Amount"
              name="amount"
              type="number"
              InputProps={{ startAdornment: <InputAdornment position="start">₹</InputAdornment> }}
              value={form.amount}
              onChange={handleChange}
              error={!!errors.amount}
              helperText={errors.amount}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              select
              label="Preferred Sector"
              name="sector"
              value={form.sector}
              onChange={handleChange}
              error={!!errors.sector}
              helperText={errors.sector}
              fullWidth
              margin="normal"
              required
            >
              {sectorOptions.map(sector => (
                <MenuItem key={sector} value={sector}>{sector}</MenuItem>
              ))}
            </TextField>
            <TextField
              label="Your Age"
              name="age"
              type="number"
              InputProps={{ inputProps: { min: 18, max: 100 } }}
              value={form.age}
              onChange={handleChange}
              error={!!errors.age}
              helperText={errors.age}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Dependants"
              name="dependants"
              type="number"
              InputProps={{ inputProps: { min: 0, max: 8 } }}
              value={form.dependants}
              onChange={handleChange}
              error={!!errors.dependants}
              helperText={errors.dependants}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Drawdown (%)"
              name="drawdown"
              type="number"
              InputProps={{ inputProps: { min: 0, max: 100 }, endAdornment: <InputAdornment position="end">%</InputAdornment> }}
              value={form.drawdown}
              onChange={handleChange}
              error={!!errors.drawdown}
              helperText={errors.drawdown}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              select
              label="Type of Investment"
              name="investmentType"
              value={form.investmentType}
              onChange={handleChange}
              error={!!errors.investmentType}
              helperText={errors.investmentType}
              fullWidth
              margin="normal"
              required
            >
              <MenuItem value="Equity">Equity (1)</MenuItem>
              <MenuItem value="Mutual Funds">Mutual Funds (2)</MenuItem>
              <MenuItem value="Multi Asset Allocation">Multi Asset Allocation (3)</MenuItem>
            </TextField>
            <TextField
              label="Annual Salary (INR)"
              name="annualSalary"
              type="number"
              InputProps={{ startAdornment: <InputAdornment position="start">₹</InputAdornment> }}
              value={form.annualSalary}
              onChange={handleChange}
              error={!!errors.annualSalary}
              helperText={errors.annualSalary}
              fullWidth
              margin="normal"
              required
            />
            <Button
              type="submit"
              variant="contained"
              className={styles.submitBtn}
              sx={{
                mt: 3,
                background: 'linear-gradient(90deg, #5e4ae3 60%, #23395d 100%)',
                borderRadius: '18px',
                fontWeight: 700,
                fontSize: '1.15rem',
                padding: '12px',
                boxShadow: '0 2px 8px #5e4ae322',
                letterSpacing: '0.04em',
                textTransform: 'none',
                '&:hover': {
                  background: 'linear-gradient(90deg, #23395d 60%, #5e4ae3 100%)',
                  boxShadow: '0 6px 24px #5e4ae344',
                },
              }}
              fullWidth
            >
              Submit Portfolio
            </Button>
          </form>
      </div>
    </div>
  );
};

export default BuildPortfolio;
