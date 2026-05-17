# 🪖 Ejército Argentino — Landing Page de Reclutamiento Córdoba

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Mobile First](https://img.shields.io/badge/Mobile--First-Responsive-4e8c43?style=flat-square)

Sitio web informativo oficial de la **División Reclutamiento y Movilización del Ejército Argentino — Córdoba Capital**. Desarrollado para centralizar toda la información del proceso de ingreso como Soldado Voluntario: requisitos, beneficios, documentación descargable y datos de contacto.

---

## 📸 Vista previa

> El proyecto utiliza una paleta de colores militares (verdes, olivas, marrones y dorado) con tipografía **Saira Condensed** para lograr una estética institucional y profesional.

---

## ✨ Características

- **Mobile-first** — diseñado principalmente para dispositivos móviles (90% del tráfico esperado)
- **Totalmente responsive** — se adapta a mobile, tablet y desktop con breakpoints en 640px y 1024px
- **Sin dependencias externas** — HTML, CSS y JavaScript vanilla puro; sin frameworks ni librerías
- **Animaciones de entrada** — elementos con `IntersectionObserver` que aparecen al hacer scroll
- **Navbar adaptativa** — transparente en el hero, sólida al hacer scroll; menú hamburguesa en mobile
- **Accesibilidad básica** — atributos `aria-label`, contraste cuidado, áreas de toque generosas
- **Performance** — assets optimizados, fuentes cargadas con `preconnect`, sin bloqueo de render
- **Paleta militar consistente** — variables CSS para toda la identidad visual

---

## 📁 Estructura del proyecto

```
landing/
├── index.html              # Página principal (única página)
├── styles/
│   └── style.css           # Hoja de estilos mobile-first
├── images/
│   ├── imgFondo.jpg        # Imagen de fondo del hero
│   ├── imgLogo.png         # Logo del Ejército Argentino
│   ├── imgOf.png           # Logo Colegio Militar de la Nación
│   └── imgSubof.png        # Logo Escuela de Suboficiales
└── views/                  # Páginas secundarias (en desarrollo)
    ├── inscripcion.html
    ├── contacto.html
    └── ubicacion.html
```

---

## 🗂️ Secciones del sitio

| Sección | Descripción |
|---|---|
| **Hero** | Portada con imagen de fondo, título y llamadas a la acción |
| **Info Strip** | Franja de datos clave: institución, estado de inscripción, sede |
| **Requisitos** | 6 cards con los requisitos de ingreso (edad, educación, salud, etc.) |
| **Beneficios** | 6 beneficios numerados del ingreso (salario, cobertura médica, etc.) |
| **Documentación** | Links a formularios, antecedentes e instructivos oficiales |
| **Instituciones** | Cards del Colegio Militar y la Escuela de Suboficiales |
| **Contacto** | Emails por departamento, teléfonos y dirección física |
| **Footer** | Logo, links de navegación y créditos |

---

## 🚀 Uso y despliegue

### Visualización local

No requiere servidor ni instalación. Simplemente abrí el archivo principal en cualquier navegador:

```bash
# Cloná el repositorio
git clone https://github.com/santimoran19/LP-Ejercito.git

# Abrí index.html en tu navegador
open landing/index.html
```

### Despliegue en producción

El sitio es estático, por lo que puede hostearse en cualquier servicio:

| Plataforma | Comando / Instrucción |
|---|---|
| **GitHub Pages** | Activar Pages desde la rama `main` en Settings |
| **Netlify** | Drag & drop de la carpeta `landing/` en netlify.com |
| **Vercel** | `vercel --prod` desde la raíz del proyecto |
| **Hosting tradicional** | Subir el contenido de `landing/` por FTP al directorio público |

---

## 🎨 Paleta de colores

| Variable | Valor | Uso |
|---|---|---|
| `--green-deep` | `#141f13` | Fondo oscuro, navbar |
| `--green-mil` | `#3d6b35` | Color primario verde militar |
| `--green-accent` | `#4e8c43` | Acentos, hover states |
| `--olive` | `#6b6b38` | Documentación, detalles |
| `--brown-mid` | `#5c3e28` | Instructivos, normativa |
| `--gold` | `#c9a84c` | Destacados, CTA, títulos en oscuro |
| `--cream` | `#f0e8d8` | Texto sobre fondo oscuro |
| `--cream-light` | `#f8f4ed` | Fondo general del sitio |

---

## 📐 Breakpoints responsive

```css
/* Mobile — base (< 640px) */
/* Diseño de columna única, menú hamburguesa */

/* Tablet — (≥ 640px) */
@media (min-width: 640px) { ... }

/* Desktop — (≥ 1024px) */
@media (min-width: 1024px) { ... }
```

---

## 📎 Links y recursos integrados

- **DUPIE — Formulario de Inscripción** → Google Drive
- **Declaración Jurada de Salud** → Google Drive
- **Instructivo DUPIE** → Google Drive
- **Instructivo Declaración Jurada de Salud** → Google Drive
- **Directiva de Tatuajes** → Google Drive
- **Antecedentes Penales Nacional** → [argentina.gob.ar](https://www.argentina.gob.ar/justicia/reincidencia/antecedentespenales)
- **Antecedentes Penales Provincial** → [policiacordoba.gov.ar](https://www.policiacordoba.gov.ar/tramites-y-servicios/certificado-de-antecedentes/)
- **Colegio Militar de la Nación** → [colegiomilitar.mil.ar](https://www.colegiomilitar.mil.ar/esp/index.php)
- **Escuela de Suboficiales** → [esesc.ejercito.mil.ar](https://esesc.ejercito.mil.ar/)

---

## 📬 Contacto institucional

| Departamento | Email |
|---|---|
| Reclutamiento | cjrmdtoreclutamiento@gmail.com |
| Movilización | cjrmdtomovilizacion@gmail.com |
| División Reclutamiento y Movilización | cjrmdivreclutymovil@gmail.com |

📍 Santa Rosa 1322, Córdoba Capital — CP 5011  
📞 Fijo: (351) 434-2861 · Corporativo: (351) 316-2525

---

## 👤 Autor

Desarrollado por el **Voluntario de Primera Santiago Morán** — 2026

---

## 📄 Licencia

Este proyecto fue desarrollado para uso institucional del Ejército Argentino — División Reclutamiento y Movilización Córdoba. Todos los logotipos, imágenes e identidad visual pertenecen al Ejército Argentino.