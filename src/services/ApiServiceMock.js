// src/services/ApiServiceMock.js

// Datos simulados para el caso "TBK"
const mockDataTBK = {
  informacionSolicitante: {
    primerNombre: "Juan",
    segundoNombre: "Juanin",
    primerApellido: "Perez",
    segundoApellido: "Perin",
    rut: "12.345.678-9",
    empresa: "TBK",
    subtipo: "TBK",
    correo: "jperez@transbank.cl",
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
  listadoDePermisos: {
    grupos: [{ id: 1, nombre: "R-SRE-PLATAFORMA" }],
    maquinas: [{ id: 1, nombre: "Pivote s1-aus-ses", tieneAcceso: true }],
  },
};

// Datos simulados para el caso "DXC" (solo los campos que se traerán de forma asíncrona)
const mockDataDXC = {
  informacionSolicitante: {
    empresa: "DXC",
    subtipo: "DXC",
    fechaBaja: "20/05/2030",
  },
  listadoDePermisos: {
    grupos: [
      { id: 2, nombre: "R-SRE-PLATAFORMA" },
      { id: 3, nombre: "R-PE-DXC" },
    ],
    maquinas: [
      { id: 2, nombre: "UNIX", tieneAcceso: false },
      { id: 3, nombre: "DBA", tieneAcceso: true },
    ],
  },
};

class ApiServiceMock {
  async fetchUsuario(idSolicitante) {
    return new Promise((resolve) => {
      // Simula el fetching de TBK, no importa el ID
      setTimeout(() => {
        console.log(`Mocking fetchUsuario (TBK) con ID: ${idSolicitante}`);
        resolve(mockDataTBK.informacionSolicitante);
      }, 500);
    });
  }

  async fetchUsuarioDXC(idSolicitante) {
    return new Promise((resolve) => {
      // Simula el fetching de los datos de DXC
      setTimeout(() => {
        console.log(`Mocking fetchUsuarioDXC con ID: ${idSolicitante}`);
        resolve(mockDataDXC.informacionSolicitante);
      }, 500);
    });
  }

  async fetchMaquinas(idUsuario) {
    return new Promise((resolve) => setTimeout(() => {
      console.log(`Mocking fetchMaquinas con ID: ${idUsuario}`);
      // Lógica para devolver datos TBK o DXC
      if (idUsuario.toLowerCase() === 'tbk') {
        resolve(mockDataTBK.listadoDePermisos.maquinas);
      } else {
        resolve(mockDataDXC.listadoDePermisos.maquinas);
      }
    }, 500));
  }
  
  async fetchGrupos(idUsuario) {
    return new Promise((resolve) => setTimeout(() => {
      console.log(`Mocking fetchGrupos con ID: ${idUsuario}`);
      // Lógica para devolver datos TBK o DXC
      if (idUsuario.toLowerCase() === 'tbk') {
        resolve(mockDataTBK.listadoDePermisos.grupos);
      } else {
        resolve(mockDataDXC.listadoDePermisos.grupos);
      }
    }, 500));
  }
}

export default new ApiServiceMock();