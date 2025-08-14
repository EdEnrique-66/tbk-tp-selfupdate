import React, { useState } from 'react';
import './BotonBaja.css';

const BotonBaja = () => {
  const [id, setId] = useState('');
  const [datos, setDatos] = useState(null);
  const [error, setError] = useState(null);

  const [fechaBaja, setFechaBaja] = useState(() => {
    const hoy = new Date();
    const yyyy = hoy.getFullYear();
    const mm = String(hoy.getMonth() + 1).padStart(2, '0');
    const dd = String(hoy.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  });

  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);
  
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

      alert ("Usuario dado de baja")

      setEnviado(true); // Desactiva el botón
    } catch (err) {
      setMensaje(`Error: ${err.message}`);
    }
  };

  return (
    <div>
      <div className="buscarIdBaja">
        <input
          type="text"
          placeholder="Ingrese ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button onClick={buscarDatos} className="boton buscar">Buscar</button>

        {error && <p style={{ color: 'red' }}>{error}</p>}

      </div>

      {datos && (
        <>

          <div className="gridDatos">
            {/* desde aqui datos ordenado */}
            <div>
              <label>Primer Nombre:</label>
              <p>{datos.primerNombre}</p>
            </div>
            <div>
              <label>Segundo Nombre:</label>
              <p>{datos.segundoNombre}</p>
            </div>
            <div>
              <label>Primer Apellido:</label>
              <p>{datos.primerApellido}</p>
            </div>
            <div>
              <label>Segundo Apellido:</label>
              <p>{datos.segundoApellido}</p>
            </div>
            <div>
              <label>RUT:</label>
              <p>{datos.rut}</p>
            </div>
            <div>
              <label>Empresa:</label>
              <p>{datos.empresa}</p>
            </div>
            <div>
              <label>Subtipo:</label>
              <p>{datos.subtipo}</p>
            </div>
            <div>
              <label>Correo:</label>
              <p>{datos.correo}</p>
            </div>

          </div>

          {/* hasta aqui */}

          <div style={{ marginTop: '20px' }} className="fechaBaja">
            <label>
              <strong>Fecha de baja:</strong>{' '}
              <input
                type="date"
                value={fechaBaja}
                onChange={(e) => setFechaBaja(e.target.value)}
              />
            </label>
          </div>

          <div style={{ marginTop: '10px' }} className="enviarBaja">

            <button
              onClick={enviarBaja}
              disabled={enviado}
              className="boton enviar"
            >
              {enviado ? 'Enviado' : 'Enviar'}
            </button>

          </div>

          {mensaje && <p style={{ marginTop: '10px' }}>{mensaje}</p>}

        </>
      )}

    </div>
  );
};

export default BotonBaja;