// src/components/PanelDxc.jsx
import React from 'react';
import './PanelDxc.css';

const PanelDxc = ({ formData }) => {
  const {
    idSolicitante,
    primerNombre,
    segundoNombre,
    primerApellido,
    segundoApellido,
    rut,
    empresa,
    subtipo,
    correo,
    fechaBaja,
    grupos = [],
    maquinas = [],
  } = formData || {
    idSolicitante: "", // Valor por defecto
    primerNombre: "",
    segundoNombre: "",
    primerApellido: "",
    segundoApellido: "",
    rut: "",
    empresa: "DXC",
    subtipo: "",
    correo: "",
    fechaBaja: "",
    grupos: [],
    maquinas: [],
  };

  const handleGenerarJson = () => {
    const jsonData = {
      informacionSolicitante: {
        idSolicitante,
        primerNombre,
        segundoNombre,
        primerApellido,
        segundoApellido,
        rut,
        empresa,
        subtipo,
        correo,
        fechaBaja,
      },
      listadoDePermisos: {
        grupos: grupos.map(g => ({ nombre: g.nombre })),
        maquinas: maquinas.map(m => ({ nombre: m.nombre, tieneAcceso: m.tieneAcceso })),
      },
      accion: "", 
    };
    console.log(JSON.stringify(jsonData, null, 2));
    alert("JSON generado (ver consola)");
  };

  const handleAccion = (accion) => {
    const jsonData = {
      informacionSolicitante: {
        idSolicitante,
        primerNombre,
        segundoNombre,
        primerApellido,
        segundoApellido,
        rut,
        empresa,
        subtipo,
        correo,
        fechaBaja,
      },
      listadoDePermisos: {
        grupos: grupos.map(g => ({ nombre: g.nombre })),
        maquinas: maquinas.map(m => ({ nombre: m.nombre, tieneAcceso: m.tieneAcceso })),
      },
      accion: accion,
    };
    console.log(JSON.stringify(jsonData, null, 2));
    alert(`Acción: ${accion} (ver consola)`);
  };

  return (
    <div className="panel dxc-panel">
      <div className="dxc-header">
        <h3>Información Adicional Usuario</h3>
        <div className="id-solicitante-display">
          <label>ID Usuario:</label>
          <span>{idSolicitante}</span>
        </div>
      </div>
      <div className="datos-container">
        <div className="dato-item">
          <label>Primer Nombre:</label>
          <span>{primerNombre}</span>
        </div>
        <div className="dato-item">
          <label>Segundo Nombre:</label>
          <span>{segundoNombre}</span>
        </div>
        <div className="dato-item">
          <label>Primer Apellido:</label>
          <span>{primerApellido}</span>
        </div>
        <div className="dato-item">
          <label>Segundo Apellido:</label>
          <span>{segundoApellido}</span>
        </div>
        <div className="dato-item">
          <label>RUT:</label>
          <span>{rut}</span>
        </div>
        <div className="dato-item">
          <label>Empresa:</label>
          <span>{empresa}</span>
        </div>
        <div className="dato-item">
          <label>Subtipo:</label>
          <span>{subtipo}</span>
        </div>
        <div className="dato-item">
          <label>Correo:</label>
          <span>{correo}</span>
        </div>
        <div className="dato-item">
          <label>Fecha Baja:</label>
          <span>{fechaBaja}</span>
        </div>
      </div>
      <div className="botones-container">
        <button onClick={() => handleAccion("Alta")} className="boton alta">Alta</button>
        <button onClick={() => handleAccion("Modificar")} className="boton modificar">Modificar</button>
        <button onClick={() => handleAccion("Baja")} className="boton baja">Baja</button>
        <button onClick={handleGenerarJson} className="boton generar">Generar en EntraID (o AD)</button>
      </div>
    </div>
  );
};

export default PanelDxc;