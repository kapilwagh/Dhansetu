import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import UserDashboard from './pages/UserDashboard';
import RMDashboard from './pages/RMDashboard';
import BuildPortfolio from './pages/BuildPortfolio';
import InvestmentRecommendations from './pages/InvestmentRecommendations';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/rm" element={<RMDashboard />} />
        <Route path="/build-portfolio" element={<BuildPortfolio />} />
        <Route path="/investment-recommendations" element={<InvestmentRecommendations />} />
      </Routes>
    </Router>
  );
}

export default App
