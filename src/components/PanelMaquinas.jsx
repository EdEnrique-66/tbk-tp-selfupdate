// src/components/PanelMaquinas.jsx
import React from 'react';
import './PanelMaquinas.css'; // Importa el CSS aquí

const PanelMaquinas = ({ maquinas, equipo }) => {
  if (!maquinas || maquinas.length === 0) return null;

  return (
    <div className="panel"> {/* Puedes usar una clase para el estilo del panel */}
      <h3>Acceso a Máquinas/Servidores</h3>
      <p>Equipo: {equipo}</p>
      {maquinas.map(maquina => (
        <div key={maquina.id}>
          <p>Máquina/Servidor: {maquina.nombre}</p>
          <label>
            Acceso:
            <input
              type="checkbox"
              checked={maquina.tieneAcceso}
              disabled
            />
          </label>
        </div>
      ))}
    </div>
  );
};

export default PanelMaquinas;