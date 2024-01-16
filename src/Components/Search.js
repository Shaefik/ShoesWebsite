// import React, { useState,useEffect } from 'react'
// import { productData } from '../Assets/productData'

// function Search() {
//     const [searchQuery,setSearchQuery] = useState('')
//     const [filtered,setFiltered] = useState(productData)
//     const [results,setResults] = useState({})
//     useEffect(()=>(
//         console.log(results)
//     ),[])
//     function handleSearch(e){
//         const query = e.target.value
//         setSearchQuery(query)
//         const filteredResults = productData.filter((data)=>{
//             const {name,brand,gen} = data 
//             return(
//                 name.toLowerCase().includes(query.toLowerCase())||
//                 brand.toLowerCase().includes(query.toLowerCase())||
//                 gen.toLowerCase().includes(query.toLowerCase())
//             )
//         })
//         setFiltered(filteredResults)
//         setResults(filteredResults)
//     }
//   return (
   

    
//     <div>
//         {results.map((data)=>(
//             <>
        
//             <input placeholder='search' type='text' value={searchQuery} />
//             <button onClick={handleSearch}>Search</button>
//             </>
    

//         ))}
        
//     </div>
//   )
// }

// export default Search
// Search.js

import React, { useContext, useState } from 'react';
import './Search.css'
import { Link } from 'react-router-dom';
import { productData } from '../Assets/productData';
import MyContext from './MyContext';

function Search() {
    const {setFiltered} = useContext(MyContext)
    const [searchQuery, setSearchQuery] = useState('');



    const handleSearch = () => {
        const filteredResults = productData.filter((data) => {
          const { name, brand, gen } = data;
          return (
            name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
            gen.toLowerCase().includes(searchQuery.toLowerCase())
          );
        });
        setFiltered(filteredResults);
      };

    return (
        <div className='search-contain'>
            <input
                placeholder='search'
                className='search-box'
                type='text'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
          <Link to='/searchedproduct'><button className='search-btn' onClick={handleSearch}>Search</button></Link>  
        </div>
    );
}

export default Search;
