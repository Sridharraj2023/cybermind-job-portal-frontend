import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import JobFilters from './components/JobFilters/JobFilters';
import JobList from './pages/JobList/JobList';
import CreateJobModal from './components/CreateJobModal/CreateJobModal';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <BrowserRouter>
      <div>
        <Navbar openModal={() => setModalIsOpen(true)} />
        <JobFilters />
        <Routes>
          <Route path="/" element={<JobList />} />
          {/* Later if you add more pages like job details or apply page, you can add more <Route> here */}
        </Routes>
        <CreateJobModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} />
      </div>
    </BrowserRouter>
  );
}

export default App;

