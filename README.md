# Eco Creators

Pequeño sitio estático para un proyecto escolar sobre reciclaje y actividades ecológicas.

Contenido
- `index.html` — Página de inicio.
- `Proyectos.html` — Proyectos y actividades (incluye vídeos embebidos y tarjetas).
- `Contacto.html` — Formulario y datos de contacto.
- `Sobre nosotros.html` — Información del proyecto.
- `Imagenes/` — Carpeta con todas las imágenes usadas.

Cómo ver el sitio localmente (recomendado)
1. Abre PowerShell y navega a la carpeta del proyecto (ejemplo):

```powershell
cd 'c:\Users\Lenovo\Videos\Proyecto_Aula\Proyecto Aula\Proyecto Aula'
```

2. Inicia un servidor HTTP simple (Python debe estar instalado):

```powershell
python -m http.server 8000
```

3. Abre el navegador en: `http://localhost:8000/index.html`

¿Por qué uso un servidor local y no abrir con doble clic (file://)?
- Cuando abres archivos directamente (file://...), algunos navegadores aplican restricciones más estrictas a iframes, cookies y recursos externos. YouTube y otros servicios a veces bloquean la reproducción embebida si no hay un origen HTTPS o si faltan cabeceras/cookies. Por eso al abrir los HTML directamente desde el sistema de archivos puedes ver errores como "Error 153" o mensajes de configuración del reproductor.
- Si subes el sitio a GitHub Pages (https), la mayoría de estos bloqueos desaparecen y los iframes deberían reproducirse correctamente.

Publicar en GitHub Pages
1. Crea un repositorio en GitHub.
2. Desde PowerShell en la carpeta del proyecto:

```powershell
git init
git add .
git commit -m "Initial commit - Eco Creators site"
# añade la URL del repo que crees en GitHub
git remote add origin https://github.com/tu-usuario/eco-creators-site.git
git branch -M main
git push -u origin main
```

3. En GitHub: Settings → Pages → Source: `main` branch (root) → Save. La página se publicará en unos minutos.

Videos y fallback
- Fallback recomendado: si esperas que visitantes abran los archivos directamente con `file://` o en entornos con bloqueo, conviene implementar un "fallback" que muestre una miniatura del video (thumbnail) con un botón de reproducir. Al hacer clic carga el iframe o abre YouTube en una nueva pestaña. Esto evita que el reproductor muestre errores cuando el embed está bloqueado.

Opciones de fallback que puedo implementar por ti:
- Reemplazar los iframes por miniaturas clicables que abren YouTube en una nueva pestaña (más robusto, siempre funciona).
- Mantener los iframes pero mostrar una miniatura y cargar el iframe solo al hacer clic (lazy load). Esto permite reproducción embebida cuando el navegador lo permite y evita errores visibles cuando no.

¿Quieres que implemente el fallback ahora? Responde con `1` para miniaturas que abren YouTube en nueva pestaña (más simple y robusto) o `2` para lazy-load (miniatura → carga iframe al hacer clic). Si prefieres, puedo dejarlo para GitHub Pages y no hacer fallback.

Contacto
- Si quieres que suba también el repo por ti o que genere `README.md`, `.gitignore` o `LICENSE` con una licencia específica (p.ej. MIT), dime y lo agrego.

---
Archivo generado automáticamente por el asistente. Si quieres cambios específicos en el README, dime qué agregar o cambiar.
