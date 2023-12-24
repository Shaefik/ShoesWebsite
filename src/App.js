
import React,{useState} from 'react';
import './App.css'
// import Navbar from '../../my-app/src/Components/Navbar';
// import Banner from '../../my-app/src/Components/Banner';
// import Category from '../../my-app/src/Components/Category';
// import Trending from '../../my-app/src/Components/Trending';

// import Offers from '../../my-app/src/Components/Offers';
// import Footer from '../../my-app/src/Components/Footer';

// import Signup from '../../my-app/src/Components/Signup';
// import Login from '../../my-app/src/Components/Login';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Banner from './Components/Banner';
import Category from './Components/Category';
import MyContext from './Components/MyContext'
import Login from './Components/Login';
import {Routes,Route} from 'react-router-dom'
import Men from './Section/Men'
import Women from './Section/Women'
import Adidas from './Section/Adidas'
import Crocs from './Section/Crocs'
import Fila from './Section/Fila'
import NewBalance from './Section/Newbalance'
import Nike from './Section/Nike'
import Puma from './Section/Puma'
import Skechers from './Section/Skechers'
import Signup from './Components/Signup'
import Cart from './Components/Cart';
import Admin from './Components/Admin'
import ProductDetail from './Components/ProductDetail'
import AdminEdit from './Components/AdminEdit';
import AdminAdd from './Components/AdminAdd'
import AdminDel from './Components/AdminDel'


function App() {
  const [clientData, setClientData] = useState([
    {
      email: 'abc@gmail.com',
      password: '1234'
    },
    {
      email: 'qwe@gmail.com',
      password: 'qwerty'
    }
  ]);
  const[cartItems,setCartItems]= useState([])
  const [loggedIn,setLoggedIn] = useState(false)
  const [loggedInMsg,setLoggedInMsg] = useState('')
  const [login,setLogin]= useState(true)
  const [productDetail,setProductDetail] = useState([])
  const [loginData,setLoginData] = useState({
    email:'',
    password:''
  })
  
  return (
    <div className="app-container">
     
      <div className="content-container">
       
       <MyContext.Provider value={{
        clientData,
        setClientData,
        cartItems,
        setCartItems,
        loggedIn,
        setLoggedIn,
        loggedInMsg,
        setLoggedInMsg,login,setLogin,
        productDetail,setProductDetail,
        loginData,setLoginData
        } }>
       <Routes>
        <Route path='/navbar' Component={Navbar} />
          <Route path='/home' Component={Home} />
          <Route path='/banner' Component={Banner} />
          <Route path='/category' Component={Category} />
          <Route  path='/men' Component={Men} />
          <Route path='/women' Component={Women} />
          <Route path='/adidas' Component={Adidas}/>
          <Route  path='/crocs' Component={Crocs}/>
          <Route path='/fila'  Component={Fila}/>
          <Route path='/newbalance' Component={NewBalance} />
          <Route  path='/nike' Component={Nike} />
          <Route path='/puma' Component={Puma} />
          <Route path='/skechers' Component={Skechers} />
          <Route path='/' Component={Login} />
          <Route path='/signup' Component={Signup} />
          <Route path='/cart' Component={Cart} />
          <Route path='/admin' Component={Admin} />
          <Route path='/productdetail' Component={ProductDetail} />
          <Route path='/addproduct' Component={AdminAdd} />
          <Route path='/admin/delproduct' Component={AdminDel} />
          <Route path='/admin/editproduct' Component={AdminEdit} />


          
        </Routes>


       </MyContext.Provider>
       
        
      
     </div>
     
      

    </div>
  );
}

export default App;
