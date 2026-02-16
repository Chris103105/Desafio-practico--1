import React, { useState } from 'react';

const Formulario = ({ agregar }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');

  const enviarFormulario = (e) => {
    e.preventDefault(); 


    // Si la función se ejecuta, es porque el navegador ya validó que hay datos.

    const nuevoContacto = {
      id: Date.now(),
      nombre,
      apellido,
      telefono,
      favorito: false
    };

    agregar(nuevoContacto);

    
    setNombre('');
    setApellido('');
    setTelefono('');
  };

  return (
    <form onSubmit={enviarFormulario} className="formulario">
      
      
      <input 
        type="text" 
        placeholder="Nombre" 
        value={nombre} 
        onChange={(e) => setNombre(e.target.value)} 
        required  
      />

      <input 
        type="text" 
        placeholder="Apellido" 
        value={apellido} 
        onChange={(e) => setApellido(e.target.value)} 
        required 
      />

      <input 
        type="tel"
        placeholder="Teléfono" 
        value={telefono} 
        onChange={(e) => setTelefono(e.target.value)} 
        required 
      />

      <button type="submit">Guardar Contacto</button>
    </form>
  );
};

export default Formulario;
