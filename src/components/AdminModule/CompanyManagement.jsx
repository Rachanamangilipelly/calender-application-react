import React, { useState } from 'react';
import '../../styles/AdminModule.css';

const CompanyManagement = () => {
  const [companies, setCompanies] = useState([]);
  const [newCompany, setNewCompany] = useState({ name: '', location: '', linkedin: '', emails: '', phone: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCompany({ ...newCompany, [name]: value });
  };

  const addCompany = () => {
    setCompanies([...companies, newCompany]);
    setNewCompany({ name: '', location: '', linkedin: '', emails: '', phone: '' });
  };

  return (
    <div className="admin-module">
      <h2>Company Management</h2>
      <div className="form-group">
        <input type="text" placeholder="Name" name="name" value={newCompany.name} onChange={handleInputChange} />
        <input type="text" placeholder="Location" name="location" value={newCompany.location} onChange={handleInputChange} />
        <input type="text" placeholder="LinkedIn" name="linkedin" value={newCompany.linkedin} onChange={handleInputChange} />
        <button onClick={addCompany}>Add Company</button>
      </div>
      <ul className="company-list">
        {companies.map((company, index) => (
          <li key={index}>{company.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyManagement;