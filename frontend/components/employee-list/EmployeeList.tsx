import React from 'react';
import Employee from '../../generated/org/vaadin/marcus/backend/Employee';
import EmployeeCard from '../employee-card/EmployeeCard';
import './EmployeeList.css';

type Props = {
  employees: Employee[];
};
const EmployeeList: React.FC<Props> = ({ employees }) => {
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
