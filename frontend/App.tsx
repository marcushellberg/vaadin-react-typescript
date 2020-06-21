import React, { useState, useEffect } from 'react';
import EmployeeList from './components/employee-list/EmployeeList';
import Employee from './generated/org/vaadin/marcus/backend/Employee';
import { findAll } from './generated/EmployeeEndpoint';
import './App.css';

const App = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    findAll().then(setEmployees);
  }, []);

  return (
    <div className="App">
      <h1>Vaadin + React</h1>
      <p>
        This is an example of how to access Vaadin TS endpoints from a React
        application written in TypeScript.
      </p>
      <EmployeeList employees={employees} />
    </div>
  );
};

export default App;
