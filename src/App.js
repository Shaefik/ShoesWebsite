import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
import Navbar from './Components/Navbar'
import Factorial from './Components/Factorial'
import Counter from './Components/Counter'
import InputField from './Components/InputField'
import SearchWord from './Components/SearchWord';
import StoreItems from './Components/StoreItems'
import AddCart from './Components/AddCart';
import MyContext from './Components/MyContext';
import ChildComponent from './Components/ChildComponent';
import Questions from './Components/Questions';
import QuesContext from './Components/QuesContext'
import { stockData } from './Components/stockData';
import Todo from './Components/Todo'
import Login from './Components/Login';
import Signup from './Components/Signup';
import Page from './Components/Page';
import Register from './Components/Register';
import RegisterLogin from './Components/RegisterLogin';
import ProductPage from './Components/Products/ProductPage';
import Cart from './Components/Products/Cart'
import LikedProduct from './Components/Products/LikedProduct'
import SampleProduct from './Components/SampleLogin/SampleProduct';
// import SampleProductLogin from './Components/SampleLogin/SampleProductLogin';
import SampleCart from './Components/SampleLogin/SampleCart';
import ProductLogin from './Components/SampleLogin/ProductLogin';
import ProductSignup from './Components/SampleLogin/ProductSignup';
import PageAfterLogin from './Components/SampleLogin/PageAfterLogin';
import LikedProducts from './Components/SampleLogin/LikedProducts';
 

function App() {
 

  const [ data,setData] =useState([])
   const [currentQuestion,setCurrentQuestion] = useState(0)

   const [userEmail,setUserEmail] =useState('')
  const [error,setError] = useState('')
  const [buttonClicked,setButtonClicked]= useState(false)
  const [user,setLogUser] =useState([])
  const [logUser,setUser] = useState([])

  const [usersData,setUsersData] = useState([])
 const [products,setProducts] =useState([])
 const [clientData, setClientData] = useState([
  {
    email: 'abc@gmail.com',
    password: '1234',
  },
]);
const [cartItems, setCartItems] = useState([]);
const [liked,setLiked] = useState([])
const [currentPage, setCurrentPage] = useState(0);



   useEffect(()=>{
    setData(stockData)
  },[])


  // const userData = {
  //   name : 'php',
  //   category: 'Books',
  //   price : 30,
  //   item_description : 'php'
  // }
  const userData = [
    { 
      name: 'php',
      category: 'Books',
      price: 30,
      item_description: 'php',
    },
    {
      name: 'javascript',
      category: 'Books',
      price: 40,
      item_description: 'javascript',
    }, {
      name: 'Python',
      category: 'Books',
      price: 30,
      item_description: 'Python',
    }
    
  ];
  const userLogin =[
    {
      email : 'abc@gmail.com',
      password: '12345678'
    },
    {
      email:'abccompany@gmail.com',
      password:'12345'
    },
    {
      email:'person1@gmail.com',
      password:'person1..'
    },
    {
      email:'person2@gmail.com',
      password:'qwerty..'
    }
  ]

  
 

  return (
    
     
      <MyContext.Provider 
      value ={{ userData ,
       data,
       setData,
       currentQuestion,
       setCurrentQuestion,
       userLogin,
       userEmail,
       setUserEmail,
       error,
       setError,
       buttonClicked,
        setButtonClicked,
        user,
        setUser,
        logUser,
        setLogUser,

        usersData,
        setUsersData,
        products,setProducts,
        cartItems,setCartItems,
        liked,setLiked,
        
        clientData,setClientData,
        currentPage,setCurrentPage,
        }} >
      <Navbar/>
      <Routes>
          <Route path='/fact' Component={Factorial} />
          <Route path='/count' Component={Counter} />
          <Route path='/input' Component={InputField} />
          <Route  path='/searchword' Component={SearchWord}/>
          <Route path='/storeitems' Component={StoreItems} />
          <Route path='/addcart'  Component={AddCart}/>
          <Route path='/childcomponent' Component={ChildComponent} />
          <Route path='/questions' Component={Questions} />
          <Route path='/quescontext' Component={QuesContext} />
          <Route path='todo' Component={Todo} />
          <Route path='/login' Component={Login} />
          <Route path='/signup' Component={Signup}  />
          <Route path='/page' Component={Page }/>
          <Route path='/register' Component={Register} />
          <Route path='/registerlogin' Component={RegisterLogin} />
          <Route path='/productpage' Component={ProductPage} />
          <Route path='/cart' Component={Cart} />
          <Route path='/likedproduct' Component={LikedProduct} />
          <Route path='/productpagelogin' Component={SampleProduct} />
          {/* <Route  path='/sampleproductlogin' Component={SampleProductLogin}/> */}
          <Route path='/samplecart' Component={SampleCart} />
          <Route path='/productlogin' Component={ProductLogin} />
          <Route path='/productsignup' Component={ProductSignup}/>
          <Route path='/pageafterlogin' Component={PageAfterLogin} />
          <Route path='/likedproducts' Component={LikedProducts}/>
       
         
      </Routes>
      </MyContext.Provider>

    
       
      
  );
}

export default App;
