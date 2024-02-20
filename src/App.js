import React, { createContext, useState } from 'react'
import Navbar from "./Components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home";
import { Routes, Route, Form } from "react-router-dom";
import Men from "./Components/Men";
import 'bootstrap/dist/css/bootstrap.min.css';
import Women from './Components/Women';
import SignUp from './Components/SignUp';
import Cart from './Components/Cart';
import NewCollection from './Components/NewCollection';
import Data from "./Components/Data";
import Login from './Components/Login';
import User from "./Components/Admin/User"
import Products from "./Components/Admin/Products"
import MensAdmin from "./Components/Admin/MensAdmin"
import Addproduct from "./Components/Admin/Addproduct"
import "./App.css"
import Account from './Components/Account';
import SingleitemMen from './Components/SingleitemMen';
import { useNavigate } from 'react-router-dom';
import WomensAdmin from './Components/Admin/WomensAdmin';
import UpdateProduct from './Components/Admin/UpdateProduct';
import SingleUser from "./Components/Admin/SingleUser";
import About from "./Components/About";
import Search from "./Components/Search";
import Footer from "./Components/Footer"
export const MyContext = createContext();
function App() {
   const navigate = useNavigate();
   
   const [item, setItem] = useState(Data);//items
   const [username, setUsername] = useState("");//changedata
   const [mobNum, setmobNum] = useState("");
   const [password, setPassword] = useState("")
   const [email, setEmail] = useState("");
   const [userLogged, setuserLogged] = useState(null)  //user after register for cart
   const [cartItem, setCartItem] = useState([])     //cart
   const [iflogin, setIfLogin] = useState(true)//user loged
   const [order, setOrder] = useState([{}])   //order
   //signup
   const [userRegistration, setUserRegistration] = useState([
      {
         id: 1,
         usernameexamp: "user",
         numberexamp: "123",
         passwordexamp: "user@123",
         emailexamp: "user@gmail.com",
         privillage: "user",
         cart: []

      }]);

 //form submission
      const handleSubmit = (e) => {
         e.preventDefault();
      }

  
   const [adminregister, setAdminRegister] = useState([{
      name: "admin",
      number: "1234567",
      password: "admin@123",
      email: "admin@gmail.com",
      privillage: "admin"
   }])

   //add to cart
   const handleCart = (items) => {
      if (userLogged) {
        const isItemExist = cartItem.find(c => c.id === items.id);
        if (isItemExist) {
         const updatedCart = cartItem.map(c => c.id === items.id ? { ...c, Quantity: c.Quantity + 1, total: (c.Quantity + 1) * Number(c.price) } : c);
          setCartItem(updatedCart);
        } else {
         const newItem = { ...items, Quantity: 1, total: Number(items.price) };
         setCartItem([...cartItem, newItem]);
        }
        navigate("/Cart");
    
     
        setUserRegistration(prevUsers => prevUsers.map(user => {
          if (user.id === userLogged.id) {
            return { ...user, cart: cartItem };
          }
          return user;
        }));
      } else {
        navigate("/Login");
      }
    };
    
    
   
//cart on navbar

   const handleclickcart = () => {
      const finduser = userRegistration.find(x => x.emailexamp === email && x.passwordexamp === password);
      if (finduser) {
         navigate("/Cart");
      }
      else {
         navigate("/Login");
      }
   }
  
 

//signup

   const signUpClick = () => {
      if (!username || !email || !password || !mobNum) {
         alert("Please fill in all fields.");
         return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
         alert("Please enter a valid email address.");
         return;
      }

      if (password.length < 6) {
         alert("Password must be at least 6 characters long.");
         return;
      }

      setUserRegistration([...userRegistration, { usernameexamp: username, emailexamp: email, passwordexamp: password, mobNumexamp: mobNum,cart:cartItem }]);
     

      navigate("/Login")
   }
   //sign in
   const SignInClick = () => {
      const finduser = userRegistration.find(x => x.emailexamp === email && x.passwordexamp === password);
      const findadmin = adminregister.find(x => x.email === email && x.password === password);
      if (finduser) {
        setIfLogin(true);
        setuserLogged(finduser);
       
        if (finduser.cart) {
          setCartItem(finduser.cart);
        }

         navigate("/NewCollection");
      }
      else if (findadmin) {
         setIfLogin(false)
         navigate("/Products");
      }
      else {
         navigate("/SignUp")
      }
   }
   //total price
   const totalprice = cartItem?.reduce((x, item) => x + item.total, 0);
   //totalquantity
   const totalQuantity = cartItem?.reduce((x, item) => x + item.Quantity, 0);
   
   //checkout
   const handlecheckout = () => {
      const finduser = userRegistration.find(x => x.emailexamp === email && x.passwordexamp == password);
      if (totalQuantity > 0 && finduser) {
         setOrder(cartItem);
         navigate("/Account");
      }


   }
   //payment on navbar
   const handlepaymentnav = () => {
      const finduser = userRegistration.find(x => x.emailexamp === email && x.passwordexamp == password);
      if (finduser) {
         navigate("/Account");
      }
      else {
         navigate("/Login")
      }
   }
   const[search,setSearch]=useState("");
   const [result, setResult] = useState([])
   const handlesearch=()=>{
   const searcheditem=item.filter(x=>x.model.toLowerCase().includes(search.toLowerCase()))
   setResult(searcheditem);
   navigate("/Search");
   }


   return (
      <>
         <MyContext.Provider value={{setSearch,handlesearch,result,userLogged,setCartItem,setuserLogged, item, order, cartItem, setItem, iflogin, userRegistration, adminregister, setUserRegistration, setOrder, handlepaymentnav, totalprice, totalQuantity, handlecheckout, SignInClick, signUpClick, item, userRegistration, handleSubmit, handleCart, cartItem, setCartItem, username, setUsername, mobNum, setmobNum, password, setPassword, email, setEmail, handleclickcart, setIfLogin }}>
            <Navbar />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/NewCollection" element={<NewCollection />} />

               <Route path="/Men" element={<Men />} />
               <Route path="/Men/:id" element={<SingleitemMen />} />

               <Route path="/Women" element={<Women />} />
               <Route path="/Women/:id" element={<SingleitemMen />} />
               <Route path="/Cart" element={<Cart />} />
               <Route path="/Account" element={<Account />} />
               <Route path="/Search" element={<Search />} />
               <Route path="/Login" element={<Login />} />
               <Route path="/SignUp" element={<SignUp />} />
               <Route path="/About" element={<About />} />
               <Route path="/MensAdmin" element={<MensAdmin />} />
               <Route path="/WomensAdmin" element={<WomensAdmin />} />
               <Route path="/Products" element={<Products />} />
               <Route path="/Products/:id" element={<UpdateProduct />} />
               <Route path="/Addproduct" element={<Addproduct />} />
               <Route path="/User" element={<User />} />
               <Route path="/User/:userId" element={<SingleUser />} />
            </Routes>
            <Footer />
         </MyContext.Provider>
      </>

   )
}
export default App