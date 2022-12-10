import React, { useState } from 'react'
import styled from 'styled-components';
import logo from '../assets/Netflix-Logo.png';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'
export const Navbar = ({ scroll }) => {
  const links = [
    { name: "Home", link: '/' },
    { name: "TV Shows", link: '/tv' },
    { name: "Movies", link: '/movies' },
    { name: "My List", link: '/mylist' }
  ];
  const [showSearch, setSearch] = useState(false);
  const [hover, setHover] = useState(false);
  return (
    <Container>
      <nav className={`flex ${scroll ? "scroll" : ""}`}>
        <div className="left flex a-center">
          <div className="brand flex a-center j-center">
            <img src={logo} alt="logo" />
            <ul>
              {
                links.map((name, link) => {
                  return (
                    <li key={name}>
                      <Link to={link}>{name}</Link>
                    </li>
                  );
                })
              }
            </ul>

          </div>
          <div className="right flex a-center">
            <div className={`search ${showSearch ? 'search' : ""}`}>
              <button onFocus={() => setSearch(true)} onBlur={() => { if (!hover) setSearch(false) }}>
                <FaSearch />
              </button>
              <input type="text" placeholder='Search' onMouseEnter={(e) => setHover(true)}
                onMouseLeave={(e) => setHover(false)}
                onBlur={()=>showSearch(false)} />          </div>
          </div>
        </div>
      </nav>
    </Container>
  )
}

const Container = styled.div`

`
