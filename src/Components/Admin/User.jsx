import React, { useContext } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { MyContext } from '../../App';
import { useNavigate } from 'react-router-dom';

export default function Products() {

  const{userRegistration}=useContext(MyContext)
  const navigate=useNavigate();

const handleviewproduct=(id)=>{
    navigate(`/User/${id}`);
}
  return (
   
    <MDBTable align='middle'>
      
      <MDBTableHead>
        <tr>
        <th  className='fw-bold mb-1'scope='col'>UserName</th>
          <th className='fw-bold mb-1' scope='col'>UserEmail</th>
          <th  className='fw-bold mb-1'scope='col'>UserNumber</th>
        
        </tr>
      </MDBTableHead>
     
 <MDBTableBody >
 <>{userRegistration.map((x)=>(
 <tr>
  
   <td>
   <div className='ms-3'>

         <p className='fw-bold mb-1'>{x.usernameexamp}</p>
        
       </div>
   </td>
   <td>
   <p className='text-muted mb-0'>{x.emailexamp}</p>
   </td>
   <td>
     <p className='fw-normal mb-1'>{x.numberexamp}</p>
    
   </td>
   <td>

     <MDBBtn color='link' rounded size='sm' onClick={()=>handleviewproduct(x.id)}>
 view product
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