import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'

export default function NetflixMain() {
  const [scroll,setScroll]=useState(false)
  
  window.onscroll =()=>{
    setScroll(window.pageYOffset===0?false : true)
  return ()=>{window.onscroll = null}
  }
  
  return (
    <div>
      <Navbar scroll={scroll}/>
    </div>
  )
}
