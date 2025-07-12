import React, { useEffect, useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import styles from "./UserDashboard.module.css";

const columns = [
  { label: "#", key: "index" },
  { label: "Name", key: "name" },
  { label: "Type", key: "type" },
  { label: "Category", key: "category" },
  { label: "Predicted Return", key: "predictedReturn" },
  { label: "Units", key: "units" },
  { label: "Cost (₹)", key: "cost" },
];

// Replace this with your API call
// const fetchRecommendations = async (type) => {
//   // Simulated API data for demo
//   if (type === "mutual_funds") {
//     return [ ... ];
//   }
//   // Add similar mock data for stocks and multi_asset
//   if (type === "stocks") {
//     return [ ... ];
//   }
//   if (type === "multi_asset") {
//     return [ ... ];
//   }
//   return [];
// };


/*
const hardcodedData = {
  recommendations: [
    // 3 Stocks
    {
      name: "TCS",
      type: "Stock",
      category: "IT",
      predictedReturn: "16.00%",
      units: 12,
      cost: "3,500.00",
    },
    {
      name: "HDFC Bank",
      type: "Stock",
      category: "Banking",
      predictedReturn: "15.00%",
      units: 20,
      cost: "1,720.00",
    },
    {
      name: "Reliance Industries",
      type: "Stock",
      category: "Energy",
      predictedReturn: "14.00%",
      units: 10,
      cost: "2,885.00",
    },
    // 1 Gold ETF
    {
      name: "Nippon India Gold ETF",
      type: "Gold ETF",
      category: "Commodity",
      predictedReturn: "12.00%",
      units: 50,
      cost: "500.00",
    },
    // 3 Mutual Funds
    {
      name: "HDFC Mid-Cap Opportunities Fund",
      type: "Mutual Fund",
      category: "Mid Cap",
      predictedReturn: "21.00%",
      units: 28.571,
      cost: "4,285.65",
    },
    {
      name: "DSP Midcap Fund",
      type: "Mutual Fund",
      category: "Mid Cap",
      predictedReturn: "19.50%",
      units: 35.714,
      cost: "4,285.68",
    },
    {
      name: "WhiteOak Capital Flexi Cap Fund",
      type: "Mutual Fund",
      category: "Flexi Cap",
      predictedReturn: "19.00%",
      units: 285.714,
      cost: "4,285.71",
    },
  ],
};
*/

// import { useEffect, useState } from "react";

const InvestmentRecommendations = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/investment_recommendations_api.json")
      .then((res) => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch recommendations.");
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.dashboardBg}>
      <DashboardHeader />
      <div className={styles.dashboardContent}>
        <div className={styles.dashboardContainer}>
          <h2 style={{ color: "#fff", marginBottom: 0 }}>Investment Recommendations</h2>
          <div style={{ background: "#fff", borderRadius: 20, boxShadow: "0 4px 24px #5e4ae333", padding: 28, minHeight: 320 }}>
            {loading ? (
              <div style={{ textAlign: "center", color: "#5e4ae3", fontSize: 18, padding: 40 }}>
                Loading recommendations...
              </div>
            ) : error ? (
              <div style={{ textAlign: "center", color: "#e53935", fontSize: 18, padding: 40 }}>
                {error}
              </div>
            ) : (
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr>
                      {columns.map((col) => (
                        <th
                          key={col.key}
                          style={{
                            padding: "12px 8px",
                            background: "#f5f6fa",
                            color: "#5e4ae3",
                            fontWeight: 700,
                            fontSize: 15,
                            borderBottom: "2px solid #e0e0e0",
                          }}
                        >
                          {col.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.length === 0 ? (
                      <tr>
                        <td colSpan={columns.length} style={{ textAlign: "center", padding: 24, color: "#888" }}>
                          No recommendations found.
                        </td>
                      </tr>
                    ) : (
                      data.map((row, idx) => (
                        <tr
                          key={idx}
                          style={{ background: idx % 2 === 0 ? "#f8fafd" : "#fff" }}
                        >
                          {columns.map((col) => (
                            <td
                              key={col.key}
                              style={{
                                padding: "12px 8px",
                                color: "#222",
                                fontSize: 15,
                                borderBottom: "1px solid #eee",
                                textAlign: col.key === "index" ? "center" : "left",
                                fontWeight: col.key === "index" ? 600 : 400,
                              }}
                            >
                              {col.key === "index" ? idx + 1 : row[col.key] || "-"}
                            </td>
                          ))}
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentRecommendations;
