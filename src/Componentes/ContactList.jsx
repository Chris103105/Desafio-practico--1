import React from 'react';
import Contact from './Contact';

const ContactList = ({ listaContactos, borrar, marcarFav }) => {
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

export default ContactList;