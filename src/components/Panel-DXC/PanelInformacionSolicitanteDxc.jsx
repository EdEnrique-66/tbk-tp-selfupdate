// src/components/Panel-DXC/PanelInformacionSolicitanteDxc.jsx
import React from 'react';
import './PanelInformacionSolicitanteDxc.css';

const PanelInformacionSolicitanteDxc = ({ datosUsuario, idSolicitante }) => {
  if (!datosUsuario) return null;

  return (
    <><div className="panelDxc">
      <div className="campoDxc">
        <label>ID Solicitante:</label>
        <p>{idSolicitante}</p>
      </div>
      <div className="campoDxc">
        <label>Primer Nombre:</label>
        <p>{datosUsuario.primerNombreDxc}</p>
      </div>
      <div className="campoDxc">
        <label>Segundo Nombre:</label>
        <p>{datosUsuario.segundoNombreDxc}</p>
      </div>
      <div className="campoDxc">
        <label>Primer Apellido:</label>
        <p>{datosUsuario.primerApellidoDxc}</p>
      </div>
      <div className="campoDxc">
        <label>Segundo Apellido:</label>
        <p>{datosUsuario.segundoApellidoDxc}</p>
      </div>
      <div className="campoDxc">
        <label>RUT:</label>
        <p>{datosUsuario.rutDxc}</p>
      </div>
      <div className="campoDxc">
        <label>Empresa:</label>
        <p>{datosUsuario.empresaDxc}</p>
      </div>
      <div className="campoDxc">
        <label>Subtipo:</label>
        <p>{datosUsuario.subtipoDxc}</p>
      </div>
      <div className="campoDxc">
        <label>Correo:</label>
        <p>{datosUsuario.correoDxc}</p>
      </div>
      <div className="campoDxc">
        <label>Fecha baja:</label>
        <p>{datosUsuario.fechaBajaDxc}</p>
      </div>
    </div>
</>
  );
};

export default PanelInformacionSolicitanteDxc;