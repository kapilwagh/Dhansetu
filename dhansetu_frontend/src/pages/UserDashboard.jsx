
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import StockRecommendations from "../components/StockRecommendations";
import FeedbackMeter from "../components/FeedbackMeter";
import StockDictionary from "../components/StockDictionary";
import TrendingStocksPanel from "../components/TrendingStocksPanel";
import SuggestionPerformanceInsight from "../components/SuggestionPerformanceInsight";
import DashboardHeader from "../components/DashboardHeader";
import styles from "./UserDashboard.module.css";
import PieChartOutlineIcon from "@mui/icons-material/PieChartOutline";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

// Dummy data
// const summaryData = [
//   {
//     icon: <MonetizationOnIcon className={styles.summaryIcon} />,
//     label: "Current Value",
//     value: "₹12,45,000",
//   },
//   {
//     icon: <AccountBalanceWalletIcon className={styles.summaryIcon} />,
//     label: "Invested Value",
//     value: "₹10,00,000",
//   },
//   {
//     icon: <TrendingUpIcon className={styles.summaryIcon} />,
//     label: "+ Today's P/L",
//     value: "+₹15,000",
//   },
//   {
//     icon: <FavoriteIcon className={styles.summaryIcon} />,
//     label: "Health Score",
//     value: "8.2/10",
//     health: true,
//   },
// ];

const pieData = [
  { sector: "IT", value: 40, color: "#5e4ae3" },
  { sector: "Finance", value: 25, color: "#a685fa" },
  { sector: "Energy", value: 20, color: "#f8b400" },
  { sector: "Pharma", value: 15, color: "#e04e99" },
];

// const tableData = [
//   {
//     custId: "C123",
//     scrip: "TCS",
//     sector: "IT",
//     ltp: "₹3,500",
//     qty: 10,
//     avg: "₹3,200",
//   },
//   {
//     custId: "C124",
//     scrip: "HDFC",
//     sector: "Finance",
//     ltp: "₹2,800",
//     qty: 15,
//     avg: "₹2,500",
//   },
//   {
//     custId: "C125",
//     scrip: "RELIANCE",
//     sector: "Energy",
//     ltp: "₹2,600",
//     qty: 12,
//     avg: "₹2,200",
//   },
//   {
//     custId: "C126",
//     scrip: "SUNPHARMA",
//     sector: "Pharma",
//     ltp: "₹1,100",
//     qty: 20,
//     avg: "₹1,000",
//   },
// ];

function PieChartPlaceholder() {
  const [hoveredSector, setHoveredSector] = React.useState(null);
  let startAngle = 0;
  const radius = 88;
  const cx = 110,
    cy = 110;
  return (
    <div style={{ position: "relative", width: 220, height: 220 }}>
      <svg width="220" height="220" viewBox="0 0 220 220">
        {pieData.map((slice, i) => {
          const angle = (slice.value / 100) * 360;
          const x1 = cx + radius * Math.cos((Math.PI * startAngle) / 180);
          const y1 = cy + radius * Math.sin((Math.PI * startAngle) / 180);
          const x2 =
            cx + radius * Math.cos((Math.PI * (startAngle + angle)) / 180);
          const y2 =
            cy + radius * Math.sin((Math.PI * (startAngle + angle)) / 180);
          const largeArc = angle > 180 ? 1 : 0;
          const pathData = `M${cx},${cy} L${x1},${y1} A${radius},${radius} 0 ${largeArc},1 ${x2},${y2} Z`;
          const sectorName = slice.sector;
          const handleMouseEnter = () => setHoveredSector(sectorName);
          const handleMouseLeave = () => setHoveredSector(null);

          // Calculate label position
          const midAngle = startAngle + angle / 2;
          const percent = slice.value;
          const labelRadius = radius; // On circumference
          const labelX = cx + labelRadius * Math.cos((Math.PI * midAngle) / 180);
          const labelY = cy + labelRadius * Math.sin((Math.PI * midAngle) / 180) + 2;

          const labelText = percent + '%';

          const pathElem = (
            <path
              key={i}
              d={pathData}
              fill={slice.color}
              stroke="#fff"
              strokeWidth="2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ cursor: "pointer" }}
            />
          );

          startAngle += angle;
          return pathElem;
        })}
        <circle cx={cx} cy={cy} r={radius - 17} fill="#fff" />
      </svg>
      {hoveredSector && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: -34,
            transform: "translateX(-50%)",
            background: "#fff",
            color: "#23395d",
            border: "1.5px solid #5e4ae3",
            borderRadius: 8,
            padding: "6px 18px",
            fontWeight: 600,
            boxShadow: "0 2px 12px #0002",
            pointerEvents: "none",
            zIndex: 10,
            whiteSpace: "nowrap",
          }}
        >
          {(() => {
            const hovered = pieData.find(s => s.sector === hoveredSector);
            return hovered ? `${hovered.sector} : ${hovered.value}%` : hoveredSector;
          })()}
        </div>
      )}
    </div>
  );
}

const UserDashboard = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   const fetchHoldings = async () => {
  //     try {
  //       const response = await fetch(
  //         "http://10.13.16.64:9001/portfolio/1001/holdings"
  //       );
  //       const data = await response.json();
  //       console.log("Fetched Holdings:", data); // Log the fetched data
  //     } catch (error) {
  //       console.error("Error fetching holdings:", error);
  //     }
  //   };

  //   fetchHoldings();
  // }, []);

  const [holdings, setHoldings] = useState([]);
  const [currentValue, setCurrentValue] = useState(0);
  const [investedValue, setInvestedValue] = useState(0);
  const [profitLoss, setProfitLoss] = useState(0);

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        const response = await fetch(
          "http://10.13.16.64:9001/portfolio/1001/holdings"
        );
        const data = await response.json();
        console.log("Fetched Holdings:", data);

        // Add mock riskScore to each item
        const enrichedData = data.map((item) => ({
          ...item,
          riskScore: Math.floor(Math.random() * 11), // 0 to 10
        }));
        setHoldings(enrichedData);

        // 🔥 Calculate metrics
        let currValue = 0;
        let invValue = 0;
        enrichedData.forEach((item) => {
          const ltp = parseFloat(item.ltp);
          const qty = parseFloat(item.qty);
          const avg = parseFloat(item.avgBuyPrice);
          currValue += ltp * qty;
          invValue += avg * qty;
        });

        const pnl = currValue - invValue;

        setCurrentValue(currValue);
        setInvestedValue(invValue);
        setProfitLoss(pnl);
      } catch (error) {
        console.error("Error fetching holdings:", error);
      }
    };

    fetchHoldings();
  }, []);

  return (
    <div className={styles.dashboardBg}>
      <div className={styles.dashboardContent}>
        <div className={styles.dashboardContainer}>
          <DashboardHeader userName="Amit Shah" role="User" />
          <div className={styles.topSection}>
            <div className={styles.pieWrap}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 40, justifyContent: 'center', width: '100%' }}>
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 8,
                    }}
                  >
                    <PieChartOutlineIcon
                      style={{ color: "#5e4ae3", fontSize: "1.5rem" }}
                    />
                    <span style={{ fontWeight: 600, color: "#23395d" }}>
                      Sector Allocation
                    </span>
                  </div>
                  <PieChartPlaceholder />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 18, marginTop: 24, marginLeft: 18 }}>
                  {pieData.map((s) => (
                    <span
                      key={s.sector}
                      style={{
                        fontSize: "1.08rem",
                        color: s.color,
                        fontWeight: 700,
                        letterSpacing: "0.01em",
                        minWidth: 62,
                        textAlign: "left",
                        background: "none",
                        border: "none",
                        boxShadow: "none",
                        padding: 0,
                      }}
                    >
                      {s.sector}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ flex: 2 }}>
              <div className={styles.actionRow}>
                <button className={styles.actionBtn}>Analysis</button>
                <button className={styles.actionBtn} onClick={() => navigate('/build-portfolio')}>Build My Portfolio</button>
              </div>
              <div className={styles.singleSummaryCard}>
                <div className={styles.metricBlock}>
                  <div
                    className={styles.metricIcon}
                    style={{ background: "#edeaff" }}
                  >
                    <MonetizationOnIcon
                      style={{ color: "#5e4ae3", fontSize: 32 }}
                    />
                  </div>
                  <div className={styles.metricLabel}>Current Value</div>
                  <div className={styles.metricValue}>
                    ₹
                    {currentValue.toLocaleString("en-IN", {
                      maximumFractionDigits: 2,
                    })}
                  </div>
                </div>
                <div className={styles.metricBlock}>
                  <div
                    className={styles.metricIcon}
                    style={{ background: "#e8f2ff" }}
                  >
                    <AccountBalanceWalletIcon
                      style={{ color: "#23395d", fontSize: 32 }}
                    />
                  </div>
                  <div className={styles.metricLabel}>Invested Value</div>
                  <div className={styles.metricValue}>
                    ₹
                    {investedValue.toLocaleString("en-IN", {
                      maximumFractionDigits: 2,
                    })}
                  </div>
                </div>
                <div className={styles.metricBlock}>
                  <div
                    className={styles.metricIcon}
                    style={{ background: "#e4fff6" }}
                  >
                    <TrendingUpIcon
                      style={{ color: "#00b386", fontSize: 32 }}
                    />
                  </div>
                  <div className={styles.metricLabel}>P/L</div>
                  <div
                    className={styles.metricValue}
                    style={{ color: "#00b386" }}
                  >
                    {profitLoss >= 0 ? "+" : "-"}₹
                    {Math.abs(profitLoss).toLocaleString("en-IN", {
                      maximumFractionDigits: 2,
                    })}
                  </div>
                </div>
                <div className={styles.metricBlock}>
                  <div
                    className={styles.metricIcon}
                    style={{ background: "#fff3f6" }}
                  >
                    <FavoriteIcon style={{ color: "#e04e99", fontSize: 32 }} />
                  </div>
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
                  <th>Sr. No.</th>
                  <th>Scrip Name</th>
                  <th>Sector</th>
                  <th>LTP</th>
                  <th>Quantity</th>
                  <th>Avg Buy Price</th>
                  <th>Health Score</th>
                </tr>
              </thead>
              <tbody>
                {/* {tableData.map((row, i) => (
                  <tr key={i}>
                    <td>{row.custId}</td>
                    <td>{row.scrip}</td>
                    <td>{row.sector}</td>
                    <td>{row.ltp}</td>
                    <td>{row.qty}</td>
                    <td>{row.avg}</td>
                  </tr>
                ))} */}
                {holdings.map((row, i) => (
                  <tr key={i}>
                    <td>{row.id}</td>
                    <td>{row.scripName}</td>
                    <td>{row.sector}</td>
                    <td>{row.ltp}</td>
                    <td>{row.qty}</td>
                    <td>{row.avgBuyPrice}</td>
                    <td>{row.healthScore}</td>
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
