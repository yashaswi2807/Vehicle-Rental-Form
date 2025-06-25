import React from 'react';
import { motion } from 'framer-motion';

const StepWheels = ({ formData, setFormData, onNext, onBack, step, totalSteps }) => {
  const handleNext = () => {
    if (!formData.wheels) {
      alert('Please select number of wheels');
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
          <h2 className="fw-bold" style={{ color: '#2c3e50' }}>Number of Wheels</h2>
          <p className="text-muted">Please select the type of vehicle you want to book</p>
        </div>

        <div className="d-flex justify-content-center gap-4 mb-4">
          {[2, 4].map((wheel) => (
            <button
              key={wheel}
              className={`btn btn-outline-primary px-4 py-2 ${formData.wheels === wheel ? 'active' : ''}`}
              onClick={() => setFormData({ ...formData, wheels: wheel })}
              style={{ borderRadius: '20px', fontWeight: '500' }}
            >
              {wheel} Wheels
            </button>
          ))}
        </div>

        <div className="d-flex justify-content-between">
          <button className="btn btn-outline-secondary px-4" onClick={onBack}>← Back</button>
          <button
            onClick={handleNext}
            className="btn px-4"
            style={{
              background: 'linear-gradient(to right, #ff6ec4, #7873f5)',
              color: 'white',
              borderRadius: '30px',
              fontWeight: 500,
            }}
          >
            Next →
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default StepWheels;
