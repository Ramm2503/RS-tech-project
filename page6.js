import React from 'react';
import './Main.css';

function Page6({ goTo, currentPage }) {
  return (
    <div className="main-content">
      <div className="employee-container">
        <h2>Edit Employee Details</h2>
        <div className="section-title">Personal Information</div>
        <form>
          <div className="form-row">
            <div className="form-group">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" className="profile-img" alt="Arlene"/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Name*</label>
              <input className="input" type="text" value="Arlene" readOnly />
            </div>
            <div className="form-group">
              <label>Employee ID*</label>
              <input className="input" type="text" value="671190345" readOnly />
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
          <div className="btns">
            <button type="button" className="cancel-btn" onClick={() => goTo(4)}>Cancel</button>
            <button type="submit" className="update-btn">Update</button>
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
export default Page6;
