import React from 'react';
import Contact from './Contacto';

const ContactList = ({ listaContactos }) => {
  return (
    <div className="lista-contenedor">
      {/* Si la lista está vacía, mostramos mensaje */}
      {listaContactos.length === 0 ? (
        <div style={{textAlign: 'center', color: 'white'}}>No hay contactos</div>
      ) : (
        /* Si hay datos, los recorremos con .map */
        listaContactos.map((contacto) => (
          <Contact key={contacto.id} datos={contacto} />
        ))
      )}
    </div>
  );
};
s
export default ContactList;