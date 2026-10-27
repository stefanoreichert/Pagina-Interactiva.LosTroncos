# Los Troncos Resto Bar · Plan de diseño web

Fecha: 27 de octubre de 2026. Versión: 0.3. Estado: propuesta provisional para revisión, previa a implementación.

## 1. Alcance y decisiones de partida

El proyecto se desarrollará desde cero. No hay una página anterior que comparar ni una aplicación implementada. Se recibieron materiales de marca, fotografías y una carta en el Drive compartido; la carpeta local `imagenes` mencionada por el usuario no aparece en el checkout revisado. El inventario y sus límites se registran en la sección 8.4.

**Confirmado por el usuario:** nombre Los Troncos Resto Bar; experiencia premium, moderna y responsive; identidad gastronómica propia; Roma como inspiración sin copia literal; verde bosque como base provisional. Esta etapa produce planificación, sin implementar la página ni instalar dependencias.

**Propuesto para validar:** un sitio gastronómico centrado en descubrir el lugar, consultar la carta y organizar una visita. Público supuesto: personas que evalúan dónde comer o reunirse, frecuentemente desde el teléfono. La especialidad, el tipo de servicio y el posicionamiento comercial siguen pendientes.

La aprobación de la base visual no convierte en definitivos los colores exactos, las fuentes, el stack o el canal de reservas de este documento.

## 2. Skills revisadas y criterio de aplicación

Se revisaron las ocho skills de diseño instaladas en `.agents/skills/`.

| Skill | Aporte a esta planificación | Límite de aplicación |
| --- | --- | --- |
| brand | Personalidad, voz, materiales, coherencia de identidad | No se inventan historia, logo ni atributos del negocio |
| design-taste-frontend | Concepto propio, fotografía protagonista, variedad de secciones y jerarquía | Sus propuestas automáticas se subordinan a la referencia, la paleta aprobada y el rendimiento solicitado |
| frontend-design | Tipografía deliberada, composición y revisión de soluciones genéricas | Su aporte es dirección visual, sin escribir interfaz |
| impeccable | Flujos, necesidades, estados y planificación previa al desarrollo | Se aplica el criterio de shape; no se ejecuta el proceso de construcción |
| ui-ux-pro-max | Consulta del catálogo y criterios de accesibilidad, tacto y adaptación | Las recomendaciones se evalúan por pertinencia, no se adoptan en bloque |
| design-system | Valores base, roles semánticos, componentes y estados coherentes | Se documenta el sistema; no se generan CSS ni configuración |
| ui-styling | Patrones accesibles y criterios responsive | No obliga a elegir React, shadcn/ui o Tailwind antes de definir la arquitectura |
| web-design-guidelines | Referencia para la revisión futura de la interfaz | La auditoría de código corresponde a la implementación; todavía no hay archivos UI que auditar |

La selección de `design-taste-frontend` ofreció las direcciones «One motif», «The split stage» y «The place carries it». Se adopta la última como hipótesis: el lugar real y su mesa sostienen la experiencia. Depende de conseguir fotografías propias; no se reemplazará el local con imágenes de otros restaurantes.

Se conserva la orientación fotográfica y de carta impresa de esa dirección. Se sustituye su paleta automática «Lunar and bronze» por el verde bosque pedido. Se adapta la composición a un título sobre fondo sólido para asegurar legibilidad y se agrega una sans serif para la carta y los controles. Se limita la animación: no se adoptan sus cuotas de escenas de scroll o elementos en movimiento, por el requisito explícito de rendimiento y utilidad móvil.

La consulta inicial de `ui-ux-pro-max` sugirió vidrio óptico y lujo negro/dorado; una segunda consulta más específica sugirió bloques vibrantes y rojo. Ninguna constituye un encaje visual adecuado con la base aprobada. No se presentan como una validación estética del proyecto. Se toman sus criterios de interacción y accesibilidad como guía general, y se conserva la dirección acordada.

El cargador automático de contexto de `impeccable` no pudo ejecutarse porque su motor no está instalado y necesita acceso de escritura fuera del proyecto. Se revisaron directamente el repositorio y sus referencias de planificación. No se ejecutaron ni se afirman auditorías visuales de una página construida.

## 3. Dirección creativa

**Concepto provisional: «La mesa de Los Troncos».**

La página invita a acercarse al lugar: primero su nombre y ambiente, después su cocina y su carta, finalmente la información necesaria para ir. El nombre inspira una sensación de solidez y calidez; no demuestra que exista parrilla, cocina a leña o decoración en madera.

La carta recibida aporta un detalle propio verificable: platos con nombres como Lapacho Negro, Cedro Misionero, Araucaria, Timbó y Palo Rosa. Se propone que **los nombres de árboles de su carta se conviertan en el hilo editorial de la web**: títulos de producto protagonistas, fotografías asociadas y una selección gastronómica con esos nombres, sin reemplazarlos por categorías genéricas. «La mesa de Los Troncos» se sostiene ahora en ese contenido real. No se inventará una historia forestal, procedencia de ingredientes o técnica de cocina a partir de los nombres.

**Carácter:** cálido, seguro, contemporáneo y hospitalario. El valor premium se expresa con fotografía cuidada, tipografía con carácter, espacio y precisión en la información.

**De Roma se toma:** verde profundo, contraste entre tipografía y fotografía, escala de marca y alternancia entre bloques de contenido y pausas visuales. La referencia observada combina hospitalidad, restaurante, imágenes y contenido editorial. [Ficha de Roma](https://godly.design/templates/roma/) · [Demo consultada](https://roma-template.framer.website/).

**Traducción propia:** nombre completo sin fragmentarlo como RO./MA.; carta accesible como núcleo interactivo; información práctica visible; imágenes del negocio; lenguaje cercano en español. Las secciones de hotel, villas y journal de la referencia no forman parte del alcance propuesto.

Evitar recursos ajenos al lugar, texturas de madera artificiales, sellos inventados, dorados metálicos, efectos de vidrio, cursores personalizados y grillas repetidas para todo el contenido.

## 4. Sistema de diseño provisional

### 4.1. Color y roles

| Valor base | Nombre | Rol previsto |
| --- | --- | --- |
| `#203D31` | Bosque | Identidad, superficies principales y acción primaria sobre fondo claro |
| `#172C24` | Bosque profundo | Texto principal sobre claro, hover del botón primario y cierre |
| `#F6F3EB` | Lino | Fondo claro y texto sobre verde |
| `#E4E8DF` | Salvia pálida | Superficies auxiliares, selección suave y agrupación funcional |
| `#59665C` | Hoja seca | Texto secundario sobre lino |
| `#D6B679` | Madera clara | Acento moderado sobre bosque, asociado al nombre y sujeto a las fotos reales |

La base combina campos amplios de bosque y lino; salvia acompaña la carta. Madera clara ocupa aproximadamente un 5% del color de interfaz, sin contar fotografías. No es un acabado metálico. Se propone una única apariencia editorial, sin selector de modo claro/oscuro.

Contrastes calculados para colores sólidos: bosque/lino **10,68:1**; bosque profundo/lino **13,32:1**; hoja seca/lino **5,44:1**; madera clara/bosque **6,11:1**. Madera clara no se usará como texto pequeño sobre lino. La composición final deberá volver a verificar fotografías, estados y combinaciones adicionales.

Color funcional adicional para errores: `#8D392F` sobre lino, contraste **6,86:1**. Se acompaña siempre de texto. La confirmación utiliza bosque y una frase explícita; no depende solo del color.

Arquitectura conceptual de tokens: **valor base → propósito → componente**. Ejemplo: bosque → acción principal → fondo del botón. Separar fondo de página, texto, superficie, borde de control, foco, acción y error. Los bordes de controles deben alcanzar 3:1 contra su entorno; los separadores decorativos pueden ser más suaves.

### 4.2. Tipografía

| Uso | Familia propuesta | Tratamiento |
| --- | --- | --- |
| Nombre editorial y títulos | Erode | Peso 500, serif con presencia y trazos firmes; sin ornamentación adicional |
| Párrafos, carta, navegación y controles | Instrument Sans | Pesos 400 y 600, lectura rápida y tono contemporáneo |
| Precios y horarios | Instrument Sans | Cifras tabulares, alineación consistente |

Erode procede de la dirección seleccionada. Instrument Sans facilita la lectura funcional en móvil. Referencias de las familias: [Erode en Fontshare](https://www.fontshare.com/fonts/erode) e [Instrument Sans en Google Fonts](https://github.com/google/fonts/tree/main/ofl/instrumentsans). Antes de incorporarlas se comprobarán licencia de los archivos elegidos, caracteres españoles y disponibilidad de formatos web. Usar fuentes autoalojadas y conservar sus licencias.

Cinco roles tipográficos, con tamaño fluido y límites:

| Rol | Móvil | Escritorio | Interlineado |
| --- | --- | --- | --- |
| Display | 48–64 px | 96–144 px | 0,98–1,05 |
| Título de sección | 32–40 px | 48–64 px | 1,10 |
| Introducción | 20–22 px | 24–26 px | 1,40 |
| Cuerpo y controles | 16–18 px | 17–19 px | 1,50–1,60 |
| Información auxiliar | 14 px | 14 px | 1,45 |

Títulos en un máximo de dos líneas, cuerpos de 45–65 caracteres por línea y alineación izquierda. No justificar párrafos. El nombre puede ocupar dos líneas en móvil, con «Los» y «Troncos» juntos o separados según medición, sin cortar palabras. Se identificó y revisó visualmente `LOGO_LOS_TRONCOS.jpg`: lettering negro, símbolo circular de cubiertos y descriptor en ocre sobre fondo claro. Se preserva el logo; Erode se reserva para títulos editoriales, no para redibujarlo. Verde bosque será el entorno de la web y el acento deberá convivir con el ocre del logo. Falta validar un original vectorial o de fondo transparente y su tamaño mínimo legible; no recolorear automáticamente el JPG.

### 4.3. Espaciado y composición

- Escala base: 4, 8, 12, 16, 24, 32, 48, 64, 96 y 128 px.
- Margen exterior simétrico: 20 px móvil, 24 px tablet y 32 px escritorio. Ancho máximo de contenido: 1440 px; fotografías de ambiente pueden ocupar todo el ancho.
- Grilla de 4 columnas en móvil, 8 en tablet y 12 en escritorio. Separaciones: 16, 24 y 32 px respectivamente.
- Distancia orientativa entre secciones: 72–96 px móvil y 120–160 px escritorio. Se ajusta a la densidad; ninguna sección se estira solo para llenar una pantalla.
- Ritmo: portada tipográfica y fotografía → introducción breve con detalle → carta densa → ambiente fotográfico → visita y contacto.
- Fotografías con esquinas rectas; controles con radio de 4 px; sin sombras en bloques editoriales. Las capas flotantes pueden usar una sombra discreta exclusivamente para expresar superposición.

### 4.4. Botones, enlaces y estados

| Elemento | Apariencia | Interacción |
| --- | --- | --- |
| Acción primaria | Bosque y texto lino; variante lino y texto bosque sobre verde | Altura mínima 48 px, padding horizontal 24 px; hover bosque profundo o salvia según variante |
| Acción secundaria | Enlace textual subrayado | Subrayado también disponible sin hover; nombre que describe el destino |
| Categoría de carta | Texto en superficie clara | Selección con subrayado, peso 600 y estado anunciado, además de color |
| Icono funcional | Trazo simple y consistente | Área táctil mínima 44 × 44 px y nombre accesible |
| Campo, si se aprueba formulario | Etiqueta visible y borde contrastado | Foco, valor, error junto al campo y ayuda cuando sea necesaria |

Estados obligatorios: reposo, hover donde exista puntero, pulsado, foco visible, seleccionado cuando corresponda, deshabilitado y pendiente únicamente en operaciones asíncronas. Foco de 2 px con separación y contraste adecuado: bosque sobre lino, lino sobre bosque. No depender del cambio de color para señalar selección o error.

La acción principal de la portada será **«Ver la carta»**. Por decisión del usuario, las reservas se gestionan por WhatsApp pero se abordarán más adelante: en esta etapa no se diseña ni incluye CTA de reserva, consulta de mesa o formulario de reserva. Un enlace general de contacto no se presentará como un flujo de reservas.

### 4.5. Componentes previstos

Cabecera, navegación móvil, portada, bloque editorial, fotografía responsive, categoría de carta, fila de plato/bebida, bloque de contacto, lista de horarios, enlace de ubicación y pie de página. Detalle ampliado de un plato y formulario de consulta son opciones condicionadas a contenido y operación reales.

Las filas de carta repiten un patrón porque contienen información comparable. Los demás bloques varían su composición. No se transforma cada sección en una tarjeta.

## 5. Estructura de la página

Propuesta inicial: una página principal con anclas. Cada sección debe responder una pregunta y ofrecer evidencia real.

| Orden | Sección / ancla | Pregunta del visitante | Evidencia necesaria |
| --- | --- | --- | --- |
| 1 | Inicio / `#inicio` | ¿Qué lugar es? | Nombre, descriptor gastronómico y fotografía propia |
| 2 | El lugar / `#el-lugar` | ¿Qué tiene de particular? | Descripción concreta y un detalle real del espacio o servicio |
| 3 | Carta / `#carta` | ¿Qué puedo pedir y cuánto cuesta? | Oferta completa, precios y disponibilidad editorial |
| 4 | Ambiente / `#ambiente` | ¿Cómo se siente estar ahí? | Fotografías del salón, barra y mesa |
| 5 | Visitanos / `#visitanos` | ¿Dónde, cuándo y cómo voy? | Dirección, horarios y canal operativo de contacto |
| 6 | Cierre | ¿Dónde vuelvo a encontrar los datos? | Nombre, contacto y enlaces oficiales |

### 5.1. Cabecera y portada

Cabecera de fondo sólido, marca a la izquierda y enlaces Carta, El lugar, Ambiente y Visitanos a la derecha. El acceso de contacto recibe énfasis cuando se defina su canal. La página explica desde el primer vistazo que se trata de un resto bar.

Portada de escritorio: campo bosque superior con nombre grande, descriptor breve y «Ver la carta»; debajo, fotografía ancha de una mesa o del espacio, entrando en el primer encuadre. La imagen ocupará aproximadamente el 45–55% de ese encuadre cuando la altura lo permita. Nombre y acción permanecen juntos y legibles sobre color sólido.

En móvil: cabecera compacta, nombre, descriptor y acción, seguidos por un recorte vertical propio. El contenido determina la altura; no se fuerza todo a una pantalla en teléfonos bajos. No se oculta el CTA detrás de una animación.

Texto provisional: título «Los Troncos»; descriptor «Resto bar para compartir mesa»; acción «Ver la carta». El descriptor es una propuesta de voz, pendiente de validar con el perfil del negocio. No afirmar «al fuego», «artesanal» o una especialidad sin confirmación.

### 5.2. El lugar

Fondo lino, título «El lugar», párrafo de 40–70 palabras a la izquierda y fotografía de un detalle reconocible a la derecha, con proporciones distintas a la portada. El contenido explica una particularidad comprobable, no una promesa genérica de calidad. En móvil, texto y foto se apilan en ese orden.

No se añadirá una historia fundacional, una fecha de apertura o un manifiesto hasta contar con material auténtico. Si falta una historia sustantiva, este bloque se reduce y se integra al ambiente.

### 5.3. Carta: interacción principal

Sección lino/salvia con título «La carta», categorías reales y filas legibles: nombre, descripción breve y precio alineado. Variantes, tamaños y unidades deben ser explícitos cuando alteren el precio. No hay texto escondido obligatoriamente tras hover.

- Mostrar la carta completa en texto; un PDF actualizado puede ser complemento.
- La versión inicial puede organizar «Cocina» y «Bebidas» si esos grupos coinciden con la oferta. Entradas, principales, postres o tragos son categorías tentativas, no confirmadas.
- Los filtros reducen la lista según categoría, sin recargar ni llevar al usuario al comienzo de la página. «Toda la carta» permite recuperar el conjunto.
- Categorías en una fila si caben; si hay demasiadas, usar un selector con etiqueta visible en móvil. No imponer desplazamiento horizontal difícil de descubrir.
- Sin JavaScript, todas las categorías permanecen disponibles con sus encabezados y enlaces internos.
- Si el catálogo supera aproximadamente 50 ítems, evaluar búsqueda por nombre; no agregarla por defecto.
- No se incorpora carrito. Cualquier pedido online requiere otro alcance y operación de cumplimiento.
- Indicaciones dietarias y alérgenos solo se muestran con información suministrada por cocina. No inferir «sin gluten» por ingredientes aparentes.
- Si se aprueba detalle ampliado, incluir únicamente platos con información adicional útil; diálogo con cierre visible, Escape y retorno de foco.

El estado seleccionado se reconoce por texto y forma; el número de resultados puede anunciarse discretamente a lectores de pantalla. Mantener foco en el filtro utilizado. Sin coincidencias: «No hay opciones en esta categoría» y acción «Ver toda la carta». Una carta no disponible debe informar la situación y ofrecer el canal real de consulta, nunca mostrar precios ficticios en producción.

### 5.4. Ambiente

Una fotografía ancha del lugar seguida de dos recortes complementarios de mesa y barra, con tamaños distintos. Título «Compartir la mesa», provisional. Dos o tres frases concretas sobre la experiencia, sujetas a la realidad del local.

En móvil, secuencia vertical editada de tres fotografías. No se exige carrusel, arrastre ni autoplay para verlas. No se cargan embeds sociales: un enlace al perfil oficial cumple la función con menor peso.

### 5.5. Visitanos y contacto

Campo bosque con título «Visitanos». Columna principal: dirección completa, referencia útil y enlace «Cómo llegar». Columna secundaria: horarios por día, teléfono y canal de consulta. En móvil, dirección → horarios → contacto.

La ubicación se presenta como enlace a un mapa real verificado. Un mapa embebido queda condicionado a necesidad; no se carga automáticamente. No se dibujará una ubicación ficticia como decoración.

**Ruta funcional para el alcance actual:** ubicación, horarios, redes oficiales y contacto general. Se conoce WhatsApp como canal del negocio; su enlace internacional sigue pendiente de confirmar. Las reservas por ese canal quedan expresamente pospuestas por el usuario y no se incorporan a esta etapa.

**Etapa posterior de reservas:** retomar únicamente cuando el usuario lo solicite. Entonces se definirán mensaje, responsable, capacidad y confirmación; no es un requisito para cerrar el diseño actual.

Los horarios deben contemplar turnos que atraviesan medianoche, días cerrados y excepciones. No mostrar «Abierto ahora» en la primera versión: necesita horario completo, zona horaria real del local y tratamiento de feriados.

### 5.6. Cierre

Regreso del nombre Los Troncos en escala amplia, con contacto y enlaces oficiales legibles. Cierre compacto; sin repetir una navegación extensa. Incorporar política de privacidad si se recopilan datos o se usan servicios que la requieran. Datos comerciales y enlaces legales finales quedan pendientes de validación.

### 5.7. Wireframe conceptual

```text
Escritorio                         Móvil
Marca       enlaces   contacto     Marca              Secciones
Nombre grande + descriptor         Los Troncos
Ver la carta                       Descriptor + Ver la carta
Fotografía ancha del lugar         Foto vertical
El lugar: texto | detalle          El lugar → texto → detalle
Carta: categorías + filas          Carta → selector → filas
Ambiente: ancha + par de fotos     Ambiente → secuencia de fotos
Visitanos: ubicación | horarios    Dirección → horarios → contacto
Nombre + contacto                 Nombre + contacto
```

## 6. Navegación y experiencia móvil

- Cabecera sticky estable: 72 px escritorio y aproximadamente 64 px móvil, con fondo sólido. Reserva su espacio y no cambia bruscamente de altura al desplazarse.
- Enlaces de ancla con compensación por la cabecera. Al seguirlos, el encabezado de destino queda visible y el foco permite continuar desde esa sección. Respetar Atrás y Adelante del navegador.
- El enlace activo se indica con subrayado y estado accesible; no solo con color. La navegación básica no depende de detectar la sección por JavaScript.
- En móvil, botón **«Secciones»** para evitar confusión con la carta gastronómica. Abre un panel sobre fondo sólido con enlaces grandes y cierre visible.
- Panel cerrado: botón anuncia su estado. Abierto: foco dentro, contenido del fondo no interactivo y scroll de fondo bloqueado sin saltos. Cierra por botón, Escape o selección de enlace. Al cerrar con botón/Escape devuelve el foco; al elegir sección, lo lleva al destino.
- Sin JavaScript, los enlaces esenciales deben seguir accesibles mediante una alternativa nativa expandible o una navegación simple visible.
- Se propone omitir inicialmente una barra fija inferior: el CTA de carta está en portada y el acceso de contacto en navegación y Visitanos. Evaluarla después de medir el prototipo móvil, solo si aporta utilidad y no tapa contenido.
- Controles de al menos 44 × 44 px, separación mínima de 8 px y botones principales de 48 px de alto. Contemplar zonas seguras del teléfono.
- Anchos de referencia: 320, 390, 768, 1024, 1440 y 1920 px. Umbrales iniciales: 768 y 1024 px, ajustables cuando el contenido lo exija. Reorganización real de columnas y recortes, no una reducción proporcional.
- Texto ampliable, sin bloquear zoom. Comprobar reflujo a 320 px y aumento de texto al 200%, nombres largos, precios extensos y teclado virtual si existe formulario.

## 7. Movimiento y transiciones

El movimiento ayuda a comprender cambios y aporta un único gesto de carácter. El sitio debe resultar completo y utilizable en estado estático.

| Situación | Propuesta | Duración orientativa | Reducción de movimiento |
| --- | --- | --- | --- |
| Primera fotografía | Asentamiento sutil de escala 1,02 a 1, una vez; texto y CTA ya visibles | 600–800 ms | Fotografía quieta |
| Enlaces y botones | Cambio de color y subrayado; sin desplazamiento de layout | 140–180 ms | Cambio inmediato de estado |
| Navegación móvil | Entrada breve del panel, movimiento máximo 12 px y opacidad | 180–240 ms | Aparición inmediata |
| Filtro de carta | Estado seleccionado inmediato; transición breve del contenido si conserva continuidad | 120–160 ms | Sustitución inmediata |
| Fotografía secundaria | Un acercamiento de hasta 1,015 al hover, solo con puntero preciso | 200–240 ms | Imagen quieta |
| Ancla | Desplazamiento nativo suave opcional | Controlado por navegador | Salto directo |

Curva general propuesta: ease-out sin rebotes. No animar cada párrafo ni cada fila al entrar. El gesto de fotografía es el único movimiento ornamental inicial; si genera costo o molestia, se elimina sin perder contenido.

Preferir CSS y, cuando sea necesario, Web Animations API. Animar transform y opacity; no ligar efectos continuos al scroll. Sin smooth-scroll externo, parallax, WebGL, letras divididas, blur animado, escenas fijadas o loaders de entrada. No sumar GSAP en la primera versión para resolver estas interacciones simples.

Video fuera del alcance base. Si existe un clip propio especialmente útil, evaluarlo como mejora posterior con poster, control de pausa, sin sonido automático y sin descargarlo en móvil o ahorro de datos cuando pueda detectarse. El hero debe funcionar con fotografía.

## 8. Material real necesario

### 8.1. Relevamiento fotográfico

| Material | Cantidad orientativa | Uso y requisito |
| --- | --- | --- |
| Mesa y ambiente principal | 2–3 tomas | Portada; versiones horizontal y vertical con composición propia |
| Platos representativos | 4–6 | Oferta real, porciones y presentación habituales |
| Barra y bebidas | 2–3 | Solo si forman parte de la propuesta real |
| Salón, acceso y detalle reconocible | 3–4 | Reconocimiento del lugar e identidad propia |
| Equipo o servicio | 1–2 opcionales | Solo si aporta relato y hay autorización de las personas |

Seleccionar después unas 6–10 fotos para la página. Solicitar originales de buena resolución: alrededor de 2400 px de ancho para portada y 1600 px para interiores, sin obligar al navegador a descargar los originales. Prever recortes 16:9/3:2 y 4:5; evitar cortar platos, manos o cartelería al adaptar. Registrar derechos, autor y uso permitido.

Luz cálida natural, alimentos con color fiel, personas y servicio auténticos. No imponer una gradación verde sobre la comida. No usar fotografía stock o generada como evidencia de platos o espacios del negocio. Mientras falten fotos, los wireframes pueden describir sus espacios; no se aprueba la composición fotográfica definitiva.

### 8.2. Textos y datos

| Dato | Para qué se necesita | Estado |
| --- | --- | --- |
| Logo y sus variantes; identidad existente | Respetar reconocimiento y ajustar tipografía/color | JPG localizado y revisado; original vectorial/transparente pendiente |
| Tipo de cocina, especialidad y servicio | Descriptor, relato y jerarquía de carta | Carta con pizzas, hamburguesas, sándwiches, milanesas, carnes, pastas y otras opciones; especialidad principal y servicio por confirmar |
| Carta íntegra, categorías, descripciones y variantes | Interacción principal | PDF localizado y lectura textual inicial realizada; transcripción y correspondencia visual de precios pendientes |
| Precios, moneda, impuestos/cargos y fecha de vigencia | Transparencia y mantenimiento | Pendiente; no asumir guaraníes ni otra moneda |
| Información dietaria y alérgenos validada | Fichas y consultas seguras | Pendiente |
| Dirección, ciudad, país, acceso y pin de mapa | Visitanos y SEO local | Enlace aportado por el usuario; ficha de Maps: Av. San Martín 2758, N3334 Puerto Rico, Misiones, Argentina; detalles de acceso pendientes |
| Horarios, feriados y zona horaria del local | Información práctica | Usuario: jueves a domingo, de 19:00 a 01:30 del día siguiente; excepciones, otros turnos y zona horaria de publicación pendientes |
| Teléfono, WhatsApp, email y redes oficiales | Contacto verificable | Instagram, Facebook y WhatsApp aportados; formato internacional de WhatsApp pendiente; email y uso para llamadas sin confirmar |
| Proceso de reservas, responsable y plazo de respuesta | Etapa posterior | Canal confirmado: WhatsApp; usuario pide no incluir reservas por el momento |
| Historia breve y diferenciador comprobable | El lugar e identidad propia | Pendiente |
| Responsable de actualizar carta y horarios | Operación editorial | El usuario actualizará la carta; método de edición y responsable de horarios por definir |
| Dominio, hosting, acceso y presupuesto de mantenimiento | Decisión técnica final | Pendiente |
| Necesidad de idiomas, eventos o pedidos online | Delimitar alcance | Pendiente; no incluidos por defecto |

Voz propuesta: español cercano con voseo consistente —«Mirá la carta», «Consultanos», «Visitanos»—, usando etiquetas funcionales estables como «Ver la carta» y «Cómo llegar». Validar el voseo con la marca antes de cerrar los textos. Evitar superlativos, reseñas inventadas, cifras de clientes y años de trayectoria no verificados.

### 8.3. Datos de visita recibidos el 27 de octubre de 2026

- **Ubicación:** [enlace de Google Maps proporcionado por el usuario](https://maps.app.goo.gl/DNBgihDe15QJHSq88). La ficha abierta corresponde a «Los Troncos resto bar» y muestra **Av. San Martín 2758, N3334 Puerto Rico, Misiones**. País contextualizado por esa localidad: Argentina. Coordenadas del lugar en el enlace resuelto: latitud `-26.8197802`, longitud `-55.0273788`.
- **Horario confirmado por el usuario:** jueves, viernes, sábado y domingo, **19:00–01:30 del día siguiente**. La atención iniciada el domingo termina el lunes a la 01:30. Conservar el día de apertura como referencia y expresar explícitamente el cierre después de medianoche. No inferir turnos de almuerzo ni horarios especiales.
- **Instagram:** [@lostroncos_restobar](https://www.instagram.com/lostroncos_restobar/).
- **Facebook:** [Los Troncos Restobar](https://www.facebook.com/lostroncos.restobar.2025?locale=es_LA).
- **WhatsApp suministrado:** `3743611895`, presentado localmente como `3743 61-1895`. La ficha de Maps muestra el teléfono `03743 61-1895`, consistente con los dígitos aportados. Falta confirmar su formato internacional para WhatsApp; candidato a validar con el usuario: `+54 9 3743 611895`. No generar el enlace definitivo ni probarlo enviando mensajes hasta resolver ese dato.

**Diferencia entre fuentes:** Maps muestra una próxima apertura a las 11:00, distinta del horario nocturno indicado por el usuario. Para el diseño y la futura web prevalece el horario facilitado directamente por el usuario. La ficha externa no se modificó. Queda pendiente aclarar si existen otros turnos o si Maps necesita una actualización independiente.

**Aplicación al diseño:** Visitanos ya puede planificarse con dirección, horario nocturno y enlaces sociales reales. El usuario confirmó posteriormente que las reservas se gestionan por WhatsApp y pidió abordarlas más adelante. Los pedidos y el plazo de respuesta siguen sin confirmar. Las reservas quedan fuera del alcance actual.

### 8.4. Material de Drive y decisiones posteriores

Fuente: [carpeta compartida por el usuario](https://drive.google.com/drive/folders/16lCpJHtLAmeLJZGV41ZhAJ0XBoz_FxZ3?usp=sharing). Se accedió con el conector de Google Drive en modo lectura; no se cambiaron archivos, organización ni permisos.

| Material localizado | Fuente | Uso previsto y estado |
| --- | --- | --- |
| `MENÚ LOS TRONCOS (1) (1).pdf` | [Menú](https://drive.google.com/file/d/1LXEKSvrkijQsnB9EU_c7h3bThvK8Xyz4/view) | Lectura textual inicial disponible; base para categorías, nombres y descripciones |
| `LOGO_LOS_TRONCOS.jpg` | [Logo](https://drive.google.com/file/d/1jbduEHQR08pl5cBZxpybjmm52vLw2DA6/view) | Revisado visualmente; conservar identidad negra/ocre y lettering |
| `Cartel-LOSTRONCOS.png` y fotos del lugar | [LUGAR](https://drive.google.com/drive/folders/1TO0t-WgB0zeiRn5FwoSp0YjDoX037MIV) | 13 archivos listados; selección fotográfica, dimensiones y recortes aún pendientes |
| Fotos, logo, imágenes y un video | [imagenes_crudas](https://drive.google.com/drive/folders/1OTUMUlViYjY5MrOM3ON0DQLwCZJ3V7eT) | Listado de hasta 100 elementos, posiblemente parcial; no equivale a una revisión visual completa |
| Piezas promocionales | [Flyers](https://drive.google.com/drive/folders/1cyouA_ArkpRvUD6SYHD3F-saL0mMxb4m) | 11 archivos listados; no asumir vigencia de promociones o eventos por el nombre de archivo |

La lectura textual del PDF identifica entradas, picadas, empanadas, sándwiches, hamburguesas, pizzas, milanesas, carnes, pescado, guarniciones, pastas, postres y bebidas (sin alcohol, tragos, cervezas y vinos). Reemplazan las categorías gastronómicas hipotéticas como base del próximo wireframe. Agrupar primero Cocina/Bebidas y después las categorías reales para evitar una navegación móvil con demasiadas opciones simultáneas.

El PDF contiene precios, pero su extracción textual mezcla columnas: no vincular automáticamente cada importe al plato próximo en el texto extraído. Cotejar visualmente antes de transcribir. Se observan valores como `$-` y «consultar»: deben revisarse y nunca convertirse en precio cero. Vigencia, moneda y cargos siguen pendientes de confirmación; la fecha del archivo no demuestra vigencia comercial.

El listado contiene archivos cuyo nombre empieza por `ChatGPT Image`; se tratarán como material de procedencia a revisar, no como fotografía documental confirmada. Las fotos del resto de los archivos también requieren selección visual y confirmación de uso. No se ha descargado toda la biblioteca ni declarado aprobadas fotos concretas para portada.

**Mantenimiento confirmado:** el propio usuario actualizará la carta. Falta acordar si prefiere editar archivos estructurados o una interfaz de administración; no se presupone experiencia técnica ni necesidad de CMS por ese único dato.

**Siguiente trabajo de planificación:** cotejar visualmente la carta para extraer su estructura fiel, seleccionar fotografías reales y adaptar los wireframes al logo y a los nombres de árboles presentes en la oferta. No se implementa la página ni se desarrolla el flujo de reservas.

## 9. Arquitectura frontend recomendada

**Recomendación provisional: Astro + TypeScript + CSS con tokens y componentes propios.** El contenido se entrega prerenderizado y las interacciones se agregan como mejoras puntuales. Astro permite aislar funcionalidad interactiva sin convertir toda la página en una aplicación de cliente; esa capacidad coincide con la carta, navegación y contacto propuestos. [Arquitectura de islas de Astro](https://docs.astro.build/en/concepts/islands/).

| Capa | Propuesta | Motivo |
| --- | --- | --- |
| Renderizado | Astro, salida estática inicial | Página pública centrada en contenido y pocos controles |
| Tipado | TypeScript | Modelar carta, horario y datos del local de forma consistente |
| Estilos | CSS propio, variables semánticas y estilos de componente | Control de identidad y sistema pequeño; Tailwind es opcional, no requisito |
| Interacciones | JavaScript/TypeScript nativo puntual | Filtros y navegación no requieren un framework cliente completo |
| Contenido | Datos estructurados validados; colecciones de Astro si aportan orden | Separar carta y datos del negocio de la presentación |
| Fotografías | Pipeline de imágenes de Astro | Variantes responsive y dimensiones explícitas |
| Iconos | Un único conjunto SVG, solo símbolos necesarios | Consistencia y poco peso |
| Publicación | Hosting estático con HTTPS y CDN | Proveedor pendiente según dominio, presupuesto y operación |
| Verificación futura | Playwright para flujos críticos y revisión de accesibilidad | Comprobar navegación, carta y contacto en tamaños reales |

Astro dispone de [colecciones de contenido](https://docs.astro.build/en/guides/content-collections/) y [herramientas de imágenes](https://docs.astro.build/en/guides/images/). Son capacidades verificadas; elegirlas aquí es una recomendación de arquitectura, no una dependencia ya instalada. Las versiones estables y compatibles se fijarán al iniciar el desarrollo.

Separación conceptual: páginas y layout; secciones editoriales; componentes funcionales; estilos/tokens; contenido del negocio; imágenes y fuentes; integraciones de contacto. Rutas iniciales propuestas: `/` y, si corresponde por el tratamiento de datos, `/privacidad/`. Una ruta `/carta/` se evaluará si el volumen o el acceso por QR justifican una vista independiente.

Modelo mínimo de carta: identificador, categoría, nombre, descripción, variantes con precio numérico, moneda, disponibilidad editorial e información dietaria verificada. Modelo del local: nombre, contactos, dirección, coordenadas verificadas, zona horaria, horarios y excepciones. Ningún estado editorial de disponibilidad se presentará como stock en tiempo real.

**Mantenimiento:** el usuario confirmó que actualizará personalmente la carta. Proponer archivos estructurados si acepta un flujo técnico con regeneración/publicación; si prefiere edición visual, seleccionar un CMS antes de implementar, con borradores, vista previa y publicación controlada. El método y la frecuencia siguen pendientes. Esa decisión no obliga a convertir el sitio en una SPA.

**Alternativa condicionada:** Next.js con React si se confirma un alcance de aplicación —reservas integradas, autenticación, panel operativo o pedidos— o una preferencia del equipo por ese ecosistema. Sus componentes de servidor y cliente permiten separar responsabilidades; no se elige solo por las animaciones. [Documentación oficial](https://nextjs.org/docs/app/getting-started/server-and-client-components).

El alcance base no necesita base de datos, cuentas, carrito ni motor de disponibilidad. Un formulario propio requeriría servicio receptor, validación en servidor, controles de abuso y tratamiento definido de datos. Esa infraestructura se presupuestará y diseñará si se elige ese flujo.

## 10. Calidad, rendimiento y requisitos funcionales

### 10.1. Prioridades de alcance

**Versión inicial propuesta:** identidad y fotografías propias; carta completa legible y filtrable; navegación accesible; ubicación y horarios; contacto real; SEO local básico; adaptación móvil.

**Condicionados a confirmación:** detalle de platos, CMS, PDF descargable, carta por QR o idioma adicional. **Pospuestos expresamente:** reservas por WhatsApp y cualquier formulario de reservas. **Otros posibles posteriores:** pedidos, agenda de eventos y fidelización. No se incluyen silenciosamente en la primera versión.

### 10.2. Objetivos medibles para el desarrollo

- Objetivos de experiencia en el percentil 75 cuando haya datos reales: LCP ≤ 2,5 s, INP ≤ 200 ms y CLS ≤ 0,1. Son metas, no resultados obtenidos.
- Presupuesto inicial a verificar: JavaScript propio comprimido ≤ 50 KB en la página principal; carga inicial de recursos transferidos ≤ 1 MB; portada móvil idealmente ≤ 250 KB y escritorio ≤ 400 KB. Revisar calidad visual y red real antes de aceptar estos límites.
- Priorizar la foto visible de portada; no aplicar lazy loading al recurso que produzca el LCP. Cargar imágenes inferiores de manera diferida, con tamaños responsive y espacio reservado.
- Fuentes WOFF2 con los caracteres necesarios y pocos pesos, máximo dos familias; revisar que no provoquen saltos de composición.
- No depender de redes sociales, mapas o video externos para mostrar el contenido principal.
- Semántica con un único título principal, jerarquía de encabezados, enlace para saltar al contenido, foco visible y alternativas textuales útiles. Meta de conformidad: WCAG 2.2 AA, a verificar sobre la interfaz final.
- Metadatos, imagen social y datos estructurados de restaurante basados en información comprobada. No publicar valoraciones, coordenadas o precios inventados.
- Medición opcional de aperturas de carta y clics de contacto/ubicación; no confundir esos clics con visitas o reservas. Proveedor, privacidad y consentimiento dependen de la elección final.

### 10.3. Estados que deben diseñarse

| Superficie | Casos mínimos |
| --- | --- |
| Navegación | Cerrada, abierta, teclado, enlace activo y destino de ancla |
| Carta | Todas, categoría seleccionada, categoría sin opciones, texto largo, variantes y dato faltante |
| Medios | Foto cargando con espacio reservado, error con fondo y texto legibles, recorte móvil |
| Contacto | Enlace correcto y alternativa de teléfono si falla la aplicación externa |
| Formulario opcional | Inicial, validación, enviando, fallo recuperable y recepción exitosa; conservar datos ante error |
| Adaptación | Sin JavaScript, fuente no disponible, movimiento reducido y aumento de texto |

La carta prerenderizada no necesita spinner de red. Los estados de carga y reintento solo aparecen si realmente se incorpora una fuente remota.

## 11. Decisiones pendientes y orden para cerrar la planificación

| Prioridad | Decisión | Consecuencia |
| --- | --- | --- |
| Antes de cerrar identidad | Perfil gastronómico, logo y detalle propio del local | Ajustar concepto, fotografía, voz y tipografía |
| Antes del wireframe definitivo | Cotejo visual de carta recibida y contacto general | Cerrar categorías y estructura; CTA «Ver la carta»; reservas pospuestas |
| Antes de cerrar diseño visual | Selección de fotos y muestras de texto real | Verificar composición, contraste y densidad |
| Antes de elegir integración | Quién actualiza carta y con qué frecuencia | Definir archivos o CMS |
| Antes de programar | Aprobación del sistema, estructura, flujos y stack | Establecer alcance definitivo de la primera versión |
| Antes de publicar | Datos completos, dominio, horarios, precios y enlaces | Validación comercial y operativa |

Próximo entregable de diseño: wireframes de escritorio y móvil con contenido representativo, después una composición de portada y carta con fotos propias. Revisar legibilidad y jerarquía antes de preparar el desarrollo. No iniciar implementación hasta que el usuario dé por cerradas la planificación y las decisiones funcionales necesarias.

## 12. Estado de este documento

Se preparó una propuesta escrita y se calcularon los contrastes de las combinaciones base. Se consultaron las ocho skills, la ficha y demo de Roma y documentación primaria de las tecnologías recomendadas. Las diferencias frente a recomendaciones automáticas se explicitan arriba.

No existe aún una maqueta renderizada ni una implementación sobre la que afirmar rendimiento, accesibilidad o validación responsive. Las medidas, presupuestos y comportamientos de este documento son requisitos para esa fase. Este archivo es la referencia provisional de planificación; no constituye un sistema implementado ni reemplaza decisiones pendientes del negocio.
