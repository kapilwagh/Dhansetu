import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./UserDashboard.module.css";

const RMDashboard = () => {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const rmID = sessionStorage.getItem("userID");
    const role = sessionStorage.getItem("role");

    if (!rmID || role.toLowerCase() !== "rm") {
      console.warn("Unauthorized access or missing RM ID.");
      return;
    }

    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:9001/rm/portfolio/${rmID}`);
        if (!res.ok) throw new Error("Failed to fetch RM data");
        const data = await res.json();
        console.log("Fetched RM Data:", data);
        setCustomers(data);
      } catch (err) {
        console.error("Error fetching RM data:", err.message);
      }
    };

    console.log(`Logged in as ${role} with ID: ${rmID}`);
    fetchData();
  }, []);

  return (
    <div
      className={styles.dashboardContent}
      style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
    >
      <div className={styles.dashboardContainer} style={{ marginLeft: 40 }}>
        <h2
          style={{
            marginBottom: 32,
            fontWeight: 800,
            fontSize: "2.2rem",
            color: "#fff",
            textAlign: "center",
            letterSpacing: "0.05em",
          }}
        >
          Relationship Manager Dashboard
        </h2>

        <div
          className={styles.tableSection}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <table className={styles.portfolioTable} style={{ margin: "0 auto" }}>
            <thead>
              <tr>
                <th>Customer ID</th>
                <th>Customer Name</th>
                <th>Health Score</th>
                <th>Analysis</th>
                <th>Build Portfolio</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c, i) => (
                <tr key={c.custId}>
                  <td>{c.custId}</td>
                  <td>{c.custName}</td>
                  <td>
                    <span
                      style={{
                        fontWeight: 600,
                        color:
                          c.healthScore >= 8
                            ? "#00b386"
                            : c.healthScore >= 7
                            ? "#f8b400"
                            : "#e04e99",
                      }}
                    >
                      {c.healthScore}/10
                    </span>
                  </td>
                  <td>
                    <button
                      className={styles.actionBtn}
                      onClick={() => navigate(`/analysis/${c.custId}`)}
                    >
                      Analysis
                    </button>
                  </td>
                  <td>
                    <button
                      className={styles.actionBtn}
                      onClick={() => navigate("/build-portfolio")}
                    >
                      Build Portfolio
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RMDashboard;
