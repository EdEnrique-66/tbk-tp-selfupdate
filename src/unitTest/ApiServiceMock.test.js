// src/unitTest/ApiServiceMock.test.js
import { describe, it, expect } from 'vitest';
import ApiServiceMock from '../services/apiServiceMock';

describe('Test_Api_Service - Mock', () => {
  it('debería devolver datos de usuario simulados correctamente', async () => {
    const id = '123';
    const datos = await ApiServiceMock.fetchUsuario(id);
    
    // Verificamos que los datos no sean nulos
    expect(datos).not.toBeNull();
    
    // Verificamos que los datos tengan la estructura correcta
    expect(datos).toHaveProperty('primerNombre');
    expect(datos).toHaveProperty('segundoNombre');
    expect(datos).toHaveProperty('rut');
    expect(datos.primerNombre).toBe('Juan');
  });
});