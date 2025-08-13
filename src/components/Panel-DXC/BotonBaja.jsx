import React, { useState } from 'react';
import './BotonModificar.css';

const BotonBaja = () => {
  const [id, setId] = useState('');
  const [datos, setDatos] = useState(null);
  const [error, setError] = useState(null);
  const [fechaBaja, setFechaBaja] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false); // Nuevo estado

  const buscarDatos = async () => {
    if (!id) {
      setError('Debe ingresar un ID');
      return;
    }

    try {
      const respuesta = await fetch(`https://aec6cb53-810c-4ee4-ba94-f2d2751ff6ab.mock.pstmn.io/users/${id}`);
      if (!respuesta.ok) throw new Error('No se encontraron datos');
      const resultado = await respuesta.json();
      setDatos(resultado);
      setError(null);
      setMensaje('');
      setEnviado(false); // Reinicia el estado si se vuelve a buscar
    } catch (err) {
      setError(err.message);
      setDatos(null);
    }
  };

  const enviarBaja = async () => {
    if (!id || !fechaBaja) {
      setMensaje('Debe ingresar un ID y una fecha de baja.');
      return;
    }

    try {
      const respuesta = await fetch(`https://aec6cb53-810c-4ee4-ba94-f2d2751ff6ab.mock.pstmn.io/users/baja`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          fechaBaja,
        }),
      });

      if (!respuesta.ok) throw new Error('Error al enviar la baja');

      setMensaje('Fecha de baja enviada correctamente.');
      setEnviado(true); // Desactiva el botón
    } catch (err) {
      setMensaje(`Error: ${err.message}`);
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

          <div style={{ marginTop: '20px' }}>
            <label>
              <strong>Fecha de baja:</strong>{' '}
              <input
                type="date"
                value={fechaBaja}
                onChange={(e) => setFechaBaja(e.target.value)}
              />
            </label>
          </div>

          <div style={{ marginTop: '10px' }}>

            <button
              onClick={enviarBaja}
              disabled={enviado}
              className="boton enviar"
            >
              {enviado ? 'Enviado' : 'Enviar'}
            </button>

          </div>

          {mensaje && <p style={{ marginTop: '10px' }}>{mensaje}</p>}
        </div>
      )}
    </div>
  );
};

export default BotonBaja;
