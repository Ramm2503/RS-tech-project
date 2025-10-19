import React from 'react';
import './Main.css';

function Page7({ goTo, currentPage }) {
  return (
    <div className="main-content-p7">
      <div className="employee-container-p7">
        <h2>Employee</h2>
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
                <img src="https://randomuser.me/api/portraits/women/44.jpg" className="profile-img-p7" alt="Arlene" /> Arlene
              </td>
              <td>671190345</td>
              <td>Design</td>
              <td>Design Lead</td>
              <td>Car Rental</td>
              <td>Office</td>
              <td><span style={{ fontWeight: "bold" }}>Permanent</span></td>
              <td>
                <div className="action-icons-p7">
                  <button className="icon-btn-p7" title="View">&#128065;</button>
                  <button className="icon-btn-p7" title="Edit">&#9998;</button>
                  <button className="icon-btn-p7" title="Delete">&#128465;</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="modal-bg-p7">
          <div className="modal-p7">
            <div className="modal-icon-p7">&#128465;</div>
            <div className="modal-text-p7">Are you sure you want to Delete</div>
            <div className="modal-buttons-p7">
              <button className="modal-btn-cancel-p7" onClick={() => goTo(4)}>Cancel</button>
              <button className="modal-btn-yes-p7" onClick={() => goTo(4)}>Yes</button>
            </div>
          </div>
        </div>
        <div className="nav-buttons-p7">
          <button className="nav-btn-p7" onClick={() => goTo(currentPage - 1 < 1 ? 7 : currentPage - 1)}>&lt;</button>
          <span className="page-number-p7">{currentPage}</span>
          <button className="nav-btn-p7" onClick={() => goTo(currentPage + 1 > 7 ? 1 : currentPage + 1)}>&gt;</button>
          <button className="nav-btn-p7 reset-btn-p7" onClick={() => goTo(1)}>Reset</button>
        </div>
      </div>
    </div>
  );
}
export default Page7;
