import React from 'react';
import './JobCard.css';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <div className="job-header">
        {/* You have not stored logo yet, so let's check */}
        {job.logo ? (
          <img src={job.logo} alt="Company Logo" className="company-logo" />
        ) : (
          <div className="default-logo">Logo</div>
        )}
        <span className="posted-time">24h Ago</span>
      </div>

      <h3 className="job-title">{job.jobTitle}</h3> {/* Correct field */}

      <h3 className="compnany-name">{job.companyName}</h3>

      <div className="job-info">
        <p>  {job.jobType} | 
          <img className='job-location-icon' src="https://img.icons8.com/?size=100&id=nXSsBUXvvmYb&format=png&color=000000"/> {job.location} | 
          <img className='salary-icon' src='https://img.icons8.com/?size=100&id=yKzYIzis8SZx&format=png&color=000000'/> {job.salaryRange}</p>  
        
      </div>

      <ul className="description-list">
        {job.jobDescription && <li>{job.jobDescription}</li>} {/* Show only if exists */}
       
      </ul>

      <button className="apply-btn">Apply Now</button>
    </div>
  );
};

export default JobCard;
