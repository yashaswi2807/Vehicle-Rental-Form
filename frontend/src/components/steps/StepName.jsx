import React from 'react';
import { motion } from 'framer-motion';

const StepName = ({ formData, setFormData, onNext, step, totalSteps }) => {
  const handleNext = () => {
    if (!formData.firstName || !formData.lastName) {
      alert('Please enter both first and last name');
      return;
    }
    onNext();
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
          <p className="mb-0 text-secondary">
            Step {step} of {totalSteps}
          </p>
          <div className="d-flex gap-2">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className={`rounded-circle d-flex align-items-center justify-content-center ${
                  index + 1 <= step ? 'bg-success' : 'bg-light'
                }`}
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

        <div className="text-center mb-5">
          <h2
            className="fw-bold"
            style={{
              fontSize: '2.5rem',
              color: '#2c3e50',
              fontWeight: 700,
            }}
          >
            What's your name?
          </h2>
          <p style={{ color: '#55667c', fontSize: '1rem' }}>
            Please enter your full name to begin the rental process
          </p>
        </div>

        <div className="row g-4 mb-4">
          <div className="col">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              style={{ borderRadius: '12px', border: '1px solid #d1d9e6' }}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              style={{ borderRadius: '12px', border: '1px solid #d1d9e6' }}
            />
          </div>
        </div>

        <div className="text-end">
          <button
            onClick={handleNext}
            className="btn px-5 py-2"
            style={{
              background: 'linear-gradient(to right, #ff6ec4, #7873f5)',
              color: 'white',
              fontWeight: 500,
              fontSize: '1rem',
              borderRadius: '50px',
              border: 'none',
              boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
            }}
          >
            Next →
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default StepName;
