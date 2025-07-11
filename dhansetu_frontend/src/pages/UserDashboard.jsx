import React from 'react';
import StockRecommendations from '../components/StockRecommendations';
import FeedbackMeter from '../components/FeedbackMeter';
import StockDictionary from '../components/StockDictionary';
import TrendingStocksPanel from '../components/TrendingStocksPanel';
import SuggestionPerformanceInsight from '../components/SuggestionPerformanceInsight';
import DashboardHeader from '../components/DashboardHeader';
import styles from './UserDashboard.module.css';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

// Dummy data
const summaryData = [
  { icon: <MonetizationOnIcon className={styles.summaryIcon} />, label: 'Current Value', value: '₹12,45,000' },
  { icon: <AccountBalanceWalletIcon className={styles.summaryIcon} />, label: 'Invested Value', value: '₹10,00,000' },
  { icon: <TrendingUpIcon className={styles.summaryIcon} />, label: "+ Today's P/L", value: '+₹15,000' },
  { icon: <FavoriteIcon className={styles.summaryIcon} />, label: 'Health Score', value: '8.2/10', health: true },
];

const pieData = [
  { sector: 'IT', value: 40, color: '#5e4ae3' },
  { sector: 'Finance', value: 25, color: '#a685fa' },
  { sector: 'Energy', value: 20, color: '#f8b400' },
  { sector: 'Pharma', value: 15, color: '#e04e99' },
];

const tableData = [
  { custId: 'C123', scrip: 'TCS', sector: 'IT', ltp: '₹3,500', qty: 10, avg: '₹3,200' },
  { custId: 'C124', scrip: 'HDFC', sector: 'Finance', ltp: '₹2,800', qty: 15, avg: '₹2,500' },
  { custId: 'C125', scrip: 'RELIANCE', sector: 'Energy', ltp: '₹2,600', qty: 12, avg: '₹2,200' },
  { custId: 'C126', scrip: 'SUNPHARMA', sector: 'Pharma', ltp: '₹1,100', qty: 20, avg: '₹1,000' },
];

function PieChartPlaceholder() {
  // Simple SVG pie chart placeholder
  const total = pieData.reduce((sum, s) => sum + s.value, 0);
  let startAngle = 0;
  const radius = 54;
  const cx = 70, cy = 70;
  return (
    <svg width="140" height="140" viewBox="0 0 140 140">
      {pieData.map((slice, i) => {
        const angle = (slice.value / total) * 360;
        const x1 = cx + radius * Math.cos((Math.PI * startAngle) / 180);
        const y1 = cy + radius * Math.sin((Math.PI * startAngle) / 180);
        const x2 = cx + radius * Math.cos((Math.PI * (startAngle + angle)) / 180);
        const y2 = cy + radius * Math.sin((Math.PI * (startAngle + angle)) / 180);
        const largeArc = angle > 180 ? 1 : 0;
        const pathData = `M${cx},${cy} L${x1},${y1} A${radius},${radius} 0 ${largeArc},1 ${x2},${y2} Z`;
        startAngle += angle;
        return (
          <path key={i} d={pathData} fill={slice.color} stroke="#fff" strokeWidth="2" />
        );
      })}
      <circle cx={cx} cy={cy} r={radius-17} fill="#fff" />
    </svg>
  );
}

const UserDashboard = () => {
  return (
    <div className={styles.dashboardBg}>
      <div className={styles.dashboardContent}>
        <div className={styles.dashboardContainer}>
          <DashboardHeader userName="Amit Shah" role="User" />
          <div className={styles.topSection}>
            <div className={styles.pieWrap}>
              <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:8}}>
                <PieChartOutlineIcon style={{color:'#5e4ae3',fontSize:'1.5rem'}} />
                <span style={{fontWeight:600, color:'#23395d'}}>Sector Allocation</span>
              </div>
              <PieChartPlaceholder />
              <div style={{marginTop:12, display:'flex', flexWrap:'wrap', justifyContent:'center', gap:8}}>
                {pieData.map(s => (
                  <span key={s.sector} style={{fontSize:'0.98rem',color:'#5e4ae3',background:'#f4f4fa',padding:'3px 10px',borderRadius:9}}>{s.sector}</span>
                ))}
              </div>
            </div>
            <div style={{flex:2}}>
              <div className={styles.actionRow}>
              <button className={styles.actionBtn}>Analysis</button>
              <button className={styles.actionBtn}>Build My Portfolio</button>
            </div>
            <div className={styles.singleSummaryCard}>
              <div className={styles.metricBlock}>
                <div className={styles.metricIcon} style={{background:'#edeaff'}}><MonetizationOnIcon style={{color:'#5e4ae3',fontSize:32}} /></div>
                <div className={styles.metricLabel}>Current Value</div>
                <div className={styles.metricValue}>₹12,45,000</div>
              </div>
              <div className={styles.metricBlock}>
                <div className={styles.metricIcon} style={{background:'#e8f2ff'}}><AccountBalanceWalletIcon style={{color:'#23395d',fontSize:32}} /></div>
                <div className={styles.metricLabel}>Invested Value</div>
                <div className={styles.metricValue}>₹10,00,000</div>
              </div>
              <div className={styles.metricBlock}>
                <div className={styles.metricIcon} style={{background:'#e4fff6'}}><TrendingUpIcon style={{color:'#00b386',fontSize:32}} /></div>
                <div className={styles.metricLabel}>Today's P/L</div>
                <div className={styles.metricValue} style={{color:'#00b386'}}>+₹15,000</div>
              </div>
              <div className={styles.metricBlock}>
                <div className={styles.metricIcon} style={{background:'#fff3f6'}}><FavoriteIcon style={{color:'#e04e99',fontSize:32}} /></div>
                <div className={styles.metricLabel}>Health Score</div>
                <div className={styles.metricValue}>8.2/10</div>
                <div className={styles.summaryHealthBar} />
              </div>
            </div>
          </div>

        </div>
        <div className={styles.tableSection}>
          <table className={styles.portfolioTable}>
            <thead>
              <tr>
                <th>Customer ID</th>
                <th>Scrip Name</th>
                <th>Sector</th>
                <th>LTP</th>
                <th>Quantity</th>
                <th>Avg Buy Price</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, i) => (
                <tr key={i}>
                  <td>{row.custId}</td>
                  <td>{row.scrip}</td>
                  <td>{row.sector}</td>
                  <td>{row.ltp}</td>
                  <td>{row.qty}</td>
                  <td>{row.avg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  );
};

export default UserDashboard;
