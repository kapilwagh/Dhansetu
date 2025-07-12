import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './UserDashboard.module.css';

// Dummy customer data for RM
const customers = [
  { id: 'C123', name: 'Amit Shah', health: 8.2 },
  { id: 'C124', name: 'Priya Mehta', health: 6.9 },
  { id: 'C125', name: 'Rahul Verma', health: 7.8 },
  { id: 'C126', name: 'Sneha Kapoor', health: 9.1 },
];

const RMDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.dashboardContent} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className={styles.dashboardContainer} style={{ marginLeft: 40 }}>
        <h2 style={{
          marginBottom: 32,
          fontWeight: 800,
          fontSize: '2.2rem',
          color: '#fff',
          textAlign: 'center',
          letterSpacing: '0.05em',
        }}>
          Relationship Manager Dashboard
        </h2>
        <div className={styles.tableSection} style={{ display: 'flex', justifyContent: 'center' }}>
          <table className={styles.portfolioTable} style={{ margin: '0 auto' }}>
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
                <tr key={c.id}>
                  <td>{c.id}</td>
                  <td>{c.name}</td>
                  <td>
                    <span style={{ fontWeight: 600, color: c.health >= 8 ? '#00b386' : c.health >= 7 ? '#f8b400' : '#e04e99' }}>
                      {c.health}/10
                    </span>
                  </td>
                  <td>
                    <button className={styles.actionBtn} onClick={() => navigate('/analysis')}>Analysis</button>
                  </td>
                  <td>
                    <button className={styles.actionBtn} onClick={() => navigate('/build-portfolio')}>Build Portfolio</button>
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
