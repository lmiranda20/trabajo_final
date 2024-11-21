import React, { useState } from 'react';
import './ProductCard.css'


const ProductCard = ({producto, onCompra}) => {
  const [seleccionTalle, setSeleccionTalle] = useState('');
  const [isBuy, setIsBuy] =useState(false);

  const handleCambiarTalle = (e) => {
    setSeleccionTalle(e.target.value);
  };

  const handleClickComprar =() => {
    setIsBuy (true)
    onCompra (producto.id)
  };

  return(
    <>
    <div className='producto_card'>
    <img src={producto.imagen} alt={producto.name} className='producto_imagen' />
      <h2>{producto.name}</h2>
      <p>${producto.precio}</p>
      <div>
        <label htmlFor="talle"> Talle:</label>
        <select id="talle" value={seleccionTalle} onChange={handleCambiarTalle}>
          {producto.Talles.map( talle =>(
            <option key={talle} value={talle}>{talle}</option>
          )
          )}
        </select>
        </div>
        <button onClick={handleClickComprar}> Buy</button>
        {isBuy && (
          <div className='seccion_buy'>
            <h3>Confirmar Compra</h3>
            <p>¿Estas seguro/a de comprar este producto?</p>
            <button onClick={() => setIsBuy(false)}>
              Cancelar.
            </button>
            <button onClick={() => alert ('Compra Confirmada!')}> Confirmar.</button>
          </div>
        )
        }
      </div></>
  )
}
export default ProductCard;
