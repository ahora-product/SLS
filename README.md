# Web estática — Correduría de seguros

Primera versión en HTML estático (es-ES) con Tailwind CSS y componentes de **Flowbite** para el menú móvil. **No hay blog**: no aparece en el menú ni en el contenido.

## Estructura de carpetas

- `index.html` — Página principal con todas las secciones.
- `aviso-legal.html`, `privacidad.html`, `cookies.html` — Plantillas mínimas con texto legal genérico `[RELLENAR]`.
- `src/input.css` — Entrada de Tailwind (`@tailwind` + capa base con **tipografía fija**).
- `assets/css/output.css` — CSS compilado (generar con el comando indicado abajo).
- `tailwind.config.js` — `content` apunta a `*.html`, `src/**/*.css` y `flowbite`; colores de marca en `theme.extend.colors.brand`.
- `package.json` — Dependencias y scripts de compilación.

## Integración de librerías (un solo patrón por tipo)

| Patrón            | Librería / origen | Uso en el proyecto                                      |
|-------------------|-------------------|---------------------------------------------------------|
| Nav colapsable    | **Flowbite**      | Botón `data-collapse-toggle` + `flowbite.min.js` (CDN). |
| Pestañas cotización | CSS + radios    | Sin JS; selectores `#quote-qN:checked ~ …` en `src/input.css` (estilo tipo snippets Tailwind / HyperUI). |
| Iconos            | **Phosphor** Regular | Hoja CSS en CDN (`@phosphor-icons/web`), clases `ph ph-*`. |

**Preline** no está incluido para evitar duplicar modales o menús. **HyperUI** no es paquete npm: se tomó como referencia de bloques Tailwind; la maquetación es propia.

## Tipografía fija (requisito)

- Cuerpo global **14px** y titulares **h1–h6** en **px fijos** en `src/input.css` (`@layer base`).
- En el HTML **no** se usan utilidades responsive de tamaño de texto (p. ej. `md:text-3xl`).
- Animaciones respetan `prefers-reduced-motion` en la misma hoja CSS.

## Instalación

```bash
npm install
```

## Compilar CSS

```bash
npm run build:css
```

Vigilar cambios mientras editas:

```bash
npm run watch:css
```

## Vista previa local

Tras generar `assets/css/output.css`, abre `index.html` en el navegador o sirve la carpeta con un servidor estático, por ejemplo:

```bash
npx serve .
```

(Si no tienes `output.css` generado, los estilos de Tailwind no se aplicarán.)

## Contenido y datos

Sustituye todos los `[RELLENAR]` (contacto, registros legales, logos, cifras) antes de publicar. Los formularios tienen `action="#"` y son solo demostración.

## Phosphor Icons

Documentación: [phosphoricons.com](https://phosphoricons.com/). En el proyecto se carga el peso **Regular** vía CDN en `index.html`.
