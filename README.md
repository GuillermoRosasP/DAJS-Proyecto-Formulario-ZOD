# Formulario de Registro con Validación en Zod

Este proyecto es un formulario de registro web que valida los datos del usuario utilizando la biblioteca Zod (https://zod.dev/), una herramienta poderosa y declarativa para validación de esquemas en JavaScript.

## Características

Validación en el cliente antes de enviar los datos  
Mensajes de error claros junto a cada campo  
Estilo limpio y responsivo con CSS puro  
Uso de Zod a través de CDN moderno (ESM)

## Campos del formulario

Nombre: Campo obligatorio (al menos 1 carácter)  
Correo electrónico: Debe ser un email válido  
Contraseña: Mínimo 6 caracteres

## Estructura del proyecto

registro-zod/  
├── index.html (Estructura del formulario)  
├── style.css (Estilos visuales del formulario)  
├── script.js (Lógica y validación con Zod)  
└── .gitignore (Ignora node_modules, .env, etc.)

## Tecnologías usadas

HTML5  
CSS3  
JavaScript (ESM)  
Zod 3.22.4 vía CDN: https://esm.sh/zod@3.22.4

## Cómo usarlo

Clona el repositorio o descarga los archivos  
Abre el archivo index.html en tu navegador  
Rellena el formulario para probar las validaciones

## Instalación (opcional con Node.js)

npm install zod

Importa Zod así en script.js  
import { z } from 'zod';

Nota: requiere entorno con soporte ES modules (Vite, Webpack, Node moderno)

## Capturas de pantalla

![Formulario vacío](https://i.postimg.cc/nLwRLLJY/1.png)  
![Validación de errores](https://i.postimg.cc/rm0hRLy6/2.png)
