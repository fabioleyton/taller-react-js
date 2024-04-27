
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';


const EditarEmpleado = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [puesto, setPuesto] = useState('');
  const { id } = useParams();
  const history = useNavigate();

  useEffect(() => {
    const obtenerEmpleado = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/empleados/${id}`);
        const { nombre, email, puesto } = response.data;
        setNombre(nombre);
        setEmail(email);
        setPuesto(puesto);
      } catch (error) {
        console.error('Error al obtener el empleado:', error);
      }
    };

    obtenerEmpleado();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const empleadoActualizado = {
        nombre,
        email,
        puesto,
      };

      await axios.put(`http://localhost:5000/api/empleados/${id}`, empleadoActualizado);
      history(`/empleados/${id}`);
    } catch (error) {
      console.error('Error al actualizar el empleado:', error);
    }
  };

  return (
    <div>
      <h2>Editar Clientes</h2>
      <form onSubmit={handleSubmit}>
        {}
   
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
        <button type="submit" className="btn">
        Actualizar
        </button>
        
      </form>
    </div>
  );
};


export default EditarEmpleado;

