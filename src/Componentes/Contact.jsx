import React from 'react';

const Contact = ({ datos, borrar, marcarFav }) => {
  return (
    
    <div className={`tarjeta-contacto ${datos.favorito ? 'es-favorito' : ''}`}>
      
      <div>
       
        {datos.favorito && <span className="badge-fav">--Fav--</span>}
        
        <h4>{datos.nombre} {datos.apellido}</h4>
        <p>{datos.telefono}</p>
      </div>

      <div className="botones">
        
        <button onClick={() => marcarFav(datos.id)}>
          {datos.favorito ? 'Quitar Fav' : 'Favorito'}
        </button>
        
       
        <button onClick={() => borrar(datos.id)} style={{backgroundColor: '#ff4d4d', color: 'white'}}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Contact;