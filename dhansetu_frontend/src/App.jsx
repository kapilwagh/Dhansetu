import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import RMDashboard from "./pages/RMDashboard";
import BuildPortfolio from "./pages/BuildPortfolio";
import InvestmentRecommendations from "./pages/InvestmentRecommendations";
import Analysis from "./pages/Analysis";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/user" element={<UserDashboard />} />
        <Route path="/rm" element={<RMDashboard />} /> */}
        <Route path="/user/:custid" element={<UserDashboard />} />
        <Route path="/rm/:rmid" element={<RMDashboard />} />

        {/* <Route path="/analysis" element={<Analysis />} /> */}
        <Route path="/analysis/:userID" element={<Analysis />} />
        {/* <Route path="/build-portfolio" element={<BuildPortfolio />} /> */}
        <Route
          path="/build-portfolio"
          element={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100vw",
                height: "100vh",
                margin: 0,
                padding: 0,
              }}
            >
              <iframe
                src="https://web-production-00a48.up.railway.app/"
                title="Build Portfolio"
                style={{
                  width: "100vw",
                  height: "100vh",
                  border: "none",
                  display: "block",
                  margin: 0,
                  padding: 0,
                }}
                allowFullScreen
              />
            </div>
          }
        />
        <Route
          path="/investment-recommendations"
          element={<InvestmentRecommendations />}
        />
      </Routes>
    </Router>
  );
}

export default App;
