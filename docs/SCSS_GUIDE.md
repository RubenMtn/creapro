# 🎨 Guía de Estilos SCSS - Creasia

Esta guía explica cómo usar el sistema SCSS configurado en el proyecto, incluyendo variables, mixins y mejores prácticas.

## 📋 Tabla de Contenidos

- [Estructura de Archivos](#estructura-de-archivos)
- [Variables Globales](#variables-globales)
- [Mixins Disponibles](#mixins-disponibles)
- [Convenciones de Nomenclatura](#convenciones-de-nomenclatura)
- [Mejores Prácticas](#mejores-prácticas)
- [Ejemplos de Uso](#ejemplos-de-uso)

## 📁 Estructura de Archivos

```
src/
├── styles.scss                    # Estilos globales
└── assets/styles/
    ├── _variables.scss            # Variables globales
    └── _mixins.scss              # Mixins reutilizables
```

### Importación Automática

Las variables y mixins están disponibles globalmente gracias a la importación en `styles.scss`:

```scss
// Sintaxis moderna recomendada
@use 'assets/styles/variables' as *;
@use 'assets/styles/mixins' as *;
@use 'sass:color'; // Para funciones de color modernas
```

### Funciones de Color Modernas

En lugar de las funciones deprecadas, usamos el módulo `sass:color`:

```scss
// ❌ Sintaxis antigua (deprecada)
lighten($color-primary, 10%);
darken($color-primary, 10%);

// ✅ Sintaxis moderna (recomendada)
color.adjust($color-primary, $lightness: 10%);
color.adjust($color-primary, $lightness: -10%);
```

## 🎨 Variables Globales

### Breakpoints Responsive

```scss
$breakpoint-mobile: 768px;    // Hasta 768px
$breakpoint-tablet: 1024px;   // 769px - 1024px
$breakpoint-desktop: 1025px;  // 1025px en adelante
```

### Paleta de Colores

```scss
// Colores principales
$color-primary: #000000;
$color-secondary: #ffffff;
$color-accent: #007bff;

// Estados
$color-success: #28a745;
$color-warning: #ffc107;
$color-danger: #dc3545;
$color-info: #17a2b8;

// Texto
$text-primary: #ffffff;
$text-secondary: #cccccc;
$text-dark: #333333;
$text-light: #999999;

// Fondos
$bg-primary: #000000;
$bg-secondary: #1a1a1a;
$bg-light: #f8f9fa;
$bg-dark: #343a40;
```

### Tipografía

```scss
// Familias de fuente
$font-family-primary: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
$font-family-secondary: 'Arial', sans-serif;
$font-family-mono: 'Courier New', monospace;

// Tamaños de fuente
$font-size-xs: 0.75rem;    // 12px
$font-size-sm: 0.875rem;   // 14px
$font-size-md: 1rem;       // 16px
$font-size-lg: 1.125rem;   // 18px
$font-size-xl: 1.25rem;    // 20px
$font-size-xxl: 1.5rem;    // 24px
$font-size-xxxl: 2rem;     // 32px
```

### Espaciado

```scss
$spacing-xs: 0.25rem;   // 4px
$spacing-sm: 0.5rem;    // 8px
$spacing-md: 1rem;      // 16px
$spacing-lg: 1.5rem;    // 24px
$spacing-xl: 2rem;      // 32px
$spacing-xxl: 3rem;     // 48px
```

### Efectos

```scss
// Bordes
$border-radius-sm: 0.25rem;
$border-radius-md: 0.5rem;
$border-radius-lg: 1rem;

// Sombras
$shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
$shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
$shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);

// Transiciones
$transition-fast: 0.15s ease-in-out;
$transition-normal: 0.3s ease-in-out;
$transition-slow: 0.5s ease-in-out;
```

## 🔧 Mixins Disponibles

### Responsive Design

```scss
// Para móviles únicamente
@include mobile {
  font-size: $font-size-sm;
}

// Para tablets únicamente
@include tablet {
  font-size: $font-size-md;
}

// Para desktop únicamente
@include desktop {
  font-size: $font-size-lg;
}

// Para tablet en adelante
@include tablet-up {
  display: flex;
}

// Para móvil y tablet
@include mobile-tablet {
  padding: $spacing-sm;
}
```

### Utilidades

```scss
// Centrado con flexbox
.elemento {
  @include center-flex;
}

// Texto truncado
.titulo {
  @include text-truncate;
}

// Transiciones personalizadas
.boton {
  @include transition(all, $transition-fast);
}

// Sombras de botón
.boton {
  @include button-shadow($shadow-md);
}

// Aspect ratio
.video-container {
  @include aspect-ratio(16, 9);
}
```

## 🏷️ Convenciones de Nomenclatura

### Clases CSS

```scss
// BEM (Block Element Modifier)
.card { }
.card__header { }
.card__content { }
.card--featured { }

// Utilitarias
.u-center-text { text-align: center; }
.u-hide-mobile { @include mobile { display: none; } }
```

### Variables

```scss
// Usar kebab-case
$primary-color: #000000;
$border-radius-large: 1rem;
$font-size-extra-large: 2rem;
```

### Mixins

```scss
// Usar kebab-case
@mixin center-content { }
@mixin button-style($color) { }
@mixin responsive-text($mobile, $desktop) { }
```

## 💡 Mejores Prácticas

### 1. Mobile-First

Siempre escribe estilos base para móvil primero:

```scss
.component {
  // Estilos base (móvil)
  font-size: $font-size-sm;
  padding: $spacing-sm;
  
  // Mejoras para pantallas más grandes
  @include tablet {
    font-size: $font-size-md;
    padding: $spacing-md;
  }
  
  @include desktop {
    font-size: $font-size-lg;
    padding: $spacing-lg;
  }
}
```

### 2. Usar Variables

Siempre usa variables en lugar de valores hardcoded:

```scss
// ❌ No hacer esto
.header {
  color: #ffffff;
  font-size: 18px;
  margin: 16px;
}

// ✅ Hacer esto
.header {
  color: $text-primary;
  font-size: $font-size-lg;
  margin: $spacing-md;
}
```

### 3. Organización de Archivos

Mantén los estilos organizados por componente:

```scss
// app.component.scss
.app {
  // Estilos del contenedor principal
  
  &__header {
    // Estilos del header
  }
  
  &__content {
    // Estilos del contenido
  }
  
  &__footer {
    // Estilos del footer
  }
}
```

### 4. Comentarios Útiles

```scss
/* =====================================================
   COMPONENTE: Header Principal
   ===================================================== */

.header {
  // Variables locales del componente
  $header-height: 60px;
  
  // Estilos base
  height: $header-height;
  background: $bg-primary;
  
  // Estados interactivos
  &:hover {
    background: $bg-secondary;
  }
}
```

## 📚 Ejemplos de Uso

### Componente Responsive Completo

```scss
.card {
  // Variables locales
  $card-padding: $spacing-md;
  $card-border-radius: $border-radius-md;
  
  // Estilos base (móvil)
  padding: $card-padding;
  border-radius: $card-border-radius;
  background: $bg-secondary;
  box-shadow: $shadow-sm;
  
  @include mobile {
    margin: $spacing-sm;
    padding: $spacing-sm;
  }
  
  @include tablet {
    margin: $spacing-md;
    display: flex;
    flex-direction: row;
  }
  
  @include desktop {
    margin: $spacing-lg;
    box-shadow: $shadow-lg;
    
    &:hover {
      transform: translateY(-2px);
      @include transition(transform);
    }
  }
  
  &__title {
    font-family: $font-family-primary;
    color: $text-primary;
    
    @include mobile {
      font-size: $font-size-lg;
    }
    
    @include tablet {
      font-size: $font-size-xl;
    }
    
    @include desktop {
      font-size: $font-size-xxl;
    }
  }
  
  &__content {
    margin-top: $spacing-sm;
    color: $text-secondary;
    
    @include tablet-up {
      margin-left: $spacing-md;
    }
  }
}
```

### Botón con Estados

```scss
.btn {
  // Base
  padding: $spacing-sm $spacing-md;
  border: none;
  border-radius: $border-radius-sm;
  font-family: $font-family-primary;
  font-size: $font-size-md;
  cursor: pointer;
  @include transition();
  @include button-shadow();
  
  // Variantes
  &--primary {
    background: $color-primary;
    color: $text-primary;
    
    &:hover {
      background: color.adjust($color-primary, $lightness: 10%);
    }
  }
  
  &--secondary {
    background: $color-secondary;
    color: $text-dark;
    
    &:hover {
      background: color.adjust($color-secondary, $lightness: -5%);
    }
  }
  
  // Tamaños responsive
  @include mobile {
    width: 100%;
    padding: $spacing-md;
  }
  
  @include tablet-up {
    width: auto;
    display: inline-block;
  }
}
```

---

**💡 Tip:** Siempre consulta las variables disponibles en `_variables.scss` antes de crear nuevos valores.
