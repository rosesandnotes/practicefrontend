import React from 'react';
import {Link} from 'react-router-dom';
const Success = (props) => {
  return <div className="row">
      <div className="col">
        <h1>Thanks for signing up!</h1>
        <p>You were registered successfully and can now 
            <Link to="/users/login">login!</Link>
            </p>
        
      </div>
    </div>
}

export default Success;