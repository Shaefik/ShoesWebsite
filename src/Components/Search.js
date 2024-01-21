

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
