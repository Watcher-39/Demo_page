/* eslint-disable react-hooks/immutability */
import { useState, useEffect } from "react";

const Card = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const response = await fetch("http://127.0.0.1:5000/products");
        const data = await response.json();
        setProducts(data.products);
    };

    return (
        <>
            <div className="card">
                <figure>
                    <img className="product-img" src="/product-img.avif" alt="a random product or service" />
                    <figcaption>{products[0]?.description}</figcaption>
                </figure>


                <div className="price">
                    <h3>${products[0]?.price.toFixed(2) || "0.00"}</h3>
                </div>
                <div className="qty">
                    <h4>Qty:</h4>
                    <input type="number" placeholder="1" />
                </div>

                <div className="subtotal">
                    <h5>Subtotal:</h5>
                    <h5>${products[0]?.price.toFixed(2) || "0.00"}</h5>
                </div>

                <button className="add-to-cart">Add to Cart</button>
            </div>
        </>
    );
};

export default Card