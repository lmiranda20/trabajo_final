import React from 'react';
import './Home.css';
import Navbar from '../NavBar/Navbar';
import Carrusel from '../Carrusel/Carrusel';


const Home = () => {
  return (
    <>      
    <Navbar />
    
    <div className='home'>
    <Carrusel />
    </div>
    </>
  );
};
export default Home;