# Wireframes y estructura

> Historial del primer diseño Roma/verde. Estas láminas no representan la landing actual ni son una autoridad de fidelidad para el rediseño Tondo. Estructura vigente en `docs/REDISENO_TONDO.md`, sistema en `DESIGN.md` y verificación sobre capturas reales en `docs/REVISION_DISENO.md`.

Fecha: 27 de octubre de 2026. Las láminas describen estructura y densidad; no son una maqueta de píxeles aprobada. Después de prepararlas, el usuario autorizó implementar el proyecto. El resultado del navegador y `src/styles/global.css` documentan la versión efectiva.

## Láminas

- [Vista general](wireframes/vista-general.png): comparación de las primeras secciones.
- [Escritorio, 1440 px](wireframes/escritorio.png): recorrido completo con las 18 pizzas cotejadas.
- [Móvil, 390 px](wireframes/movil.png): una columna y selector de categorías.
- [Estados móviles](wireframes/estados-moviles.png): navegación abierta, bebidas/tragos y búsqueda sin resultados.

Las etiquetas F01–F04 y notas de precios son anotaciones de diseño; no son contenido editorial de la web. Las fuentes de esquema son sustitutos para comprobar geometría. La implementación utiliza Erode e Instrument Sans, conserva el logo y utiliza fotos locales identificadas. El campo destacado sobre verde y las imágenes amplias heredan el carácter de Roma sin repetir su nombre fragmentado ni su contenido de hotelería.

## Recorrido implementado

1. Nombre, descriptor gastronómico, acción Ver la carta y fachada.
2. El lugar: texto breve y pizza Palo Rosa como evidencia gastronómica.
3. Carta: Cocina/Bebidas, categoría, búsqueda y filas de productos con precios.
4. Fotografías Tacuarembó e Ibirá con enlace a su categoría.
5. Ambiente: interior, terraza y detalles de mesa.
6. Visitanos: dirección, horario, mapa y contactos.

El estado inicial mejorado muestra Pizzas. «Ver toda la carta» muestra las 139 opciones/presentaciones. Sin el script cliente, el HTML contiene todas las categorías y los enlaces internos permiten recorrerlas. El contador visible acompaña el título; las actualizaciones también se anuncian a lectores de pantalla.

## Estados y reglas

- Cocina y Bebidas limitan las categorías; seleccionar un grupo no elimina el texto de búsqueda.
- La búsqueda admite palabras sin tildes y busca en nombre e ingredientes descritos, dentro de la selección actual.
- Sin coincidencias se puede limpiar la búsqueda o ampliarla a toda la carta.
- Los parámetros `tipo`, `categoria` y `buscar` permiten compartir y recuperar filtros. El historial conserva los cambios de grupo/categoría.
- En móvil, Secciones abre navegación sobre una superficie sólida. Se puede cerrar con Escape; la tabulación queda contenida y elegir un enlace lleva el foco al título de destino.
- Los precios sin dato se muestran como Consultar. El cierre de 01:30 se expresa como madrugada del día siguiente.
- Sin reservas, carrito, formulario o disponibilidad en tiempo real.

## Diferencias deliberadas frente al esquema

La implementación usa fotos de platos recibidas posteriormente en la carpeta local, cambia la foto de detalle inicial por Palo Rosa y presenta el catálogo en lectura por filas de grilla, no como reproducción de las columnas del PDF. Conserva todas las opciones del cotejo y sus precios; la disposición visual no determina la relación nombre/importe.
