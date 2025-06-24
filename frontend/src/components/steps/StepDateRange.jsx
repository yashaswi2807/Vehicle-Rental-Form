import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button } from '@mui/material';
import dayjs from 'dayjs';
import api from '../../services/api';

function StepDateRange({ formData, setFormData, prevStep }) {
  const [startDate, setStartDate] = useState(formData.startDate ? dayjs(formData.startDate) : null);
  const [endDate, setEndDate] = useState(formData.endDate ? dayjs(formData.endDate) : null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!startDate || !endDate) {
      setError('Please select both start and end dates');
      return;
    }

    if (dayjs(startDate).isAfter(endDate)) {
      setError('Start date cannot be after end date');
      return;
    }

    setError('');
    setSubmitting(true);

    try {
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        vehicleId: parseInt(formData.vehicleId),
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
      };

      await api.post('/bookings', payload);
      setSuccess('Booking successful!');
    } catch (err) {
      console.error(err);
      setError(err?.response?.data?.message || 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h5>Select your booking dates</h5>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="mb-3">
          <DatePicker
            label="Start Date"
            value={startDate}
            onChange={(date) => setStartDate(date)}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <DatePicker
            label="End Date"
            value={endDate}
            onChange={(date) => setEndDate(date)}
            className="form-control"
          />
        </div>
      </LocalizationProvider>

      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      <div className="d-flex justify-content-between mt-3">
        <button className="btn btn-secondary" onClick={prevStep}>
          Back
        </button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={submitting}
        >
          {submitting ? 'Submitting...' : 'Submit Booking'}
        </Button>
      </div>
    </div>
  );
}

export default StepDateRange;
