# Eco Creators

Pequeño sitio estático para un proyecto escolar sobre reciclaje y actividades ecológicas.

Contenido
- `index.html` — Página de inicio.
- `Proyectos.html` — Proyectos y actividades (incluye vídeos embebidos y tarjetas).
- `Contacto.html` — Formulario y datos de contacto.
- `Sobre nosotros.html` — Información del proyecto.
- `Imagenes/` — Carpeta con todas las imágenes usadas.
- `assets/site.css` y `assets/site.js` — Estilos y scripts compartidos.

## ⚠️ Importante: Diseño Responsive
Este sitio está **optimizado específicamente para dispositivos móviles**. Todos los ajustes de diseño (menús hamburguesa, tarjetas compactas, espaciados) están configurados para verse correctamente en pantallas de celular (menores a 720px).

**En computadora/desktop**: El sitio funciona perfectamente con el diseño original.

**En móvil**: 
- Menú hamburguesa (☰) en la esquina superior izquierda
- Tarjetas más compactas y ajustadas al contenido
- Formularios y elementos adaptados al ancho de pantalla
- Espaciado optimizado para pantallas pequeñas

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

## Publicar en GitHub Pages (Paso a Paso)

### Paso 1: Crear el repositorio en GitHub
1. Ve a [github.com](https://github.com) e inicia sesión (o crea una cuenta gratuita).
2. Haz clic en el botón **"New"** (o el ícono **+** en la esquina superior derecha → **"New repository"**).
3. Completa la información:
   - **Repository name**: `eco-creators-site` (o el nombre que prefieras)
   - **Description** (opcional): "Proyecto escolar sobre reciclaje y actividades ecológicas"
   - Marca como **Public** (para que GitHub Pages funcione gratis)
   - **NO** marques "Add a README file" ni "Add .gitignore" (ya tienes tus archivos locales)
4. Haz clic en **"Create repository"**.
5. **IMPORTANTE**: Copia la URL del repositorio que aparece en pantalla. Se verá así:
   ```
   https://github.com/tu-usuario/eco-creators-site.git
   ```

### Paso 2: Configurar Git en tu computadora (solo la primera vez)
Si es la primera vez que usas Git, abre PowerShell y configura tu nombre y correo:

```powershell
git config --global user.name "Tu Nombre"
git config --global user.email "tu-correo@ejemplo.com"
```

### Paso 3: Subir tu proyecto a GitHub
Abre PowerShell y navega a la carpeta de tu proyecto:

```powershell
cd 'c:\Users\Lenovo\Videos\Proyecto_Aula\Proyecto Aula\Proyecto Aula'
```

Ahora ejecuta estos comandos **uno por uno** (copia y pega cada línea):

```powershell
# 1. Inicializar Git en tu carpeta
git init

# 2. Agregar todos los archivos al repositorio
git add .

# 3. Crear el primer commit con tus archivos
git commit -m "Initial commit - Eco Creators site"

# 4. Cambiar el nombre de la rama a 'main'
git branch -M main

# 5. Conectar tu carpeta local con tu repositorio de GitHub
# REEMPLAZA la URL con la que copiaste en el Paso 1
git remote add origin https://github.com/tu-usuario/eco-creators-site.git

# 6. Subir todos los archivos a GitHub
git push -u origin main
```

**Nota**: Si te pide autenticación, usa tu nombre de usuario de GitHub y un **Personal Access Token** (no tu contraseña). [Cómo crear un token aquí](https://docs.github.com/es/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

### Paso 4: Activar GitHub Pages
1. Ve a tu repositorio en GitHub (`https://github.com/tu-usuario/eco-creators-site`).
2. Haz clic en la pestaña **"Settings"** (Configuración).
3. En el menú lateral izquierdo, busca y haz clic en **"Pages"**.
4. En la sección **"Source"** (Origen):
   - Selecciona **Branch**: `main`
   - Carpeta: `/ (root)`
   - Haz clic en **"Save"** (Guardar).
5. Espera 1-3 minutos. Refresca la página y verás un mensaje verde con la URL de tu sitio:
   ```
   Your site is published at https://tu-usuario.github.io/eco-creators-site/
   ```
6. Haz clic en esa URL para ver tu sitio web publicado. 🎉

### Actualizar tu sitio después de hacer cambios
Si editas algún archivo HTML o CSS, sigue estos pasos para actualizar el sitio:

```powershell
# 1. Navega a tu carpeta del proyecto
cd 'c:\Users\Lenovo\Videos\Proyecto_Aula\Proyecto Aula\Proyecto Aula'

# 2. Agrega los archivos modificados
git add .

# 3. Crea un commit con un mensaje descriptivo
git commit -m "Descripción de los cambios realizados"

# 4. Sube los cambios a GitHub
git push
```

GitHub Pages se actualizará automáticamente en 1-3 minutos.

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
