// components/AgregarHorarioButton.js

import React from 'react';

const AgregarHorarioButton = () => {
  const handleClick = () => {
    alert('Funcionalidad de agregar horario aún no implementada');
    // Aquí puedes implementar la lógica para agregar horarios
  };

  return (
    <button className="agregar-btn" onClick={handleClick}>
      Agregar Horario
    </button>
  );
};

export default AgregarHorarioButton;
