import React, { useState } from 'react';
import './BotonModificar.css';

const BotonModificar = () => {
  const [id, setId] = useState('');
  const [datos, setDatos] = useState(null);
  const [error, setError] = useState(null);
  const [mensaje, setMensaje] = useState('');

  const buscarDatos = async () => {
    if (!id.trim()) {
      setMensaje('Debe ingresar un ID.');
      setDatos(null);
      setError(null);
      return;
    }

    try {
      const respuesta = await fetch(`https://aec6cb53-810c-4ee4-ba94-f2d2751ff6ab.mock.pstmn.io/users/${id}`);
      if (!respuesta.ok) throw new Error('No se encontraron datos');
      const resultado = await respuesta.json();
      setDatos(resultado);
      setError(null);
      setMensaje('');
    } catch (err) {
      setError(err.message);
      setDatos(null);
      setMensaje('');
    }
  };

  return (
    <div>
      <div className="buscarIdModificar">
      <input
        type="text"
        placeholder="Ingrese ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={buscarDatos} className="boton buscar">Buscar</button>

      {mensaje && <p style={{ color: 'red' }}>{mensaje}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      </div>

      {datos && (
        <div className="gridDatos">
          <div><label>Primer Nombre:</label><p>{datos.primerNombre}</p></div>
          <div><label>Segundo Nombre:</label><p>{datos.segundoNombre}</p></div>
          <div><label>Primer Apellido:</label><p>{datos.primerApellido}</p></div>
          <div><label>Segundo Apellido:</label><p>{datos.segundoApellido}</p></div>
          <div><label>RUT:</label><p>{datos.rut}</p></div>
          <div><label>Empresa:</label><p>{datos.empresa}</p></div>
          <div><label>Subtipo:</label><p>{datos.subtipo}</p></div>
          <div><label>Correo:</label><p>{datos.correo}</p></div>
        </div>
      )}
    </div>
  );
};

export default BotonModificar;
