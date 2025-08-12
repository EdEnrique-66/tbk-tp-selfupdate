import React from 'react';
import './PanelGrupos.css';

const PanelGrupos = ({ grupos }) => {
  if (!grupos || grupos.length === 0) return null;

  return (
    <div className="panel">
      <h3>Listado de Permisos: Grupos</h3>
      <div className="grupos-container">
        {grupos.map(grupo => (
          <div key={grupo.id} className="grupo-item">
            <label>
              <input
                type="checkbox"
                disabled
              />
              <p>{grupo.nombre}</p>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PanelGrupos;