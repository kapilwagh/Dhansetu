import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./UserDashboard.module.css";
import PieChartOutlineIcon from "@mui/icons-material/PieChartOutline";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import DashboardHeader from "../components/DashboardHeader";

// Predefined color palette
const defaultColors = [
  "#5e4ae3",
  "#a685fa",
  "#f8b400",
  "#e04e99",
  "#00b386",
  "#ff6b6b",
  "#2ec4b6",
  "#ff9f1c",
];

const PieChartPlaceholder = ({ pieData }) => {
  const [hoveredSector, setHoveredSector] = useState(null);

  let startAngle = 0;
  const radius = 90;
  const cx = 100,
    cy = 100;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
      {/* Legend */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {pieData.map((s) => (
          <div
            key={s.sector}
            style={{ display: "flex", alignItems: "center", gap: 10 }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 3,
                backgroundColor: s.color,
              }}
            />
            <div style={{ fontSize: 14, color: "#23395d", fontWeight: 500 }}>
              {s.sector}
            </div>
          </div>
        ))}
      </div>

      {/* Pie Chart */}
      <div style={{ position: "relative", width: 200, height: 200 }}>
        <svg width="200" height="200" viewBox="0 0 200 200">
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

            const handleMouseEnter = () => setHoveredSector(slice.sector);
            const handleMouseLeave = () => setHoveredSector(null);

            startAngle += angle;

            return (
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
          })}
          <circle cx={cx} cy={cy} r={radius - 18} fill="#fff" />
        </svg>

        {hoveredSector && (
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: -30,
              transform: "translateX(-50%)",
              background: "#fff",
              border: "1px solid #ccc",
              borderRadius: 8,
              padding: "6px 14px",
              fontWeight: 600,
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              pointerEvents: "none",
              zIndex: 10,
              whiteSpace: "nowrap",
            }}
          >
            {(() => {
              const hovered = pieData.find((s) => s.sector === hoveredSector);
              return hovered
                ? `${hovered.sector}: ${hovered.value}%`
                : hoveredSector;
            })()}
          </div>
        )}
      </div>
    </div>
  );
};

const UserDashboard = () => {
  const navigate = useNavigate();
  const [holdings, setHoldings] = useState([]);
  const userID = sessionStorage.getItem("userID");

  useEffect(() => {
    const storedHoldings = JSON.parse(
      sessionStorage.getItem("holdings") || "[]"
    );
    setHoldings(storedHoldings);
  }, []);

  const { currentValue, investedValue, totalPL, avgHealthScore } =
    useMemo(() => {
      if (!holdings || holdings.length === 0) {
        return {
          currentValue: 0,
          investedValue: 0,
          totalPL: 0,
          avgHealthScore: 0,
        };
      }

      const currentValue = holdings.reduce((sum, h) => sum + h.ltp * h.qty, 0);
      const investedValue = holdings.reduce(
        (sum, h) => sum + h.avgBuyPrice * h.qty,
        0
      );
      const totalPL = currentValue - investedValue;
      const avgHealthScore =
        holdings.reduce((sum, h) => sum + (parseFloat(h.healthScore) || 0), 0) /
        holdings.length;

      return {
        currentValue,
        investedValue,
        totalPL,
        avgHealthScore,
      };
    }, [holdings]);

  const pieData = useMemo(() => {
    if (!holdings || holdings.length === 0) return [];

    const totalValue = holdings.reduce((sum, h) => sum + h.ltp * h.qty, 0);
    const sectorMap = {};

    holdings.forEach((h) => {
      const sector = h.sector || "Others";
      const value = h.ltp * h.qty;
      sectorMap[sector] = (sectorMap[sector] || 0) + value;
    });

    const sectorEntries = Object.entries(sectorMap);
    return sectorEntries.map(([sector, value], i) => ({
      sector,
      value: parseFloat(((value / totalValue) * 100).toFixed(2)),
      color: defaultColors[i % defaultColors.length],
    }));
  }, [holdings]);

  return (
    <div className={styles.dashboardBg}>
      <div className={styles.dashboardContent}>
        <div className={styles.dashboardContainer}>
          <DashboardHeader userName="Amit Shah" role="User" />

          {/* Top Section */}
          <div className={styles.topSection}>
            {/* Pie Chart Section */}
            <div className={styles.pieWrap}>
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
              <PieChartPlaceholder pieData={pieData} />
            </div>

            {/* Summary Cards */}
            <div style={{ flex: 2 }}>
              <div className={styles.actionRow}>
                <button
                  className={styles.actionBtn}
                  onClick={() => navigate(`/analysis/${userID}`)}
                >
                  Analysis
                </button>
                <button
                  className={styles.actionBtn}
                  onClick={() => navigate(`/build-portfolio`)}
                >
                  Build My Portfolio
                </button>
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
                    ₹{currentValue.toLocaleString()}
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
                    ₹{investedValue.toLocaleString()}
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
                  <div className={styles.metricLabel}>Total P/L</div>
                  <div
                    className={styles.metricValue}
                    style={{ color: totalPL >= 0 ? "#00b386" : "#e04e99" }}
                  >
                    {totalPL >= 0 ? "+" : "-"}₹
                    {Math.abs(totalPL).toLocaleString()}
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
                  <div className={styles.metricValue}>
                    {avgHealthScore.toFixed(1)}/10
                  </div>
                  <div
                    className={styles.summaryHealthBar}
                    style={{ width: `${(avgHealthScore / 10) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Table */}
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
                {holdings.map((row, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{row.scripName}</td>
                    <td>{row.sector}</td>
                    <td>₹{row.ltp}</td>
                    <td>{row.qty}</td>
                    <td>₹{row.avgBuyPrice}</td>
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
