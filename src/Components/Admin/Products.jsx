import React, { useContext, useEffect, useState } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody, MDBIcon } from 'mdb-react-ui-kit';
import { MyContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
export default function Products() {

  const { item, setItem ,setIfLogin} = useContext(MyContext)
  const navigate = useNavigate();
  const handleDelete = async (prodId) => {
    //   const deleted = item.filter((x)=>x.id!==id);
    //  setItem(deleted);
    //   const deleteditem=item.find(x=>x.id==id);

    // if(deleteditem &&deleteditem.category=="male"){
    //   navigate("/MensAdmin");
    // }
    // else{
    //   navigate("/WomenAdmin");
    // }
    try {
      const tk = Cookies.get("token")
      await axios.delete(`http://localhost:5094/api/Product?id=${prodId}`, {
        headers: {
          'Authorization': `Bearer ${tk}`
        }
      })
      items()
      navigate("/Products");
      setIfLogin(false);
    }
    catch (er) {
      console.log("error occur in deleting the product", er)
    }

  }
  const handleproductupdate = (id) => {
    navigate(`/Products/${id}`)
  }

  const addproduct = (id) => {
    navigate("/Addproduct")
  }


  const items = async () => {
    let response = await axios.get("http://localhost:5094/api/Product ")
    setItem(response.data)
  }
  useEffect(() => {
    items()
  }, [])




  return (

    <MDBTable align='middle'>
      <MDBTableHead >
        <MDBBtn className='m-3 ' style={{ backgroundColor: 'black' }} href='#' onClick={addproduct}>
          Add product <MDBIcon fab icon='plus' />
        </MDBBtn>
        <tr>
          <th className='fw-bold mb-1' scope='col'>PRODUCT IMAGE</th>
          <th className='fw-bold mb-1' scope='col'>PRODUCT NAME</th>
          <th className='fw-bold mb-1' scope='col'>PRODUCT PRICE</th>
          <th className='fw-bold mb-1' scope='col'>CATEGORY</th>

          <th className='fw-bold mb-1' scope='col'>DELETE</th>
          <th className='fw-bold mb-1' scope='col'>UPDATE</th>
        </tr>
      </MDBTableHead>

      <MDBTableBody >
        <>
          {item && item.map((x) => (
            <tr>
              <td>
                <div className='d-flex align-items-center' key={x.prodId}>
                  <img
                    src={x.productImage}

                    style={{ width: '70px', height: '70px' }}

                  />


                </div>
              </td>
              <td>
                <div className='ms-3'>
                  <p >{x.productName}</p>

                </div>
              </td>
              <td>
                <p className='fw-normal mb-1'>{x.unitPrice}</p>
              </td>
              <td>
                <p className='fw-normal mb-1'>{x.category}</p>

              </td>

              <td>

                <MDBBtn color='link' rounded size='sm' onClick={() => handleDelete(x.productId)}>
                  DELETE
                </MDBBtn>
              </td>
              <td>

                <MDBBtn color='link' rounded size='sm' onClick={() => handleproductupdate(x.productId)}>
                  EDIT
                </MDBBtn>

              </td>
            </tr>
          ))}
        </>
      </MDBTableBody>


    </MDBTable>


  );

}