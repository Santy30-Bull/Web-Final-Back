# Backend de La Care Cortada

Este es el backend para el proyecto final de la página web de **La Care Cortada**. El backend se encarga de gestionar las operaciones relacionadas con los datos, como usuarios, productos y otras funciones clave de la aplicación.

## Requisitos

Antes de comenzar, asegúrate de tener las siguientes herramientas instaladas en tu sistema:

- **Node.js** (versión 16 o superior)
- **npm** (gestor de paquetes de Node.js)
- **PostgreSQL** (base de datos relacional)

## Configuración

1. **Crear el archivo `.env`:**

   Debes crear un archivo `.env` en la raíz del proyecto para configurar las credenciales de la base de datos. El archivo debe contener las siguientes variables de entorno:

   ```env
   DATABASE_URL=tu_host_de_base_de_datos
   PGPORT=puerto_de_base_de_datos
   POSTGRES_USER=tu_usuario_de_base_de_datos
   POSTGRES_PASSWORD=tu_contraseña_de_base_de_datos
   POSTGRES_DB=nombre_de_tu_base_de_datos
   
## Instalación de dependencias

Una vez que hayas configurado el archivo `.env`, instala las dependencias del proyecto ejecutando el siguiente comando en la terminal:

```bash
npm install
```
## Ejecutar el Backend

Una vez que las dependencias estén instaladas, puedes ejecutar el backend con el siguiente comando:

```bash
npm run start:dev
```
## Ejecutal el Frontend
```bash
npm run dev
```
## Deploy
El Deploy de la parte backend de este proyecto se hizo usando Railway (asi como el frontend). A diferencia de este; el deploy no se pudo completar al faltar una conexion con una base de datos:

<img width="650" alt="{C6EABEF1-B5D8-4F4D-87C6-A2CF4712AA20}" src="https://github.com/user-attachments/assets/5a02a87d-7ae4-44ba-a8ec-eadbb9444acd">

Se intentó conectar con varias bases de datos: 
---creando una base de datos Postgres desde Railway é incluso se creó un servicio de RDS de AWS esperdando poder hacer la conexion, y aunque el servicio esta operativo/funcional, la conexion nunca se pudó dar. Obviamente el proyecto funciona si se clona el repo y usando una base de datos local

<img width="713" alt="{AD2FC25B-3F4D-4A0B-80D2-8D8449D1D12A}" src="https://github.com/user-attachments/assets/035ae1dc-1fbf-4492-9a9d-31c321948095">


