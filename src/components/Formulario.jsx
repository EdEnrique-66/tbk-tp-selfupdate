import React, { useState } from 'react';
import useApiData from '../hooks/useApiData';
// mock
import ApiServiceMock from '../services/ApiServiceMock.js'; 
import PanelInformacionSolicitante from './PanelInformacionSolicitante.jsx';
import PanelGrupos from './PanelGrupos.jsx'; // Nuevo componente
import PanelMaquinas from './PanelMaquinas.jsx';
import PanelDXC from './PanelDXC.jsx'
import Justificacion from './Justificacion.jsx';
import './Formulario.css';

// instancia del servicio mock fuera del componente
const apiService = ApiServiceMock;

const Formulario = () => {
  const [idSolicitante, setIdSolicitante] = useState('');
  const [justificacion, setJustificacion] = useState('');

  // Lógica para determinar si se debe hacer la llamada a la API
  const shouldFetch = idSolicitante !== '';

  const { data: datosUsuario, loading: userLoading, error: userError } = useApiData(apiService.fetchUsuario, shouldFetch ? idSolicitante : null);
  const { data: datosGrupos, loading: gruposLoading, error: gruposError } = useApiData(apiService.fetchGrupos, shouldFetch ? idSolicitante : null);
  const { data: datosMaquinas, loading: maquinasLoading, error: maquinasError } = useApiData(apiService.fetchMaquinas, shouldFetch ? idSolicitante : null);

  // Determinar la clase CSS según la empresa
  const empresaClass = datosUsuario?.empresa === 'TBK' ? 'tbk' : 'dxc';

  return (
    <div className="formulario-container">
      <h2>self service</h2>

      {/* Campo de entrada para el ID del solicitante */}
      <div>
        <label>ID solicitante:</label>
        <input
          type="text"
          value={idSolicitante}
          onChange={(e) => setIdSolicitante(e.target.value)}
          placeholder="Ingresa TBK o DXC"
        />
      </div>

      {/* Panel de DXC (siempre visible, con datos combinados) */}
      <PanelDXC formData={{ ...datosUsuario, idSolicitante, justificacion }} />

      {/* Panel de TBK (visible solo al buscar) */}
      {userLoading && <p>Cargando información del solicitante...</p>}
      {userError && <p className="error">Error: {userError}</p>}
      {datosUsuario && <PanelInformacionSolicitante datosUsuario={datosUsuario} empresaClass={empresaClass} />}
      
      {/* Contenedor para los paneles de Grupos y Máquinas (uno al lado del otro) */}
      {datosUsuario && (
        <>
          <div className="permisos-container">
            {/* Panel de Grupos */}
            {gruposLoading && <p>Cargando listado de grupos...</p>}
            {gruposError && <p className="error">Error: {gruposError}</p>}
            {datosGrupos && <PanelGrupos grupos={datosGrupos} />}
            
            {/* Separador */}
            <div className="separador"></div>
            
            {/* Panel de Máquinas */}
            {maquinasLoading && <p>Cargando listado de máquinas...</p>}
            {maquinasError && <p className="error">Error: {maquinasError}</p>}
            {datosMaquinas && <PanelMaquinas maquinas={datosMaquinas} equipo={datosUsuario.equipo} />}
          </div>

          {/* Panel de Justificación */}
          <Justificacion justificacion={justificacion} setJustificacion={setJustificacion} />
        </>
      )}
    </div>
  );
};

export default Formulario;