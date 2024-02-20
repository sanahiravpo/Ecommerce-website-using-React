
import React, { useState,useEffect } from 'react';
import {Link} from "react-router-dom";
import { useContext } from 'react';
import { FaUser } from "react-icons/fa"
import "./Components.css"
import { FaShoppingCart } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import "./Components.css"
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../App';

export default function Navbar() {
  const{handleSubmit,handlesearch,userLogged,setuserLogged,item,handlepaymentnav,handleclickcart,userRegistration,adminregister,iflogin,setIfLogin,email,setCartItem,cartItem,setUserRegistration,setSearch}=useContext(MyContext);
  const navigate=useNavigate();
  const [openBasic, setOpenBasic] = useState(false);

const handleLogout = () => {
 
  const newUserRegistration = userRegistration.map(user => {
    if (user.id === userLogged.id) {
      return { ...user, cart: cartItem };
    }
    return user;
  });
  setUserRegistration(newUserRegistration);
setCartItem([])
  setuserLogged({});
  setIfLogin(false);
};
const [adminLoged, setAdminLoged] = useState(false);
// const[search,setSearch]=useState("");
// const [result, setResult] = useState([])
// const handlesearch=()=>{
// const searcheditem=item.filter(x=>x.model.toLowerCase().includes(search.toLowerCase()))
// setResult(searcheditem);
// navigate("/Search");
// }
useEffect(() => {

  if (userLogged && userLogged.cart) {
    setCartItem(userLogged.cart);
  }
}, [userLogged]);

  return (
   <>{iflogin?(
<MDBNavbar expand='lg' light bgColor='light' className="navbar-width">
      <MDBContainer fluid>
      <Link to="/"   style={{color:'black' ,fontWeight:'bold',fontsize:90}}>ShoeShack</Link>

        <MDBNavbarToggler
          type='button'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            
            <Link to="NewCollection">NewCollection</Link>
            <Link to="Men">Men</Link>
            <Link to="Women">Women</Link>
            <Link to="About">ABOUT</Link>
            <form className='d-flex input-group w-auto' onSubmit={handleSubmit} >
            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' onChange={(e)=>setSearch(e.target.value)} />
            <MDBBtn color='dark' onClick={handlesearch}><FaSearch/></MDBBtn>
           
          </form>
          <div  style={{ display: 'flex', justifyContent: 'flex-end' }}>
         
          <button   > <FaRegHeart /></button>
          <button   onClick={handleclickcart}> <FaShoppingCart /></button>
         <button   onClick={handlepaymentnav}> <FaUser  /></button> 
         </div>
           
            </MDBNavbarNav>
            {iflogin? 
    <button className='Link' onClick={handleLogout}><LuLogOut/></button> :
    <Link className='Link' to="/Login">Login</Link>  }
           
         
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
   ):(


<MDBNavbar expand='lg' light bgColor='light'  className="navbar-width">
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
             <Link to="MensAdmin">Men</Link>
            <Link to="WomensAdmin">Women</Link>
            <Link to="User">users</Link>
            <Link to="Products">products</Link>
            <Link to="Login">Login</Link>
           
  
          </MDBNavbarNav>

          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
            <MDBBtn color='dark'><FaSearch/></MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>


   )
    
   
}
    
   
   </>
   
  );
}