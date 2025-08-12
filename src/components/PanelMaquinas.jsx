import React from 'react';
import './PanelMaquinas.css';

const PanelMaquinas = ({ maquinas }) => {
  if (!maquinas || maquinas.length === 0) return null;

  return (
    <div className="panel">
      <h3>Acceso a Máquinas/Servidores</h3>
      <div className="maquinas-container">
        {maquinas.map(maquina => (
          <div key={maquina.id} className="maquina-item">
            <label>
              <input
                type="checkbox"
                checked={maquina.tieneAcceso}
                enabled
              />
              <p>{maquina.nombre}</p>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PanelMaquinas;