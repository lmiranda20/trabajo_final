import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import Acerca from './componentes/Acerca/Acerca';
import Footer from './componentes/Footer/Footer';
import Login from './componentes/Login/Login';
import Home from './componentes/Home/Home';
import PantalonesSeccion from './componentes/Seccion/Pantalones';
import ZapatillasSeccion from './componentes/Seccion/Zapatillas';
import CamperaSeccion from './componentes/Seccion/Camperas';




function App() {
  return (
    <Router basename='/TrabajoFinal'>
        

          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element = {<Home />}/>
            <Route path='/about' element = {<Acerca/>} />
            <Route path="/pantalones" element={<PantalonesSeccion />} />
            <Route path="/zapatillas" element={<ZapatillasSeccion/>} />
            <Route path="/camperas" element={<CamperaSeccion />} />
          </Routes>

        <Footer />
    </Router>
  );
}

export default App;