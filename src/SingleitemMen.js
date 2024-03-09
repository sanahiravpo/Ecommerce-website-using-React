import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext,useEffect } from 'react';
import axios from "axios"

import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { MyContext } from '../App';

const centerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '90vh',

};
export default function SingleitemMen() {
  const { id } = useParams();
  const { item, handleCart,setItem } = useContext(MyContext);
  // const singleitem = item.filter((items) => items.id === parseInt(id))
useEffect(()=>{
  axios.get(`http://localhost:5094/api/Product/${parseInt(id)}`)
  .then((res)=>{
  
    setItem(res.data);
  })
},[id])

 
  return (
    <div style={centerStyle}>
      <MDBCard style={{ maxWidth: '900px', height: '400px' }}>
       
          <MDBRow className='g-0'>
            <MDBCol md='4' key={item.productId}>
              <MDBCardImage src={item.productImage} alt='...' fluid />
            </MDBCol>
            <MDBCol md='8' >
              <MDBCardBody>
                <MDBCardTitle>{item.productName}</MDBCardTitle>
                <MDBCardText>
                  <small className='fw-bold mb-1'>${item.unitPrice}</small>
                </MDBCardText>
                <MDBCardText>
                  <p>Product Description</p>
                  {item.productDescription}
                </MDBCardText>
                <MDBBtn rounded className='mx-2' color='dark' onClick={() => handleCart(item.productId)}

                >
                  ADD TO CART
                </MDBBtn>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
       
      </MDBCard>
    </div>
  );
}