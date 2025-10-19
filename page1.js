import React from 'react';
import './Main.css';

function Page1({goTo,currentPage}) {
  return (
    <div className="main-content">
      <div className="employee-container">
        <h2>Employee</h2>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button className="add-btn" onClick={() => goTo(2)}>+ Add New Employee</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Employee ID</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Project</th>
              <th>Type</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="8" className="no-records">No records found</td>
            </tr>
          </tbody>
        </table>
        <div className="nav-buttons">
          <button className="nav-btn" onClick={() => goTo(currentPage - 1 < 1 ? 7 : currentPage - 1)}>&lt;</button>
          <span className="page-number">{currentPage}</span>
          <button className="nav-btn" onClick={() => goTo(currentPage + 1 > 7 ? 1 : currentPage + 1)}>&gt;</button>
          <button className="nav-btn reset-btn" onClick={() => goTo(1)}>Reset</button>
        </div>
      </div>
    </div>
  );
}
export default Page1;
