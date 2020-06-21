import React from 'react';
import './App.css';
import EmployeeList from './components/employee-list/EmployeeList';

const App = () => {
  return (
    <div className="App">
      <h1>Vaadin + React</h1>
      <p>
        This is an example of how to access Vaadin TS endpoints from a React
        application written in TypeScript.
      </p>
      <EmployeeList />
    </div>
  );
};

export default App;
