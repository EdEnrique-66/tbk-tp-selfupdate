import React, { useState } from 'react';
import './PanelInformacionSolicitanteDxc.css';
import Boton from './BotonesAccion';
import FormularioAlta from './FormularioAlta';

const PanelInformacionSolicitanteDxc = ({ datosUsuario, idSolicitante }) => {
  const [botonSeleccionado, setBotonSeleccionado] = useState(null);

  if (!datosUsuario) return null;

  return (
    <div className="panelDxc">
      {botonSeleccionado === null && (
        <>
          <div className="campoDxc botonAlta">
            <button
              className="boton alta"
              onClick={() => setBotonSeleccionado('alta')}
            >
              Alta
            </button>
          </div>
          <div className="campoDxc botonModificar">
            <button
              className="boton modificar"
              onClick={() => setBotonSeleccionado('modificar')}
            >
              Modificar
            </button>
          </div>
          <div className="campoDxc botonBaja">
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
          <div className="campoDxc botonAlta">
            <button className="boton alta" disabled>Alta</button>
          
            <FormularioAlta />
            <div className="contenedorVolver">
            <button className="boton volver" onClick={() => setBotonSeleccionado(null)}>Volver</button>
            </div>
          </div>
        </>
      )}

      {botonSeleccionado === 'modificar' && (
        <>
          <div className="campoDxc botonModificar">
            <button className="boton modificar" disabled>Modificar</button>
          </div>
          <Boton nombre="modificar" tipoAccion="modificar" />
          <div className="contenedorVolver">
            <button className="boton volver" onClick={() => setBotonSeleccionado(null)}>Volver</button>
          </div>
        </>
      )}

      {botonSeleccionado === 'baja' && (
        <>
          <div className="campoDxc botonBaja">
            <button className="boton baja" disabled>Baja</button>
          </div>
          <Boton nombre="baja" tipoAccion="baja" />
          <div className="contenedorVolver">
            <button className="boton volver" onClick={() => setBotonSeleccionado(null)}>Volver</button>
          </div>
        </>
      )}
    </div>
  );
};

export default PanelInformacionSolicitanteDxc;
