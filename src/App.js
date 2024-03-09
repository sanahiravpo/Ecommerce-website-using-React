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
import axios from "axios"
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode"
import Payment from './Components/Payment';
import SingleOrder from './Components/Admin/SingleOrder';
import WishList from './Components/WishList';

export const MyContext = createContext();
function App() {
   const navigate = useNavigate();

   const [item, setItem] = useState([]);//items
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
   const handleCart = async (productId) => {
    
      try {
         const tk = Cookies.get("token");
         let response = await axios.post(`http://localhost:5094/api/Cart/addproduct?productid=${productId}`, null, {
            headers: {
               'Content-Type': 'application/json',
               'Authorization': `Bearer ${tk}`
            }
         }
         )
          
         alert(response.data);
         navigate("/Cart")
      }

      catch (error) {
         console.error("Error adding items to cart:", error);
         window.alert("Failed to add items to the cart. Please try again.");
      }
   }

   //cart on navbar

   const handleclickcart = () => {
      
const tk=Cookies.get("token");
if(tk){
   navigate("/Cart");

}
else{
   navigate("/Login");
}




   }



   //signup


   const signUpClick = async () => {
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

      // setUserRegistration([...userRegistration, { usernameexamp: username, emailexamp: email, passwordexamp: password, mobNumexamp: mobNum,cart:cartItem }]);
      const newuser = { username: username, email: email, passwordHash: password, phone: mobNum, cart: cartItem }
      try {
         let response = await axios.post("http://localhost:5094/api/User/register", newuser)

         let result = response.data

         if (result) {
           
            navigate("/Login")
         }
         else {
            window.alert("failed");
         }
      }
      catch (error) {
         console.error("fghfghj", error);
      }

   }
   //sign in
   const [token, setToken] = useState(null);
   const [role, setrole] = useState(null);
   const SignInClick = async () => {
   
      try {
         let response = await axios.post("http://localhost:5094/api/User/login ", { email, password });


         let result = await response.data

         const decToken = jwtDecode(result.token)
         Cookies.set('role', decToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"], { expires: 7, secure: true })
         Cookies.set('token', result.token, { expires: 7, secure: true })
         Cookies.set('email', result.email, { expires: 7, secure: true })
         Cookies.set('password', result.password, { expires: 7, secure: true })

         if (Cookies.get('role') == 'user') {
            window.alert("success")
            navigate("/");

         }
              else if(Cookies.get('role')=='admin'){
               navigate("/Products")
               setIfLogin(false);
         }



      }
      catch (error) {
         window.alert("Failed to sign in. Please try again.please register");

      }

    
   }
   //total price
   const totalAmount = cartItem.reduce((x, item) => x + item.totalprice, 0);
   console.log(totalAmount)
   //totalquantity
   const totalQuantity = cartItem?.reduce((x, item) => x + item.quantity, 0);

   //checkout
   const handlecheckout = () => {
      // const finduser = userRegistration.find(x => x.emailexamp === email && x.passwordexamp == password);
      // if (totalQuantity > 0 && finduser) {
      //    setOrder(cartItem);
         navigate("/Account");
      


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
   const [search, setSearch] = useState("");
   const [result, setResult] = useState([])
   const handlesearch =async  () => {
      try{
         const response=await axios.get(`http://localhost:5094/api/Product/search-products?search=${search}`);

         setResult(response.data);
              navigate("/Search");
      }
      catch(ex){
         console.log("no utems found",ex)
      }
      // const searcheditem = item.filter(x => x.model.toLowerCase().includes(search.toLowerCase()))

   }
   const handleLogout = () => {

      Cookies.remove('token');
      Cookies.remove('email');
      Cookies.remove('password');
      setToken(null);
      setrole(null);
      navigate("/");

      };

   return (
      <>
         <MyContext.Provider value={{handleLogout,search,totalAmount, setSearch, handlesearch, result, userLogged, setCartItem, setuserLogged, item, order, cartItem, setItem, iflogin, userRegistration, adminregister, setUserRegistration, setOrder, handlepaymentnav, totalQuantity, handlecheckout, SignInClick, signUpClick, item, userRegistration, handleSubmit, handleCart, cartItem, setCartItem, username, setUsername, mobNum, setmobNum, password, setPassword, email, setEmail, handleclickcart, setIfLogin }}>
            <Navbar />
            <Routes>
               <Route path="/" element={<Home/>} />
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
               {/* <Route path="/MensAdmin" element={<MensAdmin />} />
               <Route path="/WomensAdmin" element={<WomensAdmin />} /> */}
               <Route path="/Payment" element={<Payment />} />
               <Route path="/Products" element={<Products />} />
               <Route path="/WishList" element={<WishList />} />
               <Route path="/Products/:id" element={<UpdateProduct />} />
               <Route path="/Addproduct" element={<Addproduct />} />
               <Route path="/User" element={<User />} />
               <Route path="/User/Orders/:userId" element={<SingleUser />} />
               <Route path="/User/:userId" element={<SingleOrder />} />
            </Routes>
            <Footer />
         </MyContext.Provider>
      </>

   )
}
export default App