import React, { useState } from 'react';
import AppointmentHistory from './AppointmentHistory';
import AdmissionHistory from './AdmissionHistory';
import DrugDetails from './DrugDetails';
import DocumentDetails from './DocumentDetails';
import BillDetails from './BillDetails'

const PatientDetails = ({ patientData, onBackClick, onSearch, onCancelSearch }) => {
  const [selectedOption, setSelectedOption] = useState('appointmentHistory');

  const renderOptionContent = () => {
    switch (selectedOption) {
      case 'appointmentHistory':
        return <AppointmentHistory appointments={patientData.appointments} />;
      case 'admissionHistory':
        return <AdmissionHistory admissions={patientData.admissions} />;
      case 'drugDetails':
        return <DrugDetails medications={patientData.medications} />;
      case 'billDetails':
        return <BillDetails medications={patientData.bills} />;
      case 'documentDetails':
        return <DocumentDetails documents={patientData.documents} />;
      default:
        return null;
    }
  };

  return (
    <div className="patient-details mx-10 my-6">
      <div className="back-button">
        <button className='text-white w-20 mb-4 h-12 text-sm flex flex-col justify-center items-center font-bold' style={{borderRadius: "0.2625rem",
background: "#0473DA"}} onClick={onBackClick}> <svg xmlns="http://www.w3.org/2000/svg" width="27" height="17" viewBox="0 0 27 17" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.06177 8.63045L8.28888 11.8576C8.40958 11.97 8.5064 12.1057 8.57355 12.2564C8.6407 12.4071 8.67681 12.5698 8.67972 12.7347C8.68263 12.8997 8.65228 13.0636 8.59049 13.2165C8.5287 13.3695 8.43673 13.5085 8.32006 13.6252C8.2034 13.7418 8.06443 13.8338 7.91145 13.8956C7.75847 13.9574 7.59461 13.9877 7.42964 13.9848C7.26468 13.9819 7.10199 13.9458 6.95128 13.8786C6.80058 13.8115 6.66494 13.7147 6.55246 13.594L1.22856 8.27006L0.360352 7.40186L1.22856 6.53365L6.55246 1.20975C6.78536 0.992727 7.09341 0.87458 7.4117 0.880196C7.72999 0.885812 8.03367 1.01475 8.25877 1.23985C8.48387 1.46495 8.61281 1.76864 8.61842 2.08692C8.62404 2.40521 8.50589 2.71326 8.28888 2.94616L5.06177 6.17326H21.2464C22.6584 6.17326 24.0126 6.73417 25.011 7.7326C26.0094 8.73102 26.5703 10.0852 26.5703 11.4972C26.5703 12.9092 26.0094 14.2633 25.011 15.2617C24.0126 16.2602 22.6584 16.8211 21.2464 16.8211H17.9702C17.6443 16.8211 17.3319 16.6916 17.1014 16.4612C16.871 16.2308 16.7416 15.9183 16.7416 15.5925C16.7416 15.2666 16.871 14.9541 17.1014 14.7237C17.3319 14.4933 17.6443 14.3639 17.9702 14.3639H21.2464C22.0067 14.3639 22.7359 14.0619 23.2735 13.5242C23.8111 12.9866 24.1132 12.2575 24.1132 11.4972C24.1132 10.7369 23.8111 10.0077 23.2735 9.47009C22.7359 8.93248 22.0067 8.63045 21.2464 8.63045H5.06177Z" fill="white"/>
</svg>
  Back</button>
      </div>
      <div className="">
        <div className=" flex gap-x-32">
          <div className="patient-details-box flex gap-x-20 px-14 py-2" style={{borderRadius: "0.625rem",
border: "1px solid #76C8FF",
background: "#FFF",
boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.25) inset"}}>
    <div>
            <p> {patientData.patientName}</p>
            <p>Hospital Number: {patientData.hospitalNumber}</p>
            <p>Contact Number: {patientData.phoneNumber}</p>
            <p>Address: {patientData.address}</p>
    </div>
            <div>
            <p>DOB: {patientData.dob}</p>
            <p>Age: {patientData.age}</p>
            <p>Gender: {patientData.gender}</p>
            </div>
            
          </div>
          <div className="">
            <input
              type="text"
              placeholder="Search Patient"
              onChange={(e) => onSearch(e.target.value)}
              className="search-input w-96"
            />
            <button onClick={onCancelSearch} className='text-white w-24 mb-4 mt-8 h-12 text-lg flex flex-col justify-center items-center font-normal' style={{borderRadius: "0.2625rem",
background: "#0473DA"}}>
              Cancel
            </button>
          </div>
        </div>
        <div className="flex gap-x-24 justify-center items-center mt-16 text-xl font-semibold">
          <button className={`${selectedOption=="appointmentHistory" && "font-bold" }`} onClick={() => setSelectedOption('appointmentHistory')}>Appointment History</button>
          <button className={`${selectedOption=="admissionHistory" && "font-bold" }`} onClick={() => setSelectedOption('admissionHistory')}>Admission History</button>
          <button className={`${selectedOption=="drugDetails" && "font-bold" }`} onClick={() => setSelectedOption('drugDetails')}>Drug Details</button>
          <button className={`${selectedOption=="billDetails" && "font-bold" }`} onClick={() => setSelectedOption('billDetails')}>Bill Details</button>
          <button className={`${selectedOption=="documentDetails" && "font-bold" }`} onClick={() => setSelectedOption('documentDetails')}>Document Details</button>
        </div>
      </div>
      {renderOptionContent()}
    </div>
  );
};

export default PatientDetails;
