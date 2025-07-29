# 🛒 CRUD de Productos con Búsqueda 🔍

Este proyecto es una aplicación web CRUD desarrollada con **Node.js**, **Express**, **MongoDB**, **Mongoose**, **TypeScript** y **Vite + React**, que permite la gestión de productos.

Incluye una **nueva funcionalidad de búsqueda de productos por nombre**, con resultados dinámicos y una experiencia optimizada para el usuario.

---

## ✨ Nueva Funcionalidad: Búsqueda de Productos

Se incorporó un campo de búsqueda que permite al usuario buscar productos por nombre desde el frontend.  
Esta búsqueda se realiza de forma **parcial e insensible a mayúsculas/minúsculas**, conectándose al backend y mostrando los resultados en tiempo real.

---

## 🛠️ Tecnologías Utilizadas

### Backend:
- Node.js
- Express
- TypeScript
- Mongoose
- MongoDB

### Frontend:
- React (Vite)
- TypeScript
- CSS
- Fetch API

---

## 🚀 Instrucciones para Ejecutar el Proyecto

### 1. Clonar el repositorio

bash
git clone https://github.com/Botitaa/tp-final-api-crud.git

2. Crear archivos .env

Copiar y pegar las siguientes configuraciones según cada entorno:

📦 Backend - /backend/.env

PORT=1234
MONGO_URI=mongodb://localhost:27017/tu_basededatos

🌐 Frontend - /frontend/.env

VITE_BACKEND_URL=http://localhost:1234/api

3. Instalar dependencias y ejecutar el Backend

cd backend
npm install
npm run dev

4. Instalar dependencias y ejecutar el Frontend

cd frontend
npm install
npm run dev


⸻

✅ Ejemplo de Uso
	•	Al escribir en el campo de búsqueda (por ejemplo, cam), se muestran automáticamente todos los productos cuyo nombre contenga ese texto parcial, sin importar mayúsculas o minúsculas (por ejemplo: “Campera”, “camiseta”, etc).

⸻

📁 Estructura del Proyecto

/backend
  /controllers
  /models
  /routes
  /middleware
  .env
  app.ts

/frontend
  /components
  /pages
  /services
  .env
  vite.config.ts


⸻

🔐 Variables de Entorno

/backend/.env.example

PORT=1234
MONGO_URI=mongodb://localhost:27017/mi_basededatos

/frontend/.env.example

VITE_BACKEND_URL=http://localhost:1234/api


⸻

👨‍💻 Autor
	•	Agustín Botana
