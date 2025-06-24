import React, { useEffect, useState } from 'react';
import api from '../../services/api';

function StepVehicleModel({ formData, setFormData, nextStep, prevStep }) {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchVehicles() {
      try {
        const res = await api.get(`/vehicles?typeId=${formData.vehicleTypeId}`);
        setVehicles(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch vehicles');
        setLoading(false);
      }
    }

    if (formData.vehicleTypeId) {
      fetchVehicles();
    }
  }, [formData.vehicleTypeId]);

  const handleNext = () => {
    if (!formData.vehicleId) {
      setError('Please select a specific vehicle model');
      return;
    }
    setError('');
    nextStep();
  };

  return (
    <div>
      <h5>Select a specific vehicle model</h5>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {vehicles.map((vehicle) => (
            <div className="form-check mb-2" key={vehicle.id}>
              <input
                className="form-check-input"
                type="radio"
                name="vehicle"
                id={`vehicle-${vehicle.id}`}
                value={vehicle.id}
                checked={formData.vehicleId === String(vehicle.id)}
                onChange={(e) =>
                  setFormData({ ...formData, vehicleId: e.target.value })
                }
              />
              <label className="form-check-label" htmlFor={`vehicle-${vehicle.id}`}>
                {vehicle.name}
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

export default StepVehicleModel;
