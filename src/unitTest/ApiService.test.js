// src/unitTest/ApiService.test.js
import { describe, it, expect } from 'vitest';
import ApiService from '../services/apiService';

describe('Test_Api_Service - Real', () => {
  it('debería fallar al intentar obtener un usuario que no existe', async () => {
    // Es el comportamiento esperado que esta llamada falle
    await expect(ApiService.fetchUsuario('999')).rejects.toThrow();
  });
});