import React, { useState } from 'react';

// 1. Recibimos la prop "agregar" (es la función que viene desde App.jsx)
const Formulario = ({ agregar }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();

    // 2. Validación simple: Si está vacío, no hacemos nada
    if (!nombre || !apellido || !telefono) return;

    // 3. Creamos el objeto del nuevo contacto
    const nuevoContacto = {
      id: Date.now(), // Usamos la fecha como ID único
      nombre,
      apellido,
      telefono,
      favorito: false // Por defecto no es favorito
    };

    // 4. ¡Enviamos el contacto hacia arriba (a App.jsx)!
    agregar(nuevoContacto);

    // 5. Limpiamos los campos para escribir otro
    setNombre('');
    setApellido('');
    setTelefono('');
  };

  return (
    <form className="formulario" onSubmit={manejarEnvio}>
      <input 
        type="text" 
        placeholder="Nombre" 
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required // HTML5 valida que no vaya vacío
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