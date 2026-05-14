# Portafolio Web — Guía de uso

## Estructura del sitio

```
portafolio-web/
├── index.html          → Página de inicio
├── sobre-mi.html       → Perfil y biografía
├── guion.html          → Guion y asesoría narrativa
├── direccion.html      → Dirección
├── produccion.html     → Producción
├── elearning.html      → E-learning y diseño instruccional
├── voz.html            → Voz en off
├── contacto.html       → Contacto y formulario
├── css/
│   └── style.css       → Todos los estilos visuales
├── js/
│   └── main.js         → Comportamiento del sitio
└── assets/
    ├── proyectos/      → Imágenes y videos de proyectos
    ├── audio/          → Demos de voz y audios
    └── documentos/     → CV y documentos descargables
```

---

## Qué editar primero

Busca en cada archivo la etiqueta `<!-- EDITAR:` para encontrar todos los puntos de reemplazo.

### 1. Tu nombre
En **todos los archivos HTML**, reemplaza `[Tu Nombre]` con tu nombre real.
Aparece en: el `<title>`, la barra de navegación (`.nav-logo`), el pie de página y el hero de inicio.

### 2. Tu fotografía (sobre-mi.html)
Guarda tu foto en `assets/foto-perfil.jpg` (recomendado: 600×800 px).
Descomenta la línea:
```html
<!-- <img src="assets/foto-perfil.jpg" alt="[Tu Nombre]"> -->
```

### 3. Imagen de portada (index.html)
Guarda tu imagen en `assets/portada.jpg` (recomendado: 1920×1080 px, oscura o con overlay).
El div `.hero-home__bg` ya tiene la referencia lista; solo agrega el archivo.

### 4. Tu correo (contacto.html)
Reemplaza `hola@tunombre.com` con tu correo real en dos lugares:
- El enlace `<a href="mailto:...">`
- El texto visible

### 5. Redes sociales (todos los archivos, footer)
En cada footer, reemplaza los `href="#"` con tus links reales:
```html
<a href="https://linkedin.com/in/tu-perfil" ...>LinkedIn</a>
<a href="https://instagram.com/tu-usuario" ...>Instagram</a>
<a href="https://vimeo.com/tu-canal" ...>Vimeo</a>
```

### 6. CV descargable
Guarda tu CV en `assets/documentos/cv.pdf`.
El enlace ya apunta a esa ruta en `sobre-mi.html` y `contacto.html`.

---

## Cómo agregar proyectos

Cada proyecto es un bloque `<article class="project-card">` en las páginas de área.
Para agregar uno nuevo, copia el bloque completo desde `<!-- PROYECTO X -->` hasta `</article>` y pégalo justo antes del comentario `<!-- AGREGA MÁS PROYECTOS AQUÍ -->`. Luego edita:

| Campo | Qué poner |
|---|---|
| `project-body__year` | Año del proyecto |
| `project-body__format` | Formato (Largometraje, Serie, Curso…) |
| `project-body__title` | Nombre del proyecto |
| `.logline` | Una oración que resume la historia o el proyecto |
| `project-body__desc` | Descripción breve (2–4 líneas) |
| Campos de la ficha | Rol, estado, productora, equipo, etc. |
| `.tag` | Etiquetas relevantes |

### Agregar imagen al proyecto
```html
<!-- Reemplaza el div .project-media__placeholder por: -->
<img src="assets/proyectos/nombre-proyecto.jpg" alt="Nombre del proyecto">
```

### Agregar video de YouTube o Vimeo
```html
<!-- Reemplaza el div .project-media__placeholder por: -->
<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/ID_DEL_VIDEO"
    title="Nombre del proyecto" allowfullscreen></iframe>
</div>

<!-- Para Vimeo: -->
<div class="video-embed">
  <iframe src="https://player.vimeo.com/video/ID_DEL_VIDEO"
    title="Nombre del proyecto" allowfullscreen></iframe>
</div>
```

### Agregar video local
```html
<video controls poster="assets/proyectos/nombre-poster.jpg">
  <source src="assets/proyectos/nombre-video.mp4" type="video/mp4">
</video>
```

---

## Cómo agregar demos de voz (voz.html)

1. Guarda tu archivo de audio en `assets/audio/nombre-demo.mp3`
2. Copia el bloque `<div class="audio-card">` completo
3. Edita el tipo, título, descripción y ruta del archivo:
```html
<audio controls preload="none">
  <source src="assets/audio/tu-demo.mp3" type="audio/mpeg">
</audio>
```

---

## Activar el formulario de contacto

El formulario está configurado con validación visual pero sin envío real. Para activarlo:

**Opción más fácil — Formspree (gratis hasta 50 envíos/mes):**
1. Crea cuenta en [formspree.io](https://formspree.io)
2. Crea un formulario y copia el ID (ej: `xrgpkqzb`)
3. En `contacto.html`, cambia la etiqueta `<form>`:
   ```html
   <form action="https://formspree.io/f/TU_ID" method="POST" id="contact-form">
   ```
4. En `main.js`, comenta o elimina el bloque `contactForm.addEventListener('submit', ...)` ya que Formspree maneja el envío.

**Opción para Netlify:**
Agrega `netlify` y `name="contacto"` al form:
```html
<form netlify name="contacto" id="contact-form">
```

---

## Cambiar colores

Abre `css/style.css` y edita las variables al inicio del archivo (sección `:root`):

```css
:root {
  --accent: #C4895A;      /* Color principal (terracota) */
  --bg:     #F7F4F0;      /* Fondo general (crema) */
  --bg-dark: #18140F;     /* Fondo oscuro (heroes, footer) */
  --text:   #2A2420;      /* Color del texto principal */
}
```

---

## Cambiar tipografías

En `css/style.css`, línea 1, cambia los nombres de las fuentes en el `@import`:
```css
@import url('https://fonts.googleapis.com/css2?family=NUEVA_FUENTE...');
```
Y actualiza las variables:
```css
--font-display: 'Nueva Fuente Display', serif;
--font-body:    'Nueva Fuente Cuerpo', sans-serif;
```

---

## Publicar el sitio

### Opción 1 — Netlify (recomendado, gratuito)
1. Crea cuenta en [netlify.com](https://netlify.com)
2. Arrastra la carpeta `portafolio-web/` completa al panel de Netlify
3. El sitio queda publicado automáticamente con una URL tipo `nombre.netlify.app`
4. Puedes conectar un dominio propio desde el panel de Netlify

### Opción 2 — GitHub Pages (gratuito)
1. Crea cuenta en [github.com](https://github.com)
2. Crea un repositorio público llamado `tu-usuario.github.io`
3. Sube todos los archivos al repositorio
4. El sitio queda en `https://tu-usuario.github.io`

### Opción 3 — Hosting compartido (cPanel)
1. Accede al administrador de archivos de tu hosting
2. Sube todos los archivos a la carpeta `public_html/`
3. El sitio queda en tu dominio contratado

---

## Tamaños de imagen recomendados

| Uso | Tamaño | Formato |
|---|---|---|
| Foto de perfil | 600 × 800 px | JPG |
| Imagen de portada (hero) | 1920 × 1080 px | JPG |
| Tarjetas de proyecto | 800 × 450 px | JPG |
| Open Graph (redes) | 1200 × 630 px | JPG |

Peso máximo recomendado por imagen: **300 KB**. Usa [Squoosh](https://squoosh.app) para comprimir sin pérdida visible.
