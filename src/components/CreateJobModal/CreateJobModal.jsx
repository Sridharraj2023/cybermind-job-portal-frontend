import React, { useState } from 'react';
import Modal from 'react-modal';
import './CreateJobModal.css';
import { createJob } from '../../api/jobApi';

Modal.setAppElement('#root');

const CreateJobModal = ({ isOpen, onRequestClose }) => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    companyName: '',
    location: '',
    jobType: 'Full-time',
    salaryRange: '',
    jobDescription: '',
    requirements: '',
    responsibilities: '',
    applicationDeadline: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createJob(formData);
      alert('Job Created Successfully!');
      onRequestClose();
    } catch (error) {
      console.error('Failed to create job:', error);
      alert('Failed to create job. Please try again.');
    }
  };

  const handleCancel = () => {
    console.log('Cancelled');
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <h2 className="modal-heading">Create Job Opening</h2>

      <form onSubmit={handleSubmit} className="modal-form">

        <div className="samecopy-for-firstfour">
          <div className="form-group">
            <input
              type="text"
              name="jobTitle"
              placeholder="Job Title"
              value={formData.jobTitle}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
        <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            >
            <option value="">Choose Preferred Location</option>
            <option value="Remote">Remote</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Chennai">Chennai</option>
            <option value="Pune">Pune</option>
            <option value="Other">Other</option>
        </select>
            <select
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
              required
            >
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
        </div>

        <div className="form-group">
        <input
          type="text"
          name="salaryRange"
          placeholder="Salary Range (e.g., 5LPA - 12LPA)"
          value={formData.salaryRange}
          onChange={handleChange}
          onInput={(e) => {
            let input = e.target.value;

            // Allow only numbers, LPA, -, and space
            input = input.replace(/[^0-9lLpaPA-\s]/g, '');

            // Split input around hyphen
            let parts = input.split('-').map(part => part.trim());

            parts = parts.map(part => {
              let numberPart = part.replace(/[^0-9]/g, '');
              let letterPart = part.replace(/[0-9\s-]/g, '').toUpperCase();

              if (numberPart.length > 2) {
                numberPart = numberPart.slice(0, 2); // Limit to 2 digits
              }

              // Make sure the label is exactly 'LPA'
              return numberPart + (letterPart.includes('LPA') ? 'LPA' : 'LPA');
            });

            e.target.value = parts.join(' - ');
          }}
          required
        />

        </div>

        <div className="form-group">
          <textarea
            name="jobDescription"
            placeholder="Job Description"
            value={formData.jobDescription}
            onChange={handleChange}
            required
          ></textarea>
        </div>

       

         <div className="form-group">
          <input
            type="date"
            name="applicationDeadline"
            value={formData.applicationDeadline}
            onChange={handleChange}
            required
          />
        </div>

        <div className="modal-buttons">
          <button
            type="button"
            className="save-draft"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="publish"
          >
            Publish »
          </button>
        </div>

      </form>
    </Modal>
  );
};

export default CreateJobModal;
