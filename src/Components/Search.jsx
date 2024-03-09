import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBRipple } from 'mdb-react-ui-kit';
import { MyContext } from '../App';

function Search() {
  const { result,search} = useContext(MyContext);
 
      // const searcheditem = item.filter(x => x.model.toLowerCase().includes(search.toLowerCase()))

   
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
                <Link to={`/Men/${item.productId}`}>
                  <MDBCard>
                    <MDBRipple
                      rippleColor="light"
                      rippleTag="div"
                      className="bg-image rounded hover-zoom"
                    >
                      <MDBCardImage src={item.productImage} fluid className="w-100" />
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
                      <p>{item.productName}</p>
                      <h6 className="mb-3">
                        <s>$61.99</s>
                        <strong className="ms-2 text-danger">
                          ${item.unitPrice}
                        </strong>
                      </h6>
                    
                      <p>{item.category}</p>
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
