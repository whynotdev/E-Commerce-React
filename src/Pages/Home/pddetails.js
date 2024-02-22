import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { Layout } from './layout';


export function PDetails({handleCart,size}) {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        const matchedProduct = data.find(item => item.id === parseInt(productId, 10));
        setProduct(matchedProduct);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [productId]);

  return (
    <>
    <Layout/>
    <div class="container mt-4">
      <p>{size}</p>
      <div class="row">
        <div class="col-md-6">
          {
          product ? (
            <img src={product.image} class="img-fluid" alt={product.title} />) : 
            (<div>Loading image...</div>)}
        </div>
  {/*second div*/}
        <div class="col-md-6 details-column">
         
          {product ? (
            <div>
              <h2 class="product-title">{product.title}</h2>
              <p class="product-category">Category: {product.category}</p>
              <p class="product-price">Price: {product.price}</p>
              <p class="product-description">Description: {product.description}</p>
              <p class="product-rating">
                Rating: <br/>
                <StarRatings
                  rating={product.rating.rate}
                  starRatedColor="orange"
                  numberOfStars={5}
                  starDimension="40px"
                  name="rating"
                />
                <span class="rating-count">({product.rating.count} reviews)</span>
              </p>
              <br/><br/>
              <button class="btn btn-warning " onClick={()=>handleCart(product)}>Add to Cart</button> <br/><br/>
              <button class="btn btn-warning ">Buy Now</button>
            </div>
          ) : (
            <div>Loading product details...</div>
          )}
        </div>
      </div>
    </div>
    </>
  );
}
