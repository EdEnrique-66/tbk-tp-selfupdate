import React, { useState, useEffect } from 'react';
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
  const [botonDeshabilitado, setBotonDeshabilitado] = useState(true);
  const [modoCrear, setModoCrear] = useState(false);

  useEffect(() => {
    const todosCompletos = Object.values(formData).every(val => val.trim() !== '');
    const sinErrores = Object.keys(errores).length === 0;
    setBotonDeshabilitado(!(todosCompletos));
  }, [formData, errores]);

  const validar = () => {
    const nuevosErrores = {};
    const soloLetras = /^[a-zA-Z]+$/;
    if (!soloLetras.test(formData.primerNombre)) nuevosErrores.primerNombre = 'Solo letras';
    if (!soloLetras.test(formData.segundoNombre)) nuevosErrores.segundoNombre = 'Solo letras';
    if (!soloLetras.test(formData.primerApellido)) nuevosErrores.primerApellido = 'Solo letras';
    if (!soloLetras.test(formData.segundoApellido)) nuevosErrores.segundoApellido = 'Solo letras';
    /*FALTA LA VALIDACIÓN DE RUT*/
    if (!soloLetras.test(formData.empresa)) nuevosErrores.empresa = 'Solo letras';
    if (!soloLetras.test(formData.subtipo)) nuevosErrores.subtipo = 'Solo letras';
    if (!/^\S+@\S+\.\S+$/.test(formData.correo)) nuevosErrores.correo = 'Correo inválido';
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const enviarDatos = async () => {
    if (!validar()) return;

    try {
      const response = await fetch('https://aec6cb53-810c-4ee4-ba94-f2d2751ff6ab.mock.pstmn.io/users/check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.status === 200) {
        alert('El usuario ya existe');
      } else if (response.status === 404) {
        setModoCrear(true);
      } else {
        alert('Error inesperado');
      }
    } catch (error) {
      console.error('Error al verificar usuario:', error);
    }
  };

  const crearUsuario = async () => {
    try {
      const response = await fetch('https://aec6cb53-810c-4ee4-ba94-f2d2751ff6ab.mock.pstmn.io/users/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Usuario creado exitosamente');
        setFormData({
          primerNombre: '',
          segundoNombre: '',
          primerApellido: '',
          segundoApellido: '',
          rut: '',
          empresa: '',
          subtipo: '',
          correo: ''
        });
        setModoCrear(false);
      } else {
        alert('Error al crear usuario');
      }
    } catch (error) {
      console.error('Error al crear usuario:', error);
    }
  };

  const handleSubmit = () => {
    if (modoCrear) {
      crearUsuario();
    } else {
      enviarDatos();
    }
  };

  return (
    <div className="formulario-alta">
      {Object.keys(formData).map((campo) => (
        <div key={campo} className="formulario-alta">
          <input
            type={campo === 'correo' ? 'email' : 'text'}
            placeholder={campo.charAt(0).toUpperCase() + campo.slice(1)}
            value={formData[campo]}
            onChange={e => setFormData({ ...formData, [campo]: e.target.value })}
          />
          {errores[campo] && <span className="error-mensaje">{errores[campo]}</span>}
        </div>
      ))}

      <div className="botonEnviarAlta">
        {modoCrear && (
          <p className="mensaje-crear">Usuario no encontrado.</p>
        )}
        <button
          onClick={handleSubmit}
          className={`enviar ${modoCrear ? 'botonCrearUsuario' : ''}`}
          disabled={botonDeshabilitado}
        >
          {modoCrear ? 'Crear en EntraID' : 'Enviar'}
        </button>
      </div>

    </div>
  );
};

export default FormularioAlta;

