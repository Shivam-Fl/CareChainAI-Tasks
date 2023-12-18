import React from 'react';
import { Link} from 'react-router-dom';
const Finish = () => {

  return (
    <div className="user-form">
      <h1>You have successfully completed the registration.</h1>
      
      <button> <Link to={'/'}>Dashboard </Link> </button>
      
    </div>
  );
};

export default Finish;
