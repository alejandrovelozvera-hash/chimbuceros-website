# Chimbuceros — Sitio Web Oficial

Sitio web estático para el cortometraje documental **"Chimbuceros: Time to live"**.

## 📖 Descripción

Chimbuceros es un cortometraje documental que captura la resistencia cultural a través de la vida cotidiana, voces e instrumentos que se resisten al silencio. La película muestra cómo la tradición lucha contra la desaparición y cómo perdura la memoria colectiva.

## 🚀 Demo en vivo

- **Producción**: https://biyum.agency/chimbuceros
- **GitHub Pages**: https://alejandrovelozvera-hash.github.io/chimbuceros-website/

## 📁 Estructura del proyecto

```
chimbuceros-website/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos completos
├── js/
│   └── main.js         # Lógica JavaScript (i18n, animaciones, trailer)
└── assets/
    └── presence-autochtone.png  # Imagen local (festival Presence Autochtone)
```

## ✨ Características

- **Diseño responsivo** — Mobile-first, funciona en todos los dispositivos
- **Internacionalización (i18n)** — Español / Inglés con persistencia en localStorage
- **Animaciones suaves** — IntersectionObserver para revelar elementos al scroll
- **Trailer integrado** — Carga diferida de YouTube (click para reproducir)
- **Navegación fluida** — Scroll suave, botón "volver arriba", menú hamburguesa en móvil
- **Tema oscuro cinematográfico** — Paleta dorada/crema sobre fondo negro profundo

## 🛠 Tecnologías

- HTML5 semántico
- CSS3 (Custom Properties, Grid, Flexbox, Animaciones)
- Vanilla JavaScript (ES6+)
- Fuentes: Playfair Display, DM Sans, Libre Baskerville (Google Fonts)

## 📦 Instalación y desarrollo

```bash
# Clonar repositorio
git clone https://github.com/alejandrovelozvera-hash/chimbuceros-website.git
cd chimbuceros-website

# Servir localmente (cualquier servidor estático)
npx serve .
# o
python -m http.server 8000
# o
php -S localhost:8000
```

Abrir `http://localhost:8000` en el navegador.

## 🌐 Despliegue

### GitHub Pages
1. Settings → Pages → Source: "Deploy from a branch"
2. Branch: `master` / `main`, folder: `/ (root)`
3. Save → URL disponible en unos minutos

### Netlify / Vercel / Cloudflare Pages
- Conectar repositorio → Build command: (ninguno) → Output directory: `/`
- Deploy automático en cada push

## 🎬 Secciones del sitio

| Sección | ID | Descripción |
|---------|-----|-------------|
| Hero | `#hero` | Portada con logo, subtítulo y CTAs |
| Patrocinadores | `#patrocinadores` | Logos de entidades colaboradoras |
| Sinopsis | `#sinopsis` | Descripción + stats (duración, año, género, idioma) |
| Premios | `#premios` | Grid de 4 festivales/premios |
| Equipo | `#crew` | 10 fichas del equipo técnico |
| Trailer | `#trailer` | Thumbnail YouTube → iframe al click |
| Galería | `#galeria` | 9 fotos de producción (grid 3/2/1 columnas) |
| Contacto | `#contacto` | 3 emails del equipo principal |
| Footer | — | Logo + copyright |

## 🖼 Imágenes

La mayoría de imágenes se cargan desde **biyum.agency** (CDN original):
- Logo Chimbuceros
- Hero background
- Logos de patrocinadores (4)
- Laurel de premios (3)
- 9 fotos de galería

**Una imagen local** en `assets/`:
- `presence-autochtone.png` — Festival Presence Autochtone (Canadá)

## 🌍 Internacionalización

Textos gestionados en `js/main.js` → objeto `i18n` con claves `es` / `en`.

Para añadir idioma:
1. Añadir objeto en `i18n` con todas las claves
2. Añadir botón en `.nav-lang` con `data-lang="xx"`
3. El sistema detecta y aplica automáticamente

## 🎨 Personalización de colores

Variables CSS en `:root` (inicio de `css/style.css`):

```css
:root {
  --gold: #B8922E;
  --gold-light: #D4AA52;
  --gold-pale: #E8CC80;
  --cream: #EDE5D4;
  --cream-dim: #A89878;
  --dark: #080705;
  --dark-2: #0F0D09;
  --dark-3: #161310;
  --dark-4: #1E1A14;
  --text: #D8CEBC;
  --text-dim: #7A6E5C;
  --text-mid: #9A8E7A;
  --line: rgba(184,146,46,0.15);
}
```

## 📱 Breakpoints responsivos

- **Desktop**: > 900px (grid 5 columnas crew, 3 galería)
- **Tablet**: 600–900px (2 columnas crew/galería, menú hamburguesa)
- **Mobile**: < 600px (1 columna galería, 2 crew, botones full-width)

## 🔧 Scripts principales (`js/main.js`)

| Función | Descripción |
|---------|-------------|
| `applyLang(lang)` | Aplica textos del idioma seleccionado |
| `toggleMenu()` | Abre/cierra menú móvil |
| `loadTrailer()` | Reemplaza thumbnail por iframe YouTube autoplay |
| `IntersectionObserver` | Añade `.visible` a elementos `.reveal` al entrar en viewport |
| `scroll` listener | Navbar scrolled, botón back-to-top, float-ui ready |

## 📄 Licencia

© 2026 Chimbuceros — Todos los derechos reservados.

---

**Desarrollado por** [Biyum Agency](https://biyum.agency)  
**Contacto**: jahir.c.rosales@gmail.com