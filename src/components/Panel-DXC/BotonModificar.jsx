import React, { useState } from 'react';
import './BotonModificar.css';

const BotonModificar = () => {
  const [id, setId] = useState('');
  const [datos, setDatos] = useState(null);
  const [error, setError] = useState(null);

  const buscarDatos = async () => {
    if (!id) return;

    try {
      const respuesta = await fetch(`https://aec6cb53-810c-4ee4-ba94-f2d2751ff6ab.mock.pstmn.io/users/${id}`);
      if (!respuesta.ok) throw new Error('No se encontraron datos');
      const resultado = await respuesta.json();
      setDatos(resultado);
      setError(null);
    } catch (err) {
      setError(err.message);
      setDatos(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ingrese ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={buscarDatos}>Buscar</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {datos && (
        <div>
          <p><strong>Primer Nombre:</strong> {datos.primerNombre}</p>
          <p><strong>Segundo Nombre:</strong> {datos.segundoNombre}</p>
          <p><strong>Primer Apellido:</strong> {datos.primerApellido}</p>
          <p><strong>Segundo Apellido:</strong> {datos.segundoApellido}</p>
          <p><strong>Rut:</strong> {datos.rut}</p>
          <p><strong>Empresa:</strong> {datos.empresa}</p>
          <p><strong>Subtipo:</strong> {datos.subtipo}</p>
          <p><strong>Correo:</strong> {datos.correo}</p>
        </div>
      )}
    </div>
  );
};

export default BotonModificar;
