# 🎨 Creasia - Proyecto Angular 19 Responsive

Una aplicación web moderna construida con **Angular 19** y **SCSS**, diseñada con un enfoque **mobile-first** y breakpoints claramente definidos para móvil, tablet y desktop.

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Configuración Responsive](#-configuración-responsive)
- [Instalación](#-instalación)
- [Scripts Disponibles](#-scripts-disponibles)
- [Documentación](#-documentación)
- [Contribución](#-contribución)

## ✨ Características

- ✅ **Angular 19** - La versión más reciente con todas las mejoras
- ✅ **SCSS** configurado por defecto para todos los componentes
- ✅ **SSR (Server-Side Rendering)** habilitado con Angular Universal
- ✅ **Sistema Responsive** con breakpoints claros:
  - 📱 **Móvil**: hasta 768px
  - 📱 **Tablet**: 769px - 1024px
  - 💻 **Desktop**: 1025px en adelante
- ✅ **Arquitectura de Assets** organizada y escalable
- ✅ **Sistema de Variables y Mixins SCSS** centralizado
- ✅ **Mobile-First Design** como filosofía base

## 🛠 Tecnologías

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| Angular | 19.1.0 | Framework principal |
| Angular CLI | 19.1.8 | Herramientas de desarrollo |
| Angular SSR | 19.1.8 | Server-Side Rendering |
| TypeScript | 5.7.2 | Lenguaje de programación |
| SCSS | - | Preprocesador CSS |
| Express | 4.18.2 | Servidor para SSR |

## 📁 Estructura del Proyecto

```
creasia/
├── src/
│   ├── app/
│   │   ├── app.component.html     # Template principal
│   │   ├── app.component.scss     # Estilos del componente
│   │   ├── app.component.ts       # Lógica del componente
│   │   ├── app.config.ts          # Configuración de la app
│   │   └── app.routes.ts          # Rutas de la aplicación
│   ├── assets/                    # Recursos estáticos
│   │   ├── images/               # Imágenes (.png, .jpg, .svg)
│   │   ├── videos/               # Videos (.mp4, .webm)
│   │   ├── fonts/                # Fuentes personalizadas
│   │   ├── icons/                # Iconos (.svg, .ico)
│   │   ├── styles/               # SCSS globales
│   │   │   ├── _variables.scss   # Variables SCSS
│   │   │   └── _mixins.scss      # Mixins SCSS
│   │   ├── data/                 # JSON, XML, datos
│   │   └── audio/                # Archivos de audio
│   ├── styles.scss               # Estilos globales
│   ├── index.html                # HTML principal
│   └── main.ts                   # Punto de entrada
├── docs/                         # Documentación
├── angular.json                  # Configuración Angular
├── package.json                  # Dependencias
└── README.md                     # Este archivo
```

## 📱 Configuración Responsive

### Breakpoints Definidos

```scss
// Variables en _variables.scss
$breakpoint-mobile: 768px;    // Hasta 768px
$breakpoint-tablet: 1024px;   // 769px - 1024px  
$breakpoint-desktop: 1025px;  // 1025px en adelante
```

### Mixins Disponibles

```scss
// Uso en componentes
.mi-componente {
  // Estilos base (mobile-first)
  font-size: 1rem;
  
  @include tablet {
    font-size: 1.2rem;
  }
  
  @include desktop {
    font-size: 1.5rem;
  }
}
```

### Clases Utilitarias

```html
<!-- Ocultar en dispositivos específicos -->
<div class="hide-mobile">Solo visible en tablet/desktop</div>
<div class="hide-tablet">Oculto en tablet</div>
<div class="hide-desktop">Oculto en desktop</div>

<!-- Mostrar solo en dispositivos específicos -->
<div class="show-mobile-only">Solo móvil</div>
<div class="show-tablet-only">Solo tablet</div>
<div class="show-desktop-only">Solo desktop</div>
```

## 🚀 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd creasia
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   npm start
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:4200
   ```

## 📜 Scripts Disponibles

| Script | Comando | Descripción |
|--------|---------|-------------|
| Desarrollo | `npm start` | Inicia servidor de desarrollo |
| Build | `npm run build` | Construye para producción |
| Tests | `npm test` | Ejecuta las pruebas |
| Watch | `npm run watch` | Build en modo watch |
| SSR | `npm run serve:ssr:creasia` | Servidor SSR |

## 📚 Documentación

- [Guía de Estilos SCSS](./docs/SCSS_GUIDE.md)
- [Configuración Responsive](./docs/RESPONSIVE_GUIDE.md)
- [Gestión de Assets](./docs/ASSETS_GUIDE.md)
- [Changelog](./docs/CHANGELOG.md)

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Notas Importantes

- **Mobile-First**: Todos los estilos se escriben primero para móvil
- **SCSS**: Configurado automáticamente para nuevos componentes
- **Assets**: Ubicados en `src/assets/` con estructura organizada
- **Variables**: Centralizadas en `_variables.scss`
- **Mixins**: Disponibles globalmente para todos los componentes

---

**Desarrollado con ❤️ usando Angular 19**
