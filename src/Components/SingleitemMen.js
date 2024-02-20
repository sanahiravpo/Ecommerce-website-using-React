import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react';


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
  const { item, handleCart } = useContext(MyContext);
  const singleitem = item.filter((items) => items.id === parseInt(id))


 
  return (
    <div style={centerStyle}>
      <MDBCard style={{ maxWidth: '900px', height: '400px' }}>
        {singleitem.map((items) => (
          <MDBRow className='g-0'>
            <MDBCol md='4' key={items.id}>
              <MDBCardImage src={items.img} alt='...' fluid />
            </MDBCol>
            <MDBCol md='8' >
              <MDBCardBody>
                <MDBCardTitle>{items.title}</MDBCardTitle>
                <MDBCardText>
                  <small className='text-muted'>${items.price}</small>
                </MDBCardText>
                <MDBCardText>
                  {items.description}
                </MDBCardText>
                <MDBBtn rounded className='mx-2' color='dark' onClick={() => handleCart(items)}

                >
                  ADD TO CART
                </MDBBtn>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        ))}
      </MDBCard>
    </div>
  );
}