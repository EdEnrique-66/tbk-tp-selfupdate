// src/services/apiService.js
import { API_URLS, ERROR_MESSAGES, LOG_MESSAGES } from '../config/properties';

class ApiService {
  async fetchUsuario(idSolicitante) {
    console.log(LOG_MESSAGES.fetchStart(API_URLS.usuario));
    try {
      const response = await fetch(`${API_URLS.usuario}/${idSolicitante}`);
      if (!response.ok) {
        throw new Error(ERROR_MESSAGES.usuarioNotFound);
      }
      const data = await response.json();
      console.log(LOG_MESSAGES.fetchSuccess(API_URLS.usuario));
      return data;
    } catch (error) {
      console.error(LOG_MESSAGES.fetchError(API_URLS.usuario, error));
      throw new Error(ERROR_MESSAGES.general);
    }
  }

  async fetchMonitoreo(idUsuario) {
    // Lógica para el servicio real de monitoreo
    // ...
  }

  async fetchMaquinas(idUsuario) {
    // Lógica para el servicio real de máquinas
    // ...
  }
}

export default new ApiService();