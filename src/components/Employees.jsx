import React from "react";
import Employee from "./Employee";

const employees = [
  {
    name: "Hitchean Lisondra",
    position: "Manager",
    salary: 80000,
    status: "Active",
  },
  {
    name: "Michael John Bustamante",
    position: "Developer",
    salary: 85000,
    status: "Active",
  },
  {
    name: "Aries Vincent Dajay",
    position: "Designer",
    salary: 75000,
    status: "Active",
  },
  {
    name: "Dr. Isabelo Genegaboas",
    position: "Manager",
    salary: 80000,
    status: "Active",
  },
  {
    name: "Rexy Jade Yangyang",
    position: "Developer",
    salary: 85000,
    status: "Active",
  },
  {
    name: "Jhon Ericson Brigildo",
    position: "Designer",
    salary: 75000,
    status: "Active",
  },
  {
    name: "Angelica Singcol",
    position: "Manager",
    salary: 80000,
    status: "Active",
  },
  {
    name: "Jofil Mark Aripal",
    position: "Developer",
    salary: 85000,
    status: "Active",
  },
  {
    name: "Joe Ryan Victorillo",
    position: "Designer",
    salary: null,
    status: "Not Active",
  },
  {
    name: "Liezel Ocaba",
    position: "Manager",
    salary: null,
    status: "Not Active",
  },
];

const Employees = () => {
  return (
    <div>
      <h1>EMPLOYEES RECORDS</h1>
      <table border="1">
        <thead>
          <tr>
            <th>No.</th>
            <th>EMPLOYEE NAMES</th>
            <th>POSITION</th>
            <th>SALARY</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <Employee key={index} employee={employee} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
