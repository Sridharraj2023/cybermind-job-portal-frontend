import axios from 'axios';

const API = axios.create({
  baseURL: 'https://cybermind-job-portal-backend.onrender.com', // backend server URL
});

// Create a Job
export const createJob = (jobData) => API.post('/api/jobs', jobData);

// Fetch all Jobs
export const getJobs = () => API.get('/api/jobs');
