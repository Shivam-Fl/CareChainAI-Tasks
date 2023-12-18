import React, { useState } from 'react';
import PersonalInfoForm from './PersonalInfo';
import AddressForm from './Address';
import InsuranceForm from './Insurance';
import Patientheader from "../Patientheader";
import Header from './RegHeader'
import Finish from './Finish';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {},
    addressInfo: {},
    insuranceInfo: {},
  });

  const handleNext = () => {
    if(step<4 && step>=1){
    setStep(step + 1);
    }
    else{
      setStep(1)
    }
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleAddAddress = () => {
  
    handleNext();
  };

 

  const handleSubmit = () => {
    // Validate all required data for the current step
    const requiredFields = {
      1: ['salutation', 'firstName', 'lastName', 'day', 'month', 'year', 'age', 'gender', 'email'],
      2: ['addressType', 'street1', 'birthCountry', 'city', 'postalCode'],
      3: ['insuranceProvider', 'insuranceName', 'cardNumber', 'insuranceNumber', 'imisCode', 'initialBalance'],
    };
  
    const missingFields = requiredFields[step]
      .filter(field => {
        const dataObject = step === 1 ? formData.personalInfo : step === 2 ? formData.addressInfo : formData.insuranceInfo;
        return !dataObject[field];
      });
  
    if (missingFields.length > 0) {
      alert(`Please fill in all required fields for ${step === 1 ? 'Personal Info' : step === 2 ? 'Address' : 'Insurance'}.`);
      return;
    }
  
    // Additional validation logic can be added based on specific requirements
  
    // Perform any final form validation before submitting
    console.log('Final Form Data:', formData);
    handleNext();
    // Here, you can send formData to your backend or perform any other required actions
  };

  return (
    <div>
      <Patientheader count={1} />
      <Header activeStep={step} setActiveStep={setStep} onSubmit={handleSubmit} />
      {step === 1 && (
        <PersonalInfoForm
          onNext={handleNext}
          formData={formData.personalInfo}
          setFormData={(data) =>
            setFormData({ ...formData, personalInfo: data })
          }
        />
      )}
      {step === 2 && (
        <AddressForm
          onAddAddress={handleAddAddress}
          onPrev={handlePrev}
          formData={formData.addressInfo}
          setFormData={(data) => setFormData({ ...formData, addressInfo: data })}
        />
      )}
      {step === 3 && (
        <InsuranceForm
         
          onPrev={handlePrev}
          onSubmit={handleSubmit}
          formData={formData.insuranceInfo}
          setFormData={(data) =>
            setFormData({ ...formData, insuranceInfo: data })
          }
        />
      )}
      {step === 4 && (
        <Finish/>
      )}
    </div>
  );
};

export default MultiStepForm;
