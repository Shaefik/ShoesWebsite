import React, { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import './Products.css';
import { productData } from './productData';
import { Link } from "react-router-dom";
import MyContext from "../MyContext";


export default function SampleProduct() {
    const {currentPage,setCurrentPage} =useContext(MyContext)
    const [selectedCategory, setSelectedCategory] = useState('');
    const { products, setProducts, liked,setLiked } = useContext(MyContext);
    const [loggedIn, setLoggedIn] = useState(false);
    const [loggedInMsg, setLoggedInMsg] = useState('');
     

   
  
    useEffect(() => {
        const resetMessage = setTimeout(() => {
            setLoggedInMsg('');
        }, 3000); 

        return () => clearTimeout(resetMessage); 
    }, [loggedInMsg]);

    const filteredProducts = productData.filter(
        (product) => !selectedCategory || product.category === selectedCategory
    );

    const nextPage = () => {
        setCurrentPage((prevPage) => (prevPage + 1) % filteredProducts.length);
    };

    const prevPage = () => {
        setCurrentPage((prevPage) => (prevPage - 1 + filteredProducts.length) % filteredProducts.length);
    };

    const addToBag = () => {
        if (!loggedIn) {
            setLoggedInMsg('Login First to add items');
        } else {
            setTimeout(() => {
                setLoggedInMsg('');
              
            }, 2000);

          
        }
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
        setCurrentPage(0);
    };
    //  const selectedProduct= filteredProducts[currentPage]
    //     setProducts((prevProduct)=>[...prevProduct,selectedProduct])
    function handleLike(){
        const likedItems = filteredProducts[currentPage]
        setLiked((prevLiked)=> [...prevLiked,likedItems])
        console.log(likedItems)

    }

    return (
        <div className="product-page-container">
            <div>
            <Link to='/cart'><button className="my-cart">My Cart</button></Link>
             
             <Link to='/likedproducts'><button className="my-cart">Favourite</button></Link>

            </div>
           
           
            <label htmlFor="cars">Choose a category</label>
            <select name="cars" id="cars" onChange={handleCategoryChange}>
                <option value="">All</option>
                <option value="Watch">Watches</option>
                <option value="Gadgets">Gadgets</option>
                <option value="Shoe">Shoes</option>
            </select>

            <div className="product-container">
                <button className="like" onClick={handleLike}>Like</button>
                <div className="arrow left-arrow" onClick={prevPage}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>

                <div className="product-content">
                    <p className="product-name">{filteredProducts[currentPage].name}</p>
                    <p className="category">{filteredProducts[currentPage].category}</p>
                    <img className="product-img" src={filteredProducts[currentPage].image} alt="Product" />
                    <h3 className="product-price">Price: {filteredProducts[currentPage].price}</h3>
                    <Link></Link>
                    <button className="add-to-bag" onClick={addToBag}>Add to Bag</button>
                    
                    <p>{loggedInMsg} <Link to='/productlogin'> Login</Link> </p>
                </div>

                <div className="arrow right-arrow" onClick={nextPage}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>
        </div>
    );
}
