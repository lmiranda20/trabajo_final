import icono from "../../img/icono-ubicacion.png"
import './Footer.css'
import imagen from '../../img/image.webp'

function Footer (){
    return(
        
        <footer className="footer">
            <p className="texto"><img className="imgLogo" src= {icono} alt=""/>Argentina &copy;2024 Derechos reservados.</p>
            <a className='logoWhatsaap' href="https://wa.link/qyrmlv"><img src={imagen} alt="WhatsApp"/></a>
        </footer>
        
    )
}
export default Footer;