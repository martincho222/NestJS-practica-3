<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>


# Teslo Shop API
1. Clonar el proyecto

```
git clone
```
2. Instalar las dependencias

```
npm install
```
3. Crear un archivo `.env` con el siguiente contenido, que tambien se encuentra en el archivo `.env.template`:

```
DB_PASSWORD=
DB_USER=
DB_HOST=
DB_PORT=
DB_NAME=
```
4. Rellenar las variables de entorno con los datos de la base de datos, que se encuentran en el archivo `docker-compose.yml`:


5. Levantar la base de datos

```
docker-compose up -d
```
6. Ejecutar el seed para llenar la base de datos con productos de ejemplo

```node
http://localhost:3000/api/seed
```

7. Levantar el proyecto

```
npm run start:dev
```