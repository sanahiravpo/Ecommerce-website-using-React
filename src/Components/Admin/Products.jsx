import React, { useContext, useState } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody ,MDBIcon} from 'mdb-react-ui-kit';
import { MyContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function Products() {

  const{item,setItem}=useContext(MyContext)
  const navigate=useNavigate();
const handleDelete=(id)=>{
  const deleted = item.filter((x)=>x.id!==id);
 setItem(deleted);
  const deleteditem=item.find(x=>x.id==id);

if(deleteditem &&deleteditem.category=="male"){
  navigate("/MensAdmin");
}
else{
  navigate("/WomenAdmin");
}
}
const handleproductupdate=(id)=>{
 navigate(`/Products/${id}`)
}

const addproduct=(id)=>{
 navigate("/Addproduct")
}
  return (
   
   <MDBTable align='middle'>
      <MDBTableHead >
      <MDBBtn className='m-3 'style={{ backgroundColor: 'black' }} href='#' onClick={addproduct}>
       Add product <MDBIcon fab icon='plus' />
      </MDBBtn>
       <tr>
        <th  className='fw-bold mb-1'scope='col'>PRODUCT IMAGE</th>
          <th className='fw-bold mb-1' scope='col'>PRODUCT NAME</th>
          <th  className='fw-bold mb-1'scope='col'>PRODUCT PRICE</th>
          <th  className='fw-bold mb-1'scope='col'>CATEGORY</th>
          <th  className='fw-bold mb-1'scope='col'>MODEL</th>
          <th  className='fw-bold mb-1'scope='col'>DELETE</th>
          <th  className='fw-bold mb-1'scope='col'>UPDATE</th>
        </tr>
      </MDBTableHead>
     
 <MDBTableBody >
 <>
 {item.map((x)=>(
 <tr>
   <td>
     <div className='d-flex align-items-center' key={x.id}>
       <img
         src={x.img}
       
         style={{ width: '70px', height: '70px' }}
       
       />
       
       
     </div>
   </td>
   <td>
   <div className='ms-3'>
         <p >{x.title}</p>
        
       </div>
   </td>
   <td>
   <p className='fw-normal mb-1'>{x.price}</p>
   </td>
   <td>
     <p className='fw-normal mb-1'>{x.category}</p>
    
   </td>
   <td>
   
     <p className='fw-normal mb-1'>{x.model}</p>
   </td>
   <td>
  
     <MDBBtn color='link' rounded size='sm' onClick={()=>handleDelete(x.id)}>
     DELETE
     </MDBBtn>
   </td>
   <td>

  <MDBBtn color='link' rounded size='sm'  onClick={()=>handleproductupdate(x.id)}>
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