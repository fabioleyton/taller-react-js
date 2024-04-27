import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'materialize-css/dist/css/materialize.min.css';
import ListaEmpleados from './componentes/ListaEmpleados';
import RegistroEmpleado from './componentes/RegistroEmpleado';
import DetallesEmpleado from './componentes/DetallesEmpleado';
import EditarEmpleado from './componentes/EditarEmpleado';
import logo from './img/logo1.png'; // Importa tu logo

function App() {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    obtenerEmpleados();
  }, []);

  const obtenerEmpleados = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/empleados');
      setEmpleados(response.data);
    } catch (error) {
      console.error('Error al obtener registro clientes', error);
    }
  };

  const actualizarListaEmpleados = () => {
    obtenerEmpleados();
  };

  return (
    <BrowserRouter>
      <div className="App-header">
        <img src={logo} alt="Logo" className="App-logo" /> {/* Agrega tu logo aquí */}
        <h1>SCMI</h1>
      </div>
      <div className="container"style={{ backgroundColor: '#f0f0f0' }}>
        <Routes>
          <Route path="/" element={<RegistroEmpleado actualizarListaEmpleados={actualizarListaEmpleados} />} />
          <Route path="/empleados" element={<ListaEmpleados empleados={empleados} obtenerEmpleados={obtenerEmpleados} />} />
          <Route path="/empleados/:id" element={<DetallesEmpleado />} />
          <Route path="/empleados/:id/editar" element={<EditarEmpleado />} />
        </Routes>
      </div>
      <div>
      <Footer />
      </div>
    </BrowserRouter>
    
  );
}

const Footer = () => (
  <footer className="bg-dark text-light py-4">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h4 className="mb-3">Información de contacto</h4>
          <p>Email: faavendano0@soy.sena.edu.co</p>
          <p>Teléfono: (+57) 311 806 8358</p>
          <p>Dirección: Calle 100 carrera 100 # 75 Bogotá</p>
        </div>
      </div>
      <p className="text-center mt-4">Derechos de autor © 2023 - FABIO AVENDAÑO</p>
    </div>
  </footer>
);

export default App;
