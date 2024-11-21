import React from 'react'
import imagen1 from '../../img/camperas_carrusel.png'
import imagen2 from '../../img/zapatillas_carrusel.png' 
import imagen3 from '../../img/pantalones_carrusel.png'
import { Link } from 'react-router-dom'
const Carrusel = () => {
  return (
        <div id="carouselExampleIndicators" className="carousel slide ">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div class="carousel-item active">
      <Link to="/camperas">
      <img src={imagen1} class="d-block w-100" height="650px" alt="camperas"/>
      </Link>
    </div>
    <div className="carousel-item">
      <Link to="/zapatillas"> 
        <img src={imagen2} class="d-block w-100" height="650px" alt="zapatillas"/>
      </Link>
      
    </div>
    <div className="carousel-item">
      <Link to="/pantalones">
        <img src={imagen3} class="d-block w-100" height="650px" alt="pantalones"/>
      </Link>
      
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Anterior</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Siguiente</span>
  </button>
</div>
  )
}

export default Carrusel;

