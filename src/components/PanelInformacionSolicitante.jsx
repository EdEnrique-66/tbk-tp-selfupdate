// src/components/PanelInformacionSolicitante.jsx
import React from 'react';
import './PanelInformacionSolicitante.css';

const PanelInformacionSolicitante = ({ datosUsuario }) => {
  if (!datosUsuario) return null;

  return (
    <div className="panel">
      <div className="campo">
        <label>Primer Nombre:</label>
        <p>{datosUsuario.primerNombre}</p>
      </div>
      <div className="campo">
        <label>Segundo Nombre:</label>
        <p>{datosUsuario.segundoNombre}</p>
      </div>
      <div className="campo">
        <label>Primer Apellido:</label>
        <p>{datosUsuario.primerApellido}</p>
      </div>
      <div className="campo">
        <label>Segundo Apellido:</label>
        <p>{datosUsuario.segundoApellido}</p>
      </div>
      <div className="campo">
        <label>RUT:</label>
        <p>{datosUsuario.rut}</p>
      </div>
      <div className="campo">
        <label>Empresa:</label>
        <p>{datosUsuario.empresa}</p>
      </div>
      <div className="campo">
        <label>Subtipo:</label>
        <p>{datosUsuario.subtipo}</p>
      </div>
      <div className="campo">
        <label>Correo:</label>
        <p>{datosUsuario.correo}</p>
      </div>
      <div className="campo">
        <label>Fecha baja:</label>
        <p>{datosUsuario.fechaBaja}</p>
      </div>
    </div>
  );
};

export default PanelInformacionSolicitante;