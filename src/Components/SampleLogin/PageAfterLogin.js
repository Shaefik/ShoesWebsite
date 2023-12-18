import React, { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import './Products.css';
import { productData } from './productData';
import { Link,useNavigate } from "react-router-dom";
import MyContext from "../MyContext";


export default function PageAfterLogin() {
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState('');
    const { products, setProducts, liked,setLiked } = useContext(MyContext);   
    const navigate = useNavigate();

   
  
  

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
        const selectedProduct = filteredProducts[currentPage];
        setProducts((prevProducts) => [...prevProducts, selectedProduct]);
        console.log(selectedProduct);
    };


    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
        setCurrentPage(0);
    };
    function handleLike(){
        const likedItems = filteredProducts[currentPage]
        setLiked((prevLiked)=> [...prevLiked,likedItems])
        console.log(likedItems)

    }
    return (
        <div className="product-page-container">
           
            <Link to='/cart'><button className="my-cart">My Cart</button></Link>
            <Link to='/likedproducts'><button className="my-cart">Favourite</button></Link>

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
                </div>

                <div className="arrow right-arrow" onClick={nextPage}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>
        </div>
    );
}
