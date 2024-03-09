import React, { useContext, useState } from 'react';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBContainer,MDBCol
} from 'mdb-react-ui-kit';
import { useNavigate, useParams } from 'react-router-dom';
import { MyContext } from '../../App';
import Cookies from 'js-cookie';
import axios from 'axios';

export default function Addproduct() {
    const{category}=useParams();
    const navigate=useNavigate();
    const{item,handleSubmit,setItem}=useContext(MyContext)
const[productname,setproductename]=useState("");
const[productimage,setUpdateimage]=useState(null);
const[productprice,setproductprice]=useState("");
const[productdescription,setproductdescription]=useState("");
const[productcategory,setproductcategory]=useState("");
const[addproduct,setUpdatedProduct]=useState({})
const Addnewproduct=async()=>{
// const addedproduct=[...item,{
//     id:item.length+1,
//     title:productname,
//     img:productimage,
//     price:productprice,
//     category:productcategory,
//     model:productmodel
// }];
// setItem(addedproduct);
//  navigate("/Products");
try{
  const tk=Cookies.get("token")
  const formData = new FormData();
  formData.append("productName", productname);
  formData.append("UnitPrice", productprice);
  formData.append("categid", productcategory);
  formData.append("productDescription", productdescription);
  formData.append("image", productimage);

  let response=await axios.post("http://localhost:5094/api/Product",formData,{
    headers: {

      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${tk}`
    }
  });
  console.log(response.data)
  setUpdatedProduct(response.data);
  navigate("/Products");
}
catch(er){ 
  console.log("error in adding the product",er)
}

}

  
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50  text-center">
    <form onSubmit={handleSubmit}>
      <MDBInput id='form4Example1' wrapperClass='mb-4' label='productname' value={addproduct.productName} onChange={(e)=>setproductename(e.target.value)} />
      <MDBInput type='number' id='form4Example2' wrapperClass='mb-4'  value={addproduct.UnitPrice}label='productprice' onChange={(e)=>setproductprice(e.target.value)} />
      <MDBInput  type='number' id='form4Example2' wrapperClass='mb-4' label='productcategory' value={addproduct.categid} onChange={(e)=>setproductcategory(e.target.value)} />
      <MDBInput  id='form4Example2' wrapperClass='mb-4' label='productDescription' value={addproduct.productDescription} onChange={(e)=>setproductdescription(e.target.value)} />
    
      <MDBCol sm="9">
          <MDBInput type='file' id='form4Example3' wrapperClass='mb-4'  onChange={(e) => setUpdateimage(e.target.files[0])} />
        </MDBCol>

      <MDBBtn outline rounded className='mx-2' color='dark'>
       cancel
      </MDBBtn>
      <MDBBtn outline rounded className='mx-2' color='dark' onClick={Addnewproduct}>
      ADD PRODUCT
      </MDBBtn>
      
    </form>
    </MDBContainer>
  );
}
