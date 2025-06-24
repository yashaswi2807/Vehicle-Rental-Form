import React, { useState } from 'react';

function StepName({ formData, setFormData, nextStep }) {
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      setError('Please enter both first and last name');
      return;
    }
    setError('');
    nextStep();
  };

  return (
    <div>
      <h5>What is your name?</h5>

      <div className="mb-3">
        <label className="form-label">First Name</label>
        <input
          type="text"
          className="form-control"
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Last Name</label>
        <input
          type="text"
          className="form-control"
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
        />
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="text-end">
        <button className="btn btn-primary" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default StepName;
