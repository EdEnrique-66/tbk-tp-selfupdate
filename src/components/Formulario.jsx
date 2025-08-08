// src/components/Formulario.jsx
import React, { useState } from 'react';
import useApiData from '../hooks/useApiData';
import { fetchUsuario } from '../services/apiService';
import PanelInformacionSolicitante from './PanelInformacionSolicitante.jsx';
import './Formulario.css'; // ¡Asegúrate de que esta línea esté presente!

const Formulario = () => {
  const [idSolicitante, setIdSolicitante] = useState('');
  const { data: datosUsuario, loading: userLoading, error: userError } = useApiData(fetchUsuario, idSolicitante);

  return (
    <div className="formulario-container">
      <h2>self service</h2>

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
      
      {datosUsuario && <PanelInformacionSolicitante datosUsuario={datosUsuario} />}
    </div>
  );
};

export default Formulario;