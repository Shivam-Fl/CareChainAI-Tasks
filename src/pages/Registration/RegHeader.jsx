import React from 'react';

const Header = ({ activeStep, setActiveStep, onSubmit }) => {
  const handleButtonClick = (step) => {
    setActiveStep(step);
  };

  return (
    <div className="flex justify-between mb-8 mx-12 mt-1">
        <div>
      <button
        className={`step-button ${
          activeStep === 1 ? 'active' : ''
        } px-4 py-2 cursor-pointer`}
        onClick={() => handleButtonClick(1)}
      >
        Personal Info
      </button>
      <button
        className={`step-button ${
          activeStep === 2 ? 'active' : ''
        } px-4 py-2 cursor-pointer`}
        onClick={() => handleButtonClick(2)}
      >
        Address
      </button>
      <button
        className={`step-button ${
          activeStep === 3 ? 'active' : ''
        } px-4 py-2 cursor-pointer`}
        onClick={() => handleButtonClick(3)}
      >
        Insurance
      </button>
      </div>
      <button
        className="register-button px-4 py-2 cursor-pointer"
        onClick={onSubmit}
      >
        Register Patient
      </button>
    </div>
  );
};

export default Header;
