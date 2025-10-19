import React from 'react';
import './Main.css';

function Page2({ goTo, currentPage }) {
  return (
    <div className="main-content">
      <div className="employee-container">
        <h2>Add New Employee</h2>
        <div className="section-title">Personal Information</div>
        <form>
          <div className="form-row">
            <div className="form-group">
              <img src="https://img.freepik.com/free-photo/man-with-arms-crossed_1187-1760.jpg?semt=ais_hybrid&w=740&q=80" className="profile-img" alt="Profile" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Name*</label>
              <input className="input" type="text" value="Ram" readOnly />
            </div>
            <div className="form-group">
              <label>Employee ID*</label>
              <input className="input" type="text" value="3456789" readOnly />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Department*</label>
              <select className="input"><option>Design</option></select>
            </div>
            <div className="form-group">
              <label>Designation*</label>
              <select className="input"><option>Design Lead</option></select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Project</label>
              <input className="input" type="text" value="Car Rental" readOnly />
            </div>
            <div className="form-group">
              <label>Type*</label>
              <select className="input"><option>Office</option></select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Status*</label>
              <select className="input"><option>Permanent</option></select>
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
export default Page2;
