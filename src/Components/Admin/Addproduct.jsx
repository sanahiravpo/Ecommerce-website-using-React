import React, { useContext, useState } from 'react';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBContainer
} from 'mdb-react-ui-kit';
import { useNavigate, useParams } from 'react-router-dom';
import { MyContext } from '../../App';

export default function Addproduct() {
    const{category}=useParams();
    const navigate=useNavigate();
    const{item,handleSubmit,setItem}=useContext(MyContext)
const[productname,setproductename]=useState("");
const[productimage,setproductimage]=useState(null);
const[productprice,setproductprice]=useState("");
const[productmodel,setproductmodel]=useState("");
const[productcategory,setproductcategory]=useState("");
const Addnewproduct=()=>{
const addedproduct=[...item,{
    id:item.length+1,
    title:productname,
    img:productimage,
    price:productprice,
    category:productcategory,
    model:productmodel
}];
setItem(addedproduct);
 navigate("/Products");
}

  
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50  text-center">
    <form onSubmit={handleSubmit}>
      <MDBInput id='form4Example1' wrapperClass='mb-4' label='productname' onChange={(e)=>setproductename(e.target.value)} />
      <MDBInput type='number' id='form4Example2' wrapperClass='mb-4' label='productprice' onChange={(e)=>setproductprice(e.target.value)} />
      <MDBInput  id='form4Example2' wrapperClass='mb-4' label='productcategory' onChange={(e)=>setproductcategory(e.target.value)} />
      <MDBInput  id='form4Example2' wrapperClass='mb-4' label='productmodel' onChange={(e)=>setproductmodel(e.target.value)} />
      <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='upload image' onChange={(e)=>setproductimage(e.target.value)} />


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
