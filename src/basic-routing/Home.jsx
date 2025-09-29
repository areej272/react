import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  

  
  return (
    <div>
      Welcome to home page <br />
      <Link to="/about">About</Link> <br /> <br />
      <Link to="/contact-us">Contact us</Link>
    </div>
  )
}

export default Home




