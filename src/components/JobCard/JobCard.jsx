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
        <p>{job.jobType} | ₹{job.salaryRange}</p> {/* Correct fields */}
        <p className="location">{job.location}</p>
      </div>

      <ul className="description-list">
        {job.jobDescription && <li>{job.jobDescription}</li>} {/* Show only if exists */}
       
      </ul>

      <button className="apply-btn">Apply Now</button>
    </div>
  );
};

export default JobCard;
