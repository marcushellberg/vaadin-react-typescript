import React from 'react';
import Employee from '../../generated/org/vaadin/marcus/backend/Employee';
import './EmployeeCard.css';
type Props = {
  employee: Employee;
};
const EmployeeCard: React.FC<Props> = ({ employee }) => {
  return (
    <div className="EmployeeCard">
      <img
        className="avatar"
        src={`https://i.pravatar.cc/150?u=${employee.idString}`}
        alt={employee.firstname}
      ></img>
      <div className="name">
        {employee.firstname} {employee.lastname}
      </div>
    </div>
  );
};

export default EmployeeCard;
