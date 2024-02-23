
import React, { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faSignOutAlt } from "@fortawesome/free-solid-svg-icons"; // import logout icon
import myimg from '../imagesSt/Logo.png';

export const Layout = ({ size }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  
  const handleLogout = () => {
    navigate('/Logout');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${searchQuery}`);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-warning">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/Home">
            <img className='logoimg' src={myimg} alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active navtext" to="/Home">
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/Login">
                  Login
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li> */}
            </ul>
            <form className="mx-auto d-flex justify-content-center" onSubmit={handleSearch}>
              <input
                className="form-control me-2 searchinpu"
                type="search"
                placeholder="Search for Products"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-outline-dark navtext" type="submit">
                Search
              </button>
            </form>
            <div className="ms-5">
              <Link to="/cart" className="text-dark text-decoration-none">
                <FontAwesomeIcon icon={faCartArrowDown} size="2x" />
                <span style={{ fontSize: "40px" }}>{size}</span>
              </Link>
            </div>

            {/* Logout button */}
            <button
              className="btn btn-outline-dark ms-auto navtext"
              onClick={handleLogout}
            >
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </button>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
