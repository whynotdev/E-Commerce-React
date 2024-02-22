import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { Layout } from './layout';
import Pagination from 'react-bootstrap/Pagination';
import {
  FaSortAlphaUp,
  FaSortAlphaDown,
  FaSortNumericDown,
  FaSortNumericUp,
  FaThumbsUp,
  FaThumbsDown,
  FaCalendarAlt,
} from 'react-icons/fa';

const ITEMS_PER_PAGE = 6;

const Home = () => {
  const [det, setDet] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((details) => setDet(details));
  }, []);

  const sortProducts = (type, direction) => {
    const sortedProducts = [...det].sort((a, b) => {
      const valueA = a[type];
      const valueB = b[type];

      if (valueA < valueB) {
        return direction === 'asc' ? -1 : 1;
      }
      if (valueA > valueB) {
        return direction === 'asc' ? 1 : -1;
      }
      return 0;
    });

    setDet(sortedProducts);
  };

  const handleSort = (type) => {
    if (sortType === type) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortType(type);
      setSortDirection('asc');
    }
  };

  useEffect(() => {
    if (sortType) {
      sortProducts(sortType, sortDirection);
    }
  }, [sortType, sortDirection]);

  const indexOfLastProduct = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - ITEMS_PER_PAGE;
  const currentProducts = det.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(det.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
    
      <Layout />
{/* carousel */}
      
      {/* <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
 */}

      {/* not */}
      <div className="container-fluid">
        <div className="row">
          {/* Fixed Card on the Right Side */}
          <div className="col-md-3 fixed-card">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Sort Options</h5>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => handleSort('price')}
                >
                  Price {sortType === 'price' && (sortDirection === 'asc' ? <FaSortNumericUp /> : <FaSortNumericDown />)}
                </button>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => handleSort('rating.count')}
                >
                  Popularity {sortType === 'rating.count' && (sortDirection === 'asc' ? <FaThumbsUp /> : <FaThumbsDown />)}
                </button>
                {/* Add more sorting options as needed */}
                <button
                  className="btn btn-outline-primary"
                  onClick={() => handleSort('releaseDate')}
                >
                  Release Date {sortType === 'releaseDate' && (sortDirection === 'asc' ? <FaCalendarAlt /> : <FaCalendarAlt />)}
                </button>
              </div>
            </div>
          </div>

          {/* Product Cards on the Left Side */}
          <div className="col-md-9">
            <h1>Welcome ....</h1>
            <div className="row row-cols-1 row-cols-md-4 gap-4 ms-4 mt-3">
              {currentProducts.map((product, idx) => (
                <div key={idx} className="col">
                  <div className="card">
                    <Link to={`/pdetails/${product.id}`}>
                      <img className="stockimages" src={product.image} alt={product.title} />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.category}</p>
                      <p className="card-text">Rs: {product.price}</p>
                      <p className="card-text">Available Stock: {product.rating.count}</p>
                      <StarRatings
                        rating={product.rating.rate}
                        starRatedColor="orange"
                        numberOfStars={5}
                        starDimension="20px"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-center p-3">
              <Pagination>
                <Pagination.Prev
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                />
                {[...Array(totalPages)].map((_, index) => (
                  <Pagination.Item
                    key={index + 1}
                    active={index + 1 === currentPage}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </Pagination.Item>
                ))}
                <Pagination.Next
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                />
              </Pagination>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
