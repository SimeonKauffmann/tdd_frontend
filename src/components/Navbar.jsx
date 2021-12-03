import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Link to='/login'>Login</Link>
      <Link to='/list'>List</Link>
      <Link to='/cart'>Cart</Link>
    </div>
  );
}
