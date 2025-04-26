import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <div className="search-input">
        <i className="fas fa-search"></i>
        <input type="text" placeholder="Search By Job Title, Role" />
      </div>

      <div className="filter-input">
        <i className="fas fa-map-marker-alt"></i>
        <select>
          <option>Preferred Location</option>
          <option>Chennai</option>
          <option>Bangalore</option>
          <option>Hyderabad</option>
        </select>
      </div>

      <div className="filter-input">
        <i className="fas fa-briefcase"></i>
        <select>
          <option>Job Type</option>
          <option>Full Time</option>
          <option>Part Time</option>
          <option>Internship</option>
          <option>Contract</option>
        </select>
      </div>

      <div className="salary-range">
        <label>Salary Per Month</label>
        <input type="range" min="50000" max="80000" />
        <div className="range-values">₹50k - ₹80k</div>
      </div>
    </div>
  );
};

export default SearchBar;
