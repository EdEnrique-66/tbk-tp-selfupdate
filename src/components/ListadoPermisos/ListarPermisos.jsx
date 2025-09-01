import React from 'react';
import './ListarPermisos.css';

const opciones = [
  ['Opción 1A', 'Opción 1B', 'Opción 1C'],
  ['Opción 2A', 'Opción 2B', 'Opción 2C'],
  ['Opción 3A', 'Opción 3B', 'Opción 3C']
];

const ListarPermisos = () => {
  return (

    <div className="panelPermisos">
      <div className="tituloPanelPermisos">
        <p>Listado de Permisos: </p>
      </div>

      {opciones.map((columna, index) => (
        <div key={index} className="columnaPermisos">
          {columna.map((opcion, i) => (
            <label key={i} className="casillaPermisos">
              <input type="checkbox" />
              {opcion}
            </label>
          ))}
        </div>
      ))}
    </div>

  );
};

export default ListarPermisos;
