# Amiibos - e-Commerce

`e-Commerce` web creado como una prueba de técnica para la empresa [Papa John's](https://www.papajohns.cl/)

## Tecnologías utilizadas

| Nombre           | Version  |
| ---------------- | -------- |
| create-react-app | v3.4.1   |
| axios            | v0.19.2  |
| bootstrap        | v4.5.0   |
| node-sass        | v4.14.1  |
| prop-types       | v15.7.2  |
| react            | v16.13.1 |
| react-dom        | v15.7.2  |
| react-bootstrap  | v1.1.1   |
| react-redux      | v7.2.0   |
| react-router-dom | v5.2.0   |
| redux            | v4.0.5   |
| redux-thunk      | v2.3.0   |

## Como hacer correr el proyecto en entorno local

- Primero se debe descargar el proyecto, para esto primero debemos abrir un `terminal` (si se esta en `Linux` o en `Mac`) o `CMD` (si se está en `windows`).
  Luego debemos posicionarnos en algún lugar donde queramos descargar el proyecto y pegar el siguiente comando:

`Observación:` El siguente comando dependerá de que si se tiene configurado `SSH` con `Github` o no. A continuación mostraremos como hacerlo con el SSH configurado previamente.

```sh
git clone git@github.com:Proskynete/e-commerce-amiibos.git
```

O en su defecto, el siguiente comando si es que no se tiene SSH

```sh
git clone https://github.com/Proskynete/e-commerce-amiibos.git
```

- Una vez se haya descargado, nos tenemos que mover a la carpeta descargada, eso lo hacemos con el siguiente comando:

```sh
cd e-commerce-amiibos
```

- Una vez nos situamos en la carpeta, correrémos el siguiente comando. Esto desargará las dependencias necesarias para poder hacer funcionar el proyecto sin ningún problema. Eso lo hacemos con el siguiente comando:

```sh
npm install
```

O si prefieres `Yarn`

```sh
yarn install
```

(Esto puede demorar un poco, a si que a esperar...)

- Una vez el `terminal/consola/CMD` nos informa que ya ha finalizado la descarga, solo nos queda correr el último comando que nos permitirá hacer funcionar el proyecto en nuestro computador. Para ello, copiamos y pegamos el siguiente código:

```sh
npm start
```

Al igual que en el paso anterior, si se prefiere utilizar `Yarn`:

```sh
yarm start
```

`Observación:` Cabe mencionar que es recomendado que si al momento de descargar las dependencias se hizo con npm, hacer el siguiente paso con npm de igual manera o de caso contrario, con yarn.

## Revisar proyecto

- Una vez hayamos finalizado todos los pasos anteriores, nos podremos dirigir a nuestro navegador navegador preferido y pegar la siguiente url: `localhost:3000`. De esta manera podremos visualizar el pryecto corriendo y funcionando en nuestras máquinas.
