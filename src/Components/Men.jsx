import React, { useContext, useEffect } from 'react';
import axios from "axios";
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

function Men() {

  const { item, setItem } = useContext(MyContext);

  useEffect(() => {
    axios.get("http://localhost:5094/api/Product/Category?id=1 ")
      .then((res) => {
        setItem(res.data)
      })

  })
  return (
    <MDBContainer fluid className="my-5 text-center">
      <h4 className="mt-4 mb-5">
        <strong>Bestsellers</strong>
      </h4>

      <MDBRow>
        {
          item.length!=null && item?.map((items) => (
            <MDBCol md="5" lg="2" className="mb-4" key={items.productId} >
              <Link to={`/Men/${items.productId}`}>
                <MDBCard>
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom"
                  >

                    <MDBCardImage
                      src={items.productImage}
                      fluid
                      className="w-100"
                    />
                    <a href="#!">
                      <div className="mask">
                        <div class="d-flex justify-content-start align-items-end h-100">

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
                      <p className="fw-bold mb-1">{items.productName}</p>
                    </a>
                    <h6 className="mb-3">
                      <p>{items.category}</p>
                      <s>$61.99</s>
                      <strong className="ms-2 text-danger">${items.unitPrice}</strong>
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

export default Men;