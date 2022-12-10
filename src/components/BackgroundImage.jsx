import React from 'react'
import styled from 'styled-components';
import backimg from '../assets/Netflix-background.jpg';
export const BackgroundImage = () => {
  return (
    <Container>
      <img src={backimg} alt="backgroundImage" />
    </Container>
  )
}

const Container = styled.div`
  height:100vh;
  width:100vw;
  img{
    height:100vh;
    width:100vw;
  }
`
