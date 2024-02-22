import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const SearchPage = () => {
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    console.log('Searched Query:', query);
    const handleSearch = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const allProducts = await response.json();
        const filteredProducts = allProducts.filter((product) => {
          const { title, description, category, price } = product;
          const lowerCasedQuery = query.toLowerCase();

          // Check if the query matches strically with all product properties
          return (
            title.toLowerCase() == lowerCasedQuery ||
            description.toLowerCase() == lowerCasedQuery ||
            category.toLowerCase() == lowerCasedQuery ||
            price.toString() == query
          );
        });

        setSearchResults(filteredProducts);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    if (query && query.trim() !== '') {
      handleSearch();
    } else {
      setSearchResults([]);
    }
  }, [query]);

  return (
    <div className="container mt-4">
      <h2>Search Results</h2>
      {searchResults.length === 0 ? (
        <p>No products found for the search query.</p>
      ) : (
        <div className="row">
          {searchResults.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <Link to={`/pdetails/${product.id}`}>
                <img src={product.image} className="img-fluid" alt={product.title} />
              </Link>
              <h4>{product.title}</h4>
              <p>Category: {product.category}</p>
              <p>Price: {product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
