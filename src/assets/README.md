# Assets

Esta carpeta contiene todos los recursos estáticos de la aplicación.

## Estructura de carpetas:

- **images/**: Imágenes (.png, .jpg, .svg, .webp)
- **videos/**: Videos (.mp4, .webm, .avi)
- **fonts/**: Fuentes personalizadas (.woff, .woff2, .ttf)
- **icons/**: Iconos (.svg, .ico)
- **styles/**: Archivos SCSS adicionales (variables, mixins, etc.)
- **data/**: Archivos JSON, XML u otros datos estáticos
- **audio/**: Archivos de audio (.mp3, .wav, .ogg)

## Uso en Angular:

Para referenciar assets en tu código:
```typescript
// En componentes
imageSrc = 'assets/images/logo.png';

// En templates
<img src="assets/images/logo.png" alt="Logo">

// En SCSS
background-image: url('assets/images/background.jpg');
```

## Notas:

- Los assets se copian automáticamente al build
- Angular optimiza automáticamente las imágenes en producción
- Usa formatos modernos como WebP cuando sea posible
