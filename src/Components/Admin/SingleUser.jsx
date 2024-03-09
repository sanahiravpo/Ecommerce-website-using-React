import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MDBContainer, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { MyContext } from '../../App';
import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
export default function Products() {
  const { userRegistration,logged } = useContext(MyContext);
  const { userId } = useParams();
const[orderuser,setOrderuser]=useState([])
 
  // const findUser = userRegistration.find(user => user.id == userId);
const viewdetailUser=async()=>{
  try{
    const tk=Cookies.get("token");
    let response=await axios.get(`http://localhost:5094/api/Order/get-user-orders-admin?userid=${parseInt(userId)} `,{
      headers: {
  
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tk}`
      }
    });
   let result= response.data
   console.log(result)
   setOrderuser(result);
  }
  catch(er){
    console.log("not found the ordered items of a user",er)
  }
  }
   const viewdetailUsers=async()=>{
    try{
      const tk=Cookies.get("token");
      let response=await axios.get(`http://localhost:5094/api/Order/get-user-info-admin?userid=${parseInt(userId)} `,{
        headers: {
    
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tk}`
        }
      });
     let result= response.data
     console.log(result)
     setOrderuser(result);
    }
    catch(er){
      console.log("not found the ordered items of a user",er)
    }
    }
useEffect(()=>{
  viewdetailUser();
  viewdetailUsers();
},[])
  return (
  
    <MDBContainer >
      <MDBTable align='middle'>
        <MDBTableHead>
          <tr>
            
            <th className='fw-bold mb-1' scope='col'>orderid</th>
            <th className='fw-bold mb-1' scope='col'>productImage</th>
            <th className='fw-bold mb-1' scope='col'>productname</th>
            <th className='fw-bold mb-1' scope='col'>productdescription</th>
            <th className='fw-bold mb-1' scope='col'>productprice</th>
            <th className='fw-bold mb-1' scope='col'>quantity</th>
            <th className='fw-bold mb-1' scope='col'>totalPrice</th>
  

          </tr>
        </MDBTableHead>
        <MDBTableBody>
        {
          orderuser.map((x)=>(

            <tr key={x.id}>
              
            
            <td>{x.orderid}</td>
            <td>
              <div className='d-flex align-items-center' key={x.prodId}>
                <img
                  src={x.productImage}

                  style={{ width: '70px', height: '70px' }}

                />


              </div>
              </td>
         
            <td>{x.productname}</td>
            <td>{x.productdescription}</td>
            <td>{x.productprice}</td>
            <td>{x.quantity}</td>
            <td>{x.totalPrice}</td>

    

          </tr>



          ))
        }
           
          
        </MDBTableBody>
      </MDBTable>
    </MDBContainer>
//  :
//  <MDBContainer >
//  <MDBTable align='middle'>
//    <MDBTableHead>
//      <tr>
//      <th className='fw-bold mb-1' scope='col'>id</th>
//        <th className='fw-bold mb-1' scope='col'>customername</th>
//        <th className='fw-bold mb-1' scope='col'>customeremail</th>
//        <th className='fw-bold mb-1' scope='col'>customerphone</th>
//        <th className='fw-bold mb-1' scope='col'>customercity</th>
//        <th className='fw-bold mb-1' scope='col'>homeaddress</th>
//        <th className='fw-bold mb-1' scope='col'>transactionId</th>
//        <th className='fw-bold mb-1' scope='col'>orderStatus</th>


//      </tr>
//    </MDBTableHead>
//    <MDBTableBody>
//    {
//      orderuser.map((x)=>(

//        <tr key={x.id}>
         
       
//        <td>{x.id}</td>
//        <td>{x.customername}</td>
//        <td>{x.customeremail}</td>
//        <td>{x.customerphone}</td>
//        <td>{x.customercity}</td>
//        <td>{x.homeaddress}</td>
//        <td>{x.transactionId}</td>
//        <td>{x.orderStatus}</td>



//      </tr>



//      ))
//    }
      
     
//    </MDBTableBody>
//  </MDBTable>
// </MDBContainer>
 );
}
