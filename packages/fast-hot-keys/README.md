## fast-hot-keys

`fast-hot-keys` es un pequeño hook de React que te permite capturar combinaciones de teclas usando la propiedad `event.code` y ejecutar una función cada vez que se pulse esa combinación. Además, admite un array de dependencias al estilo de React para volver a registrar la combinación cuando cambien los valores de tu estado o props.

### Características principales

- **Registro de atajos** por combinación de teclas usando `event.code` (p. ej. `AltLeft+KeyA`).
- **Ejecución de funciones** al detectar la secuencia de teclas.
- Uso de **dependencias** para reenlazar el atajo cuando cambie alguno de los valores externos.
- **Ligero** y fácil de integrar en cualquier componente funcional de React/TypeScript.

### Instalación

```bash
npm install fast-hot-keys
# o con Yarn
yarn add fast-hot-keys


