import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import { MyContext } from '../App';

function Women() {

  const { item } = useContext(MyContext);
const women=item.filter((items)=>items.category==="Female")
  return (
    <MDBContainer fluid className="my-5 text-center">
      <h4 className="mt-4 mb-5">
        <strong>Bestsellers</strong>
      </h4>

      <MDBRow>
        {women.map((items)=>(
 <MDBCol md="5" lg="2" className="mb-4" key={items.id} >
   <Link to={`/Women/${items.id}`}>
 <MDBCard>
   <MDBRipple
     rippleColor="light"
     rippleTag="div"
     className="bg-image rounded hover-zoom"
   >
     
     <MDBCardImage
       src={items.img}
       fluid
       className="w-100"
     />
     <a href="#!">
       <div className="mask">
         <div class="d-flex justify-content-start align-items-end h-100">
           <h5>
             {/* <span className="badge bg-primary ms-2">New</span>
             <span className="badge bg-success ms-2">Eco</span>
             <span className="badge bg-danger ms-2">-10%</span> */}
           </h5>
         </div>
       </div>
       <div className="hover-overlay">
         <div
           className="mask"
           style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
         ></div>
       </div>
     </a>
   </MDBRipple>
   <MDBCardBody>
     <a href="#!" className="text-reset">
   
     </a>
     <a href="#!" className="text-reset">
       <p>{items.title}</p>
     </a>
     <h6 className="mb-3">
       <s>$61.99</s>
       <strong className="ms-2 text-danger">${items.price}</strong>
     </h6>
   </MDBCardBody>
 </MDBCard>
 </Link>
</MDBCol>
        ))}
       
      </MDBRow>
    </MDBContainer>
  );
}

export default Women;