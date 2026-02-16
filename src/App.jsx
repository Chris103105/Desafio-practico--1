import React, { useState } from 'react';
import './App.css';
import datosIniciales from './Datos/Contactos.json'; 
import ContactList from './Componentes/ContactosLista';
import Formulario from './Componentes/Formulario';

function App() {
  const [contactos, setContactos] = useState(datosIniciales);

  
  const agregarContacto = (nuevoContacto) => {
    
    setContactos([...contactos, nuevoContacto]);
  };
  

  return (
    <div className="App">
      <header className="header-principal">
        <h1>Lista de Contactos</h1>
      </header>

      <main className="contenedor-principal">
        
        <section className="columna">
          <h2>Nuevo Contacto</h2>
          <Formulario agregar={agregarContacto} />
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