import React, { useEffect, useState } from 'react';
import api from '../../services/api';

function StepVehicleType({ formData, setFormData, nextStep, prevStep }) {
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchVehicleTypes() {
      try {
        const res = await api.get(`/vehicle-types?wheel=${formData.wheels}`);
        setVehicleTypes(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch vehicle types');
        setLoading(false);
      }
    }

    if (formData.wheels) {
      fetchVehicleTypes();
    }
  }, [formData.wheels]);

  const handleNext = () => {
    if (!formData.vehicleTypeId) {
      setError('Please select a vehicle type');
      return;
    }
    setError('');
    nextStep();
  };

  return (
    <div>
      <h5>Select the type of vehicle</h5>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {vehicleTypes.map((type) => (
            <div className="form-check mb-2" key={type.id}>
              <input
                className="form-check-input"
                type="radio"
                name="vehicleType"
                id={`type-${type.id}`}
                value={type.id}
                checked={formData.vehicleTypeId === String(type.id)}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    vehicleTypeId: e.target.value,
                    vehicleId: '',
                  })
                }
              />
              <label className="form-check-label" htmlFor={`type-${type.id}`}>
                {type.name}
              </label>
            </div>
          ))}
        </>
      )}

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="d-flex justify-content-between mt-3">
        <button className="btn btn-secondary" onClick={prevStep}>
          Back
        </button>
        <button className="btn btn-primary" onClick={handleNext} disabled={loading}>
          Next
        </button>
      </div>
    </div>
  );
}

export default StepVehicleType;
