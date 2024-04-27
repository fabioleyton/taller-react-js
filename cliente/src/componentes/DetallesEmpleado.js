
import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DetallesEmpleado = () => {

  const [empleado, setEmpleado] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const obtenerEmpleado = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/empleados/${id}`);
        setEmpleado(response.data);
      } catch (error) {
        console.error('Error al obtener el empleado:', error);
      }
    };

    obtenerEmpleado();
  }, [id]);

  if (!empleado) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>Detalles del cliente</h2>
      <p>
        <strong>Nombre:</strong> {empleado.nombre}
      </p>
      <p>
        <strong>Email:</strong> {empleado.email}
      </p>
      <p>
        <strong>Telefono:</strong> {empleado.puesto}
      </p>
      <Link to={`/empleados/${id}/editar`} className="btn">
      Editar
      </Link>
      <Link to="/empleados" className="btn">
        Regresar
      </Link>
    </div>
  );
};

export default DetallesEmpleado;

