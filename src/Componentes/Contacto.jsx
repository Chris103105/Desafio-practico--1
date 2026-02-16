import React from 'react';

const Contact = ({ datos }) => {
  return (
    <div className="tarjeta-contacto">
    
      <div>
        <h4>{datos.nombre} {datos.apellido}</h4>
        <p>Tel: {datos.telefono}</p>
      </div>
    </div>
  );
};

export default Contact;