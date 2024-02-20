import React, { useContext } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRadio,
  MDBRow,
} from "mdb-react-ui-kit";
import { MyContext } from "../App";
import { useNavigate } from "react-router-dom";


export default function Account() {
  const navigate=useNavigate();
  const{userRegistration,email,totalprice,setOrder,cartItem,setUserRegistration,order}=useContext(MyContext)
const handlepay=()=>{
  const user=userRegistration.map((x)=>x.emailexamp===email?{...x,order:order}:x)
setUserRegistration(user);

}
const goback=()=>{
navigate("/Cart")
}
  return (
    <MDBContainer fluid className="py-5" style={{ backgroundColor: "#eee" }}>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="8" lg="6" xl="4">
          <MDBCard className="rounded-3">
            <MDBCardBody className="mx-1 my-2">
              <div className="d-flex align-items-center">
                <div>
                  <MDBIcon
                    fab
                    icon="cc-visa"
                    size="4x"
                    className="text-black pe-3"
                  />
                </div>
              
                     <p className="d-flex flex-column mb-0">
                     <b></b>
                     <span className="small text-muted">{email}</span>
                     <span className="small text-muted">**** 8880</span>
                   </p>

                <div>
                
                 
                </div>
              </div>
              <div className="pt-3">
                <div className="d-flex flex-row pb-3">
                  <div
                    className="rounded border border-primary border-2 d-flex w-100 p-3 align-items-center"
                    style={{ backgroundColor: "rgba(18, 101, 241, 0.07)" }}
                  >
                    <div className="d-flex align-items-center pe-3">
                      <MDBRadio
                        name="radioNoLabelX"
                        id="radioNoLabel11"
                        defaultChecked
                      />
                    </div>
                    <div className="d-flex flex-column">
                      <p className="mb-1 small text-primary">
                        Total amount due
                      </p>
                      <h6 className="mb-0 text-primary">{totalprice}</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row pb-3">
                <div className="rounded border d-flex w-100 px-3 py-2 align-items-center">
                  <div className="d-flex align-items-center pe-3">
                    <MDBRadio name="radioNoLabelX" id="radioNoLabel11" />
                  </div>
                  <div className="d-flex flex-column py-1">
                    <p className="mb-1 small text-primary">Other amount</p>
                    <div className="d-flex flex-row align-items-center">
                      <h6 className="mb-0 text-primary pe-1">$</h6>
                      <MDBInput
                        id="typeNumber"
                        type="number"
                        size="sm"
                        style={{ width: "55px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center pb-1">
                <button onclick={goback}>GO BACK</button>
                
                <MDBBtn size="lg" onClick={handlepay}>Pay amount</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}


// import React from 'react';
// import {
//   MDBRow,
//   MDBCol,
//   MDBInput,
//   MDBCheckbox,
//   MDBBtn
// } from 'mdb-react-ui-kit';

// import { MyContext } from "../App";
//  import { useNavigate } from "react-router-dom";
// import { useContext } from 'react';

// export default function Account() {
//   const navigate=useNavigate();
//   const{userRegistration,email,totalprice,setOrder,cartItem,setUserRegistration}=useContext(MyContext)
// const handlepay=()=>{
// setOrder(cartItem)
// setUserRegistration(userRegistration);

// }
// const goback=()=>{
// navigate("/Cart")
// }
//     <form>
//       <MDBRow className='mb-4'>
//         <MDBCol>
//           <MDBInput id='form6Example1' label='First name' />
//         </MDBCol>
//         <MDBCol>
//           <MDBInput id='form6Example2' label='Last name' />
//         </MDBCol>
//       </MDBRow>

//       <MDBInput wrapperClass='mb-4' id='form6Example3' label='Company name' />
//       <MDBInput wrapperClass='mb-4' id='form6Example4' label='Address' />
//       <MDBInput wrapperClass='mb-4' type='email' id='form6Example5' label='Email' />
//       <MDBInput wrapperClass='mb-4' type='tel' id='form6Example6' label='Phone' />

//       <MDBInput wrapperClass='mb-4' textarea id='form6Example7' rows={4} label='Additional information' />

//       <MDBCheckbox
//         wrapperClass='d-flex justify-content-center mb-4'
//         id='form6Example8'
//         label='Create an account?'
//         defaultChecked
//       />

//       <MDBBtn className='mb-4' type='submit' block  onClick={handlepay}>
//         Place order
//       </MDBBtn>
//     </form>
//   ;
// }