import React, { useState } from 'react';
import './App.css';
import datosIniciales from './Datos/Contactos.json'; 
// 1. IMPORTAMOS EL COMPONENTE DE LA LISTA
import ContactList from './Componentes/ContactosLista';

function App() {
  const [contactos, setContactos] = useState(datosIniciales);

  return (
    <div className="App">
      {/* Encabezado */}
      <header className="header-principal">
        <h1>Lista de Contactos</h1>
      </header>

      <main className="contenedor-principal">
        
       
        <section className="columna">
          <h2>Nuevo Contacto</h2>
        
        </section>
        <section className="columna">
          <h2>Mis Contactos ({contactos.length})</h2>
          <div className="scroll-lista">
          
            <ContactList listaContactos={contactos} />

          </div>
        </section>

      </main>
      
      
    </div>
  );
}

export default App;