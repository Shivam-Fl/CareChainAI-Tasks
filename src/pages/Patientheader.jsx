import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Patientheader({count}) {

  const navigate = useNavigate();
  function handleClick(e){
      const eId = e.target.id
      if(eId === "Register"){
        
        navigate('/Patient/Registration')
      }
      else if (eId === "Search"){ 
        navigate('/Patient/Search')}
  }

  

  return (
    <div>
      <div className="w-full bg-blue-300 px-12 pt-6 grid grid-cols-6 gap-x-40 text-white">
        <img className="col-start-1 col-end-2" src="../../assets/HomeIcon1.svg" />

        <button
        id='Register'
          onClick={handleClick}
          className={`col-start-2 col-end-3 w-[195px] h-[70px] bg-[#0373d9] rounded-[10px_10px_0px_0px] overflow-hidden ${
           count===1 && "pHactive"
          }`}
        >
          Register Patient
        </button>

        <button
        id='Search'
          onClick={handleClick}
          className={`col-start-3 col-end-4 w-[195px] h-[70px] bg-[#0373d9] rounded-[10px_10px_0px_0px] overflow-hidden ${
            count===2  && "pHactive"
          }`}
        >
          Search Patient
        </button>
      </div>
    </div>
  );
}
