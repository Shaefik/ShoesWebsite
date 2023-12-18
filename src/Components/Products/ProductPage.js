import React, { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import './ProductPage.css';
import { productData } from './productData';
import { Link } from "react-router-dom";
import MyContext from "../MyContext";

export default function ProductPage() {
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState('');
    const { products, setProducts } = useContext(MyContext);

    useEffect(() => {
        console.log(productData)
    }, [])

    const filteredProducts = productData.filter(
        (product) => !selectedCategory || product.category === selectedCategory
    );

    if (!filteredProducts.length) {
        return <p>No products found for the selected category</p>;
    }

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

    return (
        <div className="product-page-container">
            <Link to='/cart'><button className="my-cart">My Cart</button></Link>
            <label htmlFor="cars">Choose a category</label>
            <select name="cars" id="cars" onChange={handleCategoryChange}>
                <option value="">All</option>
                <option value="Watch">Watches</option>
                <option value="Gadgets">Gadgets</option>
                <option value="Shoe">Shoes</option>
            </select>

            <div className="product-container">
                <div className="arrow left-arrow" onClick={prevPage}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>

                <div className="product-content">
                    <p className="product-name">{filteredProducts[currentPage].name}</p>
                    <p className="category">{filteredProducts[currentPage].category}</p>
                    <img className="product-img" src={filteredProducts[currentPage].image} alt="Product" />
                    <h3 className="product-price">Price: {filteredProducts[currentPage].price}</h3>
                   
                    <button className="add-to-bag" onClick={addToBag}>Add to Bag</button>
                </div>

                <div className="arrow right-arrow" onClick={nextPage}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>
        </div>
    );
}
