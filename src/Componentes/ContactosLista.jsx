import React from 'react';
import Contact from './Contacto';

const ContactosLista = ({ listaContactos, borrar, marcarFav }) => {
  return (
    <div className="lista-contenedor">
      {listaContactos.map((contacto) => (
        <Contact 
          key={contacto.id} 
          datos={contacto} 
          borrar={borrar} 
          marcarFav={marcarFav}
        />
      ))}
    </div>
  );
};

export default ContactosLista;