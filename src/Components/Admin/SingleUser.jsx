import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MDBContainer, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { MyContext } from '../../App';

export default function Products() {
  const { userRegistration } = useContext(MyContext);
  const { userId } = useParams();

 
  const findUser = userRegistration.find(user => user.id == userId);

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50 text-center">
      <MDBTable align='middle'>
        <MDBTableHead>
          <tr>
            <th className='fw-bold mb-1' scope='col'>Product Image</th>
            <th className='fw-bold mb-1' scope='col'>Product Name</th>
            <th className='fw-bold mb-1' scope='col'>Quantity</th>
            <th className='fw-bold mb-1' scope='col'>Price</th>
            <th className='fw-bold mb-1' scope='col'>Total Amount</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {findUser && findUser.order && findUser.order.map((product, index) => (
            <tr key={index}>
              <td><img src={product.img} alt="Product" style={{ width: '70px', height: '70px' }} /></td>
              <td>{product.title}</td>
              <td>{product.Quantity}</td>
              <td>{product.price}</td>
              <td>{product.total}</td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </MDBContainer>
  );
}
