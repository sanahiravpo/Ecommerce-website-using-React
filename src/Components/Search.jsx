import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBRipple } from 'mdb-react-ui-kit';
import { MyContext } from '../App';

function Search() {
  const { result} = useContext(MyContext);

  return (
    <MDBContainer fluid className="my-5 text-center">
      <h4 className="mt-4 mb-5">
        <strong>Bestsellers</strong>
      </h4>

      <MDBRow>
        {
          result ? (
            result.map(item => (
              <MDBCol md="5" lg="2" className="mb-4" key={item.id}>
                <Link to={`${item.id}`}>
                  <MDBCard>
                    <MDBRipple
                      rippleColor="light"
                      rippleTag="div"
                      className="bg-image rounded hover-zoom"
                    >
                      <MDBCardImage src={item.img} fluid className="w-100" />
                      <div className="mask">
                        <div className="d-flex justify-content-start align-items-end h-100">
                        
                        </div>
                      </div>
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: 'rgba(251, 251, 251, 0.15)',
                          }}
                        ></div>
                      </div>
                    </MDBRipple>
                    <MDBCardBody>
                      <p>{item.title}</p>
                      <h6 className="mb-3">
                        <s>$61.99</s>
                        <strong className="ms-2 text-danger">
                          ${item.price}
                        </strong>
                      </h6>
                    </MDBCardBody>
                  </MDBCard>
                </Link>
              </MDBCol>
            ))
          ) : (
            <p>Oh, your item was not found.</p>
          )
        }
      </MDBRow>
    </MDBContainer>
  );
}

export default Search;
