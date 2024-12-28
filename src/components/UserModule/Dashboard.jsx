import React from 'react';
import '../../styles/UserModule.css';

const Dashboard = () => (
  <div className="dashboard">
    <h2>Dashboard</h2>
    <table>
      <thead>
        <tr>
          <th>Company</th>
          <th>Last Communications</th>
          <th>Next Communication</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Company A</td>
          <td>Email, Call</td>
          <td>Visit</td>
        </tr>
        <tr>
          <td>Company B</td>
          <td>LinkedIn</td>
          <td>Call</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Dashboard;