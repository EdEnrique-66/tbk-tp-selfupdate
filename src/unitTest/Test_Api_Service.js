// src/services/Test_ApiServices.js
import ApiService from './ApiService';
import ApiServiceMock from './ApiServiceMock';

class Test_apiServices {
  constructor(service) {
    this.service = service;
  }

  async runTests() {
    console.log(`\n--- Ejecutando pruebas para ${this.service.constructor.name} ---`);
    try {
      const datosUsuario = await this.service.fetchUsuario('123');
      console.log('Test de fetchUsuario exitoso. Datos recibidos:', datosUsuario);
    } catch (error) {
      console.error('Test de fetchUsuario fallido:', error.message);
    }
    console.log(`--- Fin de pruebas para ${this.service.constructor.name} ---\n`);
  }
}

// Ejemplo de uso
const testReal = new Test_apiServices(ApiService);
testReal.runTests();

const testMock = new Test_apiServices(ApiServiceMock);
testMock.runTests();

export default Test_apiServices;