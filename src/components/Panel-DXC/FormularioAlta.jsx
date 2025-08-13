import React, { useState } from 'react';
import './FormularioAlta.css';

const FormularioAlta = () => {
  const [formData, setFormData] = useState({
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    rut: '',
    empresa: '',
    subtipo: '',
    correo: ''
  });
  const [errores, setErrores] = useState({});

  const validar = () => {
    const nuevosErrores = {};
    if (!/^[a-zA-Z]+$/.test(formData.primerNombre)) {
      nuevosErrores.primerNombre = 'El primer nombre debe contener solo letras';
    }
    if (!/^[a-zA-Z]+$/.test(formData.segundoNombre)) {
      nuevosErrores.segundoNombre = 'El segundo nombre debe contener solo letras';
    }
    if (!/^[a-zA-Z]+$/.test(formData.primerApellido)) {
      nuevosErrores.primerApellido = 'El primer apellido debe contener solo letras';
    }
    if (!/^[a-zA-Z]+$/.test(formData.segundoApellido)) {
      nuevosErrores.segundoApellido = 'El segundo apellido debe contener solo letras';
    }
    /*Corregir esto para dar formato al rut*/
    if (!/^\d+$/.test(formData.rut)) {
      nuevosErrores.rut = 'El rut debe contener solo números';
    }
    if (!/^[a-zA-Z]+$/.test(formData.empresa)) {
      nuevosErrores.empresa = 'La empresa debe contener solo letras';
    }
    if (!/^[a-zA-Z]+$/.test(formData.subtipo)) {
      nuevosErrores.subtipo = 'El subtipo debe contener solo letras';
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.correo)) {
      nuevosErrores.correo = 'El correo electrónico no es válido';
    }
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const enviarDatos = () => {
    if (!validar()) return;

    fetch('https://tu-api.com/endpoint', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        alert('Datos enviados correctamente');
        setFormData({ primerNombre: '',segundoNombre: '', primerApellido: '', segundoApellido: '', rut: '', empresa: '', subtipo: '', correo: '' });
      })
      .catch(err => {
        console.error(err);
        alert('Error al enviar los datos');
      });
  };

  return (
    <div className="formulario-alta">
      <input
        type="text"
        placeholder="Primer Nombre"
        value={formData.primerNombre}
        onChange={e => setFormData({ ...formData, primerNombre: e.target.value })}
      />
      {errores.primerNombre && <span>{errores.primerNombre}</span>}

      <input
        type="text"
        placeholder="Segundo Nombre"
        value={formData.segundoNombre}
        onChange={e => setFormData({ ...formData, segundoNombre: e.target.value })}
      />
      {errores.segundoNombre && <span>{errores.segundoNombre}</span>}

      <input
        type="text"
        placeholder="Primer Apellido"
        value={formData.primerApellido}
        onChange={e => setFormData({ ...formData, primerApellido: e.target.value })}
      />
      {errores.primerApellido && <span>{errores.primerApellido}</span>}

      <input
        type="text"
        placeholder="Segundo Apellido"
        value={formData.segundoApellido}
        onChange={e => setFormData({ ...formData, segundoApellido: e.target.value })}
      />
      {errores.segundoApellido && <span>{errores.segundoApellido}</span>}

      <input
        type="text"
        placeholder="Rut"
        value={formData.rut}
        onChange={e => setFormData({ ...formData, rut: e.target.value })}
      />
      {errores.rut && <span>{errores.rut}</span>}

      <input
        type="text"
        placeholder="Empresa"
        value={formData.empresa}
        onChange={e => setFormData({ ...formData, empresa: e.target.value })}
      />
      {errores.empresa && <span>{errores.empresa}</span>}

      <input
        type="text"
        placeholder="Subtipo"
        value={formData.subtipo}
        onChange={e => setFormData({ ...formData, subtipo: e.target.value })}
      />
      {errores.empresa && <span>{errores.subtipo}</span>}

      <input
        type="email"
        placeholder="Correo Electrónico"
        value={formData.correo}
        onChange={e => setFormData({ ...formData, correo: e.target.value })}
      />
      {errores.correo && <span>{errores.correo}</span>}

      <button onClick={enviarDatos} className="enviar">Enviar</button>
    </div>
  );
};

export default FormularioAlta;
