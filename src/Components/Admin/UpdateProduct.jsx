import React, { useContext, useEffect, useState } from 'react';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn, MDBContainer, MDBCol, MDBCardImage
} from 'mdb-react-ui-kit';
import { useNavigate, useParams } from 'react-router-dom';
import { MyContext } from '../../App';
import axios from 'axios';
import Cookies from 'js-cookie';
import Products from './Products';

export default function UpdateProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { item, handleSubmit, setItem } = useContext(MyContext)
  const [updatename, setUpdatename] = useState("");
  const [updateimage, setUpdateimage] = useState(null);
  const [updateprice, setUpdateprice] = useState("");
  const [categid, setcategid] = useState("");
  const [Productdescription, setproductdescription] = useState("");
  const [updateditem, setUpdatedItem] = useState({})

  const fetchproductdata = async () => {
    const response = await axios.get(`http://localhost:5094/api/Product/${id} `);
    console.log(response.data)
    setUpdatedItem(response.data)
  }
  useEffect(() => {
    fetchproductdata()
  }, []);

  const handlesubmit = async () => {
    //   const product = item.find((items) => items.id === parseInt(id));
    // if(product){
    //   const updatedproduct={
    //       ...product,
    //       title:updatename||product.title,
    //   img:updateimage||product.img,
    //       price:updateprice||product.price


    //   }
    //   const index = item.findIndex((item) => item.id === parseInt(id));
    //   const updatedItem = [...item];
    //   updatedItem[index] = updatedproduct;
    //   setItem(updatedItem);
    try {


      const formData = new FormData();
      formData.append('productName', updatename);
      formData.append('unitPrice', Number(updateprice));
      formData.append('productDescription', Productdescription);
      formData.append('categid', categid);
      formData.append('image', updateimage);

      const tk = Cookies.get("token")
      const response = await axios.put(`http://localhost:5094/api/Product?id=${id}`, formData, {
        headers: {

          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${tk}`
        }
      })

      const result = await response.data;
      setUpdatedItem(result.data)
      console.log("product successfully updated", response.data)

      navigate("/Products");
    }

    catch (er) {
      console.log("error in updating the product", er)
    }


  }
  const cancelProduct = () => {
    setUpdatename("");
    setUpdateimage("");
    setUpdateprice("");
  }

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50  text-center">
      <form onSubmit={handleSubmit}>
        <MDBCol sm="9">
          <MDBInput id='form4Example1' wrapperClass='mb-4' label='productname' value={updatename||updateditem.productName} onChange={(e) => setUpdatename(e.target.value)} />
        </MDBCol>
        <MDBCol sm="9">
          <MDBInput type='number' id='form4Example2' wrapperClass='mb-4' label='productprice' value={updateprice||updateditem.unitPrice} onChange={(e) => setUpdateprice(e.target.value)} />
        </MDBCol>
        <MDBCol sm="9">
          <MDBInput type='file' id='form4Example3' wrapperClass='mb-4'  onChange={(e) => setUpdateimage(e.target.files[0])} />
        </MDBCol>
        <MDBCol sm="9">
          <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='productdescription' value={Productdescription||updateditem.productDescription} onChange={(e) => setproductdescription(e.target.value)} />
        </MDBCol>

        <MDBCol sm="9">
          <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='enter categoryid' value={categid||updateditem.categid} onChange={(e) => setcategid(Number(e.target.value))} />
        </MDBCol>
        <MDBBtn outline rounded className='mx-2' color='dark' onClick={cancelProduct}>
          cancel
        </MDBBtn>
        <MDBBtn outline rounded className='mx-2' color='dark' onClick={() => handlesubmit()}>
          submit
        </MDBBtn>

      </form>
    </MDBContainer>
  );
}
