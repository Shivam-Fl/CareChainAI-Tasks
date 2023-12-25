import React from 'react';

const AdmissionHistory = ({ admissions }) => {
  return (
    <div className="admission-history">

      <div className="py-2 grid grid-cols-7 text-center border rounded-lg text-xl font-medium mt-2 border-[#76C8FF]">
        <div>Sr No.</div>
        <div>Action</div>
        <div>In Date</div>
        <div>Out Date</div>
        <div>Bed Code</div>
        <div>Bed Feature</div>
        <div>No. of Days</div>
      </div>
      <div >
        {/* {admissions.map((admission) => (
          <div key={admission.id} className="py-2 grid grid-cols-7 text-center text-lg ">
            <div>{admission.srNo}</div>
            <div>{admission.action}</div>
            <div>{admission.inDate}</div>
            <div>{admission.outDate}</div>
            <div>{admission.bedCode}</div>
            <div>{admission.bedFeature}</div>
            <div>{admission.days}</div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default AdmissionHistory;
