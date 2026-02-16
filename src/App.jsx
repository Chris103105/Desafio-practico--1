import React, { useState } from 'react';
import './App.css';
import Formulario from './Componentes/Formulario';
import ContactList from './Componentes/Contactolista';
import datosIniciales from './Datos/contactos.json';

function App() {
  const [contactos, setContactos] = useState(datosIniciales);

  
  const agregarContacto = (nuevo) => {
    setContactos([...contactos, nuevo]);
  };

  const eliminarContacto = (id) => {
    const listaNueva = contactos.filter(c => c.id !== id);
    setContactos(listaNueva);
  };

  const toggleFavorito = (id) => {
    const listaActualizada = contactos.map(c => {
      if (c.id === id) {
        return { ...c, favorito: !c.favorito };
      }
      return c;
    });
    setContactos(listaActualizada);
  };

  const contactosOrdenados = [...contactos].sort((a, b) => {
    if (a.favorito === b.favorito) return 0;
    return a.favorito ? -1 : 1;
  });
  

  return (
    <div className="App">
  <header className="header-principal">
        <h1>Lista de Contactos</h1>
      </header>

      <main className="contenedor-principal">
        {/* columna con el  Formulario */}
        <section className="columna columna-formulario">
          <h2>Nuevo Contacto</h2>
          <Formulario agregar={agregarContacto} />
        </section>

        {/* columna con la Lista */}
        <section className="columna columna-lista">
          <h2>Mis Contactos ({contactos.length})</h2>
          <div className="scroll-lista">
            <ContactList 
              listaContactos={contactosOrdenados} 
              borrar={eliminarContacto}
              marcarFav={toggleFavorito}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;