import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import BackgroundImage from '../assets/strange.jpg';
import NLogo from '../assets/N Logo.png'
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres } from '../store';
import Slider from '../components/Slider';

export default function NetflixMain() {
  const [scroll, setScroll] = useState(false)
  const navigate = useNavigate();
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const movies = useSelector((state) => state.netflix.movies)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGenres());
    if (genresLoaded) {
      dispatch(fetchMovies({ type: "all" }));
    }

  }, [])
  window.onscroll = () => {
    setScroll(window.pageYOffset === 0 ? false : true)
    return () => { window.onscroll = null }
  }

  console.log(movies);
  return (
    <Container>
      <Navbar scroll={scroll} />
      <div className='hero'>
        <img src={BackgroundImage} alt='background' className='background-img'></img>
        <div className="container">
          <div className="logo">
            <img src={NLogo}></img>
            <p>SERIES</p>
          </div>
          <div className='title'>
            <h1>STRANGER THINGS</h1>
          </div>
          <div className="buttons flex">
            <button className='flex j-center a-center' onClick={() => navigate('/player')}><FaPlay />Play</button>
            <button className='flex j-center a-center'><AiOutlineInfoCircle />More info</button>
          </div>
        </div>
      </div>
      <Slider movies={movies} />
    </Container>
  )
}


const Container = styled.div`
      z-index:1;
        background-color:black;
        .container{
          position: absolute;
        }
      
      .hero{
        position:relative;
        .background-img{
          filter:brightness(60%)
        }
        img{
          width:100vw;
          height:100vh;
        }
        .logo{
          img{
          width:50px;
          height:50px;
          }
          margin-bottom:0px;
          position: relative;
          top:-300px;
          left: 10%;
          display: flex;
          align-items: center;
        }
        .title{
          position:relative;
          top:-300px;
          left:10%;
          h1{
            font-size:50px;
          }
        }
        .buttons{
          position:relative;
          top:-280px;
          left:10%;
          gap:20px;
          /* filter:brightness(60%); */
          button{
            font-size:1.4rem;
            gap:1rem;
            padding:0.5rem 2rem;
            border-radius: 0.2rem;
            border:none;
            cursor:pointer;
            transition:0.3s ease-int-out;
            &:hover{
              opacity:0.8;
            }
            &:nth-of-type(2){
              background-color: rgb(109,109,110,0.7);
              color: white;
              svg{
                font-size:1.8rem;
              }
            }
            

          }
        }
      }
`;