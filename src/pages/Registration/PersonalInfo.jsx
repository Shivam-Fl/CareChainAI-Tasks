import React, { useState } from 'react';

const PersonalInfoForm = ({ onNext, formData, setFormData }) => {
  const [salutation, setSalutation] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumbers, setPhoneNumbers] = useState(['']);
  const [landlineNumber, setLandlineNumber] = useState('');
  const [country, setCountry] = useState('');
  const [passportId, setPassportId] = useState('');
  const [gender, setGender] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [wardType, setWardType] = useState('');
  const [Caste, setCaste] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [agreeNotification, setAgreeNotification] = useState(false);
  const [employerInfo, setEmployerInfo] = useState('');
  const [previousLastName, setPreviousLastName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [email, setEmail] = useState('');

  const handlePhoneChange = (index, value) => {
    const newPhoneNumbers = [...phoneNumbers];
    newPhoneNumbers[index] = value;
    setPhoneNumbers(newPhoneNumbers);
  };

  const handleAddPhone = () => {
    setPhoneNumbers([...phoneNumbers, '']);
  };

  const handleRemovePhone = (index) => {
    const newPhoneNumbers = [...phoneNumbers];
    newPhoneNumbers.splice(index, 1);
    setPhoneNumbers(newPhoneNumbers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    if (
      !salutation ||
      !firstName ||
      !lastName ||
      !day ||
      !month ||
      !year ||
      !age ||
      !gender ||
      !maritalStatus ||
      !email
    ) {
      alert('Please fill in all required fields.');
      return;
    }

    // Additional validation logic can be added based on specific requirements

    // Combine personal info data with previous form data
    const personalInfoData = {
      personalInfo: {
        salutation,
        firstName,
        middleName,
        lastName,
        day,
        month,
        year,
        age,
        phoneNumbers,
        landlineNumber,
        country,
        passportId,
        gender,
        email,
      },
      medicalInfo: {
        hospitalName,
        wardType,
      },
      additionalInfo: {
        Caste,
        maritalStatus,
        agreeNotification,
        employerInfo,
        previousLastName,
        occupation,
      },
    };
    

    // Update the parent component's state with the collected data
    setFormData(personalInfoData);

    // Move to the next step
    onNext();
  };

  return (
    
    <form className='flex font-["Inter"] text-lg font-normal text-[#11375A] m-12 -mt-5 gap-x-8 ' onSubmit={handleSubmit}>
     
      <div className='basis-1/2 grid gap-y-3'>
     
        <div className='flex gap-x-2 '>
          <label className='mr-28'>Salutation:</label>
          <input
            className='border-1 border-[#0473DA] rounded-md '
            type="radio"
            name="salutation"
            value="Mr."
            checked={salutation === 'Mr.'}
            onChange={() => setSalutation('Mr.')}
          />
          <label>Mr.</label>
          <input
            type="radio"
            name="salutation"
            value="Ms."
            checked={salutation === 'Ms.'}
            onChange={() => setSalutation('Ms.')}
          />
          <label>Mrs.</label>
          <input
            type="radio"
            name="salutation"
            value="Mrs."
            checked={salutation === 'Mrs.'}
            onChange={() => setSalutation('Mrs.')}
          />
          <label>Mrs.</label>
        </div>

       
        <div className=' flex gap-x-28'>
          <label>First Name:</label>
          <input
          className='focus:outline-none w-64 border-1 rounded-md border-blue-500'
            type="text"
            
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className=' flex gap-x-[5.6rem]'>
          <label>Middle Name:</label>
          <input
           className='focus:outline-none w-64 border-1 rounded-md border-blue-500'
            type="text"
            
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          />
        </div>

        <div className=' flex gap-x-28'>
          <label>Last Name:</label>
          <input
          className='focus:outline-none border-1 w-64 rounded-md border-blue-500'
            type="text"
            
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className='flex gap-x-8'>
          <label className='mr-[7.5rem]'>DOB:</label>
          <input
          className='w-16 focus:outline-none border-1 rounded-md border-blue-500 px-1'
            type="text"
            placeholder="DD"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
          <input
          className='w-16 focus:outline-none border-1 rounded-md border-blue-500 px-1'
            type="text"
            placeholder="MM"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          />
          <input
          className='w-16 focus:outline-none border-1 rounded-md border-blue-500 px-1'
            type="text"
            placeholder="YYYY"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>


        <div>
          <label className='mr-[10rem]'>Age:</label>
          <input
           className='focus:outline-none border-1 rounded-md border-blue-500 w-16'
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className='flex'>
          <label className='mr-[4.6rem]'>Phone Numbers:</label>
          <div className=' flex flex-col mr-4'>
          {phoneNumbers.map((phone, index) => (
            <span key={index}  >
              <input
                className='focus:outline-none border-1 rounded-md border-blue-500'
                type="text"
               
                value={phone}
                onChange={(e) => handlePhoneChange(index, e.target.value)}
              />
              
            </span>
          ))}
          
          </div>
          <button type="button" onClick={handleAddPhone}>
            <img src="../../assets/mingcute_plus-fill.svg" alt="" />
          </button>
          
        </div>

        <div>
          <label className='mr-16'>Landline Number:</label>
          <input
          className='focus:outline-none border-1 rounded-md border-blue-500 '
            type="text"
            
            value={landlineNumber}
            onChange={(e) => setLandlineNumber(e.target.value)}
          />
        </div>

        <div>
          <label className='mr-[8.5rem]'>Country:</label>
          <select className='focus:outline-none border-1 rounded-md border-blue-500  '
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            
          </select>
        </div>

        <div>
          <label className='mr-[6.75rem]'>Passport ID:</label>
          <input
          className='focus:outline-none border-1 rounded-md border-blue-500 '
            type="text"
            
            value={passportId}
            onChange={(e) => setPassportId(e.target.value)}
          />
        </div>
      </div>

      <div className='basis-1/2 grid gap-y-2  '>
    
        <div className='flex gap-x-2'>
          <label className='mr-16'>Gender:</label>
          <input
          className='focus:outline-none border-1 rounded-md border-blue-500 '
            type="checkbox"
            value="Male"
            checked={gender === 'Male'}
            onChange={() => setGender('Male')}
          />
          <label>Male</label>
          <input
            type="checkbox"
            value="Female"
            checked={gender === 'Female'}
            onChange={() => setGender('Female')}
          />
          <label>Female</label>
          <input
            type="checkbox"
            value="Other"
            checked={gender === 'Other'}
            onChange={() => setGender('Other')}
          />
          <label>Other</label>
        </div>

        <div>
          <label> Community: </label>
          <input
          className='focus:outline-none border-1 rounded-md border-blue-500 ml-9 mr-9 '
            type="text"
            placeholder="Enter hospital name"
            value={hospitalName}
            onChange={(e) => setHospitalName(e.target.value)}
          />

          <span >Membership:</span>
        </div>

        <div>
          
          <input
          className='focus:outline-none border-1 rounded-md border-blue-500 ml-24 '
            type="text"
            placeholder="Enter ward type"
            value={wardType}
            onChange={(e) => setWardType(e.target.value)}
          />
        </div>

        <div>
        <label>Caste/Ethnic group:</label>
          <input
          className='focus:outline-none border-1 rounded-md border-blue-500 ml-14 '
            type="text"
            
            value={Caste}
            onChange={(e) => setCaste(e.target.value)}
          />
        </div>

        <div className='flex gap-x-2'>
          <label className='mr-4'>Marital Status:</label>
          <input
            type="checkbox"
            value="Single"
            checked={maritalStatus === 'Single'}
            onChange={() => setMaritalStatus('Single')}
          />
          <label>Single</label>
          <input
            type="checkbox"
            value="Married"
            checked={maritalStatus === 'Married'}
            onChange={() => setMaritalStatus('Married')}
          />
          <label>Married</label>
          <input
            type="checkbox"
            value="Divorced"
            checked={maritalStatus === 'Divorced'}
            onChange={() => setMaritalStatus('Divorced')}
          />
          <label>Divorced</label>
        </div>

        
        <div>
          <label className='mr-[2.35rem]'>
            Notification: 
            </label>
            <input
            className='focus:outline-none border-1 rounded-md border-blue-500 '
              type="checkbox"
              checked={agreeNotification}
              onChange={() => setAgreeNotification(!agreeNotification)}
            />
             
          
        </div>

        <div>
          <label>Employer Information:</label>
          <input
          className='focus:outline-none border-1 rounded-md border-blue-500 ml-8 text-xs py-2 px-4 w-56 '
            type="text"
            placeholder='Enter Your employer information....'
            value={employerInfo}
            onChange={(e) => setEmployerInfo(e.target.value)}
          />
        </div>

        <div>
          <label>Previous Last Name:</label>
          <input
          className='focus:outline-none border-1 rounded-md border-blue-500 ml-12 '
            type="text"
            
            value={previousLastName}
            onChange={(e) => setPreviousLastName(e.target.value)}
          />
        </div>

        <div>
          <label>Occupation:</label>
          <input
            className='focus:outline-none border-1 rounded-md border-blue-500 ml-28 '
            type="text"
            
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            className='focus:outline-none border-1 rounded-md border-blue-500 ml-[9.5rem] '
            type="email"
            
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
     
      <div>
     
  <button type='submit' class="absolute w-44 h-11 right-40 bottom-16 bg-sky-500 rounded shadow text-white text-lg font-bold font-['Inter']" style={{
  borderRadius: '0.3125rem',
  background: '#0A86EB',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
}} >Add Information</button>

      </div>
      </div>

    
    </form>
  );
};

export default PersonalInfoForm;
