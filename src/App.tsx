import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppRoutes from "./Components/routes/Routes";

function App() {
  return (
    <Router>
      <div className="centeredClass">
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
