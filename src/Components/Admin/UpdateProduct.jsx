import React, { useContext, useState } from 'react';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn,MDBContainer
} from 'mdb-react-ui-kit';
import { useNavigate, useParams } from 'react-router-dom';
import { MyContext } from '../../App';

export default function UpdateProduct() {
    const{id}=useParams();
    const navigate=useNavigate();
    const{item,handleSubmit,setItem}=useContext(MyContext)
const[updatename,setUpdatename]=useState("");
const[updateimage,setUpdateimage]=useState(null);
const[updateprice,setUpdateprice]=useState("");

const handlesubmit=()=>{
    const product = item.find((items) => items.id === parseInt(id));
  if(product){
    const updatedproduct={
        ...product,
        title:updatename||product.title,
    img:updateimage||product.img,
        price:updateprice||product.price


    }
    const index = item.findIndex((item) => item.id === parseInt(id));
    const updatedItem = [...item];
    updatedItem[index] = updatedproduct;
    setItem(updatedItem);
    navigate("/Products");

  }

} 
    const cancelProduct=()=>{
        setUpdatename("");
        setUpdateimage("");
        setUpdateprice("");
    }
   
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50  text-center">
    <form onSubmit={handleSubmit}>
      <MDBInput id='form4Example1' wrapperClass='mb-4' label='productname' onChange={(e)=>setUpdatename(e.target.value)} />
      <MDBInput type='number' id='form4Example2' wrapperClass='mb-4' label='productprice' onChange={(e)=>setUpdateprice(e.target.value)} />
   
      <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='upload image' onChange={(e)=>setUpdateimage(e.target.value)} />


      <MDBBtn outline rounded className='mx-2' color='dark' onClick={cancelProduct}>
       cancel
      </MDBBtn>
      <MDBBtn outline rounded className='mx-2' color='dark' onClick={handlesubmit}>
       submit
      </MDBBtn>
      
    </form>
     </MDBContainer>
  );
}
