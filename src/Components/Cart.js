import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
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
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../App';
import Cookies from 'js-cookie';
export default function Cart() {
  const { totalAmount, cartItem, setCartItem, handlecheckout, totalprice, totalQuantity, } = useContext(MyContext);
  const navigate = useNavigate();


  const handleIncrement = async (prodId) => {
   
    try {
      const tk = Cookies.get("token");
      const response = await axios.put(`http://localhost:5094/api/Cart/increase-quantity?productid=${prodId}`, null, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tk}`
        }
      })

      cartitem()
    }

    catch (err) {
      console.log(err);

    }


  }


  const handleDecrement = async (id) => {
    try {
      const tk = Cookies.get("token")
      await axios.put(`http://localhost:5094/api/Cart/decrease-quantity?productid=${id}`, null, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tk}`
        }
      })
      cartitem()
    }
    catch (err) {
      console.log(err)
    }
  };


  const handleremove = async (id) => {
   
    try {
      const tk = Cookies.get("token");
      let response = await axios.delete(`http://localhost:5094/api/Cart?productid=${id}`, {

        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tk}`
        }
      })
      cartitem()

    }
    catch (err) {
      console.log(err)
    }

  }

  const cartitem = async () => {
    try {
      const tk = Cookies.get("token");
      const response = await axios.get("http://localhost:5094/api/Cart", {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tk}`
        }
      })
      console.log(response.data)
      setCartItem(response.data);
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
      cartitem()
  }, [])
  return (
<>
{
  cartItem?.length!=0 && cartItem!=null?(



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


          {
          
            cartItem && cartItem.map((item, index) => (
              <MDBCard className="rounded-3 mb-4" key={item.prodId} >
                <MDBCardBody className="p-4"  >
                  <MDBRow className="justify-content-between align-items-center" >
                    <MDBCol md="2" lg="2" xl="2">
                      <MDBCardImage className="rounded-3" fluid
                        src={item.productImage}
                      />
                    </MDBCol>
                    <MDBCol md="3" lg="2" xl="2">
                      <MDBTypography tag="h5" className="mb-0">
                        <p>{item.productName}</p>
                      </MDBTypography>
                    </MDBCol>
                    <MDBCol md="3" lg="3" xl="2"
                      className="d-flex align-items-center justify-content-around">

                      <MDBBtn color="link" className="px-2" outline size="sm" onClick={() => handleIncrement(item.prodId)}>
                        +
                      </MDBBtn>
                      {item.quantity}
                      <MDBBtn color="link" className="px-2" outline size="sm" onClick={() => handleDecrement(item.prodId)}>
                        -
                      </MDBBtn>

                    </MDBCol>
                    <MDBCol md="3" lg="3" xl="2" className="offset-lg-1">
                      <p className="lead fw-normal mb-2">{item.totalprice} </p>

                    </MDBCol>

                    <MDBCol md="3" lg="2" xl="2" className="d-flex justify-content-end">
                      <MDBTypography tag="h5" className="mb-0">
                        <MDBBtn color="warning" outline size="sm" onClick={() => handleremove(item.prodId)} >

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
                {totalAmount}

              </MDBBtn>
            </MDBCardBody>
          </MDBCard>

          <MDBCard>
            <MDBCardBody>
              <MDBBtn className="ms-3" color="warning" block size="lg" onClick={handlecheckout} >
                place order
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>


        </MDBCol>

      </MDBRow>

    </MDBContainer>

  </section>

  ):( <MDBCard className="mb-4" >
  <MDBCardBody className="p-4 d-flex flex-row">
    YOUR CART IS EMPTY
    
  </MDBCardBody>
</MDBCard>)
}
   
    </>

  );
}