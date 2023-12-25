import React from 'react';

const DrugDetails = ({ medications }) => {
  return (
    <div className="drug-details">
     
      <div className="py-2 grid grid-cols-8 text-center border rounded-lg text-sm font-medium mt-2 border-[#76C8FF]">
        <div>Date</div>
        <div>Medication Name</div>
        <div>Route</div>
        <div>Dose</div>
        <div>Frequency</div>
        <div>Duration</div>
        <div>Refill</div>
        <div>Type of Medication</div>
      </div>
      <div >
        {/* {medications.map((medication) => (
          <div key={medication.id} className="py-2 grid grid-cols-8 text-center text-sm">
            <div>{medication.date}</div>
            <div>{medication.medicationName}</div>
            <div>{medication.route}</div>
            <div>{medication.dose}</div>
            <div>{medication.frequency}</div>
            <div>{medication.duration}</div>
            <div>{medication.refill}</div>
            <div>{medication.medicationType}</div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default DrugDetails;
