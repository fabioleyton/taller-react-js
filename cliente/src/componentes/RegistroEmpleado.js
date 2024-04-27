
import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const RegistroEmpleado = ({ actualizarListaEmpleados }) => {
    const navigate = useNavigate ();
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [puesto, setPuesto] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const nuevoEmpleado = {
        nombre,
        email,
        puesto,
      };
      console.log(nuevoEmpleado);
      await axios.post('http://localhost:5000/api/empleados', nuevoEmpleado);

      // Limpiar los campos después de enviar el formulario
      // El navegete redirecciona luego de realizar regsitros de usuarios
      setNombre('');
      setEmail('');
      setPuesto('');
      navigate('/empleados')
      // Actualizar la lista de empleados después de registrar uno nuevo
     // Se usa el hook naveteger que es proprio de la version de route5 con la cual esta prediseñado este codigo;

      alert('Cliente registrado exitosamente');
    } catch (error) {
      console.error('Error al registrar el empleado:', error);
    }
  };

  return (
    <div>
      <h2>Registro de Cliente</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            type="text"
            id="nombre"
            placeholder="NOMBRE"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          
        </div>
        <div className="input-field">
          <input
            type="email"
            id="email"
            value={email}
            placeholder="CORREO"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
        </div>
        <div className="input-field">
          <input
            type="text"
            id="puesto"
            placeholder="TELEFONO"
            value={puesto}
            onChange={(e) => setPuesto(e.target.value)}
            required
          />
        
        </div>
        <div className="button-container">
                    <button type="submit" className="btn">
                        Registrar
                    </button>
                    <button type="button" className="btn" onClick={() => navigate('/empleados')}>
                        Lista Clientes
                    </button>
                </div>
      </form>
    </div>
  );
};

export default RegistroEmpleado;


