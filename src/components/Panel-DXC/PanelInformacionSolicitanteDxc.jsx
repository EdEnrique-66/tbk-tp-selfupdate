import React, { useState } from 'react';
import './PanelInformacionSolicitanteDxc.css';
import FormularioAlta from './FormularioAlta';
import BotonModificar from './BotonModificar';
import BotonBaja from './BotonBaja';
// import idSolicitante from '../Formulario'


const PanelInformacionSolicitanteDxc = ({ datosUsuario, idSolicitante} ) => {
  const [botonSeleccionado, setBotonSeleccionado] = useState(null);

  if (!datosUsuario) return null;

  return (
    <div className="panelDxc">

      <div className="CampoDxc">
        <p className="idSolicitante">ID Solicitante: {idSolicitante}</p>
      </div>

      {botonSeleccionado === null && (
        <>
          <div className="campoDxc">
            <button
              className="boton alta"
              onClick={() => setBotonSeleccionado('alta')}
            >
              Alta
            </button>
          </div>
          <div className="campoDxc">
            <button
              className="boton modificar"
              onClick={() => setBotonSeleccionado('modificar')}
            >
              Modificar
            </button>
          </div>
          <div className="campoDxc">
            <button
              className="boton baja"
              onClick={() => setBotonSeleccionado('baja')}
            >
              Baja
            </button>
          </div>
        </>
      )}

      {botonSeleccionado === 'alta' && (
        <>
          <div className="campoDxc">
            <button className="boton alta" disabled>Alta</button>
          </div>
          <div className="contenedorDatos">
            <FormularioAlta />
          </div>
          <div className="contenedorVolver">
            <button className="boton volver" onClick={() => setBotonSeleccionado(null)}>Volver</button>
          </div>
        </>
      )}

      {botonSeleccionado === 'modificar' && (
        <>
          <div className="campoDxc">
            <button className="boton modificar" disabled>Modificar</button>
          </div>

          <div className="contenedorDatos">
            <BotonModificar />
          </div>
          <div className="contenedorVolver">
            <button className="boton volver" onClick={() => setBotonSeleccionado(null)}>Volver</button>
          </div>
        </>
      )}

      {botonSeleccionado === 'baja' && (
        <>
          <div className="campoDxc">
            <button className="boton baja" disabled>Baja</button>
          </div>
          <div className="contenedorDatos">
            <BotonBaja />
          </div>
          <div className="contenedorVolver">
            <button className="boton volver" onClick={() => setBotonSeleccionado(null)}>Volver</button>
          </div>
        </>
      )}
    </div>
  );
};

export default PanelInformacionSolicitanteDxc;
