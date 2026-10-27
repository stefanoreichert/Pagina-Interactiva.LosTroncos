# Rediseño de landing inspirado en Tondo

## Referencia inspeccionada antes de editar

Se exploró https://tondo.framer.website/ en escritorio (1440 px) y móvil (390 px), su carrusel y secciones de carta y ambiente. Se consultó también https://www.framer.com/marketplace/templates/tondo/.

Tondo combina fondo carbón cálido, tipografía Jost grande, texto secundario topo, acento cálido, navegación redondeada y un carrusel de platos que compone la primera pantalla. Su jerarquía alterna fotografías grandes, texto editorial y superficies de carta. En móvil, los platos pasan debajo de la introducción; las flechas y controles siguen visibles. El giro del carrusel y los cambios de selección dan continuidad. No se trasladan sus cifras de asientos, recetas, dirección, reglas de servicio, reseñas, eventos ni formulario de disponibilidad.

## Adaptación a Los Troncos

La anterior dirección verde/lino y serif deja de ser autoridad visual por pedido expreso del usuario. Se conservan Astro, componentes de foto, catálogo, filtros, búsqueda, URL e información real. No existen módulos de negocio en este frontend ni se agregan integraciones a otros sistemas.

Paleta: carbón cálido #171512, nogal #24201B, superficie #302A23, crema #F3EDE2, topo claro #BEB4A6 y cobre #E7AA7C. Display Jost variable; lectura Instrument Sans existente. El logo original conserva sus colores y fondo claro, sin filtros para simular una variante blanca.

Composición: hero tipográfico con fotografías gastronómicas circulares como encuadres, carrusel manual de cuatro platos reales y nombres/precios obtenidos del catálogo. Los cuatro platos se distribuyen en posiciones orbitales alrededor de la foto activa. No son recortes que pretendan recrear la silueta de un plato, sino marcos fotográficos. Nuestra propuesta editorial, especialidades con imágenes grandes, carta completa, galería de espacios, reservas por WhatsApp y ubicación con mapa bajo demanda.

El usuario confirmó el número completo +54 9 3743 611895. Reservas por WhatsApp pasan a formar parte del alcance por el nuevo pedido. El enlace abre una consulta: no representa disponibilidad ni confirma automáticamente una reserva. No se envían mensajes ni se incorporan formularios de negocio.

## Direction contract

THESIS: las fotografías y los nombres de los platos de Los Troncos pasan al centro de una experiencia oscura y cálida; la carta completa sigue siendo el núcleo funcional.

OWN-WORLD: carbón y nogal, tipografía geométrica de gran escala, cobre y crema, botones redondeados, encuadres gastronómicos circulares y composiciones fotográficas amplias.

STORY: reconocer el resto bar, explorar sus platos, consultar la carta, conocer el espacio y consultar una mesa por WhatsApp antes de ir a la ubicación real.

FIRST VIEWPORT: navbar oscura con logo original sobre su fondo claro; nombre grande a la izquierda, descriptor y botones; a la derecha, fotografía gastronómica protagonista con selección manual de platos. En móvil, nombre, acciones y fotografía en secuencia vertical.

FORM: dirección fijada por el usuario mediante referencia explícita. `seed: none (unavailable)`; el motor Impeccable no se encuentra instalado. No se simula un roll ni se exige reaprobar la referencia. La nueva dirección reemplaza el contrato visual anterior.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Movimiento y control

Carrusel con avance automático cada siete segundos cuando no está enfocado, con cuatro fotografías gastronómicas reales en círculos de distintos tamaños sobre un panel oscuro curvo. El avance se detiene si se solicita movimiento reducido, se oculta la página o se interactúa con el control mediante teclado. Las fotos corresponden a Palo Rosa, Tacuarembó, Ibirá y la milanesa Los Troncos; los nombres, categorías, precios y enlaces se obtienen del catálogo real. El plato activo llega a 364 px en escritorio amplio y 230 px en móvil; el recorte lateral se limita al hero/carrusel para conservar el scroll vertical sin desplazamiento horizontal. El arrastre con Pointer Events rota toda la órbita en vivo, permite vueltas continuas y termina en un ajuste suave con inercia limitada. El indicador “Drag”, las flechas y el teclado ofrecen señales y alternativas al gesto; el contador usa el formato `01 / 04`. En touch, `pan-y` conserva el desplazamiento vertical nativo. Hay cuatro fotos de platos identificados en el proyecto; no se duplican para simular ocho opciones. La carta sigue siendo el destino de sus enlaces. El pedido posterior de reproducir el scroll incorpora la apertura circular del salón: escenario sticky, título que se aparta, foto que se amplía y leyenda final. Se agregan entradas breves en bloques editoriales y especialidades. Ver `docs/SCROLL_TONDO.md` y `docs/REVISION_SCROLL.md`. El contenido es visible por defecto; sin JavaScript o con movimiento reducido, la foto y el título son estáticos y no se retiene el scroll. Hover moderado, navegación nativa mejorada y foco visible. Mapa cargado únicamente al pedirlo para evitar trabajo de terceros en la carga inicial.

## Ajustes de composición

La carta ahora sigue la composición observada en el menú de Tondo: fotografía circular grande y fija a la izquierda; categorías y platos en una columna a la derecha, con el primer producto de cada grupo destacado. Se usa la fotografía real de la Milanesa Los Troncos y el precio se obtiene de `carta.json`; el resto de platos, importes, filtros, búsqueda y enlaces conservan sus datos. La vista inicial presenta todas las categorías de cocina, y Cocina/Bebidas, categoría, búsqueda y URL siguen sincronizados. En móvil la fotografía pasa arriba de la lista y la categoría se elige con el selector existente.

La curva del hero se amplió en escritorio intermedio y amplio; su tamaño queda acotado al escenario y no causa desbordamiento de página. En móvil se conserva la composición previa.

## Comprobación funcional y técnica

- `npm run check`: 9 archivos Astro, sin errores, advertencias ni hints; 17 categorías y 139 opciones válidas.
- `npm run build`: salida estática correcta. Catálogo `src/data/carta.json` sin cambios durante el rediseño.
- Navegador sobre producción local: siguiente y flechas de teclado del carrusel; Tacuarembó $13.000 e Ibirá $15.000, obtenidos del catálogo.
- Carta: Bebidas → Tragos → «gin» da 3 resultados; búsqueda sin coincidencias muestra recuperación; limpiar vuelve a 12 tragos; Ver toda la carta muestra 139 opciones. Atrás/Adelante restaura los filtros. Selector móvil de Hamburguesas: 9 opciones.
- Menú móvil: foco inicial, ciclo Tab/Shift+Tab, Escape, contenido de fondo inerte y cierre al navegar con foco en el título de destino.
- Mapa: antes de solicitarlo no hay iframe; Mostrar mapa lo crea con las coordenadas de la ubicación real. Los enlaces de WhatsApp usan el número confirmado; no se enviaron mensajes durante las pruebas.
- Alternativa sin scripts comprobada con una copia temporal del HTML de producción sin etiquetas script: 17 categorías/139 opciones visibles, controles mejorados ocultos y navegación nativa funcional. La copia de prueba se elimina al reconstruir `dist/` y no forma parte de la entrega.
- Capturas a 1440, 1024, 768 y 390 px; comprobación complementaria a 320×720. Sin desbordamiento horizontal ni imágenes rotas en las observaciones. Consola de la vista inicial sin errores ni advertencias.

La inspección visual automática final (`.taste-skill/tondo-verdict/`) informa 0 FAIL y 2 WARN: crema y cantidad de tamaños. El crema corresponde a la referencia cálida solicitada; los tamaños separan nombre principal, titulares, nombres de platos, texto y notas, con ajustes responsive. El lint marca 3 avisos por bordes en controles funcionales (acción secundaria, flechas del carrusel y selector), no por tarjetas decorativas. Las excepciones `still-page,font-not-dealt,no-footage` conservan movimiento moderado, Jost elegida desde la referencia y ausencia de video solicitado por rendimiento. Estos resultados no equivalen a una auditoría WCAG completa ni a mediciones reales de Core Web Vitals. El detector Impeccable no estuvo disponible; no se atribuyen resultados a ese motor.

La revisión independiente solicitó un único arreglo: eliminar el rótulo pequeño de la propuesta y promover la declaración a título editorial. Se aplicó, reconstruyó y recapturó. El verdict pass lo marcó resolved con remaining clear y disposition ship, únicamente al alcance de ese arreglo; el informe completo y sus límites están en `docs/REVISION_DISENO.md`. La crítica interna con puntuación y límites está en `docs/CRITICA_VISUAL.md`.

## Publicación y mantenimiento

La entrega es local y compilable, sin dominio o hosting configurados. Confirmar los pendientes comerciales de `docs/CARTA_REVISADA.md` antes de publicar los precios. El usuario mantiene la carta en `src/data/carta.json` y contactos/horarios en `src/data/local.json`. No se añadieron dependencias npm ni se alteraron módulos de negocio. La fuente Jost y su licencia OFL se alojan en `public/fonts/`.
