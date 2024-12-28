import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/UserModule/Dashboard';
import CompanyManagement from './components/AdminModule/CompanyManagement';
import CommunicationMethodManagement from './components/AdminModule/CommunicationMethodManagement';
import CalendarView from './components/UserModule/CalendarView';
import AnalyticsDashboard from './components/ReportingModule/AnalyticsDashboard';
import './styles/App.css';

const App = () => (
  <Router>
    <div className="App">
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/communication-methods">Communication Methods</Link>
        <Link to="/calendar">Calendar</Link>
        <Link to="/analytics">Analytics</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/admin" element={<CompanyManagement />} />
        <Route path="/communication-methods" element={<CommunicationMethodManagement />} />
        <Route path="/calendar" element={<CalendarView />} />
        <Route path="/analytics" element={<AnalyticsDashboard />} />
      </Routes>
    </div>
  </Router>
);

export default App;