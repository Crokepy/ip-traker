# Mentor Frontend - Rastreador de direcciones IP

! [Vista previa del diseño para el desafío de codificación del Rastreador de direcciones IP] (./ design / desktop-preview.jpg)

## ¡Bienvenida! 👋

Gracias por comprobar este desafío de codificación de front-end.

Los desafíos de [Frontend Mentor] (https://www.frontendmentor.io) le permiten mejorar sus habilidades en un flujo de trabajo de la vida real.

** Para hacer este desafío, necesita un conocimiento básico de HTML, CSS y JavaScript. **

## El reto

Su desafío es crear esta aplicación de seguimiento de direcciones IP y lograr que se parezca lo más posible al diseño. Para obtener las ubicaciones de la dirección IP, utilizará la [API de geolocalización de IP por IPify] (https://geo.ipify.org/). Para generar el mapa, recomendamos usar [LeafletJS] (https://leafletjs.com/).

Puedes usar cualquier herramienta que te guste para ayudarte a completar el desafío. Entonces, si tienes algo que te gustaría practicar, no dudes en intentarlo.

Sus usuarios deberían poder:

- Ver el diseño óptimo para cada página según el tamaño de pantalla de su dispositivo
- Ver estados de desplazamiento para todos los elementos interactivos en la página
- Ver su propia dirección IP en el mapa en la carga de la página inicial
- Busque direcciones IP o dominios y vea la información clave y la ubicación

---

⚠️ ** IMPORTANTE ** ⚠️: Para utilizar la API de geolocalización de IP de IPify, deberá registrarse para obtener una cuenta gratuita. No necesitará agregar ningún detalle de tarjetas para hacer esto y es un proceso muy rápido. Esto generará una clave de API para usted. Por lo general, podrá restringir su clave API a una URL específica (su propio dominio). Esto asegura que otras personas no puedan usar su clave API en sus propios sitios web. IPify no tiene esta función, pero como no está agregando los detalles de su tarjeta, esto no es un problema. ** Así que asegúrese de registrarse solo para obtener la cuenta gratuita y NO ingrese ningún dato de la tarjeta **.

Para la API de mapeo, recomendamos usar [LeafletJS] (https://leafletjs.com/). Es de uso gratuito y no requiere una clave API. Si decide utilizar otra API, como Google Maps o Mapbox, asegúrese de proteger su clave API. Aquí hay guías para Google Maps y Mapbox, asegúrese de leerlas detenidamente:

- [Mejores prácticas de API Key de los desarrolladores de Google] (https://developers.google.com/maps/api-key-best-practices)
- [Cómo utilizar Mapbox de forma segura] (https://docs.mapbox.com/help/troubleshooting/how-to-use-mapbox-securely/)

Exponer públicamente su clave API puede hacer que otras personas la usen para realizar solicitudes para su propia aplicación si no se toman las precauciones adecuadas. Asegúrese de leer las guías detenidamente y seguir sus recomendaciones.

** No asumimos ninguna responsabilidad si expone su clave API mientras completa el desafío y no la ha asegurado. **

---

¿Quieres apoyo en el desafío? [Únase a nuestra comunidad de Slack] (https://www.frontendmentor.io/slack) y haga preguntas en el canal ** # ayuda **.

## Dónde encontrar todo

Su tarea es construir el proyecto con los diseños dentro de la carpeta `/ design`. Encontrará una versión móvil y de escritorio del diseño para trabajar.

Los diseños están en formato estático JPG. Esto significa que tendrá que utilizar su mejor criterio para estilos como `font-size`,` padding` y `margin`. Esto debería ayudar a entrenar su ojo para percibir las diferencias en los espacios y tamaños.

Si desea el archivo Sketch para inspeccionar el diseño con más detalle, puede [suscribirse como miembro PRO] (https://www.frontendmentor.io/pro).

Encontrará todos los recursos necesarios en la carpeta `/ images`. Los activos ya están optimizados.

También hay un archivo `style-guide.md`, que contiene la información necesaria, como la paleta de colores y las fuentes.

## Construyendo tu proyecto

No dude en utilizar cualquier flujo de trabajo con el que se sienta cómodo. A continuación se muestra un proceso sugerido, pero no creo que deba seguir estos pasos:

1. Inicialice su proyecto como un repositorio público en [GitHub] (https://github.com/). Esto hará que sea más fácil compartir su código con la comunidad si necesita ayuda. Si no está seguro de cómo hacer esto, [lea este recurso Try Git] (https://try.github.io/).
2. Configure su repositorio para publicar su código en una URL. Esto también será útil si necesita ayuda durante un desafío, ya que puede compartir la URL de su proyecto con la URL de su repositorio. Hay varias formas de hacer esto, pero recomendamos usar [Vercel] (https://bit.ly/fem-vercel). Tenemos más información sobre cómo implementar su proyecto con Vercel a continuación.
3. Revise los diseños para comenzar a planificar cómo abordará el proyecto. Este paso es crucial para ayudarlo a pensar en las clases de CSS que podría crear para crear estilos reutilizables.
4. Antes de agregar cualquier estilo, estructure su contenido con HTML. Escribir su HTML primero puede ayudarlo a enfocar su atención en la creación de contenido bien estructurado.
5. Escriba los estilos base para su proyecto, incluidos los estilos de contenido general, como `font-family` y` font-size`.
6. Comience a agregar estilos en la parte superior de la página y continúe hacia abajo. Solo pase a la siguiente sección una vez que esté satisfecho de haber cumplido