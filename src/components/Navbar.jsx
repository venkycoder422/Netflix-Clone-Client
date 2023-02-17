import React, { useState } from 'react'
import styled from 'styled-components';
import logo from '../assets/Netflix-Logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { FaMicrophone, FaPowerOff, FaSearch } from 'react-icons/fa'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
export const Navbar = ({ scroll }) => {
  const navigate = useNavigate();
  const links = [
    { name: "Home", link: '/' },
    { name: "TV Shows", link: '/tv' },
    { name: "Movies", link: '/movies' },
    { name: "New & Popular", link: '/latest' },
    { name: "My List", link: '/mylist' },
    { name: "Browse by Langauges", link: '/langauages' }
  ];
  const [showSearch, setSearch] = useState(false);
  const [hover, setHover] = useState(false);
  const [onmic,setOnMic] = useState(false);
  const [text,setText] = useState('');
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
// console.log(transcript);
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate('/login');
  })

  return (
    <Container>
      <nav className={`flex ${scroll ? "scroll" : ""}`} >
        <div className="left flex a-center">
          <div className="brand flex a-center j-center">
            <img src={logo} alt="logo" />
          </div>
          <ul className="links flex" >
            {
              links.map(({ name, link }) => {
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
          <button className='microPhone'
          onClick={() => {SpeechRecognition.startListening();setOnMic(true);setText('')}}
          onFocus={() =>{setSearch(true)}}
          onBlur={() =>{SpeechRecognition.stopListening();setOnMic(false)}}
          >
            <FaMicrophone />
          </button>
          <div className={`search ${showSearch ? 'show-search' : ''}`}>

            <button
              onFocus={() => setSearch(true)}
              onBlur={() => { if (!hover) setSearch(false) }}
            >
              <FaSearch />
            </button>

            <input type="text" placeholder='Titles, People, Generes' autoComplete='on'
              
              value={onmic?`${transcript}`: text}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onChange={e => setText(e.target.value)}
              onFocus={() => {setOnMic(false);resetTranscript()}}
              onBlur={() => {
                setSearch(false);
                setHover(false);
              }}
            />
          </div>
          <button onClick={() => {
            alert('Your Signing out Click Ok to confirm')
            signOut(firebaseAuth)}}>
            <FaPowerOff />
          </button>
        </div>

      </nav>
    </Container >
  )
}

const Container = styled.div`
.scroll{
  background-color:black;
}

nav{
  position:sticky;
  top:0;
  height:6.5rem;
  width:100%;
  justify-content:space-between;
  position:fixed;
  padding:0 4rem;
  z-index:2;
  align-items:center;
  transition:0.3s ease-in-out;

}

.left{
  gap:2rem;
  .brand{
    img{
      height:4rem;
    }
  }
  .links{
    list-style-type:none;
    gap:2rem;
    li{
      a{
        color:white;
        text-decoration:none;
      }
    }
  }
}

.right{
  gap:1rem;

  button{
    background-color:tranparent;
    border:none;
    cursor:pointer;
    &:focus {
      outline:none;
    }
    svg{
      color:#f34242;
      font-size:1.2rem;
    }
  }

  .microPhone{
    background-color:transparent;
    svg{
      color:white;
    }
  }

  .search{
    display:flex;
    gap:0.4rem;
    align-items:center;
    justify-content:center;
    padding:0.2rem;
    padding-left:0.5rem;
    button{
      background-color:transparent;
      svg{
        color:white;
      }
    }

    input{
      width:0;
      opacity:0;
      visibility:hidden;
      transition:0.3s ease-in-out;
      background-color:transparent;
      color:white;
      border:none;
      &:focus{
        outline:none;
      }
      
    }
  }
  
  .show-search{
    border: 1px solid white;
    background-color:rgba(0,0,0,0.6);
    .Micro{
      svg{
        color:white;
      }
    }
    input{
      width:100%;
      opacity:1;
      visibility:visible;
      padding:0.3rem;
      transition:0.3s ease-in-out;
    }
  }
  
}
`
