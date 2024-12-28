import React, { useState } from 'react';
import '../../styles/AdminModule.css';

const CommunicationMethodManagement = () => {
  const [methods, setMethods] = useState([
    { name: 'LinkedIn Post', description: 'Post on LinkedIn', mandatory: true },
    { name: 'Email', description: 'Send an email', mandatory: false },
  ]);

  const [newMethod, setNewMethod] = useState({ name: '', description: '', mandatory: false });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewMethod({ ...newMethod, [name]: type === 'checkbox' ? checked : value });
  };

  const addMethod = () => {
    setMethods([...methods, newMethod]);
    setNewMethod({ name: '', description: '', mandatory: false });
  };

  return (
    <div className="communication-method-management">
      <h2>Communication Method Management</h2>
      <div className="form-group">
        <input
          type="text"
          placeholder="Method Name"
          name="name"
          value={newMethod.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={newMethod.description}
          onChange={handleInputChange}
        />
        <label>
          <input
            type="checkbox"
            name="mandatory"
            checked={newMethod.mandatory}
            onChange={handleInputChange}
          />
          Mandatory
        </label>
        <button onClick={addMethod}>Add Method</button>
      </div>
      <ul className="method-list">
        {methods.map((method, index) => (
          <li key={index}>
            {method.name} - {method.description} ({method.mandatory ? 'Mandatory' : 'Optional'})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunicationMethodManagement;