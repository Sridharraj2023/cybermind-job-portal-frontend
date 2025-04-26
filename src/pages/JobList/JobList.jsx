import React, { useEffect, useState } from 'react';
import JobCard from '../../components/JobCard/JobCard';
import './JobList.css';
import { getJobs } from '../../api/jobApi';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await getJobs();
        setJobs(response.data);  // assuming API returns an array of job objects
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="job-list-container">
      {jobs.length > 0 ? (
        jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))
      ) : (
        <p>No jobs available yet.</p>
      )}
    </div>
  );
};

export default JobList;

