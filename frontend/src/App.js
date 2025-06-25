import React, { useState } from 'react';
import StepName from './components/steps/StepName';
import StepWheels from './components/steps/StepWheels';
import StepVehicleType from './components/steps/StepVehicleType';
import StepVehicleModel from './components/steps/StepVehicleModel';
import StepDateRange from './components/steps/StepDateRange';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [step, setStep] = useState(0);
  const totalSteps = 5;

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
    <StepName
  formData={formData}
  setFormData={setFormData}
  onNext={() => setStep(step + 1)}
  step={step + 1}
  totalSteps={totalSteps}
/>,

<StepWheels
formData={formData}
setFormData={setFormData}
onNext={() => setStep(step + 1)}
onBack={() => setStep(step - 1)}
step={step + 1}
totalSteps={totalSteps}
/>,

<StepVehicleType
formData={formData}
setFormData={setFormData}
onNext={() => setStep(step + 1)}
onBack={() => setStep(step - 1)}
step={step + 1}
totalSteps={totalSteps}
/>,

<StepVehicleModel
formData={formData}
setFormData={setFormData}
onNext={() => setStep(step + 1)}
onBack={() => setStep(step - 1)}
step={step + 1}
totalSteps={totalSteps}
/>,

<StepDateRange
formData={formData}
setFormData={setFormData}
onBack={() => setStep(step - 1)}
step={step + 1}
totalSteps={totalSteps}
/>,

  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Vehicle Booking Form</h2>

      <div className="d-flex justify-content-center gap-3 mb-4">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`rounded-circle d-flex align-items-center justify-content-center ${index <= step ? 'bg-success' : 'bg-light'}`}
            style={{
              width: '35px',
              height: '35px',
              color: index <= step ? 'white' : '#6c757d',
              fontWeight: 'bold',
              border: '1px solid #ccc',
            }}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <div className="card p-4 shadow-sm">{steps[step]}</div>
    </div>
  );
}

export default App;
