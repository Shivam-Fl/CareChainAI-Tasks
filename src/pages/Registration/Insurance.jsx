import React, { useState } from 'react';

const InsuranceForm = ({ onPrev, onSubmit, formData, setFormData }) => {
  const [insuranceProvider, setInsuranceProvider] = useState('');
  const [insuranceName, setInsuranceName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [insuranceNumber, setInsuranceNumber] = useState('');
  const [imisCode, setImisCode] = useState('');
  const [initialBalance, setInitialBalance] = useState('');

  const handleAddInsurance = () => {
 
    if (!insuranceProvider || !insuranceName || !cardNumber || !insuranceNumber || !imisCode || !initialBalance) {
      alert('Please fill in all required insurance fields.');
      return;
    }

    const insuranceData = {
      insuranceProvider,
      insuranceName,
      cardNumber,
      insuranceNumber,
      imisCode,
      initialBalance,
    };

    setFormData(insuranceData);
    onSubmit();
    
  };

  

  return (
    <form>
      <div className='m-12 flex flex-col gap-y-6 bg-transparent w-[800px] pr-28 '>
      
        <div className='flex justify-between'>
          <label>Insurance Provider:</label>
          <select
            className='focus:outline-none border-1 rounded-md border-blue-500 w-96 text-center'
            value={insuranceProvider}
            onChange={(e) => setInsuranceProvider(e.target.value)}
          >
            <option value="">Insurance Provider</option>
            <option value="Provider1">Provider 1</option>
            <option value="Provider2">Provider 2</option>
            
          </select>
        </div>

        <div className='flex justify-between'>
          <label>Insurance Name:</label>
          <input
          className='focus:outline-none border-1 rounded-md border-blue-500 w-96 text-center'
            type="text"
            placeholder="Insurance name..."
            value={insuranceName}
            onChange={(e) => setInsuranceName(e.target.value)}
          />
        </div>

      
        <div className='flex justify-between'>
          <label>Card Number (NSTC No.):</label>
          <input
          className='focus:outline-none border-1 rounded-md border-blue-500 w-96 text-center'
            type="text"
            placeholder= "Card number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>

        <div className='flex justify-between'>
          <label>Insurance Number (NSSI No.):</label>
          <input
          className='focus:outline-none border-1 rounded-md border-blue-500 w-96 text-center'
            type="text"
            placeholder="Insurance number (NSSI No.)..."
            value={insuranceNumber}
            onChange={(e) => setInsuranceNumber(e.target.value)}
          />
        </div>

        <div className='flex justify-between pr-32'>
          <label>IMIS Code:</label>
          <input
          className='focus:outline-none border-1 rounded-md border-blue-500 w-64 text-center'
            type="text"
            placeholder="IMIS code..."
            value={imisCode}
            onChange={(e) => setImisCode(e.target.value)}
          />
        </div>

        <div className='flex justify-between pr-32'>
          <label>Initial Balance:</label>
          <input
          className='focus:outline-none border-1 rounded-md border-blue-500 w-64 text-center '
            type="number"
            placeholder="0"
            value={initialBalance}
            onChange={(e) => setInitialBalance(e.target.value)}
          />
        </div>

        <div>
        <button onClick={handleAddInsurance} class="absolute w-44 h-11 right-40 bottom-20 bg-sky-500 rounded shadow text-white text-lg font-bold font-['Inter']" style={{
  borderRadius: '0.3125rem',
  background: '#0A86EB',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
}} >Add Address</button>
         
        </div>
      </div>
    </form>
  );
};

export default InsuranceForm;
