import React from 'react';
import './BotonesAccion.css';

function Boton({ nombre, tipoAccion }) {
  const manejarAccion = () => {
    const datos = { nombre };

    let url = '';
    let metodo = '';

    switch (tipoAccion) {
      case 'alta':
        url = 'https://tu-api.com/endpoint';
        metodo = 'POST';
        break;
      case 'modificar':
        url = `https://tu-api.com/endpoint?nombre=${nombre}`;
        metodo = 'GET';
        break;
      case 'baja':
        url = `https://tu-api.com/endpoint/${nombre}`;
        metodo = 'DELETE';
        break;
      default:
        alert('Acción no reconocida');
        return;
    }

    fetch(url, {
      method: metodo,
      headers: {
        'Content-Type': 'application/json'
      },
      body: metodo !== 'GET' ? JSON.stringify(datos) : null
    })
      .then(response => response.json())
      .then(data => {
        console.log('Respuesta del servidor:', data);
        alert(`Acción "${tipoAccion}" completada correctamente`);
      })
      .catch(error => {
        console.error('Error:', error);
        alert(`Error al realizar la acción "${tipoAccion}"`);
      });
  };

  return (
    <button className={`boton ${tipoAccion}`} onClick={manejarAccion}>
      {tipoAccion.charAt(0).toUpperCase() + tipoAccion.slice(1)}
    </button>
  );
}

export default Boton;




