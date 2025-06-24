import React, { useState } from 'react';

function StepWheels({ formData, setFormData, nextStep, prevStep }) {
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!formData.wheels) {
      setError('Please select the number of wheels');
      return;
    }
    setError('');
    nextStep();
  };

  return (
    <div>
      <h5>Number of wheels?</h5>

      <div className="form-check mb-2">
        <input
          className="form-check-input"
          type="radio"
          name="wheels"
          id="twoWheels"
          value="2"
          checked={formData.wheels === '2'}
          onChange={(e) =>
            setFormData({ ...formData, wheels: e.target.value, vehicleTypeId: '', vehicleId: '' })
          }
        />
        <label className="form-check-label" htmlFor="twoWheels">
          2 Wheels
        </label>
      </div>

      <div className="form-check mb-3">
        <input
          className="form-check-input"
          type="radio"
          name="wheels"
          id="fourWheels"
          value="4"
          checked={formData.wheels === '4'}
          onChange={(e) =>
            setFormData({ ...formData, wheels: e.target.value, vehicleTypeId: '', vehicleId: '' })
          }
        />
        <label className="form-check-label" htmlFor="fourWheels">
          4 Wheels
        </label>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="d-flex justify-content-between">
        <button className="btn btn-secondary" onClick={prevStep}>
          Back
        </button>
        <button className="btn btn-primary" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default StepWheels;
