// src/components/Justificacion.jsx
import React from 'react';
import './Justificacion.css';

const Justificacion = ({ justificacion, setJustificacion }) => {
  return (
    <div className="panel justificacion-panel">
      <h3>Justificación</h3>
      <div className="comentario-container">
        <textarea
          className="comentario-textarea"
          value={justificacion}
          onChange={(e) => setJustificacion(e.target.value)}
          placeholder="Escribe aquí tu justificación..."
        />
      </div>
    </div>
  );
};

export default Justificacion;