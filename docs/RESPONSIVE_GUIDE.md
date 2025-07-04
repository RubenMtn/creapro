# 📱 Guía de Configuración Responsive - Creasia

Esta guía explica el sistema responsive implementado en el proyecto, basado en un enfoque **mobile-first** con breakpoints claramente definidos.

## 📋 Tabla de Contenidos

- [Filosofía Mobile-First](#filosofía-mobile-first)
- [Breakpoints Definidos](#breakpoints-definidos)
- [Sistema de Mixins](#sistema-de-mixins)
- [Clases Utilitarias](#clases-utilitarias)
- [Ejemplos Prácticos](#ejemplos-prácticos)
- [Mejores Prácticas](#mejores-prácticas)
- [Testing Responsive](#testing-responsive)

## 🎯 Filosofía Mobile-First

El proyecto sigue un enfoque **mobile-first**, lo que significa:

1. **Estilos base** se escriben para móviles
2. **Media queries** solo para pantallas más grandes
3. **Progressive enhancement** en lugar de graceful degradation
4. **Performance optimizada** para dispositivos móviles

### Ventajas del Mobile-First

- ✅ **Mejor rendimiento** en dispositivos móviles
- ✅ **CSS más limpio** y mantenible
- ✅ **Enfoque progresivo** que funciona en todos los dispositivos
- ✅ **SEO optimizado** para mobile
- ✅ **Accesibilidad mejorada**

## 📐 Breakpoints Definidos

### Rangos de Pantalla

| Dispositivo | Rango | Variable SCSS |
|-------------|-------|---------------|
| 📱 **Móvil** | 0px - 768px | `$breakpoint-mobile: 768px` |
| 📱 **Tablet** | 769px - 1024px | `$breakpoint-tablet: 1024px` |
| 💻 **Desktop** | 1025px+ | `$breakpoint-desktop: 1025px` |

### Dispositivos de Referencia

```scss
// Móviles comunes
// iPhone SE: 375x667
// iPhone 12: 390x844
// Samsung Galaxy: 360x640

// Tablets comunes  
// iPad: 768x1024
// iPad Pro: 1024x1366
// Surface Pro: 912x1368

// Desktop comunes
// Laptop: 1366x768
// Desktop HD: 1920x1080
// 4K: 3840x2160
```

## 🔧 Sistema de Mixins

### Mixins Principales

```scss
// Para móviles únicamente (hasta 768px)
@mixin mobile {
  @media (max-width: #{$breakpoint-mobile - 1px}) {
    @content;
  }
}

// Para tablets únicamente (769px - 1024px)
@mixin tablet {
  @media (min-width: #{$breakpoint-mobile}) and (max-width: #{$breakpoint-tablet - 1px}) {
    @content;
  }
}

// Para desktop únicamente (1025px+)
@mixin desktop {
  @media (min-width: #{$breakpoint-desktop}) {
    @content;
  }
}
```

### Mixins Combinados

```scss
// Para tablet y desktop (769px+)
@mixin tablet-up {
  @media (min-width: #{$breakpoint-mobile}) {
    @content;
  }
}

// Para móvil y tablet (hasta 1024px)
@mixin mobile-tablet {
  @media (max-width: #{$breakpoint-tablet - 1px}) {
    @content;
  }
}
```

### Uso de Mixins

```scss
.component {
  // Estilos base (móvil por defecto)
  font-size: 1rem;
  padding: 1rem;
  
  // Mejoras para tablet
  @include tablet {
    font-size: 1.2rem;
    padding: 1.5rem;
  }
  
  // Mejoras para desktop
  @include desktop {
    font-size: 1.5rem;
    padding: 2rem;
  }
}
```

## 🎨 Clases Utilitarias

### Ocultar por Dispositivo

```scss
// Ocultar en móviles
.hide-mobile {
  @include mobile {
    display: none !important;
  }
}

// Ocultar en tablets
.hide-tablet {
  @include tablet {
    display: none !important;
  }
}

// Ocultar en desktop
.hide-desktop {
  @include desktop {
    display: none !important;
  }
}
```

### Mostrar Solo en Dispositivo Específico

```scss
// Solo visible en móviles
.show-mobile-only {
  @include tablet-up {
    display: none !important;
  }
}

// Solo visible en tablets
.show-tablet-only {
  @include mobile {
    display: none !important;
  }
  
  @include desktop {
    display: none !important;
  }
}

// Solo visible en desktop
.show-desktop-only {
  @include mobile-tablet {
    display: none !important;
  }
}
```

### Uso en HTML

```html
<!-- Navegación responsive -->
<nav class="navbar">
  <!-- Menú hamburguesa (solo móvil) -->
  <button class="show-mobile-only hamburger-menu">☰</button>
  
  <!-- Logo (todos los dispositivos) -->
  <div class="logo">Creasia</div>
  
  <!-- Menú completo (tablet y desktop) -->
  <ul class="hide-mobile nav-menu">
    <li><a href="/">Inicio</a></li>
    <li><a href="/about">Acerca</a></li>
    <li><a href="/contact">Contacto</a></li>
  </ul>
</nav>

<!-- Contenido con diferentes layouts -->
<main class="content">
  <!-- Sidebar (solo desktop) -->
  <aside class="show-desktop-only sidebar">
    Contenido lateral
  </aside>
  
  <!-- Contenido principal -->
  <section class="main-content">
    <h1>Título principal</h1>
    
    <!-- Imagen diferente por dispositivo -->
    <img src="assets/images/hero-mobile.jpg" 
         alt="Hero" 
         class="show-mobile-only">
    
    <img src="assets/images/hero-tablet.jpg" 
         alt="Hero" 
         class="show-tablet-only">
    
    <img src="assets/images/hero-desktop.jpg" 
         alt="Hero" 
         class="show-desktop-only">
  </section>
</main>
```

## 💼 Ejemplos Prácticos

### 1. Header Responsive

```scss
.header {
  background: $bg-primary;
  padding: $spacing-sm 0;
  
  @include tablet-up {
    padding: $spacing-md 0;
  }
  
  .container {
    @include center-flex;
    justify-content: space-between;
  }
  
  .logo {
    font-size: $font-size-lg;
    font-weight: bold;
    
    @include tablet-up {
      font-size: $font-size-xl;
    }
  }
  
  .nav-menu {
    display: none;
    
    @include tablet-up {
      display: flex;
      gap: $spacing-md;
    }
    
    a {
      color: $text-primary;
      text-decoration: none;
      @include transition();
      
      &:hover {
        color: $color-accent;
      }
    }
  }
  
  .hamburger {
    @include tablet-up {
      display: none;
    }
  }
}
```

### 2. Grid Responsive

```scss
.grid {
  display: grid;
  gap: $spacing-md;
  
  // Móvil: 1 columna
  grid-template-columns: 1fr;
  
  @include tablet {
    // Tablet: 2 columnas
    grid-template-columns: repeat(2, 1fr);
    gap: $spacing-lg;
  }
  
  @include desktop {
    // Desktop: 3 columnas
    grid-template-columns: repeat(3, 1fr);
    gap: $spacing-xl;
  }
  
  .grid-item {
    background: $bg-secondary;
    padding: $spacing-md;
    border-radius: $border-radius-md;
    
    @include tablet-up {
      padding: $spacing-lg;
    }
  }
}
```

### 3. Tipografía Responsive

```scss
.typography {
  h1 {
    font-size: $font-size-xxl;
    line-height: 1.2;
    margin-bottom: $spacing-md;
    
    @include tablet {
      font-size: $font-size-xxxl;
    }
    
    @include desktop {
      font-size: 3rem;
      margin-bottom: $spacing-lg;
    }
  }
  
  h2 {
    font-size: $font-size-xl;
    margin-bottom: $spacing-sm;
    
    @include tablet-up {
      font-size: $font-size-xxl;
      margin-bottom: $spacing-md;
    }
  }
  
  p {
    font-size: $font-size-md;
    line-height: 1.6;
    margin-bottom: $spacing-md;
    
    @include desktop {
      font-size: $font-size-lg;
      line-height: 1.7;
    }
  }
}
```

### 4. Formularios Responsive

```scss
.form {
  .form-group {
    margin-bottom: $spacing-md;
    
    @include tablet-up {
      display: flex;
      align-items: center;
      gap: $spacing-md;
    }
  }
  
  label {
    display: block;
    font-weight: 500;
    margin-bottom: $spacing-xs;
    
    @include tablet-up {
      flex: 0 0 150px;
      margin-bottom: 0;
    }
  }
  
  input, textarea {
    width: 100%;
    padding: $spacing-sm;
    border: 1px solid $color-secondary;
    border-radius: $border-radius-sm;
    
    @include tablet-up {
      flex: 1;
    }
  }
  
  .form-actions {
    margin-top: $spacing-lg;
    
    @include mobile {
      button {
        width: 100%;
        margin-bottom: $spacing-sm;
      }
    }
    
    @include tablet-up {
      display: flex;
      gap: $spacing-md;
      justify-content: flex-end;
      
      button {
        width: auto;
      }
    }
  }
}
```

## 🎯 Mejores Prácticas

### 1. Diseño Mobile-First

```scss
// ✅ Correcto: Mobile-first
.component {
  // Base (móvil)
  font-size: 14px;
  padding: 10px;
  
  @include tablet {
    font-size: 16px;
    padding: 15px;
  }
  
  @include desktop {
    font-size: 18px;
    padding: 20px;
  }
}

// ❌ Incorrecto: Desktop-first
.component {
  font-size: 18px;
  padding: 20px;
  
  @media (max-width: 1024px) {
    font-size: 16px;
    padding: 15px;
  }
  
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px;
  }
}
```

### 2. Usar Contenedores Responsivos

```scss
.container {
  width: 100%;
  padding: 0 $spacing-md;
  margin: 0 auto;
  
  @include mobile {
    max-width: 100%;
    padding: 0 $spacing-sm;
  }
  
  @include tablet {
    max-width: 768px;
  }
  
  @include desktop {
    max-width: 1200px;
    padding: 0 $spacing-lg;
  }
}
```

### 3. Imágenes Responsivas

```scss
.responsive-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  
  @include tablet-up {
    max-width: 500px;
  }
}
```

### 4. Espaciado Consistente

```scss
.section {
  padding: $spacing-lg 0;
  
  @include mobile {
    padding: $spacing-md 0;
  }
  
  @include desktop {
    padding: $spacing-xxl 0;
  }
}
```

## 🧪 Testing Responsive

### Herramientas de Desarrollo

```scss
// Debug helper (solo en desarrollo)
.debug-breakpoints {
  position: fixed;
  top: 0;
  right: 0;
  background: rgba(255, 0, 0, 0.8);
  color: white;
  padding: 5px 10px;
  font-size: 12px;
  z-index: 9999;
  
  &::after {
    content: 'Unknown';
    
    @include mobile {
      content: 'Mobile (< 768px)';
    }
    
    @include tablet {
      content: 'Tablet (768px - 1024px)';
    }
    
    @include desktop {
      content: 'Desktop (> 1024px)';
    }
  }
}
```

### DevTools Testing

1. **Chrome DevTools**:
   - F12 → Toggle device toolbar
   - Presets: iPhone, iPad, Desktop
   - Custom dimensions

2. **Breakpoints a probar**:
   - 375px (iPhone)
   - 768px (iPad portrait)
   - 1024px (iPad landscape)
   - 1366px (Laptop)
   - 1920px (Desktop)

3. **Checklist de Testing**:
   - [ ] Layout no se rompe en ningún breakpoint
   - [ ] Texto legible en todos los tamaños
   - [ ] Botones accesibles con touch
   - [ ] Navegación funcional
   - [ ] Imágenes se escalan correctamente
   - [ ] Performance adecuada en móvil

---

**💡 Recuerda:** El responsive design no es solo sobre CSS, también considera la experiencia de usuario, performance y accesibilidad en cada dispositivo.
