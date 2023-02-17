import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import logo from '../assets/Netflix-Logo.png';

export function Header(props) {
  console.log(props.login)
  const navigate = useNavigate();
  return (
    <Container className='flex j-between a-center'>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="button-div">
      <button className="button"onClick={()=>navigate(props.login?'/login':'/signup')}>
        {props.login ? "Login":"Sign In"}
      </button>
      </div>
      
    </Container>
  )
}


const Container = styled.div`
  padding:0 50px;
  .logo img{
    width:200px;
  }

  .button-div .button{
    width:100px;
    padding: 0.5rem 1rem;
    background-color:red;
    border:none;
    color:white;
    border-radius:5px;
    font-weight:bolder;
    
  }
`