import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext ,useState} from 'react';

import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  MDBCard
}
from 'mdb-react-ui-kit';
import { MyContext } from '../App';

function Login() {
  const navigate=useNavigate();
  const{handleSubmit,password, setPassword,email, setEmail,userRegistration,SignInClick}=useContext(MyContext);


  const handleclick=()=>{
    
    navigate("/SignUp")
  }
  

 
 
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50  text-center">
     
        <h2 className="fw-bold mb-5">MY ACCOUNT</h2>
        <form onSubmit={handleSubmit}>
      <MDBInput wrapperClass='mb-4' label='Email address' id='form1' name='email'  type='email'  onChange={(e)=>setEmail(e.target.value)}/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' name='password' type='password'  onChange={(e)=>setPassword(e.target.value)}/>

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <Link to="#">Forgot password?</Link>
      </div>

      <MDBBtn className='w-100 mb-4' color='dark' type='submit'  onClick={()=>SignInClick()}>Sign in</MDBBtn>

      


      <div className="text-center">
        <p>Not a member? </p><MDBBtn onClick={handleclick} color='dark'>Register</MDBBtn>
      
      
      </div>
      </form>
    </MDBContainer>
  );
}

export default Login;