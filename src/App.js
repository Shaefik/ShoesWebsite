// import {
//   BrowserRouter, Routes, Route,
// } from 'react-router-dom';
// import './App.css';
// import Factorial from './Components/Factorial';
// import Count from './Components/Count';
// import Counter from './Components/Counter';

// import Navbar from './Components/Navbar'
// import Sample from './Components/Sample'
// import SearchWord from './Components/SearchWord'
// import InputField2 from './Components/InputField2';
// import StoreItems from './Components/StoreItems';
// import ColorChange from './Components/ColorChange';
// import AddCart from './Components/AddCart';



// function App() {
//   return (
//     <div className="App">
 
//     <Navbar/>

//     <BrowserRouter>
   
//     <Routes>
//       <Route path='/factorial' element={<Factorial />} />
//       {/* <Route path='/counter' element={<Counter />} /> */}
//       {/* <Route path='/count' element={<Count />} /> */}
//       {/* <Route path='/color' element={<ColorChange />} /> */}
//       {/* <Route path='/input' element={<InputField/>} /> */}
//       {/* <Route path='/searchWord' element={<SearchWord />} /> */}
//       {/* <Route path='/storeItems' element={<StoreItems/>} /> */}
      
//     </Routes>
    
//     </BrowserRouter>
//     {/* <StoreItems /> */}
//     {/* <InputField2 /> */}
//     {/* <AddCart /> */}

    
    
     
      
     
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Factorial from './Components/Factorial'
import Counter from './Components/Counter'
import InputField from './Components/InputField'
import SearchWord from './Components/SearchWord';
import StoreItems from './Components/StoreItems'
import AddCart from './Components/AddCart';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
       <Route path='/fact' Component={Factorial} />
       <Route path='/count' Component={Counter} />
       <Route path='/input' Component={InputField} />
       <Route  path='/searchword' Component={SearchWord}/>
       <Route path='/storeitems' Component={StoreItems} />
       <Route path='/addcart'  Component={AddCart}/>
       
      </Routes>
    </Router>
  );
}

export default App;
