# 📦 Guía de Gestión de Assets - Creasia

Esta guía explica cómo organizar, usar y optimizar los recursos estáticos (assets) en el proyecto Angular.

## 📋 Tabla de Contenidos

- [Estructura de Assets](#estructura-de-assets)
- [Tipos de Archivos](#tipos-de-archivos)
- [Cómo Usar Assets](#cómo-usar-assets)
- [Optimización](#optimización)
- [Mejores Prácticas](#mejores-prácticas)
- [Convenciones de Nomenclatura](#convenciones-de-nomenclatura)

## 📁 Estructura de Assets

```
src/assets/
├── README.md              # Documentación de assets
├── images/               # Imágenes del proyecto
│   ├── logos/           # Logos y branding
│   ├── icons/           # Iconos en formato imagen
│   ├── photos/          # Fotografías
│   ├── illustrations/   # Ilustraciones
│   └── backgrounds/     # Imágenes de fondo
├── videos/              # Contenido multimedia
│   ├── hero/           # Videos para hero sections
│   ├── tutorials/      # Videos tutoriales
│   └── backgrounds/    # Videos de fondo
├── fonts/              # Fuentes personalizadas
│   ├── primary/        # Fuente principal
│   ├── secondary/      # Fuente secundaria
│   └── icons/          # Icon fonts
├── icons/              # Iconos SVG y favicons
│   ├── ui/             # Iconos de interfaz
│   ├── social/         # Iconos de redes sociales
│   └── brand/          # Iconos de marca
├── styles/             # SCSS globales
│   ├── _variables.scss # Variables SCSS
│   ├── _mixins.scss    # Mixins reutilizables
│   └── _utilities.scss # Clases utilitarias
├── data/               # Datos estáticos
│   ├── config/         # Archivos de configuración
│   ├── content/        # Contenido estático
│   └── mock/           # Datos de prueba
└── audio/              # Archivos de audio
    ├── ui/             # Sonidos de UI
    ├── music/          # Música de fondo
    └── effects/        # Efectos de sonido
```

## 🎨 Tipos de Archivos

### Imágenes

| Formato | Uso Recomendado | Características |
|---------|-----------------|-----------------|
| **PNG** | Logos, iconos, transparencias | Sin pérdida, soporte alfa |
| **JPG** | Fotografías, imágenes complejas | Compresión con pérdida |
| **SVG** | Iconos, logos simples | Vectorial, escalable |
| **WebP** | Imágenes modernas | Mejor compresión que JPG |
| **AVIF** | Futuro, máxima calidad | Soporte limitado aún |

### Videos

| Formato | Uso Recomendado | Compatibilidad |
|---------|-----------------|----------------|
| **MP4** | Videos principales | Universal |
| **WebM** | Alternativa moderna | Chrome, Firefox |
| **OGV** | Fallback para Gecko | Firefox |

### Fuentes

| Formato | Uso Recomendado | Soporte |
|---------|-----------------|---------|
| **WOFF2** | Fuentes modernas | Excelente compresión |
| **WOFF** | Fallback para WOFF2 | Amplio soporte |
| **TTF** | Fallback general | Universal |

### Audio

| Formato | Uso Recomendado | Características |
|---------|-----------------|-----------------|
| **MP3** | Audio general | Universal |
| **OGG** | Audio de alta calidad | Código abierto |
| **WAV** | Audio sin compresión | Archivos grandes |

## 🔧 Cómo Usar Assets

### En Templates HTML

```html
<!-- Imágenes -->
<img src="assets/images/logos/logo.svg" alt="Logo de Creasia">
<img src="assets/images/photos/hero-bg.jpg" alt="Imagen principal">

<!-- Videos -->
<video controls>
  <source src="assets/videos/intro.mp4" type="video/mp4">
  <source src="assets/videos/intro.webm" type="video/webm">
  Tu navegador no soporta videos.
</video>

<!-- Audio -->
<audio controls>
  <source src="assets/audio/ui/click.mp3" type="audio/mpeg">
  <source src="assets/audio/ui/click.ogg" type="audio/ogg">
</audio>

<!-- Iconos SVG inline -->
<object data="assets/icons/ui/arrow.svg" type="image/svg+xml"></object>

<!-- Favicons -->
<link rel="icon" type="image/x-icon" href="assets/icons/favicon.ico">
```

### En Componentes TypeScript

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  template: `
    <div class="gallery">
      <img 
        *ngFor="let image of images" 
        [src]="image.src" 
        [alt]="image.alt">
    </div>
  `
})
export class GalleryComponent {
  images = [
    {
      src: 'assets/images/gallery/photo1.jpg',
      alt: 'Descripción de la foto 1'
    },
    {
      src: 'assets/images/gallery/photo2.jpg',
      alt: 'Descripción de la foto 2'
    }
  ];
  
  // Para rutas dinámicas
  getImagePath(imageName: string): string {
    return `assets/images/dynamic/${imageName}`;
  }
}
```

### En Estilos SCSS

```scss
// Imágenes de fondo
.hero {
  background-image: url('assets/images/backgrounds/hero.jpg');
  background-size: cover;
  background-position: center;
  
  @include mobile {
    background-image: url('assets/images/backgrounds/hero-mobile.jpg');
  }
}

// Iconos en pseudo-elementos
.icon::before {
  content: '';
  background-image: url('assets/icons/ui/star.svg');
  background-size: contain;
  width: 20px;
  height: 20px;
  display: inline-block;
}

// Fuentes personalizadas
@font-face {
  font-family: 'CustomFont';
  src: url('assets/fonts/custom/custom-regular.woff2') format('woff2'),
       url('assets/fonts/custom/custom-regular.woff') format('woff'),
       url('assets/fonts/custom/custom-regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

.custom-text {
  font-family: 'CustomFont', $font-family-primary;
}
```

### En Archivos JSON

```typescript
// src/assets/data/config/app-config.json
{
  "app": {
    "name": "Creasia",
    "version": "1.0.0",
    "logo": "assets/images/logos/logo.svg",
    "theme": {
      "primaryColor": "#000000",
      "images": {
        "background": "assets/images/backgrounds/main.jpg",
        "placeholder": "assets/images/placeholders/default.png"
      }
    }
  }
}

// Uso en componente
import appConfig from 'assets/data/config/app-config.json';

@Component({...})
export class AppComponent {
  config = appConfig;
  logoPath = this.config.app.logo;
}
```

## ⚡ Optimización

### Imágenes

```json
// angular.json - Configuración de optimización
{
  "build": {
    "options": {
      "assets": [
        {
          "glob": "**/*",
          "input": "src/assets",
          "output": "/assets"
        }
      ],
      "optimization": {
        "images": true
      }
    }
  }
}
```

### Lazy Loading de Imágenes

```html
<!-- Usando loading="lazy" -->
<img 
  src="assets/images/gallery/large-image.jpg" 
  alt="Imagen grande"
  loading="lazy">

<!-- Con placeholder -->
<img 
  src="assets/images/placeholders/blur.jpg"
  data-src="assets/images/gallery/large-image.jpg"
  alt="Imagen grande"
  class="lazy-load">
```

### Responsive Images

```html
<!-- Diferentes tamaños para diferentes pantallas -->
<picture>
  <source 
    media="(min-width: 1025px)" 
    srcset="assets/images/hero/hero-desktop.jpg">
  <source 
    media="(min-width: 769px)" 
    srcset="assets/images/hero/hero-tablet.jpg">
  <img 
    src="assets/images/hero/hero-mobile.jpg" 
    alt="Imagen principal">
</picture>

<!-- Con diferentes densidades -->
<img 
  src="assets/images/logo/logo.png"
  srcset="
    assets/images/logo/logo@1x.png 1x,
    assets/images/logo/logo@2x.png 2x,
    assets/images/logo/logo@3x.png 3x
  "
  alt="Logo">
```

### Preload de Assets Críticos

```html
<!-- En index.html -->
<head>
  <!-- Fuentes críticas -->
  <link rel="preload" 
        href="assets/fonts/primary/primary-regular.woff2" 
        as="font" 
        type="font/woff2" 
        crossorigin>
  
  <!-- Imágenes críticas -->
  <link rel="preload" 
        href="assets/images/hero/hero-mobile.jpg" 
        as="image">
  
  <!-- CSS crítico -->
  <link rel="preload" 
        href="assets/styles/critical.css" 
        as="style">
</head>
```

## 💡 Mejores Prácticas

### 1. Organización por Contexto

```
assets/images/
├── pages/
│   ├── home/           # Imágenes específicas del home
│   ├── about/          # Imágenes de la página about
│   └── contact/        # Imágenes de contacto
├── components/
│   ├── header/         # Imágenes del header
│   ├── footer/         # Imágenes del footer
│   └── sidebar/        # Imágenes del sidebar
└── common/
    ├── logos/          # Logos reutilizables
    ├── icons/          # Iconos comunes
    └── backgrounds/    # Fondos reutilizables
```

### 2. Versionado de Assets

```typescript
// Para cache busting
export const ASSET_VERSIONS = {
  logo: 'v2',
  theme: 'v1.2',
  icons: 'v3'
};

// Uso
const logoPath = `assets/images/logo.svg?v=${ASSET_VERSIONS.logo}`;
```

### 3. Fallbacks y Placeholders

```scss
// Placeholder mientras carga
.image-container {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  
  img {
    opacity: 0;
    transition: opacity 0.3s;
    
    &.loaded {
      opacity: 1;
    }
  }
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

### 4. CDN y Assets Externos

```typescript
// Configuración de CDN
export const CDN_CONFIG = {
  baseUrl: 'https://cdn.creasia.com',
  fallbackUrl: 'assets',
  enabled: environment.production
};

// Service para gestión de assets
@Injectable()
export class AssetService {
  getAssetUrl(path: string): string {
    if (CDN_CONFIG.enabled) {
      return `${CDN_CONFIG.baseUrl}/${path}`;
    }
    return `${CDN_CONFIG.fallbackUrl}/${path}`;
  }
}
```

## 🏷️ Convenciones de Nomenclatura

### Archivos de Imagen

```
// Formato: [tipo]-[descripcion]-[variante].[extension]
logo-primary-dark.svg
logo-primary-light.svg
icon-arrow-left.svg
icon-arrow-right.svg
photo-team-group.jpg
bg-hero-gradient.jpg
illustration-feature-chart.svg
```

### Archivos de Video

```
// Formato: [contexto]-[descripcion]-[calidad].[extension]
hero-intro-1080p.mp4
hero-intro-720p.mp4
tutorial-setup-hd.mp4
background-particles-loop.webm
```

### Archivos de Fuente

```
// Formato: [familia]-[peso]-[estilo].[extension]
roboto-400-regular.woff2
roboto-700-bold.woff2
opensans-300-light.woff2
custom-600-semibold.woff2
```

### Estructura de Carpetas

```
// Usar kebab-case para carpetas
user-profiles/
contact-forms/
social-media/
error-pages/

// Usar snake_case o kebab-case para archivos
user_avatar_default.png
contact-form-bg.jpg
social_media_icons.svg
```

## 📊 Métricas y Monitoreo

### Tamaños Recomendados

| Tipo | Tamaño Máximo | Recomendación |
|------|---------------|---------------|
| Imágenes JPG | 500KB | 200KB óptimo |
| Imágenes PNG | 200KB | 100KB óptimo |
| Videos | 10MB | 5MB óptimo |
| Fuentes | 100KB | 50KB óptimo |

### Herramientas de Optimización

```bash
# Imagemin para optimización automática
npm install --save-dev imagemin imagemin-webp

# TinyPNG CLI
npm install --global tinypng-cli

# SVGO para SVGs
npm install --global svgo
```

---

**💡 Tip:** Mantén siempre una copia de alta calidad de tus assets originales en una carpeta separada antes de optimizar.
