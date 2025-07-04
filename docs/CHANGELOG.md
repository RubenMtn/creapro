# 📝 Changelog - Creasia

Todos los cambios importantes del proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-es/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-07-03

### ✨ Añadido

#### Estructura Base
- **Proyecto Angular 19** inicializado con Angular CLI 19.1.8
- **Configuración SCSS** por defecto para todos los componentes
- **Angular Universal** (SSR) configurado y funcionando
- **RouterOutlet** configurado para navegación

#### Sistema Responsive
- **Breakpoints definidos** para móvil, tablet y desktop
  - Móvil: hasta 768px
  - Tablet: 769px - 1024px
  - Desktop: 1025px en adelante
- **Filosofía Mobile-First** implementada
- **Mixins SCSS** para media queries responsive

#### Arquitectura de Assets
- **Estructura de carpetas** organizada en `src/assets/`:
  - `images/` - Imágenes del proyecto
  - `videos/` - Archivos de video
  - `fonts/` - Fuentes personalizadas
  - `icons/` - Iconos y favicons
  - `styles/` - SCSS globales (variables y mixins)
  - `data/` - Archivos JSON y datos estáticos
  - `audio/` - Archivos de sonido
- **Archivos .gitkeep** para mantener estructura en Git

#### Sistema SCSS
- **Variables globales** (`_variables.scss`):
  - Breakpoints responsive
  - Paleta de colores
  - Tipografía y tamaños
  - Espaciado consistente
  - Efectos y transiciones
- **Mixins útiles** (`_mixins.scss`):
  - Media queries responsive
  - Utilidades de centrado
  - Efectos de texto y botones
  - Aspect ratios
- **Importación automática** en estilos globales

#### Página Principal
- **Componente simple** con fondo negro y título "Hola"
- **Estilos responsive** que cambian según el dispositivo:
  - Móvil: 2.5rem, peso 400
  - Tablet: 3.5rem, peso 300
  - Desktop: 4.5rem, peso 200
- **Centrado perfecto** con Flexbox

#### Documentación
- **README principal** con información completa
- **Guías específicas** para SCSS, responsive y assets
- **Estructura de archivos** documentada
- **Instrucciones de instalación** y uso

### 🔧 Configurado

#### Angular
- **Angular 19.1.0** con las últimas características
- **TypeScript 5.7.2** para tipado estricto
- **Standalone components** como arquitectura principal
- **Signals** disponibles para reactividad moderna

#### Build y Deploy
- **Configuración de producción** optimizada
- **SSR/SSG** listo para deploy
- **Assets optimization** automática

#### Desarrollo
- **Hot reload** configurado
- **Source maps** para debugging
- **Linting** con reglas de Angular

### 📋 Tareas Pendientes

- [ ] Configurar PWA (Progressive Web App)
- [ ] Añadir tests unitarios y e2e
- [ ] Implementar CI/CD pipeline
- [ ] Configurar análisis de bundle size
- [ ] Añadir componentes de UI base
- [ ] Implementar sistema de temas
- [ ] Configurar i18n (internacionalización)

---

## Formato de Versionado

- **MAJOR** (X.0.0): Cambios incompatibles en la API
- **MINOR** (0.X.0): Nuevas funcionalidades compatibles
- **PATCH** (0.0.X): Corrección de bugs compatibles

## Tipos de Cambios

- **✨ Añadido**: Nuevas características
- **🔧 Configurado**: Cambios en configuración
- **🔄 Cambiado**: Cambios en funcionalidad existente
- **🗑️ Deprecado**: Características que se eliminarán
- **🚫 Eliminado**: Características eliminadas
- **🐛 Corregido**: Corrección de bugs
- **🔒 Seguridad**: Vulnerabilidades corregidas
