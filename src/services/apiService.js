// src/services/apiService.js
import { API_URLS, ERROR_MESSAGES, LOG_MESSAGES } from '../config/properties';

// Objeto con datos simulados
const mockData = {
  informacionSolicitante: {
    primerNombre: "Juan",
    segundoNombre: "Carlos",
    primerApellido: "Perez",
    segundoApellido: "Gomez",
    rut: "12.345.678-9",
    empresa: "Transbank",
    subtipo: "TBK",
    correo: "jc.perez@transbank.cl",
    fechaBaja: "20/05/2030",
    equipo: "SRE",
    seHeredaDelHost: true
  },
  listadoDePermisos: {
    grupos: [
      { nombre: "R-SRE-PLATAFORMA" },
      { nombre: "R-PE-DXC" },
      { nombre: "R-SRE-PLATAFORMA" },
    ],
    maquinas: [
      { nombre: "Pivote s1-aus-ses", seleccionado: true },
      { nombre: "UNIX", seleccionado: false },
      { nombre: "DBA", seleccionado: true },
    ]
  },
  informacionAdicional: {
    gerencia: "Gerencia de Producción",
    tipoDeAcceso: "Temporal",
    informacionSensible: false,
    ensobrado: false,
    informacionOfimatica: false,
    ambiente: "Prod/Dev/QA",
    fechaInicio: "20/05/2025",
    fechaFin: "20/11/2025",
    accesoACorreo: false
  }
};

export const fetchUsuario = async (idSolicitante) => {
  // Comentamos la llamada a la API real
  // console.log(LOG_MESSAGES.fetchStart(API_URLS.usuario));
  // try {
  //   const response = await fetch(`${API_URLS.usuario}/${idSolicitante}`);
  //   if (!response.ok) {
  //     throw new Error(ERROR_MESSAGES.usuarioNotFound);
  //   }
  //   const data = await response.json();
  //   console.log(LOG_MESSAGES.fetchSuccess(API_URLS.usuario));
  //   return data;
  // } catch (error) {
  //   console.error(LOG_MESSAGES.fetchError(API_URLS.usuario, error));
  //   throw new Error(ERROR_MESSAGES.general);
  // }

  // Usamos los datos simulados y resolvemos la promesa para imitar el comportamiento asíncrono
  return new Promise((resolve, reject) => {
    // Simulamos un tiempo de espera
    setTimeout(() => {
      if (idSolicitante) {
        // En un caso real, aquí validarías el ID
        resolve(mockData.informacionSolicitante);
      } else {
        // Opcional: simular un error si no hay ID
        reject(new Error("ID de solicitante no proporcionado."));
      }
    }, 500);
  });
};

export const fetchMonitoreo = async (idUsuario) => {
  // Aquí puedes agregar datos dummy para monitoreo
  const monitoreoDummy = {
    cantidadRequest: 500,
    cantidadFallos: 15,
    usuariosInactivos: 3
  };
  return new Promise((resolve) => setTimeout(() => resolve(monitoreoDummy), 500));
};

export const fetchMaquinas = async (idUsuario) => {
  // Aquí puedes agregar datos dummy para máquinas
  const maquinasDummy = mockData.listadoDePermisos.maquinas;
  return new Promise((resolve) => setTimeout(() => resolve(maquinasDummy), 500));
};