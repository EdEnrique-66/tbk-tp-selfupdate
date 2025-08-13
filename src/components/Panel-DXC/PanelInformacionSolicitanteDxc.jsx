import React, { useState } from 'react';
import './PanelInformacionSolicitanteDxc.css';
import FormularioAlta from './FormularioAlta';
import BotonModificar from './BotonModificar';
import BotonBaja from './BotonBaja';


const PanelInformacionSolicitanteDxc = ({ datosUsuario, idSolicitante }) => {
  const [botonSeleccionado, setBotonSeleccionado] = useState(null);

  if (!datosUsuario) return null;

  return (
    <div className="panelDxc">
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
          
            <FormularioAlta />
            <div className="contenedorVolver">
            <button className="boton volver" onClick={() => setBotonSeleccionado(null)}>Volver</button>
            </div>
          </div>
        </>
      )}

      {botonSeleccionado === 'modificar' && (
        <>
          <div className="campoDxc">
            <button className="boton modificar" disabled>Modificar</button>
          
          <BotonModificar />
          <div className="contenedorVolver">
            <button className="boton volver" onClick={() => setBotonSeleccionado(null)}>Volver</button>
          </div>
          </div>
        </>
      )}

      {botonSeleccionado === 'baja' && (
        <>
          <div className="campoDxc">
            <button className="boton baja" disabled>Baja</button>
          
          <BotonBaja />
          <div className="contenedorVolver">
            <button className="boton volver" onClick={() => setBotonSeleccionado(null)}>Volver</button>
          </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PanelInformacionSolicitanteDxc;
