# Selección fotográfica

Fecha: 27 de octubre de 2026. Procedencia: archivos originales aportados por el usuario en `imagenes/`. Selección visual realizada con hojas de contacto y revisión de las imágenes. Confirmar derechos de publicación comercial con el responsable del material.

| Original | Uso efectivo | Criterio |
| --- | --- | --- |
| `ambiente-7.jpeg` | Reservas | Reconoce fachada, nombre y mesas; variante responsive y punto focal en el acceso |
| `pizza-palorosa.jpg` | Carrusel de portada y especialidades | Foto identificada de un plato real, alineada con los nombres de árboles de la carta |
| `hamburguesa-tacuarembo.jpg` | Carrusel de portada y especialidades | Nombre y presentación identificados; enlace a Hamburguesas |
| `sandwich-ibira.jpg` | Carrusel de portada y especialidades | Complementa la hamburguesa con otra familia de la oferta |
| `milanesa-los-troncos.jpg` | Carrusel de portada | Foto identificada de la milanesa Los Troncos; ingredientes contrastados con la descripción de carta |
| `ambiente-interior.jpg` | Ambiente | Muestra disposición de mesas, luces y plantas |
| `ambiente-12.jpeg` | Terraza | Evidencia del espacio al aire libre |
| `ambiente-01.jpg` | Detalle de mesa | Acerca escala, materiales y luz |
| `LOGO_LOS_TRONCOS.jpg` | Cabecera y cierre | Se recorta únicamente el espacio exterior, sin redibujar ni recolorear |

## Tratamiento

WebP a 480, 960 y hasta 1280 px según el tamaño original; se conservan las proporciones y se reserva espacio en el HTML. No se amplían artificialmente los originales. Portada de carga prioritaria; imágenes inferiores con carga diferida. Los recortes de composición se realizan con object-fit; las fotos originales permanecen sin modificar.

Los archivos optimizados llevan metadatos de procedencia y el manifiesto `docs/FUENTES_IMAGENES.json` relaciona cada grupo con su original. La nueva paleta oscura no altera los colores de los alimentos. Los círculos de portada son encuadres fotográficos, no siluetas simuladas. No se usan imágenes generadas o stock como documentación de platos o del local.

## Material de reserva

También se revisaron otras pizzas y tragos. No se agregaron para alargar la página: quedan disponibles para ampliar la oferta editorial después. El archivo de Drive `PALO ROSA.png` de aspecto promocional no sustituye a la fotografía local `pizza-palorosa.jpg`. Los videos quedan fuera del alcance inicial por la decisión de movimiento moderado y carga ligera.

La carpeta Drive se conserva como fuente adicional; la selección implementada se referencia por archivos locales para evitar dependencias de URLs temporales o permisos de Drive durante la visita.
