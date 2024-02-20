import React, { useContext } from 'react'

import { MDBRow, MDBCol, MDBContainer,
 
  MDBCard,
  MDBCardBody,
  MDBCardImage,MDBRipple} from 'mdb-react-ui-kit';
import { MyContext } from '../App';
import { Link } from 'react-router-dom';

function NewCollection() {
  const {item}=useContext(MyContext);
 
  return (
  <>

<MDBRow>
<MDBCol lg='4' md='12' className='mb-4'>
        <img src='https://cdn.pixabay.com/photo/2022/02/01/23/39/high-heels-6987268_640.jpg' className='img-fluid rounded' alt='' />
      </MDBCol>
      <MDBCol lg='4' md='12' className='mb-4'>
        <img src='https://cdn.pixabay.com/photo/2018/12/03/14/42/hiking-shoes-3853563_1280.jpg' className='img-fluid rounded' alt='' />
      </MDBCol>
      
     
      <MDBCol lg='4' md='12' className='mb-4'>
        <img src='https://cdn.pixabay.com/photo/2018/12/29/00/46/wedding-3900682_640.jpg' className='img-fluid rounded' alt='' />
      </MDBCol>
</MDBRow>


<MDBContainer fluid className="my-5 text-center">
      <h4 className="mt-4 mb-5">
        <strong>New Collections Arrived</strong>
      </h4>

      <MDBRow>
        {item.map((items)=>(
 <MDBCol md="5" lg="2" className="mb-4" key={items.id} >
   <Link to={`/Men/${items.id}`}>
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

  </>
  )
}

export default NewCollection