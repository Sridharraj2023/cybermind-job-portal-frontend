import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000', // backend server URL
});

// Create a Job
export const createJob = (jobData) => API.post('/api/jobs', jobData);

// Fetch all Jobs
export const getJobs = () => API.get('/api/jobs');
