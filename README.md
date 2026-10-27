# Los Troncos Resto Bar

Web gastronómica de Los Troncos, Puerto Rico, Misiones. Astro + TypeScript + CSS propio, con fotografías y fuentes autoalojadas. La carta está prerenderizada: no necesita una API para mostrar su contenido.

## Ejecutar

Requiere una versión de Node compatible con el campo `engines` del Astro instalado y npm. Las versiones de dependencias quedan registradas en `package-lock.json`.

```sh
npm ci
npm run dev
```

Abrir `http://127.0.0.1:4321/`. Para verificar y generar la versión publicable:

```sh
npm run check
npm run build
npm run preview
```

`dist/` contiene el sitio estático generado y se puede publicar en un hosting estático. No se ha configurado dominio ni proveedor. La vista previa solo escucha en la computadora local.

## Actualizar la carta

Editar `src/data/carta.json`. Cada categoría contiene `id`, `name`, `kind` (`cocina` o `bebidas`), `note` y `items`. Cada opción tiene nombre, descripción y precio.

```json
{
  "name": "Palo Rosa",
  "description": "Mozzarella, salsa de tomate, jamón, cherrys, albahaca, aceitunas",
  "price": 16000
}
```

- Escribir precios como números sin separadores: `16000`, sin `$` ni comillas. Se formatean al mostrarse.
- Usar `null` cuando el precio se consulta en el local; nunca `0` como sustituto de un dato desconocido.
- Conservar identificadores únicos y estables: se usan en los enlaces de categoría.
- La búsqueda toma el nombre y la descripción. No inferir ni agregar garantías dietarias sin información de cocina.
- Después de guardar: ejecutar `npm run check`, revisar con `npm run dev`, ejecutar `npm run build` y volver a publicar `dist/`.

El chequeo valida campos obligatorios, categorías e importes para detectar errores de edición antes de construir. No comprueba vigencia comercial. `src/data/carta.json` es la fuente de trabajo: el script histórico bajo `tmp/design/` fue una herramienta de extracción, no un mecanismo de sincronización que deba ejecutarse para actualizar precios.

## Actualizar ubicación, horario y redes

Editar `src/data/local.json`. El horario de madrugada corresponde al día siguiente. El WhatsApp confirmado es +54 9 3743 611895: las acciones de reserva abren una consulta, sujeta a confirmación del local. El mapa se carga solo al pulsar Mostrar mapa; las redes son enlaces directos. No hay pedidos ni motor de disponibilidad.

## Diseño, fuentes y revisión

- `docs/DISENO_WEB.md`: decisiones e historial de planificación.
- `docs/REDISENO_TONDO.md`: dirección visual vigente y alcance del rediseño.
- `DESIGN.md`: tokens y componentes efectivos de la landing.
- `docs/REVISION_DISENO.md`: revisión final y evidencia de escritorio/móvil.
- `docs/SCROLL_TONDO.md` y `docs/REVISION_SCROLL.md`: comportamiento de scroll, pruebas y revisión de la apertura circular del salón.
- `docs/CARTA_REVISADA.md`: cotejo visual del menú y pendientes comerciales.
- `docs/WIREFRAMES.md`: láminas históricas del esquema anterior; no representan el rediseño Tondo.
- `docs/SELECCION_FOTOGRAFICA.md`: selección y tratamiento de fotografías.
- `docs/FUENTES_IMAGENES.json`: procedencia de los archivos optimizados.
- `public/fonts/licenses/`: textos de licencia de las fuentes.

Las imágenes WebP se derivan de originales aportados en `imagenes/`; no se generaron platos ni espacios ficticios. El logo conserva su lettering y colores. Se publican únicamente el contenido de `public/` y la salida compilada; documentos internos y originales quedan fuera.

## Antes de publicar comercialmente

Confirmar moneda y vigencia de precios, importes faltantes, condiciones de salsas/porciones y versión definitiva de la marca. Ver el detalle en `docs/CARTA_REVISADA.md`. Elegir dominio y hosting para completar URL canónica, imagen social absoluta y sitemap con el dominio real. No hay formularios que recopilen datos, analítica de terceros ni motor de reservas en esta versión.
