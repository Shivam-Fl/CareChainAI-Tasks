import React, { useState } from 'react';



const SearchPatientTable = ({
  patients,
  onEdit,
  onViewHistory,
  onUploadDocument,
  handleRowClick
}) => {
  

  return (
    <div>
    <table className="search-patient-table ">
      <thead>
        <tr>
          <th className="table-header">Hospital Number</th>
          <th className="table-header">Patient Name</th>
          <th className="table-header">Age/Gender</th>
          <th className="table-header">Address</th>
          <th className="table-header">Number</th>
          <th className="table-header">Actions</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((patient) => (
          <tr key={patient.id}  className=" ">
            <td>{patient.hospitalNumber}</td>
            <td className="text-[#0473DA] font-semibold font-[`Inter`]"> <button onClick={() => handleRowClick(patient)}>{patient.patientName}</button></td>
            <td>{`${patient.age} / ${patient.gender}`}</td>
            <td>{patient.address}</td>
            <td>{patient.phoneNumber}</td>
            <td className="flex gap-x-0.5">
              <button
                className="p-[0.25rem_1.125rem_0.25rem_1.25rem]"
                style={{
                  borderRadius: "0.3125rem",
                  border: "2px solid #0473DA",
                }}
                onClick={() => onEdit(patient.id)}
              >
                Edit
              </button>
              <button className="p-[0.25rem_1.3125rem_0.25rem_1.25rem]"
                style={{
                  borderRadius: "0.3125rem",
                  border: "2px solid #0473DA",
                }} onClick={() => onViewHistory(patient.id)}>
                View History
              </button>
              <select
              className="p-[0.25rem_1.3125rem_0.25rem_1.25rem] w-20"
              style={{
                borderRadius: "0.3125rem",
                border: "2px solid #0473DA",
              }}
                onChange={(e) => onUploadDocument(patient.id, e.target.value)}
              >
                <option value="">Upload Document</option>
                <option value="healthCard">Health Card</option>
                <option value="visitorCard">Visitor Card</option>
                <option value="patientSticker">Patient Sticker</option>
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
   
    </div>
  );
};

export default SearchPatientTable;
