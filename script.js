// 1) Importar Zod correctamente desde ESM CDN
import { z } from 'https://esm.sh/zod@3.22.4';

// 2) Definir esquema de validación
const registrationSchema = z.object({
  name:     z.string().min(1,  { message: 'El nombre es obligatorio.' }),
  email:    z.string().email({ message: 'El correo no es válido.' }),
  password: z.string().min(6,  { message: 'La contraseña debe tener al menos 6 caracteres.' })
});

// 3) Referencias al DOM
const form          = document.getElementById('registration-form');
const errorName     = document.getElementById('error-name');
const errorEmail    = document.getElementById('error-email');
const errorPassword = document.getElementById('error-password');

// 4) Manejador de submit
form.addEventListener('submit', e => {
  e.preventDefault();

  // Limpiar errores previos
  errorName.textContent     = '';
  errorEmail.textContent    = '';
  errorPassword.textContent = '';

  // Datos del formulario
  const formData = {
    name:     form.name.value.trim(),
    email:    form.email.value.trim(),
    password: form.password.value
  };

  // Validar
  const result = registrationSchema.safeParse(formData);

  if (!result.success) {
    // Mostrar cada mensaje junto al campo
    result.error.errors.forEach(err => {
      const field = err.path[0];
      const msg   = err.message;
      if (field === 'name')     errorName.textContent     = msg;
      if (field === 'email')    errorEmail.textContent    = msg;
      if (field === 'password') errorPassword.textContent = msg;
    });
  } else {
    // Éxito
    alert('¡Registro exitoso!');
    form.reset();
  }
});
