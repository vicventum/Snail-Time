# Init - Pasos antes de empezar un proyecto

1. ### **Insertar los archivos base**
    Estos archivos ya se encuentran dentro de la carpeta 'BOILERPLATE'
2. ### **Correr los scripts `npm i` seguido de `save` y `save-dev` del package.json**
    Estos scripts tienen todas las dependencias de desarrollo y de producción necesarias  
3. ### **Configurar el plugin 'rfs' (si se utiliza)**
    Para esto hay que directamente al archivo de la librería que se encuentra en la ruta `node_modules\rfs\lib\rfs.js` e ir a las opciones y cambiar la opción `remValue` a `10`. Esto para usar el `font-zise: 62.5%`
4. ### **Correr el script `init`**
    Esto iniciara el servidor de **Parcel**
5. ### **Correr el script `git init`**
    Esto iniciara el repositorio de **git**