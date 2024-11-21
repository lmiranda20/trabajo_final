import React from "react";
import ProductoLista from "../OP/ProductList"
import Navbar from "../NavBar/Navbar";
import imagen1 from '../../img/campera_argentina.webp'
import imagen2 from '../../img/campera-de-hombre.jpg'
import imagen3 from '../../img/camperon-de-river.jpg'
import './camperas.css'

const camperas = [
    {id: 1, name: 'Campera rompeviento Argentina', precio: 120, Talles: ['XS', 'S', 'M', 'L', 'XL'], imagen: imagen1},
    {id: 2, name: 'Campera rompeviento River', precio: 80, Talles: ['XS', 'S', 'M', 'L', 'XL'], imagen: imagen2},
    {id: 3, name: 'Campera Montagne', precio: 250, Talles: ['XS', 'S', 'M', 'L', 'XL'], imagen: imagen3}
];
const CamperaSeccion = () => {
return (
    <>
    <Navbar />
    <div className="camperas-seccion">
        <h1>Camperas</h1>
        <ProductoLista producto={camperas} />
    </div></>
);
};
export default CamperaSeccion