// src/components/Panel-Transbank/PanelInformacionSolicitante.jsx
import React from 'react';
import './PanelInformacionSolicitante.css';

const PanelInformacionSolicitante = ({ datosUsuario }) => {
  if (!datosUsuario) return null;

  return (
    <><div className="panelSolicitante">
      <div className="campoSolicitante">
        <label>Primer Nombre:</label>
        <p>{datosUsuario.primerNombre}</p>
      </div>
      <div className="campoSolicitante">
        <label>Segundo Nombre:</label>
        <p>{datosUsuario.segundoNombre}</p>
      </div>
      <div className="campoSolicitante">
        <label>Primer Apellido:</label>
        <p>{datosUsuario.primerApellido}</p>
      </div>
      <div className="campoSolicitante">
        <label>Segundo Apellido:</label>
        <p>{datosUsuario.segundoApellido}</p>
      </div>
      <div className="campoSolicitante">
        <label>RUT:</label>
        <p>{datosUsuario.rut}</p>
      </div>
      <div className="campoSolicitante">
        <label>Empresa:</label>
        <p>{datosUsuario.empresa}</p>
      </div>
      <div className="campoSolicitante">
        <label>Subtipo:</label>
        <p>{datosUsuario.subtipo}</p>
      </div>
      <div className="campoSolicitante">
        <label>Correo:</label>
        <p>{datosUsuario.correo}</p>
      </div>
      <div className="campoSolicitante">
        <label>Fecha baja:</label>
        <p>{datosUsuario.fechaBaja}</p>
      </div>
    </div>
    </>
  );
};

export default PanelInformacionSolicitante;