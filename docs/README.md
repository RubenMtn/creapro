# 📚 Índice de Documentación - Creasia

Bienvenido al centro de documentación del proyecto Creasia. Aquí encontrarás toda la información necesaria para desarrollar, mantener y extender la aplicación.

## 🗂️ Documentos Disponibles

### 📖 Documentación Principal
- **[README Principal](../README_NEW.md)** - Información general del proyecto
- **[Changelog](./CHANGELOG.md)** - Historial de cambios y versiones

### 🎨 Guías de Desarrollo
- **[Guía SCSS](./SCSS_GUIDE.md)** - Sistema de estilos, variables y mixins
- **[Guía Responsive](./RESPONSIVE_GUIDE.md)** - Configuración mobile-first y breakpoints
- **[Gestión de Assets](./ASSETS_GUIDE.md)** - Organización y optimización de recursos

## 🚀 Inicio Rápido

Si eres nuevo en el proyecto, sigue este orden de lectura:

1. 📋 **[README Principal](../README_NEW.md)** - Para entender qué es el proyecto
2. 🎯 **[Guía Responsive](./RESPONSIVE_GUIDE.md)** - Para entender la filosofía mobile-first
3. 🎨 **[Guía SCSS](./SCSS_GUIDE.md)** - Para usar el sistema de estilos
4. 📦 **[Gestión de Assets](./ASSETS_GUIDE.md)** - Para organizar recursos
5. 📝 **[Changelog](./CHANGELOG.md)** - Para conocer la evolución del proyecto

## 📋 Resumen por Secciones

### 🛠 Configuración Técnica
- **Angular 19** con TypeScript 5.7.2
- **SCSS** como preprocesador CSS
- **SSR** habilitado con Angular Universal
- **Mobile-First** responsive design

### 📱 Sistema Responsive
- **Móvil**: hasta 768px
- **Tablet**: 769px - 1024px  
- **Desktop**: 1025px en adelante

### 🎨 Arquitectura SCSS
- Variables centralizadas en `_variables.scss`
- Mixins reutilizables en `_mixins.scss`
- Importación automática en todos los componentes

### 📦 Gestión de Assets
- Estructura organizada por tipo y contexto
- Optimización automática en build
- Soporte para múltiples formatos

## 🔍 Búsqueda Rápida

### Necesito saber cómo...

| Necesidad | Documento | Sección |
|-----------|-----------|---------|
| Usar breakpoints responsive | [Guía Responsive](./RESPONSIVE_GUIDE.md) | Sistema de Mixins |
| Definir variables de color | [Guía SCSS](./SCSS_GUIDE.md) | Variables Globales |
| Organizar imágenes | [Gestión de Assets](./ASSETS_GUIDE.md) | Estructura de Assets |
| Crear componentes responsive | [Guía Responsive](./RESPONSIVE_GUIDE.md) | Ejemplos Prácticos |
| Usar mixins de SCSS | [Guía SCSS](./SCSS_GUIDE.md) | Mixins Disponibles |
| Optimizar assets | [Gestión de Assets](./ASSETS_GUIDE.md) | Optimización |
| Ver historial de cambios | [Changelog](./CHANGELOG.md) | - |

### Referencia Rápida

```scss
// Breakpoints
@include mobile { /* hasta 768px */ }
@include tablet { /* 769px - 1024px */ }
@include desktop { /* 1025px+ */ }

// Variables principales
$color-primary: #000000;
$color-secondary: #ffffff;
$font-size-md: 1rem;
$spacing-md: 1rem;

// Assets
src="assets/images/logo.svg"
background-image: url('assets/images/bg.jpg');
```

## 📝 Contribuir a la Documentación

### Estilo de Documentación

- **Usa emojis** para hacer la documentación más visual
- **Incluye ejemplos** de código cuando sea posible
- **Mantén secciones cortas** y enfocadas
- **Usa tablas** para comparaciones y referencias
- **Añade enlaces** entre documentos relacionados

### Estructura de Documentos

```markdown
# 📚 Título del Documento

Descripción breve del contenido.

## 📋 Tabla de Contenidos
- [Sección 1](#sección-1)
- [Sección 2](#sección-2)

## 🎯 Sección Principal

Contenido principal con ejemplos.

### Subsección

Detalles específicos.

## 💡 Mejores Prácticas

Tips y recomendaciones.

---

**💡 Tip final**
```

### Proceso de Actualización

1. **Identifica** qué documentación necesita actualización
2. **Actualiza** el contenido manteniendo el formato
3. **Revisa** que los enlaces funcionen correctamente
4. **Actualiza** el Changelog si es necesario
5. **Revisa** que este índice esté al día

## 🗃️ Archivos de Documentación

```
docs/
├── README.md              # Este archivo (índice)
├── CHANGELOG.md           # Historial de cambios
├── SCSS_GUIDE.md          # Guía de estilos SCSS
├── RESPONSIVE_GUIDE.md    # Guía responsive design
└── ASSETS_GUIDE.md        # Gestión de assets
```

## 📞 Contacto y Soporte

Si tienes preguntas sobre la documentación o el proyecto:

- 📧 Crea un issue en el repositorio
- 💬 Consulta en las discusiones del proyecto
- 📝 Sugiere mejoras en la documentación

---

**📚 Última actualización:** 2025-07-03  
**✍️ Mantenido por:** Equipo de desarrollo de Creasia
