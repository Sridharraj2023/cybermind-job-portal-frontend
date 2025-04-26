import React from 'react';
import './JobFilters.css';
import { FaSearch, FaMapMarkerAlt, FaUserTie } from 'react-icons/fa';

const JobFilters = () => {
  return (
    <div className="filter-container">
      <div className="filter-section">
        {/* Search Bar */}
        <div className="filter-item">
          <FaSearch className="filter-icon" />
          <input type="text" placeholder="Search By Job Title, Role" />
        </div>

        {/* Location Dropdown */}
        <div className="filter-item">
          <FaMapMarkerAlt className="filter-icon" />
          <select>
            <option>Preferred Location</option>
            <option>Bangalore</option>
            <option>Hyderabad</option>
            <option>Pune</option>
          </select>
        </div>

        {/* Job Type Dropdown */}
        <div className="filter-item">
          <FaUserTie className="filter-icon" />
          <select>
            <option>Job Type</option>
            <option>Onsite</option>
            <option>Remote</option>
            <option>Hybrid</option>
          </select>
        </div>

        {/* Salary Range */}
        <div className="filter-item salary-range">
            <div className="salary-lable">
            <label>Salary Per Month</label>
            <span>₹50k</span> - <span>₹80k</span>
            </div>
          
          <input type="range" min="10000" max="100000" />
          <div className="salary-labels">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobFilters;

