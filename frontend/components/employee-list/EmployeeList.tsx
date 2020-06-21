import React, { useState, useEffect } from 'react';

import EmployeeCard from '../employee-card/EmployeeCard';
import Employee from '../../generated/org/vaadin/marcus/backend/Employee';
import { findAll } from '../../generated/EmployeeEndpoint';

import './EmployeeList.css';

const EmployeeList = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    findAll().then(setEmployees);
  }, []);

  return (
    <div className="EmployeeList">
      <h2>Employees</h2>
      <div className="employee-grid">
        {employees.map((employee) => (
          <EmployeeCard key={employee.idString} employee={employee} />
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
