import React from 'react';
import './Main.css';

function Page5({ goTo, currentPage }) {
  return (
    <div className="main-content-p5">
      <div className="employee-container-p5">
        <h2>View Employee Details</h2>
        <div className="tab-header-p5">
          <span className="tab-icon-p5">&#128100;</span>
          <span className="tab-label-p5 tab-label-active-p5">Personal Information</span>
        </div>
        <div className="profile-img-block-p5">
          <img
            className="profile-img-p5"
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Arlene"
          />
        </div>
        <table className="details-table-p5">
          <tbody>
            <tr>
              <td className="label-p5">Name</td>
              <td className="value-p5">Ram</td>
              <td className="label-p5">Employee ID</td>
              <td className="value-p5">2345678</td>
            </tr>
            <tr>
              <td className="label-p5">Department</td>
              <td className="value-p5">Design</td>
              <td className="label-p5">Designation</td>
              <td className="value-p5">Design Lead</td>
            </tr>
            <tr>
              <td className="label-p5">Project</td>
              <td className="value-p5">Car Rental</td>
              <td className="label-p5">Type</td>
              <td className="value-p5">Office</td>
            </tr>
            <tr>
              <td className="label-p5">Status</td>
              <td className="value-p5">Permanent</td>
              <td className="label-p5"></td>
              <td className="value-p5"></td>
            </tr>
          </tbody>
        </table>
        <div className="nav-buttons-p5">
          <button className="nav-btn-p5" onClick={() => goTo(currentPage - 1 < 1 ? 7 : currentPage - 1)}>&lt;</button>
          <span className="page-number-p5">{currentPage}</span>
          <button className="nav-btn-p5" onClick={() => goTo(currentPage + 1 > 7 ? 1 : currentPage + 1)}>&gt;</button>
          <button className="nav-btn-p5 reset-btn-p5" onClick={() => goTo(1)}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Page5;
