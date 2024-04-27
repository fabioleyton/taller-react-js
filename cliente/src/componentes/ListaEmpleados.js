import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListaEmpleados = ({ empleados, obtenerEmpleados }) => {
  const [empleadosLista, setEmpleadosLista] = useState([]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/empleados/${id}`);
      alert('Cliente eliminado exitosamente');
      // Actualizar la lista de empleados después de eliminar uno
      obtenerEmpleados();
    } catch (error) {
      console.error('Ha ocurrido un error inesperado', error);
    }
  };

  useEffect(() => {
    // Actualizar la lista de empleados al inicio
    obtenerEmpleados();
  }, [obtenerEmpleados]);

  // Filtrar los empleados para excluir al cliente eliminado
  useEffect(() => {
    setEmpleadosLista(empleados);
  }, [empleados]);

  return (
    <div>
      <h2>Lista de Clientes</h2>
      <Link to="/" className="btn">
        Regresar al registro
      </Link>
      <ul className="collection">
        {empleadosLista.map((empleado) => (
          <li key={empleado._id} className="collection-item">
            <strong>Nombre:</strong>
            <Link to={`/empleados/${empleado._id}`}>{empleado.nombre}</Link>
            <br />
            <strong>Email:</strong> {empleado.email}
            <br />
            <strong>Telefono:</strong> {empleado.puesto}
            <br />
            <button className="btn" onClick={() => handleDelete(empleado._id)}>
              eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaEmpleados;


