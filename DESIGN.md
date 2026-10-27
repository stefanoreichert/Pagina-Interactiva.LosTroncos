---
name: "Los Troncos Resto Bar"
description: "Sistema cálido y oscuro de la landing Astro, con fotografía gastronómica real y carta legible."
colors:
  coal: "#171512"
  walnut: "#24201b"
  surface: "#302a23"
  cream: "#f3ede2"
  muted: "#beb4a6"
  copper: "#e7aa7c"
  deep: "#100e0b"
  line: "#6d6255"
  brand-paper: "#f8f6f2"
typography:
  display:
    fontFamily: "Jost, Arial, sans-serif"
    fontSize: "clamp(5.5rem, 2rem + 7vw, 8.5rem)"
    fontWeight: 500
    lineHeight: 0.94
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Jost, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 1.15rem + 3vw, 4rem)"
    fontWeight: 450
    lineHeight: 1.06
    letterSpacing: "-0.035em"
  statement:
    fontFamily: "Jost, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 2rem + 3vw, 5rem)"
    fontWeight: 450
    lineHeight: 1.12
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Jost, Arial, sans-serif"
    fontSize: "2rem"
    fontWeight: 450
    lineHeight: 1.06
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Instrument, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  lead:
    fontFamily: "Instrument, Arial, sans-serif"
    fontSize: "clamp(1.125rem, 1rem + 0.4vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.55
  small:
    fontFamily: "Instrument, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
  action:
    fontFamily: "Instrument, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.4
rounded:
  photo: "20px"
  mobile-photo: "16px"
  header: "24px"
  menu: "32px"
  search: "14px"
  select: "12px"
  pill: "999px"
  circle: "50%"
spacing:
  gutter: "clamp(20px, 4.5vw, 72px)"
  section: "clamp(80px, 9vw, 144px)"
components:
  button-cream:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.deep}"
    typography: "{typography.action}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-cream-hover:
    backgroundColor: "{colors.copper}"
    textColor: "{colors.deep}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.cream}"
    typography: "{typography.action}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-outline-hover:
    backgroundColor: "{colors.copper}"
    textColor: "{colors.deep}"
  button-accent:
    backgroundColor: "{colors.copper}"
    textColor: "{colors.deep}"
    typography: "{typography.action}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-accent-hover:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.deep}"
  menu-kind:
    backgroundColor: "{colors.coal}"
    textColor: "{colors.cream}"
    rounded: "{rounded.pill}"
    padding: "5px"
  menu-kind-selected:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.deep}"
    rounded: "{rounded.pill}"
    padding: "10px 26px"
  search:
    backgroundColor: "{colors.coal}"
    textColor: "{colors.cream}"
    rounded: "{rounded.search}"
    padding: "0 18px"
  photo:
    rounded: "{rounded.photo}"
  editorial-statement:
    textColor: "{colors.cream}"
    typography: "{typography.statement}"
---

# Design System: Los Troncos Resto Bar

## Overview

**Creative North Star: "Una mesa cálida en carbón y nogal"**

La dirección vigente adapta la referencia Tondo fijada por el usuario: fondos oscuros cálidos, títulos geométricos grandes, crema y cobre, fotografías gastronómicas y espacio para leer la carta. Reemplaza la dirección verde anterior. La metáfora describe esta implementación; no procede de un motor ni de una selección aleatoria.

La identidad usa el logo original con su fondo claro y fotografías reales del local y los platos. La landing estática está implementada con Astro, TypeScript y CSS propio. Esta documentación deriva de las fuentes actuales; no certifica publicación ni una auditoría propia. [REVISION_DISENO.md](docs/REVISION_DISENO.md) cierra el arreglo editorial; [REVISION_SCROLL.md](docs/REVISION_SCROLL.md) declara disposition ship para la extensión de scroll solicitada posteriormente. Cada informe mantiene su alcance focal: no constituye una nueva auditoría de toda la landing ni una certificación de identidad píxel a píxel con Tondo.

**Key Characteristics:**

- Carbón y nogal como fondos; crema para lectura y cobre para respuesta.
- Jost de gran escala y lectura en Instrument Sans.
- Acciones en cápsulas, marcos circulares y fotografías amplias.
- Carta sin tarjetas decorativas, con nombres y precios alineados.
- Scroll nativo y reversible en el salón, entradas breves y alternativa estática completa con movimiento reducido.

## Colors

La paleta combina oscuros pardos, claros cálidos y un acento cobre; los valores del frontmatter corresponden a las fuentes.

### Primary

- **Cobre** (`colors.copper`, CSS `--copper`): acento de acción, foco, selección y enlaces activos. El alias `--action` apunta a este color.
- **Crema** (`colors.cream`, `--cream`): texto principal y acciones claras. El alias `--foreground` toma este valor; también es el hover del botón cobre.

### Neutral

- **Carbón** (`colors.coal`, `--coal`): fondo general y huecos funcionales de búsqueda y segmentación. `--background` lo referencia.
- **Nogal** (`colors.walnut`, `--walnut`): navegación, superficie de carta, bloque de reservas y mapa pendiente.
- **Superficie** (`colors.surface`, `--surface`): reserva de fondo fotográfico y hover de opciones sin seleccionar.
- **Topo claro** (`colors.muted`, `--muted`): descripciones, contexto práctico, etiquetas y notas.
- **Profundo** (`colors.deep`, `--deep`): texto sobre acciones claras o cobre; alias `--on-action`.
- **Línea** (`colors.line`, `--line`): contornos funcionales y puntos de carrusel inactivos.
- **Papel del logo** (`colors.brand-paper`): valor literal repetido en los apoyos de marca de cabecera y pie. No tiene variable CSS.

**The Warm Contrast Rule.** Conservar la relación fondo oscuro, texto crema y acento cobre; el fondo claro del logo original es una excepción de marca deliberada.

## Typography

**Display Font:** Jost variable, con Arial y sans-serif de respaldo.
**Body Font:** Instrument Sans, registrada en CSS con el nombre de familia `Instrument`, con Arial y sans-serif de respaldo.

Jost aporta la geometría de la referencia; Instrument Sans sostiene lectura, precios y controles. Las fuentes se alojan localmente. La implementación carga Jost variable y archivos regular y bold de Instrument; no usa una familia mono.

### Hierarchy

- **Display** (`typography.display`, `--text-display`): nombre del local. A 1100 px o menos el hero redefine el tamaño a (7rem); hasta 767 px usa (clamp(3rem, 13vw, 5.5rem)) y línea (1.1); hasta 359 px, (2.9rem).
- **Headline** (`typography.headline`, `--text-heading`): titulares de sección. En móvil pasa a (2.5rem). Reservas conserva una excepción mayor (clamp(3rem, 2rem + 3vw, 5.25rem)) y (3.1rem) móvil.
- **Statement** (`typography.statement`): declaración editorial de la propuesta, máximo (20ch). En móvil usa (2.65rem), línea (1.13) y tracking (-0.04em); hasta 359 px baja a (2.25rem).
- **Title** (`typography.title`): títulos de grupos de la carta; móvil (1.75rem). Especialidades usa (1.75rem) y (1.6rem) móvil; nombres del carrusel, (clamp(1.5rem, 2.5vw, 2rem)) y (1.75rem) móvil.
- **Body** (`typography.body`, `--text-body`): texto general y nombre de plato en negrita. La raíz móvil usa (1rem). Descripciones de carta usan (1rem), línea (1.55) y máximo (54ch).
- **Lead** (`typography.lead`, `--text-lead`): introducción del hero y precios destacados. La línea (1.55) corresponde a la introducción; otras instancias heredan la línea del contexto.
- **Small** (`typography.small`, `--text-small`): información práctica, etiquetas y notas; no implica mayúsculas ni espaciado ornamental.
- **Action** (`typography.action`): botones principales. En acciones del hero móvil el tamaño es (.9375rem). Los precios usan números tabulares.

El título de la escena del salón tiene una excepción local activa (clamp(1.25rem, 6.6vw, 6rem)), línea (1) y tracking (-0.04em). Su leyenda principal usa (clamp(2rem, 4.4vw, 4rem)), línea (1.08) y tracking (-0.035em), reducido a (2.25rem) móvil. Son reglas de esa composición, sin nuevos tokens globales; la alternativa estática devuelve el título al estilo h2 de sección.

**The Two Voices Rule.** Usar Jost para jerarquía editorial e Instrument para lectura y controles; conservar las excepciones responsive observadas sin imponer una escala nueva.

## Layout

El contenedor principal tiene ancho máximo (1536px), margen automático y padding lateral `--gutter`. El ritmo entre secciones usa `--section`; ambos pasan a (20px) y (80px) hasta 767 px. No hay una escala universal de espaciado: gaps, márgenes y paddings específicos están definidos por componente.

La cabecera sticky usa ancho (calc(100% - 64px)), máximo (1392px), altura `--header-height` de (88px), top (16px) y radio de cabecera. Móvil usa ancho (calc(100% - 24px)), altura (76px) y top (12px). El offset de navegación es (128px), reducido a (112px) móvil.

El hero divide texto y foto (1fr / 1.05fr); en móvil se ordena verticalmente y elimina el salto de línea del nombre. La fotografía protagonista tiene máximo (560px), reducido a (480px) móvil. Las especialidades usan tres columnas asimétricas (1.2fr / 1fr / 1fr), pasan a dos hasta 899 px y a una hasta 767 px, conservando desplazamientos y anchos fotográficos propios.

La propuesta actual presenta la declaración como un h2, sin rótulo previo. Su introducción es un bloque y el cuerpo ocupa todo el ancho en dos columnas iguales, gap (20px 48px), margen superior (40px). Hasta 899 px el gap es (28px); hasta 767 px queda una columna, gap (20px) y margen (28px).

La carta es una superficie nogal con márgenes exteriores propios, padding vertical (80px) y radio de carta. Su interior divide categorías y resultados (220px / minmax(0, 1fr)), gap (64px), reducido a (180px / minmax(0, 1fr)) y (36px) hasta 1100 px. Los platos forman dos columnas; en móvil una. El selector nativo reemplaza la lista lateral únicamente con mejora JavaScript activa.

La galería comienza con una escena de salón a ancho de pantalla y después vuelve al contenedor para terraza y mesa. Con mejora activa, el recorrido del salón ocupa (230svh) y (200svh) hasta 767 px; el escenario sticky ocupa (100svh), top (0), con overflow clip e isolation isolate. La pareja de fotos posterior empieza a (48px), o (32px) móvil. La leyenda activa se apoya a (52px) del borde inferior, o (40px) móvil, y respeta el gutter lateral. Sin mejora, la escena usa el contenedor ordinario y queda en flujo normal, con foto rectangular completa, título y leyenda.

Reservas y la pareja de galería combinan imágenes grandes con columnas de distinto ancho; móvil las apila. Los breakpoints observados son mínimo (1600px) y máximos (1100px), (899px), (767px) y (359px). El print muestra la carta en fondo blanco y recupera todas las opciones ocultas por filtros; la escena del salón se oculta en impresión.

## Elevation & Depth

No hay sombras CSS en el sistema actual. La profundidad se obtiene con superficies carbón/nogal, escala y recorte fotográfico, separaciones y la cabecera sticky. Los bordes se reservan para controles funcionales: acción secundaria, flechas y selector móvil. No hay blur ni paneles de cristal.

La escena activa del salón añade una única excepción de contraste fotográfico: un scrim negro neutro (linear-gradient(transparent, rgba(0,0,0,.78))) ocupa la mitad inferior y aparece con la leyenda. El permiso está comentado expresamente en CSS. No es un acento de marca ni un sistema de gradientes; no se extiende a fondos editoriales, controles u otras superficies. La alternativa estática no lo usa.

El foco global es un contorno cobre (2px), offset (5px); búsqueda usa foco de contenedor con offset (2px). Los botones se elevan por transformación al hover (-2px) y vuelven al activar. Son estados de interacción, no un vocabulario de sombras.

**The Tonal Depth Rule.** Dar profundidad mediante contraste de superficies y fotografías; conservar los contornos funcionales y el foco visible.

## Shapes

Las acciones y la segmentación tienen forma de cápsula. Los marcos de fotografías amplias usan el radio `--radius` (`rounded.photo`); varias imágenes pasan al radio móvil. La protagonista y las flechas usan círculo; ese recorte es un marco de foto, no una falsa silueta recortada del plato.

El salón activo abre una ventana circular centrada hasta completar la pantalla; su imagen final no conserva un radio de tarjeta. La forma estática vuelve al marco rectangular redondeado, aspecto (2) en escritorio y (4/3) móvil. Esta geometría animada no reemplaza la forma del resto de fotografías.

No existe un único radio universal: cabecera, carta, buscador, selector, fondos del logo y panel móvil tienen ajustes locales. La carta pasa de `rounded.menu` a `rounded.header` móvil; la cabecera pasa a (20px). El apoyo del logo usa (10px), pie (12px), y cabecera móvil (8px). Los puntos seleccionados del carrusel se alargan (20px) con radio (8px).

## Components

### Buttons

Acciones redondeadas y legibles, con tres variantes reales: crema, contorno y cobre. Todas parten de altura mínima (52px), separación icono/texto (16px) y los tokens del frontmatter. El botón crema hereda el estilo base; `button-cream` no añade una regla CSS distinta. Hover usa cobre salvo en la variante cobre, que pasa a crema. Foco sigue el contorno global; active elimina la elevación de hover. Las acciones del hero móvil bajan a mínimo (48px).

Los iconos son SVG inline de trazo (1.5), extremos y uniones redondeados. El tamaño por defecto es (20px); existen ajustes contextuales (16–40px). Los enlaces de texto subrayados tienen altura mínima (44px), peso (700) y hover cobre.

### Navigation

La navegación de escritorio usa Instrument, enlaces sin subrayado y altura mínima (44px). Hover y enlace activo usan cobre; la acción de reservas conserva contraste oscuro sobre claro. Hasta 899 px se oculta el primer enlace, y hasta 767 px se sustituye el conjunto por `details/summary` y panel nogal.

Con JavaScript, el panel móvil contiene el foco, cierra con Escape y deja inerte el contenido de fondo. Sin mejora usa el flujo nativo de details. El comportamiento descrito se observa en el código; este documento no sustituye una prueba de interacción.

### Search and category controls

Buscador carbón con radio propio, icono inline, label persistente y placeholder topo. El input no tiene borde propio; el contenedor recibe foco visible mediante `:focus-within`. Limpiar usa un blanco de (44px). La segmentación Cocina/Bebidas indica selección con crema y texto profundo; hover seleccionado pasa a cobre. No es un chip de contenido ni un sistema de tags.

La selección lateral usa texto topo y estado actual cobre en negrita. El select móvil mantiene apariencia nativa sobre carbón, borde de línea, altura mínima (52px) y padding (12px 16px).

### Dish rows and empty state

Cada plato es un elemento de lista sin caja decorativa: nombre y precio comparten fila, descripción debajo con margen (9px). El precio no se parte, utiliza números tabulares y muestra «Consultar» cuando falta el importe. La lista usa dos columnas con gap (32px 44px), una en móvil; hasta 359 px la fila permite que el nombre ocupe el ancho completo.

Sin resultados se ofrecen «Limpiar búsqueda» y «Buscar en toda la carta», reutilizando botón y enlace. El contenido completo existe en el HTML sin scripts; los controles mejorados se activan con JavaScript.

### Editorial statement

La propuesta tiene h2 `#proposal-title` con texto «Distintos gustos. La misma mesa.» y salto editorial. No añade una etiqueta superior. El cuerpo de dos párrafos sigue en dos columnas a ancho completo y una móvil; el enlace final ocupa la fila completa.

### Photography and carousel

La foto real se sirve mediante `Foto.astro`, WebP responsive (480/960/1280 según origen), dimensiones explícitas, alt y lazy loading salvo la primera imagen del hero, eager y prioridad alta. Se conservan proporciones de origen y object-fit cover según el marco; no se sustituyen por stock o imágenes generadas.

El carrusel es manual: tres selecciones, botones anterior/siguiente, puntos con aria-pressed y flechas de teclado. La selección se anuncia en una región viva; no hay reproducción automática. Entrada (650ms), zoom de protagonista (700ms), zoom de especialidades (650ms) y asentamiento de galería (900ms) usan `--ease`. El hover fotográfico es pequeño (1.025/1.035). La duración general de controles es `--duration` (220ms). Movimiento reducido elimina animaciones, transiciones y desplazamiento suave.

### Room scroll scene

`EscenaSalon.astro` conserva h2 «Nuestro espacio», figure, alt y figcaption en HTML completo. `scroll.ts`, importado desde `main.ts`, habilita la escena solo con IntersectionObserver, soporte de clip-path y sin movimiento reducido. No intercepta wheel ni touch: el avance depende de la posición nativa, se invierte al subir y abandona el sticky por el flujo normal. Solo hay un escenario sticky y ningún proveedor ni dependencia nueva.

El progreso es (-top / (alto de escena - alto de escenario)), limitado entre (0) y (1). La abertura aplica smoothstep al progreso dividido por (.85): radio inicial (.22 × lado menor), radio final (media diagonal + 2px). La fotografía pasa de escala (1.16) a (1). Los fragmentos del título se apartan a ambos lados del radio con margen (24px), o (12px) móvil, y su opacidad desaparece al crecer la abertura. La leyenda entra entre los progresos (.56) y (.78), desde (28px) de desplazamiento hasta su posición final.

Las variables `--iris-radius`, `--iris-scale`, `--iris-title-opacity`, `--iris-caption-opacity` y `--iris-caption-y` son estado transitorio local escrito por JavaScript; no son primitivas de diseño ni forman una escala reutilizable. El render usa clip-path, transform y opacity. Un requestAnimationFrame pendiente agrupa cambios de scroll cerca del viewport; no existe un bucle permanente. El resize recalcula la geometría y el documento oculto no se pinta.

La foto es el mismo salón real. Su sizes de producción es `(max-width:767px) 134vh, 100vw`: la anchura estimada para object-fit cover en un escenario de (100svh) permite elegir el original de (1280px) en móvil. No se añadieron imágenes. Sin JavaScript, sin soporte o con movimiento reducido, título, foto y leyenda siguen visibles en flujo normal. El cambio de preferencia desactiva el modo, cancela el frame y elimina el estado inline; las defensas CSS mantienen la alternativa estática. Ver [SCROLL_TONDO.md](docs/SCROLL_TONDO.md).

### Scroll entrances

Los bloques editoriales, especialidades, cabecera de carta, texto de reservas, ubicación y wordmark del pie reciben una entrada única al llegar al viewport. Usan Web Animations API, easing expo (cubic-bezier(.16,1,.3,1)), duración (700ms), desplazamiento (28px) y opacidad inicial (.55). El wordmark usa (900ms), (40px) y (.75). Las especialidades escalonan (80ms), con máximo (160ms). Los resultados de la carta quedan fuera y filtrar no repite las entradas.

El contenido es visible por defecto; el observador solo lo anima después. Cambiar a movimiento reducido cancela todas las animaciones WAAPI activas, además del fallback CSS para el salón. Esta coreografía es local y coexiste con `--ease` de los controles; no se reemplaza el easing global.

### Reservations and map

La acción cobre abre una consulta de WhatsApp al número confirmado (+54 9 3743 611895); la nota mantiene la confirmación del local como condición de reserva. No hay interfaz de disponibilidad automática. El mapa empieza como panel nogal con dirección, icono y botón claro; el iframe se crea únicamente al solicitarlo. Son estados funcionales reales, no muestras de formulario.

## Do's and Don'ts

### Do:

- **Do** conservar el logo original sobre su apoyo claro y las fotografías reales del local y los platos.
- **Do** mantener el contraste carbón/nogal, crema para lectura y cobre para respuesta y foco.
- **Do** usar Jost para títulos e Instrument Sans para lectura, con los ajustes responsive existentes.
- **Do** mantener focos visibles, controles manuales y la alternativa de movimiento reducido.
- **Do** mantener la declaración de propuesta como h2 y su cuerpo a ancho completo, dos columnas en escritorio y una en móvil.
- **Do** conservar el scroll nativo reversible del salón y el contenido estático completo sin JavaScript o con movimiento reducido.

### Don't:

- **Don't** reintroducir la dirección verde anterior ni mezclar sus fuentes con Jost e Instrument Sans.
- **Don't** filtrar el logo para fabricar una variante blanca ni sustituir fotografías por stock o imágenes generadas.
- **Don't** convertir una consulta por WhatsApp en una promesa de disponibilidad o reserva confirmada.
- **Don't** agregar rótulos decorativos sobre la declaración editorial ni convertir cada plato en una tarjeta.
- **Don't** presentar las rampas auxiliares del sidecar como tokens de CSS, ni atribuir un seed, roll o detector Impeccable inexistente.
- **Don't** convertir las variables transitorias `--iris-*` en primitivas globales, secuestrar el scroll ni extender el scrim fotográfico a un sistema de gradientes.

Excepciones conservadas del brief y la fuente: crema cálido, Jost elegida desde Tondo, varios tamaños por contexto y ausencia de video. El pedido posterior amplió el movimiento con la escena de scroll y sus alternativas. El inspector en `.taste-skill/tondo-scroll-inspect/report.json` mantiene dos WARN (crema y cantidad de tamaños) y ningún FAIL; esos avisos no sustituyen la decisión visual contextual. La evidencia aportada incluye `.taste-skill/tondo-scroll-scenes/{salon-desktop,salon-phone,reduced-desktop}.jpg`. No se regularizaron los radios o ajustes locales ni se canoniza un defecto para ocultar un hallazgo. Las revisiones remiten a los informes citados, con sus respectivos alcances, sin atribuir una auditoría visual propia ni resultados a un detector Impeccable inexistente.

