import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


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

const sectors = {
  IT: [
    { name: 'INFOSYS', reason: 'Better 1Y return' },
    { name: 'HCLTECH', reason: 'Higher growth' },
  ],
  Finance: [
    { name: 'KOTAKBANK', reason: 'Consistent performer' },
    { name: 'ICICIBANK', reason: 'Better risk profile' },
  ],
  Energy: [
    { name: 'ONGC', reason: 'Better momentum' },
    { name: 'NTPC', reason: 'Stable returns' },
  ],
  Pharma: [
    { name: 'CIPLA', reason: 'Sector outperformer' },
    { name: 'DRREDDY', reason: 'Strong quarterly results' },
  ],
};

const comparisonData = [
  { month: 'Jan', TCS: 100, IT: 110, INFOSYS: 120 },
  { month: 'Feb', TCS: 102, IT: 115, INFOSYS: 130 },
  { month: 'Mar', TCS: 101, IT: 120, INFOSYS: 135 },
  { month: 'Apr', TCS: 103, IT: 123, INFOSYS: 140 },
  { month: 'May', TCS: 100, IT: 128, INFOSYS: 150 },
  { month: 'Jun', TCS: 98,  IT: 132, INFOSYS: 155 },
];

function Modal({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div style={{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',background:'#0008',zIndex:1000,display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={{background:'#fff',borderRadius:14,padding:32,minWidth:320,maxWidth:420,boxShadow:'0 4px 32px #0002',position:'relative'}}>
        <button style={{position:'absolute',top:10,right:14,fontSize:22,background:'none',border:'none',cursor:'pointer'}} onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>
  );
}

const AnalysisTable = ({ data, onShowAlt, onShowComp }) => (
  <div className={styles.tableSection} style={{marginTop:32}}>
    <table className={styles.portfolioTable}>
      <thead>
        <tr>
          <th>Investment</th>
          <th>Quantity</th>
          <th>Buy</th>
          <th>Hold</th>
          <th>Sell</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            <td>{row.scrip}</td>
            <td>{row.qty}</td>
            <td style={{color:'#00b386',fontWeight:600}}>Buy</td>
            <td style={{color:'#f8b400',fontWeight:600}}>Hold</td>
            <td>
              <button style={{background:'#edeaff',color:'#5e4ae3',border:'none',borderRadius:8,padding:'6px 12px',marginRight:6,cursor:'pointer'}} onClick={()=>onShowAlt(row)}>
                Alternate Stocks
              </button>
              <button style={{background:'#e8f2ff',color:'#23395d',border:'none',borderRadius:8,padding:'6px 12px',cursor:'pointer'}} onClick={()=>onShowComp(row)}>
                Comparison
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const UserDashboard = () => {
  const navigate = useNavigate();
  
  const [altStockModal, setAltStockModal] = useState({ open: false, stock: null });
  const [compModal, setCompModal] = useState({ open: false, stock: null });

  const handleShowAlt = (row) => setAltStockModal({ open: true, stock: row });
  const handleShowComp = (row) => setCompModal({ open: true, stock: row });

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
                <button className={styles.actionBtn} onClick={() => navigate('/analysis')}>Analysis</button>
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

