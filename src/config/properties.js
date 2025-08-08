// src/config/properties.js
export const API_URLS = {
  usuario: 'https://jsonplaceholder.typicode.com/users', // Ejemplo de una API pública
  monitoreo: 'https://api.example.com/monitoreo',
  maquinas: 'https://api.example.com/maquinas',
};

export const ERROR_MESSAGES = {
  general: 'Ocurrió un error inesperado. Por favor, inténtalo de nuevo más tarde.',
  usuarioNotFound: 'No se encontró el usuario solicitado con ese ID.',
};

export const LOG_MESSAGES = {
  fetchStart: (endpoint) => `Iniciando consulta a la API: ${endpoint}`,
  fetchSuccess: (endpoint) => `Consulta exitosa para: ${endpoint}`,
  fetchError: (endpoint, error) => `Error en la consulta a la API ${endpoint}: ${error}`,
};