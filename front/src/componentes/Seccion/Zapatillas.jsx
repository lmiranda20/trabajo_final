import React from 'react';
import ProductoLista from '../OP/ProductList';
import Navbar from '../NavBar/Navbar';
import imagen1 from '../../img/OFF-WHITE-Air-Jordan-4.webp'
import imagen2 from '../../img/Nike-P-6000.webp'
import imagen3 from '../../img/nike-air-pegasus-2k5.webp'
import './zapatillas.css'

const zapatillas = [
    { id: 1, name: 'Jordan Retro 4 Off White', precio: 180, Talles: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45'],imagen:imagen1 },
    { id: 2, name: 'Nike P-6000', precio: 120, Talles: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45'],imagen:imagen2 },
    { id: 3, name: 'Nike Air Pegasus 2k5', precio: 150, Talles: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45'],imagen:imagen3 }
];

const ZapatillasSeccion = () => {
return (
    <>
    <Navbar />
    <div className='zapatillas-seccion'>
        <h1>Zapatillas</h1>
        <ProductoLista producto={zapatillas} />
    </div></>
);
};

export default ZapatillasSeccion;