# Revisión de diseño y cierre — Los Troncos

Informe inicial: disposition: fix. El único arreglo material se resolvió en el verdict pass conservado al final de este documento.

Entradas ausentes: comp aprobado, imagen de referencia de crítica y QUALITY BAR card independiente; implementación code-led con dirección Tondo fijada por el usuario. Motor Impeccable y detector no disponibles; no se ejecutó ni se corroboró un roll de seed. Revisión visual desde archivos, sin navegador; las verificaciones funcionales y check/build son evidencia comunicada por el constructor, no ejecuciones de este revisor.

## persistence

Pass: PRODUCT.md y docs/REDISENO_TONDO.md registran referencia vigente, alcance frontend, hechos comerciales, WhatsApp confirmado y restricciones. No se exige estado de reproducción ni diff contra comp en este recorrido code-led. DESIGN.md quedaba para documentación posterior al cierre de revisión; su ausencia en el momento del informe inicial no era un hallazgo.

Evidencia válida: abiertas las 13 imágenes JPG de .taste-skill/tondo-final/ (fold y todos los mosaicos desktop 1440, tablet 1024, tablet 768 y mobile 390), más tondo-320-full.png, tondo-320-fold.png, tondo-320-menu.png, tondo-mobile-nav.png y tondo-nojs-menu.png en .impeccable/review/. Las secuencias llegan al footer; el gris exterior de los últimos mosaicos es relleno. La captura completa de 320 muestra 305 px útiles más scrollbar, coherente con lo informado. No había archivos faltantes, vacíos ni falsamente identificados que requirieran recaptura inicial.

## fidelity

Evaluación contra el contrato vigente y el material propio del restaurante; sin matriz de reproducción de una comp inexistente. La tabla conserva los resultados de la revisión inicial y señala el cierre posterior del único arreglo.

| Elemento o promesa | Estado | Evidencia |
| --- | --- | --- |
| TYPE | match | Jost geométrica en nombre, títulos y cierre; Instrument Sans en lectura. Los tamaños grandes están autorizados por el brief. Tracking observado hasta −0.04em. No se utiliza una fuente del sistema como voz display. |
| MATERIAL | match | Fotografías reales de platos, salón, terraza, mesa y fachada. El círculo del hero encuadra una fotografía, según el contrato; no suplanta un recorte orgánico. docs/FUENTES_IMAGENES.json identifica originales y transformaciones. |
| GROUND | match | Carbón cálido y nogal, texto crema y acento cobre visibles en todas las clases de pantalla; las variables CSS coinciden con los valores explícitos del contrato. No existe comp para comparar temperatura por muestreo bilateral. |
| THESIS | match | Hero y especialidades dan protagonismo a platos reales; la carta ocupa un bloque principal con nombres, importes y descripciones. |
| OWN-WORLD | match | Tipografía geométrica amplia, superficies oscuras cálidas, botones redondeados y fotografías con ritmos escalonados. |
| STORY | match | Reconocimiento, propuesta, especialidades, carta, ambiente, consulta de mesa, ubicación y footer presentes y en ese orden. |
| FIRST VIEWPORT | match | Escritorio: logo preservado, nombre a la izquierda y pizza protagonista a la derecha. Móvil: nombre, acciones, información práctica y foto en secuencia vertical. Memoria visual: Los Troncos y pizza sobre carbón cálido. |
| FORM | adaptation | Referencia fijada por el usuario y ejecución code-led. El contrato declara seed no disponible; no debe presentarse como roll verificado ni como decisión generada por motor. No corresponde inventar seed ni exigir una nueva selección visual. |
| Navbar y reservas | match | Navegación redondeada; menú móvil amplio y legible. Consulta por WhatsApp y aviso de confirmación del local, coherentes con el alcance confirmado. |
| Carta responsive | match | Tabla editorial en escritorio; listado y select de categorías en móvil. Capturas 320 y sin scripts conservan acceso a la carta. No hay desbordamiento visible. |
| Propuesta: rótulo sobre declaración | match tras arreglo; inicialmente contradicted | En mobile-page-01.jpg, «Nuestra propuesta» aparecía como eyebrow encima de «Distintos gustos. La misma mesa.», recurso prohibido por el craft-floor aunque el nodo fuera h2. src/pages/index.astro:34 y src/styles/global.css:35,52 lo producían. Las capturas tondo-fix-desktop.png y tondo-fix-mobile.png acreditan su eliminación y la promoción de la declaración a título editorial; ver verdict. |

La fotografía aportada y la identidad original evitan afirmaciones o materiales ficticios. El teléfono, horarios, dirección y aviso de precios corresponden al contexto registrado. No hay cifras de éxito, reseñas o disponibilidad inventadas visibles. El código mantiene el mapa bajo demanda y alternativas de navegación sin JavaScript. El movimiento suave y el comportamiento con reducción de movimiento se observan en el código; una captura estática no acredita su ejecución.

## ceiling

Sin QUALITY BAR card independiente no se certifica un techo externo. El mundo comprometido sí utiliza sus dispositivos principales: composición editorial amplia, fotografía gastronómica dominante, escalonamiento de imágenes, contraste entre carbón y nogal, gran cierre tipográfico y cobre reservado a acciones. No surge una necesidad material de añadir ornamento, profundidad simulada o nuevos assets.

El inspector taste comunicado registra 0 FAIL y 2 WARN: crema autorizada por el contrato y multiplicidad de tamaños. El lint comunicado registra 0 FAIL y 3 WARN sobre bordes funcionales. No se convierten en fallos materiales por sí solos; la jerarquía visible es consistente. No son resultados del detector Impeccable. Tampoco se certifican WCAG completa, Core Web Vitals ni comportamiento funcional ejecutado por este revisor.

## material_fixes

1. **Resuelto — piso / propuesta.** El arreglo solicitado en src/pages/index.astro:34 era eliminar el rótulo visible «Nuestra propuesta» y convertir «Distintos gustos. La misma mesa.» en el h2 con id="proposal-title", conservando su tratamiento editorial; ajustar src/styles/global.css:35,52 para que no heredara la tipografía pequeña del rótulo ni dejara una columna vacía. Evidencia inicial: .taste-skill/tondo-final/mobile-page-01.jpg, segundo panel, y desktop-page-01.jpg, segundo panel. El verdict pass verificó la resolución en escritorio y móvil; no quedan arreglos materiales abiertos.

## keep

Conservar la fotografía gastronómica dominante, carbón/nogal/cobre, Jost de gran escala, identidad original, secuencia editorial, carta real y accesos a reserva y ubicación; el arreglo del rótulo no debe diluir esos compromisos.

## verdict

1. **resolved — eyebrow de la propuesta.** Abiertas .impeccable/review/tondo-fix-desktop.png y .impeccable/review/tondo-fix-mobile.png: el rótulo «Nuestra propuesta» desapareció y «Distintos gustos. La misma mesa.» ocupa el título editorial, con su escala y sin columna vacía. Ambas capturas son válidas para la sección solicitada y muestran también el inicio de especialidades. src/pages/index.astro:34 confirma h2#proposal-title.editorial-statement; src/styles/global.css:35,45,52 elimina el tratamiento pequeño y conserva cuerpo a dos columnas en escritorio y una en móvil.

Regresiones introducidas por el arreglo: ninguna observada en las dos capturas. El título, texto, enlace al espacio y comienzo de especialidades mantienen jerarquía, separación y ajuste al ancho.

## remaining

clear

Este ship cubre únicamente el arreglo puntuado. La evidencia anterior sigue siendo la base de la revisión del resto de la superficie. No se volvió a auditar la landing completa; no se ejecutó navegador, detector Impeccable ni roll de seed. Sin comp aprobado ni QUALITY BAR card independiente. Las comprobaciones funcionales y check/build son resultados comunicados por el constructor; no se certifican WCAG completa ni Core Web Vitals.

disposition: ship

