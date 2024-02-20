import React from 'react'
import { MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit';
function Home() {
  return (
    <>
    <div className='bg-image hover-overlay  '>
    <img src='https://cdn.pixabay.com/photo/2018/12/03/14/41/opposites-3853562_1280.jpg' className='img-fluid' style={{marginLeft:30}} />
    <a href='#!'>
      <div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
     
    </a>
  </div>
  <MDBContainer fluid className="my-5 text-center">
      <h4 className="mt-4 mb-5">
        <strong>New Collections Arrived</strong>
      </h4>
      </MDBContainer>
  <MDBRow style={{marginTop:80 }}>
 
<MDBCol lg='4' md='12' className='mb-4'>
        <img src='https://cdn.pixabay.com/photo/2018/10/13/05/28/shoes-men-3743542_1280.jpg' className='img-fluid rounded' alt='' />
      </MDBCol>
      <MDBCol lg='4' md='12' className='mb-4'>
        <img src='https://cdn.pixabay.com/photo/2019/03/28/06/05/people-4086431_1280.jpg' className='img-fluid rounded' alt='' />
      </MDBCol>
      
     
      <MDBCol lg='4' md='12' className='mb-4'>
        <img src='https://cdn.pixabay.com/photo/2016/07/07/04/07/shoes-1501837_1280.jpg' className='img-fluid rounded' alt='' />
      </MDBCol>
</MDBRow>













<MDBRow>
<MDBCol lg='4' md='12' className='mb-4'>
        <img src='https://cdn.pixabay.com/photo/2018/10/13/05/28/shoes-men-3743544_1280.jpg' className='img-fluid rounded' alt='' />
      </MDBCol>
      <MDBCol lg='4' md='12' className='mb-4'>
        <img src='https://cdn.pixabay.com/photo/2019/10/26/09/50/shoes-4579068_1280.jpg' className='img-fluid rounded' alt='' />
      </MDBCol>
      
     
      <MDBCol lg='4' md='12' className='mb-4'>
        <img src='https://cdn.pixabay.com/photo/2022/06/28/03/26/boots-7288665_1280.jpg' className='img-fluid rounded' alt='' />
      </MDBCol>
</MDBRow>
</>
  )
}

export default Home