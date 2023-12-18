import React, { useState } from 'react';

const AddressForm = ({ onAddAddress, onPrev, formData, setFormData }) => {
  const [addressType, setAddressType] = useState('');
  const [street1, setStreet1] = useState('');
  const [street2, setStreet2] = useState('');
  const [landmark, setLandmark] = useState('');
  const [birthCountry, setBirthCountry] = useState('');
  const [districtState, setDistrictState] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const handleAddAddress = () => {
    // Perform form validation
    if (!addressType || !street1 || !birthCountry || !city || !postalCode) {
      alert('Please fill in all required address fields.');
      return;
    }

    // Combine address data with previous form data
    const addressData = {
      addressType,
      street1,
      street2,
      landmark,
      birthCountry,
      districtState,
      city,
      postalCode,
    };

    // Update the parent component's state with the collected data
    setFormData(addressData);

    // Move to the next step
    onAddAddress();
  };

  return (
    <form>
      <div className='m-12 -mt-5 flex flex-col gap-y-6 bg-transparent w-[800px] pr-28'>
       
        {/* Address Type */}
        <div className='flex justify-between'>
          <label>Address Type:</label>
          <select className='focus:outline-none border-1 rounded-md border-blue-500 w-96'
            value={addressType}
            onChange={(e) => setAddressType(e.target.value)}
          >
            <option value="">Select Address Type</option>
            <option value="Home">Home</option>
            <option value="Work">Work</option>
            {/* Add more address types as needed */}
          </select>
        </div>

        {/* Street 1 */}
        <div className='flex justify-between'>
          <label>Street 1:</label>
          <input
          className='focus:outline-none border-1 rounded-md border-blue-500 w-96'
            type="text"
            placeholder="Enter street 1"
            value={street1}
            onChange={(e) => setStreet1(e.target.value)}
          />
        </div>

        {/* Street 2 */}
        <div className='flex justify-between'>
          <label>Street 2:</label>
          <input
          className='focus:outline-none border-1 rounded-md border-blue-500 w-96'
            type="text"
            placeholder="Enter street 2"
            value={street2}
            onChange={(e) => setStreet2(e.target.value)}
          />
        </div>

        {/* Landmark */}
        <div className='flex justify-between '>
          <label>Landmark:</label>
          <input
          className='focus:outline-none border-1 rounded-md border-blue-500 w-96'
            type="text"
            placeholder="Enter nearby landmark"
            value={landmark}
            onChange={(e) => setLandmark(e.target.value)}
          />
        </div>

        {/* Birth Country */}
        <div className='flex justify-between pr-[12.5rem]'>
          <label>Birth Country:</label>
          <input
          className='focus:outline-none border-1 rounded-md border-blue-500'
            type="text"
            placeholder="Enter birth country"
            value={birthCountry}
            onChange={(e) => setBirthCountry(e.target.value)}
          />
        </div>

        {/* District/State */}
        <div className='flex justify-between pr-[12.5rem]'>
          <label>District/State:</label>
          <input
          className='focus:outline-none border-1 rounded-md border-blue-500'
            type="text"
            placeholder="Enter district/state"
            value={districtState}
            onChange={(e) => setDistrictState(e.target.value)}
          />
        </div>

        {/* City */}
        <div className='flex justify-between pr-[10rem]'>
          <label>City:</label>
          <input
          className='focus:outline-none border-1 rounded-md border-blue-500 w-56'
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        {/* Postal Code */}
        <div className='flex justify-between'>
          <label>Postal Code:</label>
          <input
          className='focus:outline-none border-1 rounded-md border-blue-500 w-96'
            type="text"
            placeholder="Enter postal code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </div>

        {/* Buttons */}
        <div>
        <button onClick={handleAddAddress} class="absolute w-44 h-11 right-40 bottom-20 bg-sky-500 rounded shadow text-white text-lg font-bold font-['Inter']" style={{
  borderRadius: '0.3125rem',
  background: '#0A86EB',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
}} >Add Address</button>
        </div>
      </div>
    </form>
  );
};

export default AddressForm;
