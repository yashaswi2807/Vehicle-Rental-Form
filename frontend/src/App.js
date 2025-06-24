import React, { useState } from 'react';
import StepName from './components/steps/StepName';
import StepWheels from './components/steps/StepWheels';
import StepVehicleType from './components/steps/StepVehicleType';
import StepVehicleModel from './components/steps/StepVehicleModel';
import StepDateRange from './components/steps/StepDateRange';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    wheels: '',
    vehicleTypeId: '',
    vehicleId: '',
    startDate: '',
    endDate: '',
  });

  const steps = [
    <StepName formData={formData} setFormData={setFormData} nextStep={() => setStep(step + 1)} />,
    <StepWheels formData={formData} setFormData={setFormData} nextStep={() => setStep(step + 1)} prevStep={() => setStep(step - 1)} />,
    <StepVehicleType formData={formData} setFormData={setFormData} nextStep={() => setStep(step + 1)} prevStep={() => setStep(step - 1)} />,
    <StepVehicleModel formData={formData} setFormData={setFormData} nextStep={() => setStep(step + 1)} prevStep={() => setStep(step - 1)} />,
    <StepDateRange formData={formData} setFormData={setFormData} prevStep={() => setStep(step - 1)} />,
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Vehicle Booking Form</h2>
      <div className="card p-4 shadow-sm">{steps[step]}</div>
    </div>
  );
}

export default App;
