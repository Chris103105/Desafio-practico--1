import React, { useState } from 'react';
import './App.css';
import datosIniciales from './Datos/Contactos.json'; 

function App() {
  // 1. Cargamos el JSON en el estado inicial
  const [contactos, setContactos] = useState(datosIniciales);

  return (
    <div className="App">
      {/* Encabezado */}
      <header className="header-principal">
        <h1> Lista de Contactos</h1>
      </header>

      <main className="contenedor-principal">
        
        {/* columna izquierda aca vamos a poner  el Formulario */}
        <section className="columna">
          <h2>Nuevo Contacto</h2>
       
     
        </section>

        {/* en la comlumna derecha ira  la Lista */}
        <section className="columna">
          <h2>Mis Contactos ({contactos.length})</h2>
          <div className="scroll-lista">
            
          </div>
        </section>

      </main>
      
      
    </div>
  );
}

export default App;