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

```

### Uso 

```tsx
import { useState } from 'react'
import { fastKey } from 'fast-hot-keys'

function App() {
  const [text, setText] = useState("")

  fastKey("AltLeft+KeyA", () => console.log(text), [text])

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Escribe algo y luego pulsa Alt+A"
      />
    </div>
  )
}

export default App

```

### API 

| Parámetro        | Tipo         | Descripción                                                                            |
| ---------------- | ------------ | -------------------------------------------------------------------------------------- |
| `keyCombination` | `string`     | Cadena con la combinación de teclas en formato `event.code` (p. ej. `"AltLeft+KeyA"`). |
| `callback`       | `() => void` | Función que se ejecutará cuando se detecte la combinación.                             |
| `dependencies`   | `any[]`      | Array de dependencias al estilo de React; al cambiar, se rebindea el atajo.            |
