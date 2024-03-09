import React, { useContext, useEffect, useState } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { MyContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
export default function Products() {

  const{userRegistration,setUserRegistration}=useContext(MyContext)
  const[users,setUsers]=useState([])
  
  const navigate=useNavigate();
const fetchuserdetails=async()=>{
try{
  const tk=Cookies.get("token")
  let response=await axios.get(`http://localhost:5094/api/User/all-user `,{
    headers:{
      "Authorization" : `Bearer ${tk}`
    }
  });
 console.log(response.data)
  setUsers(response.data)
}
 catch(er){
  console.log(er)
 }
 
 
}
useEffect(()=>{
  fetchuserdetails()
},[])
const handleviewproduct=(id)=>{

  navigate(`/User/Orders/${id}`);
    
}
const handleviewuser=(id)=>{

  navigate(`/User/${id}`);
  
}
  return (
   
    <MDBTable align='middle'>
      
      <MDBTableHead>
        <tr>
        <th  className='fw-bold mb-1'scope='col'>UserName</th>
          <th className='fw-bold mb-1' scope='col'>UserEmail</th>
         
        
        </tr>
      </MDBTableHead>
     
 <MDBTableBody >
 <>
 {users.map((x)=>(
 <tr>
  
   <td>
   <div className='ms-3' key={x.id}>

         <p className='fw-bold mb-1'>{x.username}</p>
        
       </div>
   </td>
   <td>
   <p className='text-muted mb-0'>{x.email}</p>
   </td>
  
   <td>

     <MDBBtn color='link' rounded size='sm' onClick={()=>handleviewuser(x.id)}>
 view User
     </MDBBtn>
   </td>
   <td>

<MDBBtn color='link' rounded size='sm' onClick={()=>handleviewproduct(x.id)}>
view Order
</MDBBtn>
</td>
   <td>
  
     <MDBBtn color='link' rounded size='sm'>
     DELETE
     </MDBBtn>
   </td>
  
 </tr>
  ))}
  </>
</MDBTableBody>
  
    
    </MDBTable>
   
   
  );
 
}