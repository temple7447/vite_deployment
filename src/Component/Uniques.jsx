import React from 'react';
import { Outlet } from 'react-router-dom';

const Uniques = () => {
  return (
    <div className='container'>
    <div className='d-flex align-items-center justify-content-around'>   
     <ul className='d-flex gap-3'>
        <li>Home</li>
        <li>About Us</li>
        <li>Our Services</li>
      </ul>
      <img src='' alt='logo' />
      <ul className='d-flex gap-3'>
        <li>Our Process</li>
        <li>Gallery</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      </div>
<Outlet />
    </div>
  )
}

export default Uniques
