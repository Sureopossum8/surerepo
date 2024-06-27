// client/src/App.js

import React from 'react';
import './App.css'; // Asegúrate de que la ruta sea correcta
import Navbar from './components/Navbar'; // Importa el componente Navbar
import AgregarHorarioButton from './components/AgregarHorarioButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sistema de Horarios UTA</h1>
      </header>
      <Navbar /> {/* Aquí se inserta el componente Navbar */}
      <main>
        <AgregarHorarioButton />
        {/* Agrega aquí el resto del contenido de tu aplicación */}
      </main>
    </div>
  );
}

export default App;
