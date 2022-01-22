import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
      <div className='container'>
         <h1>My small projects in React.</h1> 
         <ul>
           <Link className='link' to='/card'><li>Greeting card</li></Link>  
           <Link className='link' to='/thema'><li>Change Theme </li> </Link>
           <Link className='link' to='/reducer'><li>Reducer Hook</li></Link>
           <Link className='link' to='/IceCream'><li>Ice-cream (npm i -g ; json-server -w data/db.json -p8000) </li></Link>
         </ul>    
      </div>
  )
};

export default Home;
