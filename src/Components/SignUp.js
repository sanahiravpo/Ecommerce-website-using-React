import React from 'react';
import { useContext,useState } from 'react';

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../App';


function SignUp() {
  const{handleSubmit,signUpClick,userRegistration,setUserRegistration,username, setUsername,mobNum, setmobNum,password, setPassword,email, setEmail}=useContext(MyContext)
  const navigate=useNavigate();


  return (
    <MDBContainer fluid >

      <div className="p-5 bg-image"></div>

      <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{marginTop: '-80px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
        <MDBCardBody className='p-5 text-center'>

          <h2 className="fw-bold mb-5">Sign up now</h2>
<form onSubmit={handleSubmit}>
          <MDBRow>
            <MDBCol col='6'>
              <MDBInput wrapperClass='mb-4' label='username' name='username' id='form1' type='text'   onChange={(e)=>setUsername(e.target.value)}/>
            </MDBCol>

            <MDBCol col='6'>
              <MDBInput wrapperClass='mb-4' label='Mobile number' id='form1'  name='number' type='number'   onChange={(e)=>setmobNum(e.target.value)}/>
            </MDBCol>
          </MDBRow>

          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'  name='email'    onChange={(e)=>setEmail(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' name='password'    onChange={(e)=>setPassword(e.target.value)}/>

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
          </div>

          <MDBBtn className='w-100 mb-4'  color='dark'size='md' type='submit' onClick={()=>signUpClick()}>sign up</MDBBtn>

          </form>

        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default SignUp;