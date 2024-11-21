import React from 'react';
import ProductoLista from '../OP/ProductList';
import Navbar from '../NavBar/Navbar';
import imagen1 from '../../img/pantalon-gravity.jpg'
import imagen2 from '../../img/pantalon-de-hombre.jpg'
import imagen3 from '../../img/pantalon.webp'
import './pantalones.css'

const pantalones = [
  { id: 1, name: 'Pantalon Gravity', precio: 350, Talles: ['XS', 'S', 'M', 'L', 'XL'],imagen: imagen1 },
  { id: 2, name: 'Pantalon Montagne', precio: 160, Talles: ['XS', 'S', 'M', 'L', 'XL'],imagen: imagen2 },
  { id: 3, name: 'Clasico', precio: 55, Talles: ['XS', 'S', 'M', 'L', 'XL'], imagen: imagen3 }
];

const PantalonesSeccion = () => {
  return (
    <><Navbar />
    <div className='pantalones-seccion'>
      <h1>Pantalones</h1>
      <ProductoLista producto={pantalones} />
    </div>
    </>
  );
};

export default PantalonesSeccion;