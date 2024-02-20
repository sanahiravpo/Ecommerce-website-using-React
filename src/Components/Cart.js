import React, { useContext, useEffect, useState } from 'react';


import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useNavigate} from 'react-router-dom';
import { MyContext } from '../App';
export default function Cart() {
  const { cartItem, setCartItem,handlecheckout,totalprice,totalQuantity,} = useContext(MyContext);
const navigate=useNavigate();


  const handleIncrement = (id) => {
    const updatedcart = cartItem.map((item) =>
      item.id == id ?
        {...item,
          Quantity: item.Quantity + 1,
          total: (item.Quantity + 1) * Number(item.price)
        }
        :item)
    setCartItem(updatedcart);

  }

 
  const handleDecrement = (id) => {
    const updatedCart = cartItem.map((item) => {
      if (item.id === id) {
        
        const newQuantity = Math.max(1, item.Quantity - 1);
        return {
          ...item,
          Quantity: newQuantity,
          total: newQuantity * Number(item.price)
        };
      }
      return item;
    });
  
    setCartItem(updatedCart);
  };
  

const handleremove=(index)=>{
 let tempcart = [...cartItem];
  tempcart.splice(index,1);
  setCartItem(tempcart);
}



  return (


    <section className="h-100" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="10">

            <div className="d-flex justify-content-between align-items-center mb-4">
              <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                Shopping Cart
              </MDBTypography>

              <MDBTypography tag="h5" className="mb-0">
              
              </MDBTypography>
              <div>
                <p className="mb-0">
                  <span className="text-muted">Sort by:</span>
                  <a href="#!" className="text-body">
                    price <i className="fas fa-angle-down mt-1"></i>
                  </a>
                </p>
              </div>
            </div>


            {cartItem && cartItem.map((item,index) => (
              <MDBCard className="rounded-3 mb-4" key={item.id} >
                <MDBCardBody className="p-4"  >
                  <MDBRow className="justify-content-between align-items-center" >
                    <MDBCol md="2" lg="2" xl="2">
                      <MDBCardImage className="rounded-3" fluid
                        src={item.img}
                      />
                    </MDBCol>
                    <MDBCol md="3" lg="2" xl="2">
                      <MDBTypography tag="h5" className="mb-0">
                        <p>{item.title}</p>
                      </MDBTypography>
                    </MDBCol>
                    <MDBCol md="3" lg="3" xl="2"
                      className="d-flex align-items-center justify-content-around">

                      <MDBBtn color="link" className="px-2" outline size="sm" onClick={() => handleIncrement(item.id)}>
                        +
                      </MDBBtn>
                      {item.Quantity}
                      <MDBBtn color="link" className="px-2" outline size="sm" onClick={() => handleDecrement(item.id)}>
                        -
                      </MDBBtn>

                    </MDBCol>
                    <MDBCol md="3" lg="3" xl="2" className="offset-lg-1">
                      <p className="lead fw-normal mb-2">{item.total} </p>
                     
                    </MDBCol>

                    <MDBCol md="3" lg="2" xl="2" className="d-flex justify-content-end">
                      <MDBTypography tag="h5" className="mb-0">
                        <MDBBtn color="warning" outline size="sm" onClick={()=>handleremove(index)} >

                          remove
                        </MDBBtn>

                      </MDBTypography>

                    </MDBCol>
                    <MDBCol md="1" lg="1" xl="1" className="text-end">
                      <a href="#!" className="text-danger">
                        <MDBIcon fas icon="trash text-danger" size="lg" />
                      </a>

                    </MDBCol>
                  </MDBRow>

                </MDBCardBody>

              </MDBCard>
            ))}

            <MDBCard className="mb-4">
              <MDBCardBody className="p-4 d-flex flex-row">
             TOTAL AMOUNT YO HAVE TO PAY FOR <bold>{totalQuantity}</bold> ITEMS
                <MDBBtn className="ms-3" color="warning" outline size="lg" >
                {totalprice}
                  
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>

            <MDBCard>
              <MDBCardBody>
                <MDBBtn className="ms-3" color="warning" block size="lg" onClick={handlecheckout} >
                 proceed to pay
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>


          </MDBCol>

        </MDBRow>

      </MDBContainer>

    </section>


  );
}