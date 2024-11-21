import React from 'react';
import Navbar from '../NavBar/Navbar';
import './acerca.css'
const Acerca = () => {
  return (
    <>
    <Navbar />
    <div className='acerca'>

        <h1>Acerca de Nosotros</h1>
        <p>En Ripcul, redefinimos lo que significa vestirse con estilo. Nuestra colección está diseñada para aquellos que buscan algo más que simplemente ropa; es para quienes desean una experiencia única, donde cada prenda cuenta una historia. Inspirados en la fusión de la modernidad y la tradición, nuestros diseños reflejan la elegancia y la autenticidad que mereces.
          </p>
        <p>Cada pieza en nuestra colección es el resultado de una meticulosa atención al detalle, utilizando solo los materiales de la más alta calidad. Desde cortes sofisticados hasta colores atemporales, nuestras prendas están hechas para durar y para dejar una impresión duradera.
        </p>
        <p>Ripcul no es solo moda; es una declaración de quién eres. Ya sea que busques algo casual, o una prenda que haga girar cabezas, tenemos exactamente lo que necesitas. Únete a nosotros y descubre cómo se siente vestir con la confianza y la distinción que solo Ripcul puede ofrecer.</p>
    </div>
    <div className='contacto'>
      <h2>Contacto</h2>
      <p>¿Tienes preguntas, comentarios o necesitas asistencia? ¡Estamos aquí para ayudarte!</p> 
      <p> Dirigete hacia nuestro WhatsApp y comunicate con nosotros</p>
    </div>
    </>
  );
};

export default Acerca;