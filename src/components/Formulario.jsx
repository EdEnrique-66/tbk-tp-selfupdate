// src/components/Formulario.jsx
import React, { useState } from 'react';
import useApiData from '../hooks/useApiData';
// mock
import ApiServiceMock from '../services/ApiServiceMock.js'; 
import PanelInformacionSolicitante from './PanelInformacionSolicitante.jsx';
import PanelGrupos from './PanelGrupos.jsx'; // Nuevo componente
import PanelMaquinas from './PanelMaquinas.jsx';
import PanelDXC from './PanelDXC.jsx'
import './Formulario.css';

// instancia del servicio mock fuera del componente
const apiService = ApiServiceMock;

const Formulario = () => {
  const [idSolicitante, setIdSolicitante] = useState('');

  const { data: datosUsuario, loading: userLoading, error: userError } = useApiData(apiService.fetchUsuario, idSolicitante);
  const { data: datosGrupos, loading: gruposLoading, error: gruposError } = useApiData(apiService.fetchGrupos, idSolicitante);
  const { data: datosMaquinas, loading: maquinasLoading, error: maquinasError } = useApiData(apiService.fetchMaquinas, idSolicitante);

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
          placeholder="Ingresa un ID"
        />
      </div>

      {userLoading && <p>Cargando información del solicitante...</p>}
      {userError && <p className="error">Error: {userError}</p>}
      
      {/* Panel 1: Información del Solicitante */}
      {datosUsuario && <PanelInformacionSolicitante datosUsuario={datosUsuario} empresaClass={empresaClass} />}
      {datosUsuario && <PanelDXC  empresaClass={empresaClass} />}


      {/* Panel 2: Listado de Grupos */}
      {datosUsuario && (
        <>
          {gruposLoading && <p>Cargando listado de grupos...</p>}
          {gruposError && <p className="error">Error: {gruposError}</p>}
          {datosGrupos && <PanelGrupos grupos={datosGrupos} />}
        </>
      )}

      {/* Panel 3: Listado de Máquinas */}
      {datosUsuario && (
        <>
          {maquinasLoading && <p>Cargando listado de máquinas...</p>}
          {maquinasError && <p className="error">Error: {maquinasError}</p>}
          {datosMaquinas && <PanelMaquinas maquinas={datosMaquinas} equipo={datosUsuario.equipo} />}
        </>
      )}
    </div>
  );
};

export default Formulario;