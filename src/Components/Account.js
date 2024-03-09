import React, { useContext, useEffect, useState } from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem, MDBTypography
} from 'mdb-react-ui-kit';
import { MyContext } from '../App';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
export default function Account() {
  const { username, mobNum, email, handleSubmit, setEmail, setUsername, setmobNum, item, cartItem } = useContext(MyContext);
  const navigate = useNavigate();
  const user = Cookies.get("email")
  const mobile = Cookies.get("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [orderdetail, setOrderDetail] = useState([]);
  const handleorder = async () => {


    try {
      const tk = Cookies.get("token");
      const customerinfo = {
        customerName: username,
        customerPhone: mobNum,
        customerCity: city,
        homeAddress: address,
        customerEmail: email,
        transactionId: `${Math.random() * 1000}`
      }
      let response = await axios.post('http://localhost:5094/api/Order', customerinfo, {
        headers: {
          'Authorization': `Bearer ${tk}`
        }
      })
      let result = response.data
      console.log("order placed successfully,", result)
      navigate("/Payment")
    }
    catch (ex) {
      console.log("error in placing the order", ex);

    }


  }


  const orderitems = async () => {
    try {
      const tk = Cookies.get("token");
      let response = await axios.get("http://localhost:5094/api/Order", {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tk}`
        }
      })
      setOrderDetail(response.data);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    orderitems()
  }, [])


  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">


        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">


                <p >{user}</p>


              </MDBCardBody>
            </MDBCard>


          </MDBCol>

          {orderdetail && orderdetail?.map((item) => (

            <MDBCard className="rounded-3 mb-2" key={item.prodId} >
              <MDBCardBody className="p-1"  >
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

                  <MDBCol md="3" lg="3" xl="2" className="offset-lg-1">
                    <p className="lead fw-normal mb-2">{item.totalprice} </p>

                  </MDBCol>
                  <MDBCol md="3" lg="3" xl="2" className="offset-lg-1">
                    <p className="lead fw-normal mb-2">{item.quantity} </p>

                  </MDBCol>
                  <MDBCol md="3" lg="3" xl="1" className="offset-lg-1">
                    <p className="lead fw-normal mb-2">{item.orderStatus} </p>

                  </MDBCol>

                  <MDBCol md="3" lg="2" xl="2" className="d-flex justify-content-end">
                    <MDBTypography tag="h5" className="mb-0">


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

          <form onSubmit={handleSubmit}>
            <MDBCol lg="8" className="justify-content-between align-items-center">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">{orderdetail?.customerName}
                      <MDBInput wrapperClass='mb-3' id='form6Example3' label='Full Name' onChange={(e) => setUsername(e.target.value)} />
                    </MDBCol>
                  </MDBRow>
                  <hr />

                  <MDBRow>
                    <MDBCol sm="3">{orderdetail?.customerEmail}
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBInput wrapperClass='mb-4' id='form6Example3' label='Email' onChange={(e) => setEmail(e.target.value)} />                  </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">{orderdetail?.homeAddress}
                      <MDBCardText>Address</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBInput wrapperClass='mb-4' id='form6Example3' label='Address' onChange={(e) => setAddress(e.target.value)} />                  </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">{orderdetail?.customerPhone}
                      <MDBCardText>Mobile</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBInput wrapperClass='mb-4' id='form6Example3' label='Mobile' onChange={(e) => setmobNum(e.target.value)} />                  </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">{orderdetail?.customerCity}
                      <MDBCardText>city</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBInput wrapperClass='mb-4' id='form6Example3' label='city' onChange={(e) => setCity(e.target.value)} />                  </MDBCol>
                  </MDBRow>
                  <hr />
                </MDBCardBody>
              </MDBCard>
              <MDBBtn className='w-100 mb-4' color='dark' type='submit' onClick={handleorder} >confirm order</MDBBtn>
            </MDBCol>
          </form>

        </MDBRow>

      </MDBContainer>
    </section>
  );
}