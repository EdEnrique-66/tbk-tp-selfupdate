// src/config/properties.js

// URLS de la API
export const API_URLS = {
  usuario: 'https://jsonplaceholder.typicode.com/users', // Ejemplo de una API pública
  monitoreo: 'https://api.example.com/monitoreo',
  maquinas: 'https://api.example.com/maquinas',
};

// Mensajes de error
export const ERROR_MESSAGES = {
  general: 'Ocurrió un error inesperado. Por favor, inténtalo de nuevo más tarde.',
  usuarioNotFound: 'No se encontró el usuario solicitado con ese ID.',
};

// Mensajes para el log de la consola
export const LOG_MESSAGES = {
  fetchStart: (endpoint) => `Iniciando consulta a la API: ${endpoint}`,
  fetchSuccess: (endpoint) => `Consulta exitosa para: ${endpoint}`,
  fetchError: (endpoint, error) => `Error en la consulta a la API ${endpoint}: ${error}`,
};

// Nombres de los campos del formulario
export const FORM_FIELDS = {
  // Panel 1: Información del Solicitante
  SOLICITANTE: {
    id: 'ID solicitante',
    primerNombre: 'Primer Nombre',
    segundoNombre: 'Segundo Nombre',
    primerApellido: 'Primer Apellido',
    segundoApellido: 'Segundo Apellido',
    rut: 'RUT',
    empresa: 'Empresa',
    subtipo: 'Subtipo',
    correo: 'Correo',
    fechaBaja: 'Fecha baja',
    equipo: 'Equipo',
    seHeredaDelHost: 'Se hereda del Host',
  },
  // Panel 2: Listado de Permisos
  PERMISOS: {
    grupos: 'Grupos',
    maquinas: 'Maquinas',
  },
  // Panel 3: Información Adicional
  ADICIONAL: {
    gerencia: 'Gerencia TBK',
    tipoDeAcceso: 'Tipo de Acceso',
    informacionSensible: 'Información sensible',
    ensobrado: 'Ensobrado',
    informacionOfimatica: 'Información ofimática',
    ambiente: 'Ambiente',
    fechaInicio: 'Fecha Inicio',
    fechaFin: 'Fecha Fin',
    accesoACorreo: 'Acceso a correo',
  },
};