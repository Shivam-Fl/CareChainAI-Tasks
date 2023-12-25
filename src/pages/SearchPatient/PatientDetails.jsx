import React, { useState } from 'react';
import AppointmentHistory from './AppointmentHistory';
import AdmissionHistory from './AdmissionHistory';
import DrugDetails from './DrugDetails';
import DocumentDetails from './DocumentDetails';

const PatientDetails = ({ patientData }) => {
  const [selectedOption, setSelectedOption] = useState('appointmentHistory');

  const renderOptionContent = () => {
    switch (selectedOption) {
      case 'appointmentHistory':
        return <AppointmentHistory appointments={patientData.appointments} />;
      case 'admissionHistory':
        return <AdmissionHistory admissions={patientData.admissions} />;
      case 'drugDetails':
        return <DrugDetails medications={patientData.medications} />;
      case 'documentDetails':
        return <DocumentDetails documents={patientData.documents} />;
      default:
        return null;
    }
  };

  return (
    <div className="patient-details mx-10 my-6">
      <div className="back-button">
        {/* <button onClick={onBackClick}>Back</button> */}
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
              className="search-input w-full"
            />
            {/* <button onClick={onCancelSearch} className="cancel-button">
              Cancel
            </button> */}
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
