# Estado actual — rediseño Tondo

Fecha: 27 de octubre de 2026. El usuario retomó el trabajo y autorizó un rediseño integral del frontend. La pausa anterior quedó revocada por sus mensajes posteriores.

## Entrega local

Actualización posterior: el usuario solicitó reproducir el scroll de Tondo. Se añadió `EscenaSalon.astro` y `scroll.ts`: apertura circular sticky del salón, título separado, foto ampliada y leyenda al final. Escenario reversible con rueda/touch nativos, sin dependencias. Fallback estático sin JavaScript o con movimiento reducido. Detalles y verificación en `docs/SCROLL_TONDO.md`; revisión focal independiente con disposition ship y sin correcciones en `docs/REVISION_SCROLL.md`.

- Landing Astro 7.4.2, TypeScript y CSS propio, salida estática.
- Nueva dirección carbón/nogal, crema/cobre y Jost/Instrument Sans. Logo y fotografías originales conservados; no se crearon imágenes ficticias.
- Navbar, portada con carrusel manual, propuesta editorial, especialidades, carta, galería, reservas por WhatsApp, ubicación y footer.
- Carta intacta: 139 opciones en 17 categorías. Filtros, búsqueda, estados vacíos y URL conservados. Mantenimiento manual en src/data/carta.json.
- WhatsApp +54 9 3743 611895 confirmado por el usuario. Los enlaces abren consultas sujetas a confirmación del local.
- Mapa bajo demanda; no hay disponibilidad automática, pagos, pedidos ni modificaciones a módulos de negocio. No se añadieron dependencias npm para el rediseño.

## Verificación completada

- npm run check: 11 archivos, 0 errores, 0 advertencias y 0 hints; validación de datos correcta.
- npm run build: correcto; dist contiene la versión estática. Se eliminó mediante reconstrucción el HTML temporal usado para probar el fallback sin scripts.
- Capturas de producción a 1440, 1024, 768 y 390 px, más complemento a 320×720. Última inspección: .taste-skill/tondo-verdict/report.json, 0 FAIL y 2 WARN justificados en docs/REDISENO_TONDO.md. Todas sus capturas fueron abiertas.
- Navegador: búsqueda gin en Tragos (3), recuperación de vacío, limpiar (12 tragos), carta completa (139), Atrás/Adelante, selector móvil y enlaces de platos; carrusel por botones y teclado; menú móvil con foco, Tab/Shift+Tab, Escape y cierre al navegar.
- Alternativa sin scripts: 17 categorías y 139 opciones visibles, navegación nativa. Sin desbordamiento horizontal observado a 320 px ni imágenes rotas en la vista comprobada. Consola inicial sin errores.
- Revisión independiente: único arreglo material resuelto; verdict pass disposition ship al alcance de ese arreglo. Ver docs/REVISION_DISENO.md. No se certifican WCAG completa ni Core Web Vitals reales. El motor/detector Impeccable no estuvo disponible.

## Documentación vigente

- PRODUCT.md: hechos y alcance vigente.
- docs/REDISENO_TONDO.md: referencia inspeccionada, contrato y pruebas.
- DESIGN.md y .impeccable/design.json: sistema efectivo extraído del código.
- docs/REVISION_DISENO.md: revisión independiente y alcance del veredicto.
- docs/SELECCION_FOTOGRAFICA.md y docs/FUENTES_IMAGENES.json: materiales y procedencia.
- README.md: ejecución, edición de la carta y publicación.

Los planes Roma/verde y sus wireframes se conservan identificados como historial; no gobiernan la landing actual.

## Antes de publicar

Confirmar moneda y vigencia de precios y los pendientes puntuales de docs/CARTA_REVISADA.md. Elegir dominio y hosting para completar URL canónica, metadatos sociales absolutos y sitemap. No se publicó remotamente, no se crearon commits ni se enviaron mensajes por WhatsApp.

## Ejecutar

npm run dev inicia desarrollo; npm run check verifica tipos y datos; npm run build genera dist; npm run preview -- --port 4321 sirve la compilación en http://127.0.0.1:4321/ únicamente en esta computadora.
