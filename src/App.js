 
import React,{useState} from 'react';
import './App.css'
import { productData } from './Assets/productData';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Banner from './Components/Banner';
import Category from './Components/Category';
import MyContext from './Components/MyContext'
import Login from './Components/Login';
import {Routes,Route} from 'react-router-dom'
import All from './Section/All'
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
import BuyProduct from './Components/BuyProduct';
import AdminUser from './Components/AdminUser';
import SearchedProduct from './Components/SearchedProduct';
import AdminLogin from './Components/AdminLogin';
import Liked from './Components/Liked';

function App() {
  const [clientData, setClientData] = useState([
    { 
      id:1,
      user:'abc',
      email: 'abc@gmail.com',
      password: '1234'
    },
    { 
      id:2,
      user:'qwe',
      email: 'qwe@gmail.com',
      password: 'qwerty'
    },
    {
      id:3,
      user:'sample',
      email:'1',
      password:'1'
    }
  ]);
  const [adminData,setAdminData]=useState([
    {  email: 'admin@gmail.com',
       password:'1234'    
  }
  ])
  const[cartItems,setCartItems]= useState([])
  const [loggedIn,setLoggedIn] = useState(false)
  const [loggedInMsg,setLoggedInMsg] = useState('')
  const [login,setLogin]= useState(true)
  const [productDetail,setProductDetail] = useState([])
  const [loginData,setLoginData] = useState({
    email:'',
    password:''
  })
  const [productDataState, setProductDataState] = useState(productData);
  const [product, setProduct] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [size, setSize] = useState(5);
  const [oldPrice, setOldPrice] = useState(2999);
  const [newPrice, setNewPrice] = useState(1999);
  const [selectBrand, setSelectBrand] = useState('');
  const [selectGender, setSelectGender] = useState(''); 
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [currentLogin, setCurrentLogin] = useState({});
  const [userNow,setUserNow] = useState(null)
  const [filtered, setFiltered] = useState(productData);
  const[storeEmail,setStoreEmail]= useState('')
  const [liked,setLiked] = useState([])
  const [editedProductDataState,setEditedProductDataState]= useState([])
  const [edited,setEdited] = useState(false)
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
        loginData,setLoginData,
        productDataState,setProductDataState,
        product,setProduct,imgUrl,setImgUrl,size,setSize,oldPrice,setOldPrice,newPrice,setNewPrice,selectBrand,setSelectBrand,selectGender,setSelectGender,
        showUserDetails,setShowUserDetails,
        userEmail,setUserEmail,
        currentLogin, setCurrentLogin,
        userNow,setUserNow,
        filtered,setFiltered,
        storeEmail,setStoreEmail,
        adminData,setAdminData,
        liked,setLiked,
        editedProductDataState,setEditedProductDataState,
        edited,setEdited
        
        
        } }>
      <Routes>
          <Route  path='/all' Component={All} />
          <Route path='/navbar' Component={Navbar} />
          <Route path='/home' Component={Home} />
          <Route path='/banner' Component={Banner} />
          <Route path='/category' Component={Category} />
          <Route path='/men' Component={Men} />
          <Route path='/women' Component={Women} />
          <Route path='/adidas' Component={Adidas}/>
          <Route path='/crocs' Component={Crocs}/>
          <Route path='/fila'  Component={Fila}/>
          <Route path='/newbalance' Component={NewBalance} />
          <Route path='/nike' Component={Nike} />
          <Route path='/puma' Component={Puma} />
          <Route path='/skechers' Component={Skechers} />
          <Route path='/' Component={Login} />
          <Route path='/signup' Component={Signup} />
          <Route path='/cart' Component={Cart} />
          <Route path='/admin' Component={Admin} />
          <Route path='/productdetail' Component={ProductDetail} />
          <Route path='/addproduct' Component={AdminAdd} />
          <Route path='/editproduct' Component={AdminEdit} />
          <Route path='/buyproduct' Component={BuyProduct}  />
          <Route path='/adminuser' Component={AdminUser} />   
          <Route path='/searchedproduct' Component={SearchedProduct} />   
          <Route path='/adminlogin' Component={AdminLogin} />     
          <Route path='/liked' Component={Liked} /> 
        </Routes>
      </MyContext.Provider>  
    </div>
    </div>
  );
}

export default App;
