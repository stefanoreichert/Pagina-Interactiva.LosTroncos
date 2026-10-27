# Crítica visual del rediseño

Evaluación interna subjetiva siguiendo la rúbrica de design-taste-frontend; no es una puntuación de un jurado externo. Referencia fijada por el usuario: Tondo. No hubo nueva dirección aleatoria ni semilla generada; la anterior investigación Roma no gobierna esta entrega.

## ROUND 1

Seen in one second: Los Troncos y una pizza real sobre carbón cálido.

Idea (one sentence): los platos con nombre propio y el ambiente nocturno sostienen una carta útil y una invitación a compartir mesa.

Live thing: carrusel manual de platos y carta filtrable con búsqueda y URL persistente.

Layout words by section: hero=tipografía/fotografía circular / propuesta=declaración / especialidades=escalonado / carta=índice/listado / espacio=fotografía amplia / reservas=texto/fachada / ubicación=datos/mapa / footer=nombre a gran escala.

Scores: design 7 · usability 8 · creativity 6.5 · content 8 → overall 6.5 con tope aplicado.

Caps applied: el rótulo pequeño sobre la declaración en móvil limita el total a 6.5. El movimiento moderado mantiene diseño en 7; se conserva por el requisito de rendimiento y fluidez.

Top three problems (most visible first), each with the screenshot it shows in and the fix:

1. «Nuestra propuesta» actúa como eyebrow en `.taste-skill/tondo-final/mobile-page-01.jpg`, segundo panel. Arreglo material del revisor: retirarlo y convertir la declaración en h2, sin columna fantasma.
2. Especialidades reutiliza tres fotos del carrusel, visible en `desktop-page-01.jpg`; el cuarto plato del hero amplía la variedad visual sin inventar contenido. La repetición de fotos reales en selección, descripción y categoría refuerza el reconocimiento.
3. La composición tiene parentesco visible con la referencia y varios bloques siguen convenciones gastronómicas. Límite de originalidad, aceptado por la dirección solicitada; no se presenta como concepto inédito.

## ROUND 2

Seen in one second: nombre del restaurante y fotografía gastronómica dominante; las acciones se identifican de inmediato.

Idea (one sentence): los platos reales dan entrada a una carta completa y al espacio de Los Troncos.

Live thing: carrusel sin autoplay, filtros de cocina/bebidas/categoría, búsqueda y recuperación sin resultados.

Layout words by section: hero=tipografía/fotografía circular / propuesta=título editorial/cuerpo en columnas / especialidades=escalonado / carta=índice/listado / espacio=fotografía amplia / reservas=texto/fachada / ubicación=datos/mapa / footer=nombre a gran escala.

Scores: design 7 · usability 8 · creativity 6.5 · content 8 → overall 7.3.

Caps applied: diseño en 7 por movimiento deliberadamente limitado, sin video ni escenas sostenidas; creatividad en 6.5 por familiaridad de la referencia. El tope por eyebrow deja de aplicar. No se afirma alcanzar un 7.5 de jurado ni equivalencia con un premio.

Top three problems (most visible first), each with the screenshot it shows in and the fix:

1. Rótulo resuelto en `.impeccable/review/tondo-fix-desktop.png` y `tondo-fix-mobile.png`; el revisor puntuó el arreglo como resolved, con remaining clear y disposition ship al alcance de ese verdict pass.
2. Se mantiene la repetición fotográfica intencional descrita en la ronda anterior; sin nueva deuda material derivada de la corrección.
3. Se mantiene el límite de originalidad de la referencia solicitada; sin nuevas correcciones visuales pendientes del revisor.

La última inspección `.taste-skill/tondo-verdict/` conserva 0 FAIL y 2 WARN. Se abrieron las trece capturas (fold y mosaicos completos a 1440/1024/768/390) después del arreglo. Las fotos, su origen local y el tratamiento están en `docs/SELECCION_FOTOGRAFICA.md` y `docs/FUENTES_IMAGENES.json`; no hay stock ni dibujos que suplanten fotografías. Los precios pendientes y la publicación son decisiones comerciales/técnicas separadas de esta crítica.

## ROUND 3 — pedido posterior de scroll

Seen in one second: «Nuestro espacio» enmarca un círculo que revela el salón real.

Idea (one sentence): entrar visualmente al salón de Los Troncos mediante la misma apertura progresiva observada en Tondo.

Live thing: abertura y separación del título controladas por el scroll nativo, reversibles; carta y carrusel se conservan.

Layout words by section: se conserva la secuencia anterior; espacio pasa de fotografía amplia a escena de apertura/galería.

Scores: design 7.8 · usability 8 · creativity 6.5 · content 8 → overall 7.6 (evaluación interna, no jurado externo).

Caps applied: deja de aplicar el límite anterior por ausencia de un momento de movimiento propio. La creatividad conserva su límite por reproducción intencional de una referencia reconocible.

Top three problems (most visible first), each with the screenshot it shows in and the fix:

1. La primera captura móvil de la apertura tenía pérdida de nitidez por elegir la variante de 480 px para una foto de altura completa. Se ajustó `sizes` a 134vh: `scroll-mobile-end.png` y `salon-phone.jpg` finales muestran la variante de 1280 px. Resuelto antes de la revisión.
2. Se conserva la calidad y resolución del material aportado; el encuadre vertical muestra menos ancho del salón, como el de la referencia. Límite del original, sin inventar detalle ni usar una foto ajena.
3. No quedaron arreglos materiales en la revisión focal: `docs/REVISION_SCROLL.md` registra disposition ship. Este cierre no atribuye identidad píxel a píxel ni revalida toda la página como un nuevo diseño.

Se abrieron las diez capturas de `.taste-skill/tondo-scroll-inspect/` y las tres planchas de `.taste-skill/tondo-scroll-scenes/` posteriores al ajuste. El inspector mantiene 0 FAIL y 2 WARN. La referencia también se capturó en inicio, expansión y fotografía completa para comparar el arco visual. Las alternativas de movimiento reducido y sin JavaScript muestran contenido completo sin retención del scroll.

## ROUND 4 — carrusel orbital

Seen in one second: Los Troncos y cuatro platos reales alrededor de la fotografía principal.

Idea (one sentence): los platos identificados en la carta orbitan una mesa oscura y abren paso a la oferta real del local.

Live thing: carrusel circular arrastrable con mouse o touch, flechas y teclado; cada cambio actualiza plato, precio y contador.

Layout words by section: hero=tipografía/círculos orbitando / propuesta=declaración en columnas / especialidades=escalonado / carta=índice y lista / espacio=apertura fotográfica vinculada al scroll / reservas=texto y fachada / ubicación=datos y mapa a demanda / footer=nombre a gran escala.

Scores: design 7 · usability 8 · creativity 7 · content 8 → overall 7.4.

Caps applied: design no supera 7 por el warning `still-page` del inspector (11 elementos detectados en movimiento); creatividad se mantiene en 7 por la referencia intencional a Tondo. Puntuación propia, no jurado externo.

Top three problems (most visible first), each with the screenshot it shows in and the fix:

1. En `desktop-fold.jpg`, el hero usa cuatro fotos identificadas y especialidades reutiliza tres de ellas; conservar esa relación y sumar imágenes solo cuando estén vinculadas a platos reales.
2. En `mobile-fold.jpg`, el nombre, precio y contador quedan bajo el primer encuadre del teléfono aunque la composición circular sí aparece; se conserva el scroll natural y se puede seguir al contenido inmediatamente después.
3. La galería usa la foto real del salón y el inspector no cuenta una escena de scroll como video; mantener el despliegue bajo demanda y sin video automático para preservar la referencia y el rendimiento.

Verificación final: inspección visual con 0 FAIL y 5 WARN a 1440, 768 y 390 px; las advertencias incluyen paleta crema intencional, escala tipográfica, ausencia de footage y movimiento detectado por debajo del umbral del inspector. La escena de salón corrió en escritorio, teléfono y movimiento reducido; el informe de compilación pasa.
