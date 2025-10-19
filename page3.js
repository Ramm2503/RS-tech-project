import React from 'react';
import './Main.css';

function Page3({ goTo, currentPage }) {
  return (
    <div className="main-content">
      <div className="employee-container">
        <h2>Add New Employee</h2>
        <div className="section-title">Personal Information</div>
        <form>
          <div className="form-row">
            <div className="form-group">
              <div className="profile-img" style={{ background: "#eee", width: 72, height: 72 }} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Name*</label>
              <input className="input" type="text" placeholder="Enter name" />
            </div>
            <div className="form-group">
              <label>Employee ID*</label>
              <input className="input" type="text" placeholder="Enter employee ID" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Department*</label>
              <select className="input"><option>Select Department</option></select>
            </div>
            <div className="form-group">
              <label>Designation*</label>
              <select className="input"><option>Select designation</option></select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Project</label>
              <input className="input" type="text" placeholder="Enter project" />
            </div>
            <div className="form-group">
              <label>Type*</label>
              <select className="input"><option>Select Type</option></select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Status*</label>
              <select className="input"><option>Select Status</option></select>
            </div>
          </div>
          <div className="buttons">
            <button type="button" className="cancel-btn" onClick={() => goTo(1)}>Cancel</button>
            <button type="submit" className="confirm-btn">Confirm</button>
          </div>
        </form>
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
export default Page3;
