import React from 'react';

const AppointmentHistory = ({ appointments }) => {
  return (
    <div className="">
      
      <div className="py-2 grid grid-cols-5 text-center border rounded-lg text-xl font-medium mt-2 border-[#76C8FF]">
        <div>Date</div>
        <div>Time</div>
        <div>Code</div>
        <div>Appointed Doctor</div>
        <div>Type</div>
      </div>
      <div className="">
        {/* {appointments.map((appointment) => (
          <div key={appointment.id} className="py-2 grid grid-cols-5 text-center my-1 text-lg">
            <div>{appointment.date}</div>
            <div>{appointment.time}</div>
            <div>{appointment.code}</div>
            <div>{appointment.doctor}</div>
            <div>{appointment.type}</div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default AppointmentHistory;
