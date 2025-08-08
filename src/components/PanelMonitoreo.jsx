// src/components/PanelMonitoreo.jsx
import React from 'react';

const PanelMonitoreo = ({ datosMonitoreo }) => {
  if (!datosMonitoreo) return null;

  return (
    <div>
      <h3>Datos de Monitoreo</h3>
      <p>Cantidad de Request: {datosMonitoreo.cantidadRequest}</p>
      <p>Cantidad de Fallos: {datosMonitoreo.cantidadFallos}</p>
      <p>Usuarios Inactivos: {datosMonitoreo.usuariosInactivos}</p>
    </div>
  );
};

export default PanelMonitoreo;