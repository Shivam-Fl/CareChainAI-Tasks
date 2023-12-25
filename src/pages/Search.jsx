import React, { useState } from 'react';
import SearchPatientHeader from './SearchPatient/SearchPatientHeader';
import SearchPatientTable from './SearchPatient/SearchTable';
import Patientheader from './Patientheader';
import PatientDetails from './SearchPatient/PatientDetails';

const SearchPatientPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  var patients = [
    {
      hospitalNumber: 1234,
      patientName: 'Shivam',
      age: 20,
      gender: 'M',
      address: 'Shanti Avenue',
      phoneNumber: 7822875508,
    },
  ];

  const [resultsCount, setResultsCount] = useState(patients.length);

  const handleSearch = (query) => {
    // Perform search logic based on the query
    // Update patients and resultsCount accordingly
  };

  const handlePrintAll = () => {
    // Implement logic to print all patients
  };

  const handleEdit = (patientId) => {
    // Implement logic to edit the patient with the specified ID
  };

  const handleViewHistory = (patientId) => {
    // Implement logic to view the history of the patient with the specified ID
  };

  const handleUploadDocument = (patientId, documentType) => {
    // Implement logic to upload a document for the patient with the specified ID
    console.log(`Uploading ${documentType} for patient ${patientId}`);
  };

  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleRowClick = (patient) => {
    setSelectedPatient(patient);
    console.log(patient);
  };

  return (
    <div>
      <div className="search-patient-page ">
        <Patientheader count={2} />
        {selectedPatient ? (
          <PatientDetails patientData={selectedPatient} onBackClick={() => setSelectedPatient(null)} />
        ) : (
          <div>
          
         <SearchPatientHeader onSearch={handleSearch} resultsCount={resultsCount} onPrintAll={handlePrintAll} />
          <SearchPatientTable
            patients={patients}
            onEdit={handleEdit}
            onViewHistory={handleViewHistory}
            onUploadDocument={handleUploadDocument}
            handleRowClick={handleRowClick}
          />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPatientPage;
