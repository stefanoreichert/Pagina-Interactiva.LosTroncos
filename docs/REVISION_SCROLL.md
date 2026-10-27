disposition: ship

Alcance: extensión del scroll de Tondo solicitada por el usuario («sigue con el scroll, haz identico a la pagina»), preservando materiales, datos, funciones y arquitectura de Los Troncos. No hay comp aprobado ni tarjeta QUALITY BAR independiente; motor, seed y detector Impeccable no disponibles, expresamente declarados en el paquete. Revisión de archivos y capturas aportadas, sin ejecutar navegador ni certificar identidad píxel a píxel.

## persistence

Pass. PRODUCT.md y DESIGN.md mantienen la identidad carbón/nogal, Jost/Instrument y las fotografías reales. docs/SCROLL_TONDO.md registra la observación y las cinco promesas aplicables: momento focal, materiales propios, secuencia de lectura, composición inicial y forma técnica con alternativa estática. No corresponde exigir estado de reproducción de un comp inexistente ni atribuir un seed.

Evidencia válida: abiertas las capturas scroll-reference-{start,mid,end}.png, scroll-desktop-{start,mid,end}.png, scroll-mobile-{start,mid,end}.png, scroll-320-start.png y scroll-nojs.png de .impeccable/review/. Abiertas también las planchas salon-desktop.jpg, salon-phone.jpg y reduced-desktop.jpg de .taste-skill/tondo-scroll-scenes/. Los estados muestran contenido y corresponden a sus nombres; las zonas grises finales de las planchas son casillas vacías del montaje, no regiones de la página.

Fuentes muestreadas: EscenaSalon.astro, scroll.ts, Foto.astro, la integración en index.astro y main.ts, y las reglas room- de global.css. El inspector final aportado registra 0 FAIL y 2 WARN: crema y cantidad de tamaños, decisiones de la identidad existente. No se ejecutó otro detector. Los resultados de check/build y la ejecución de la prueba sin JavaScript son evidencia comunicada por el autor, no pruebas repetidas por esta revisión; su captura sin JavaScript sí fue inspeccionada directamente.

## fidelity

| Elemento o promesa | Estado | Evidencia y criterio |
| --- | --- | --- |
| Encuadre inicial | match | Círculo centrado y título partido a ambos lados, con campo oscuro dominante, reconocibles en escritorio, móvil y 320 px. |
| Apertura y separación | match | Los estados 0/25/50/75/100 muestran aumento de la ventana, retirada lateral y desaparición del título, hasta fotografía a pantalla completa. Coincide con la secuencia observada de Tondo. |
| Escenario y salida | match | La plancha muestra entrada desde la carta, escenario durante el recorrido y salida hacia terraza/mesa. El código usa un único sticky de 230svh/200svh y progreso ligado a la posición nativa, sin interceptar rueda ni touch. La reversión fue medida por el autor; la fórmula es reversible. |
| Leyenda final | adaptation | Conserva jerarquía inferior y lectura sobre foto; sustituye el texto de Tondo por información propia, conforme a PRODUCT.md. En móvil se apila y permanece dentro del encuadre. |
| TYPE | adaptation | Jost conserva el carácter geométrico y la escala editorial comprometidos en DESIGN.md. «Nuestro espacio» exige otra longitud que «The room»; la composición inicial mantiene separación y legibilidad sin desbordamiento visible. |
| MATERIAL | adaptation | Fotografía real del salón, según PRODUCT.md, en lugar de la fotografía de Tondo. Las capturas muestran mobiliario, plantas y luces; el encuadre móvil conserva detalle suficiente tras servir la variante 1280. La calidad del origen limita ampliaciones; no se certifica equivalencia de nitidez con la referencia. |
| GROUND | match | El campo inicial mantiene el carbón cálido #171512 del contrato y continúa las superficies existentes. El scrim negro final sirve a la lectura sobre fotografía; no sustituye material. |
| Continuidad funcional y foco | match | La escena no incorpora controles ni altera el orden de foco; conserva h2, figure, figcaption y alt. Main.ts mantiene navegación y foco de destinos. Las entradas excluyen los resultados del catálogo y no se reactivan al filtrar. |
| Alternativa estática | match | La plancha reducida y scroll-nojs.png muestran título, fotografía rectangular y leyenda en flujo normal, con la terraza a continuación. El HTML parte de ese estado y solo habilita la escena con soporte; cambiar la preferencia cancela animaciones. Sin JavaScript no depende de estilos iniciales invisibles. |

## ceiling

Alcanzado para el comportamiento observado de esta extensión: apertura circular protagonista, título separado, asentamiento fotográfico, leyenda tardía y salida natural. La plancha móvil sostiene la misma idea con leyenda apilada. La alternativa reducida conserva contenido completo. No hay ornamento o material de Tondo pendiente que corresponda añadir dentro del alcance autorizado. La temporización headless aportada es orientativa; no acredita CWV ni fluidez en todos los dispositivos.

## material_fixes

Ninguno dentro del alcance revisado. Las capturas no muestran cortes de lectura, pérdida de contenido o regresiones adyacentes que exijan corrección. No se reabre la identidad ni se amplía este ship a una auditoría de toda la landing.

## keep

Conservar la apertura reversible con scroll nativo, la foto real y su variante móvil de resolución suficiente, la leyenda legible y el estado completo y estático sin JavaScript o con movimiento reducido.
