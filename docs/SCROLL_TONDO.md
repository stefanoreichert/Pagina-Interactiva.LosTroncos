# Scroll de referencia

Pedido posterior: reproducir el scroll de Tondo en la landing de Los Troncos. Se inspeccionó nuevamente la referencia viva antes de editar, en 1440×900 y 390×844.

## Movimiento observado

La navegación permanece fija, sin desaparecer ni secuestrar la rueda. La sección del salón ocupa aproximadamente 2,3 pantallas de recorrido en escritorio y 2 en móvil. Su escenario se mantiene fijo durante una pantalla adicional: la foto comienza dentro de un círculo centrado de radio cercano al 22% del lado menor; la abertura crece hasta cubrir la diagonal. Las dos partes del título se apartan y desvanecen mientras la foto pasa de escala 1,16 a 1. La leyenda inferior entra cuando la abertura ya es amplia y luego el bloque abandona el encuadre con el flujo normal. El movimiento se invierte al subir. La referencia utiliza además entradas de texto de unos 28 px y transiciones suaves en fotografías.

## Aplicación

- Momento focal: misma apertura circular y separación del título para «Nuestro espacio», con la foto real del salón. La galería de terraza y mesa continúa debajo.
- Continuidad: recorrido nativo y reversible, sin librería de scroll ni captura de wheel/touch; la barra y los enlaces conservan su comportamiento.
- Apoyo: entradas cortas en bloques editoriales y especialidades; no animar resultados durante búsqueda ni imponer esperas al consultar la carta.
- Presupuesto: un escenario sticky; un requestAnimationFrame únicamente al cambiar scroll/tamaño y estando el escenario cerca del viewport. Solo clip-path, transform y opacity en esa escena. Sin bucle permanente ni dependencia nueva.
- Alternativas: contenido completo en HTML, foto y título estáticos sin JavaScript o con movimiento reducido. Cambiar la preferencia durante la sesión desactiva el escenario y cancela las entradas en curso.

Es una reproducción del comportamiento observado con materiales de Los Troncos; no se importan código, marca, fotografías, datos ni funciones de reserva de Tondo.

## Verificación de la entrega

- `npm run check`: 11 archivos, 0 errores/advertencias/hints; catálogo válido de 139 opciones y 17 categorías. `npm run build` correcto.
- Capturas de escenas antes/0/25/50/75/100/después en escritorio y móvil, más toda la alternativa reducida: `.taste-skill/tondo-scroll-scenes/`. Las tres planchas fueron abiertas. Ambas escenas se ejecutaron. La medición local orientativa registró 76 fotogramas, mediana 16,7 ms y ninguno superior a 34 ms; no representa Core Web Vitals ni garantiza rendimiento en todos los dispositivos.
- Navegador real: radio 198 → 565 → 845 px y regreso a 198, manteniendo el escenario en y=0 durante el recorrido. A 320 px no se observó desbordamiento; ambos fragmentos del título caben en el estado inicial.
- Se corrigió la selección de foto en móvil: el encuadre de altura completa necesita una fuente mayor que el ancho del teléfono. `sizes` toma 134vh bajo 767 px y se comprobó la selección `interior-1280.webp`, conservando el original y su procedencia.
- Fallback sin scripts: foto sin clip, escenario estático y 139 opciones de carta presentes. Captura `scroll-nojs.png` en `.impeccable/review/`; el HTML temporal de prueba fue eliminado de dist.
- Inspector de la compilación final: `.taste-skill/tondo-scroll-inspect/report.json`, 0 FAIL y 2 WARN (crema y tamaños, decisiones vigentes). Se abrieron sus diez JPG. Lint: 0 FAIL/3 WARN por los bordes funcionales ya existentes. El único gradiente añadido es un scrim negro sobre la fotografía para contraste de la leyenda, excepción explícita de la skill, identificada en el comentario de CSS.
- Revisión independiente focal: `docs/REVISION_SCROLL.md`, disposition ship, sin material_fixes. El alcance es la extensión de movimiento y sus estados adyacentes; no se atribuye una auditoría completa de accesibilidad ni igualdad píxel a píxel.
