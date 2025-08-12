// src/services/ApiServiceMock.js

// Objeto con datos simulados (dummy data)
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
    seHeredaDelHost: true,

    primerNombreDxc: "Pedro",
    segundoNombreDxc: "Pablo",
    primerApellidoDxc: "Veliz",
    segundoApellidoDxc: "Guerrero",
    rutDxc: "17.671.981-9",
    empresaDxc: "DXC",
    subtipoDxc: "DXC",
    correoDxc: "pedro.v.guerrero@dxc.com",
    fechaBajaDxc: "20/05/2030",

  },
};

class ApiServiceMock {
  async fetchUsuario(idSolicitante) {
    return new Promise((resolve) => {
      // Simula un tiempo de espera
      setTimeout(() => {
        console.log(`Mocking fetchUsuario con ID: ${idSolicitante}`);
        resolve(mockData.informacionSolicitante);
      }, 500);
    });
  }

  async fetchMonitoreo(idUsuario) {
    // Lógica para el servicio mock de monitoreo
    // ...
  }

  async fetchMaquinas(idUsuario) {
    // Lógica para el servicio mock de máquinas
    // ...
  }
}

export default new ApiServiceMock();