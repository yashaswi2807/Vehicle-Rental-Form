import React, { useState } from 'react';
import { motion } from 'framer-motion';
import api from '../../services/api';

const StepDateRange = ({ formData, setFormData, onBack, step, totalSteps }) => {
  const [startDate, setStartDate] = useState(formData.startDate || '');
  const [endDate, setEndDate] = useState(formData.endDate || '');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async () => {
    if (!startDate || !endDate) {
      setError('Please select both start and end dates');
      return;
    }

    if (new Date(startDate) > new Date(endDate)) {
      setError('Start date cannot be after end date');
      return;
    }

    const dataToSubmit = {
      ...formData,
      startDate,
      endDate,
    };

    try {
        await api.post('/bookings', dataToSubmit);
      setSuccess('Booking successful!');
    } catch (err) {
      console.error(err);
      setError('Booking failed. Please try again.');
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        background: 'linear-gradient(135deg, #f6f8fc, #d8f5f3)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: '#ffffffcc',
          backdropFilter: 'blur(12px)',
          borderRadius: '30px',
          padding: '3rem',
          width: '100%',
          maxWidth: '750px',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <p className="mb-0 text-secondary">Step {step} of {totalSteps}</p>
          <div className="d-flex gap-2">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className={`rounded-circle d-flex align-items-center justify-content-center ${index + 1 <= step ? 'bg-success' : 'bg-light'}`}
                style={{
                  width: '30px',
                  height: '30px',
                  color: index + 1 <= step ? 'white' : 'gray',
                  fontWeight: 'bold',
                }}
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-4">
          <h2 className="fw-bold" style={{ color: '#2c3e50' }}>Select Booking Dates</h2>
          <p className="text-muted">Choose the start and end date for your booking</p>
        </div>

        <div className="row g-3 mb-4">
          <div className="col">
            <label className="form-label">Start Date</label>
            <input
              type="date"
              className="form-control"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="col">
            <label className="form-label">End Date</label>
            <input
              type="date"
              className="form-control"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>

        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <div className="d-flex justify-content-between">
          <button className="btn btn-outline-secondary px-4" onClick={onBack}>← Back</button>
          <button
            onClick={handleSubmit}
            className="btn px-4"
            style={{
              background: 'linear-gradient(to right, #00c9ff, #92fe9d)',
              color: 'white',
              borderRadius: '30px',
              fontWeight: 500,
            }}
          >
            Book Vehicle
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default StepDateRange;
