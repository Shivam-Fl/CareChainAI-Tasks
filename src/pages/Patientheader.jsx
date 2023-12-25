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
      <div className="w-full  px-12 pt-6 flex gap-x-6 text-white">
        
        <button
        id='Register'
          onClick={handleClick}
          className={` w-[195px] h-[70px] bg-[#0373d9] rounded-[10px_10px_0px_0px] overflow-hidden ${
           count===1 && "pHactive"
          }`}
        >
          Register Patient
        </button>

        <button
        id='Search'
          onClick={handleClick}
          className={` w-[195px] h-[70px] bg-[#0373d9] rounded-[10px_10px_0px_0px] overflow-hidden ${
            count===2  && "pHactive"
          }`}
        >
          Search Patient
        </button>
      </div>
    </div>
  );
}
