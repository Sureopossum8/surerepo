import React, { useState } from 'react';
import axios from 'axios'; // Importa axios para hacer peticiones HTTP

const AgregarAsignatura = () => {
  const [nombreAsignatura, setNombreAsignatura] = useState('');

  const handleChange = (e) => {
    setNombreAsignatura(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/asignaturas', { nombre_asignatura: nombreAsignatura });
      console.log(response.data); // Muestra la respuesta del servidor en la consola
      alert('Asignatura agregada correctamente');
      setNombreAsignatura(''); // Limpia el campo después de enviar el formulario
    } catch (error) {
      console.error('Error al agregar asignatura:', error);
      alert('Error al agregar asignatura');
    }
  };

  return (
    <div>
      <h2>Agregar Asignatura</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre de la Asignatura:</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            value={nombreAsignatura}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar Asignatura
        </button>
      </form> 
    </div>
  );
};

export default AgregarAsignatura;
