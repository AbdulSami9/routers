import React from 'react'
import {Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1 className='text-3xl font-bold underline'>You got the travels plans, we got the travel vans</h1>
      <p>Add adventure to your life by joining the #vanlife movement.<br></br> Rent the perfect van to make your perfect road trip</p>
      <Link to='vans'>Find Your Van</Link>
    </div>
  )
}

export default Home
