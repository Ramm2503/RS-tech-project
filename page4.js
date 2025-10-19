import React from 'react';
import './Main.css';

function Page4({ goTo, currentPage }) {
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
              <td>
                <img src="https://img.freepik.com/free-photo/man-with-arms-crossed_1187-1760.jpg?semt=ais_hybrid&w=740&q=80" className="profile-img" alt="Arlene" /> Ram
              </td>
              <td>4567890</td>
              <td>Design</td>
              <td>Design Lead</td>
              <td>Car Rental</td>
              <td>Office</td>
              <td><span style={{ fontWeight: "bold" }}>Permanent</span></td>
              <td>
                <div className="action-icons">
                  <button className="icon-btn" title="View" onClick={() => goTo(5)}>&#128065;</button>
                  <button className="icon-btn" title="Edit" onClick={() => goTo(6)}>&#9998;</button>
                  <button className="icon-btn" title="Delete" onClick={() => goTo(7)}>&#128465;</button>
                </div>
              </td>
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
export default Page4;
