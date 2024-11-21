import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'

function Login (){
    const [isRegister, setIsRegister]= useState(false);
    const [formDatos, setFormDatos]= useState ({username: '', password: ''});
    const [cuentas, setCuentas] = useState([]);
    const navigate = useNavigate()

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormDatos({...formDatos, [name]: value});
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(isRegister){
            if (cuentas.find(cuenta => cuenta.username === formDatos.username)){
                alert ('Usuario ya existente');
                return;
            }
        setCuentas([...cuentas,formDatos]);
        alert('Cunta creada con exito');
        setFormDatos({username: '', password: ''}),
        setIsRegister(false);
        }else{
            const cuenta = cuentas.find(cuenta => cuenta.username === formDatos.username && cuenta.password === formDatos.password);
            if (cuenta){
                navigate('/home');
            }else{
                alert('Usuario y/o contraseña equivocadas')
            }
        }
    }

return(
    <div className="contenedor">
    <div className="formulario">
        <h1 className="tituloInicio">{isRegister ? 'Crear cuenta' : 'Iniciar Seccion'}</h1>
        <form onSubmit={handleSubmit}>
            <div className="usuario">
                <label>
                    Usuario:
                    <input type="text"
                    name="username"
                    value={formDatos.username}
                    onChange={handleChange}
                    required/>
                </label>
            </div>
            <div className="contraseña">
                <label>
                    Contraseña:
                    <input 
                    type="password"
                    name="password"
                    value={formDatos.password}
                    onChange={handleChange}
                    required/>
                </label>
            </div>
            <button className="Boton" type="submit">{isRegister ? 'Crear Cuenta' : 'Iniciar Seccion'}</button>
            <div>
            <button className="Boton" onClick={() => setIsRegister (!isRegister)}>
            {isRegister ? 'Iniciar seccion' : 'Crear Cuenta'}
            </button>
        </div>
            </form>
        
    </div>
    </div>
)};
export default Login;