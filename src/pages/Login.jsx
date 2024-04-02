import React, { useState } from 'react'
import styled from 'styled-components'
import { BackgroundImage } from '../components/BackgroundImage'
import { Header } from '../components/Header'
import { firebaseAuth } from '../utils/firebase-config';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import {Example} from '../utils/notification';
export default function Login() {

  const [login, setLogin] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleLogIn = async () => {
    
    try {
      const { email, password } = formValues;
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      navigate(`/`);

    } catch (error) {
      alert(error);
      console.log(error)
    }
  }

  

  // onAuthStateChanged(firebaseAuth, (currentUser) => {
  //   if (!currentUser) navigate('/login');
  // })

 

  return (
    <Container>
      <BackgroundImage />
      <div className="Content">
        <Header login={false} />
        <div className='form-container flex column a-center j-center'>
          <div className="form flex column a-center j-center">
            <div className="title">
              <h3>Log In</h3>
            </div>
            <div className="container flex column">
              <input type="email" placeholder='Email adress' name="email" value={formValues.email} onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })} />
              <input type="password" placeholder='Password' name="password" value={formValues.password} onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })} />
              <button onClick={handleLogIn}>Login</button>
            </div>

          </div>

        </div>

      </div>
    </Container>
  )
}


const Container = styled.div`
  position:relative;
  .Content{
    position:absolute;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.5);
    height:100vh;
    width:100vw;
    display:grid;
    grid-template-rows:15vh 85vh;
  }
  .form-container{
    gap:2rem;
    height:85vh;
    .form{
    padding:2rem;
    background-color:#000000b0;
    width:25vw;
    gap:2rem;
    color:white;
    .container{
      gap:2rem;
      input{
        padding:0.5rem 1rem;
        width:15rem;
      }
      button{
        padding:0.5rem 1rem;
      background-color:red;
      border:none;
      cursor:pointer;
      border-radius:0.2rem;
      font-weight:bolder;
      font-size:1.05rem;
      }
    }
    }
  }
  


`