import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import dhansetuLogo from "../assets/Dhansetu_logo.jpeg";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Analysis = () => {
  const { userID } = useParams();
  const [analysisData, setAnalysisData] = useState(null);
  const [selectedStock, setSelectedStock] = useState(null);

  useEffect(() => {
    const fetchAnalysis = async () => {
      try {
        const response = await fetch(
          `http://localhost:9001/portfolio/${userID}/analysis`
        );
        if (!response.ok) throw new Error("Failed to fetch analysis data");
        const data = await response.json();
        console.log("Analysis data:", data);
        setAnalysisData(data);
      } catch (error) {
        console.error("Error fetching analysis data:", error);
      }
    };

    if (userID) {
      fetchAnalysis();
    }
  }, [userID]);

  const tableRows = useMemo(() => {
    if (!analysisData) return [];
    return analysisData.map((entry) => ({
      investment: entry.scripName,
      quantity: entry.qty,
      status: entry.action,
      recoStock: entry.recoStock,
    }));
  }, [analysisData]);

  const generateComparisonData = (main, alt) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    return months.map((month, i) => {
      const base = 100 + i * 5;
      return {
        month,
        [main]: base + Math.floor(Math.random() * 10),
        [alt]: base + 10 + Math.floor(Math.random() * 10),
      };
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Buy":
        return { color: "#00b386", border: "2px solid #00b386" };
      case "Reduce":
        return { color: "#e04e99", border: "2px solid #e04e99" };
      default:
        return { color: "#f8b400", border: "2px solid #f8b400" };
    }
  };

  return (
    <div
      style={{
        background: "#23395d",
        minHeight: "100vh",
        width: "100vw",
        padding: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "24px 0 8px 0",
          background: "#23395d",
          borderRadius: "0 0 28px 28px",
          marginBottom: 16,
          maxWidth: "100vw",
          overflow: "hidden",
        }}
      >
        <img
          src={dhansetuLogo}
          alt="Dhansetu Logo"
          style={{
            width: 56,
            height: 56,
            borderRadius: 14,
            background: "#fff",
            objectFit: "contain",
            border: "3px solid #fff",
            marginLeft: 24,
          }}
        />
      </div>

      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1
          style={{
            color: "#5e4ae3",
            fontWeight: 700,
            fontSize: "2.3rem",
            marginBottom: 28,
          }}
        >
          Investment Analysis
        </h1>

        <div
          style={{
            width: "85vw",
            maxWidth: 1100,
            margin: "0 auto",
            background: "#fff",
            borderRadius: 14,
            boxShadow: "0 2px 12px #ece9f6",
            overflow: "auto",
            maxHeight: "60vh",
          }}
        >
          <table
            style={{
              width: "100%",
              minWidth: 900,
              borderCollapse: "collapse",
              fontSize: "1.08rem",
              background: "transparent",
            }}
          >
            <thead>
              <tr
                style={{
                  background: "#f8f7fc",
                  color: "#5e4ae3",
                  fontWeight: 700,
                }}
              >
                <th style={{ padding: 16 }}>Investment</th>
                <th style={{ padding: 16 }}>Quantity</th>
                <th style={{ padding: 16 }}>Status</th>
                <th style={{ padding: 16 }}>Alternate</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, i) => {
                const statusStyle = getStatusColor(row.status);
                return (
                  <tr
                    key={i}
                    style={{
                      background: i % 2 === 0 ? "#f4f4fa" : "#fff",
                      color: "#23395d",
                    }}
                  >
                    <td style={{ padding: 14, fontWeight: 600 }}>
                      {row.investment}
                    </td>
                    <td style={{ padding: 14 }}>{row.quantity}</td>
                    <td style={{ padding: 14 }}>
                      <span
                        style={{
                          padding: "6px 16px",
                          borderRadius: 16,
                          fontWeight: 600,
                          background: "#fff",
                          ...statusStyle,
                        }}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td style={{ padding: 14 }}>
                      {row.recoStock ? (
                        <button
                          onClick={() => setSelectedStock(row)}
                          style={{
                            background: "#edeaff",
                            color: "#5e4ae3",
                            padding: "6px 12px",
                            borderRadius: 10,
                            fontWeight: 600,
                            border: "none",
                            cursor: "pointer",
                          }}
                        >
                          {row.recoStock}
                        </button>
                      ) : (
                        "-"
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {selectedStock && (
          <div
            style={{
              marginTop: 40,
              background: "#fff",
              borderRadius: 14,
              padding: 24,
              boxShadow: "0 2px 12px #ece9f6",
              width: "85vw",
              maxWidth: 700,
              margin: "40px auto",
            }}
          >
            <h2 style={{ color: "#5e4ae3", fontWeight: 700 }}>
              Peer Comparison: {selectedStock.investment} vs{" "}
              {selectedStock.recoStock}
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={generateComparisonData(
                  selectedStock.investment,
                  selectedStock.recoStock
                )}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey={selectedStock.investment}
                  stroke="#e04e99"
                  strokeWidth={3}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey={selectedStock.recoStock}
                  stroke="#5e4ae3"
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default Analysis;
