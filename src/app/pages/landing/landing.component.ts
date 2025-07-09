import { Component, ElementRef, ViewChild, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements AfterViewInit {
  @ViewChild('mainVideo', { static: false }) videoElement!: ElementRef<HTMLVideoElement>;
  
  // Estados para controlar la transición
  showVideo = true;
  showImage = false;
  showPoint = false; // Nuevo estado para controlar cuándo mostrar el punto
  showLine = false; // Nuevo estado para controlar cuándo mostrar la línea
  
  // Propiedades para el control del ojo izquierdo
  // Estas son coordenadas relativas a la imagen (0-100%)
  ojoIzquierdoX = 40; // Un pelín más a la derecha
  ojoIzquierdoY = 29; // Un pelín más arriba
  
  // Propiedades para el control del ojo derecho
  // Estas son coordenadas relativas a la imagen (0-100%)
  ojoDerechoX = 60; // Posición del ojo derecho
  ojoDerechoY = 29; // Misma altura que el ojo izquierdo
  
  // Contenido de la landing page
  heroTitle = 'Bienvenido a Creasia';
  heroSubtitle = 'Creando experiencias digitales excepcionales';
  heroDescription = 'Descubre una nueva forma de experimentar la web con nuestro enfoque innovador y diseño responsive.';
  
  // Características o secciones de la landing
  features = [
    {
      title: 'Responsive Design',
      description: 'Adaptado perfectamente a móvil, tablet y desktop',
      icon: '📱'
    },
    {
      title: 'Performance',
      description: 'Optimizado para la máxima velocidad de carga',
      icon: '⚡'
    },
    {
      title: 'Modern Tech',
      description: 'Construido con Angular 19 y las últimas tecnologías',
      icon: '🚀'
    }
  ];
  
  ngAfterViewInit() {
    // Dar tiempo para que el DOM esté completamente cargado
    setTimeout(() => {
      this.setupVideoEvents();
      // Actualizar la posición de los puntos cuando la imagen esté cargada
      this.updatePointsContainer();
      // Iniciar sincronización periódica - REACTIVADO para sincronización correcta
      this.startSyncInterval();
    }, 100);
    
    // Actualizar la posición en cambios de tamaño de ventana
    if (isPlatformBrowser(this.platformId)) {
      let resizeTimeout: any;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          this.updatePointsContainer();
        }, 150); // Throttle balanceado para responsive sin trompicones
      });
    }
  }
  
  private setupVideoEvents() {
    // Configurar el evento cuando el video termine
    if (this.videoElement && this.videoElement.nativeElement) {
      const video = this.videoElement.nativeElement;
      
      // Asegurarse de que el video no esté en loop
      video.loop = false;
      
      // Evento principal cuando el video termine
      video.addEventListener('ended', () => {
        this.onVideoEnded();
      });
      
      // Backup: si el video es muy corto, usar timeupdate
      video.addEventListener('timeupdate', () => {
        if (video.duration && video.currentTime >= video.duration - 0.1) {
          this.onVideoEnded();
        }
      });
    }
  }
  
  public onVideoEnded() {
    // Evitar múltiples ejecuciones
    if (!this.showVideo) return;
    
    // Iniciar fade out del video
    this.showVideo = false;
    
    // Mostrar la imagen inmediatamente (pero invisible)
    this.showImage = true;
    
    // Asegurar que las dimensiones coincidan exactamente
    this.syncImageDimensions();
    
    // Después de un pequeño delay, hacer fade in de la imagen
    setTimeout(() => {
      this.triggerFadeIn();
      // Actualizar posición de los puntos cuando aparezca la imagen
      this.updatePointsContainer();
    }, 50); // Pequeño delay para que se renderice
  }
  
  private triggerFadeIn() {
    // Forzar el fade in de la imagen principal
    const image = document.querySelector('.main-image') as HTMLImageElement;
    if (image) {
      image.classList.add('fade-in');
    }
    
    // Después de que la imagen termine completamente su fade-in, mostrar el punto
    // La imagen tiene 1.3s de fade in, así que esperamos que termine completamente + 200ms de margen
    setTimeout(() => {
      this.showPoint = true; // Ahora sí mostrar el punto
      
      // Pequeño delay adicional para que se renderice el punto antes de hacer fade-in
      setTimeout(() => {
        const referencePoints = document.querySelector('.reference-points') as HTMLDivElement;
        if (referencePoints) {
          referencePoints.classList.add('fade-in');
        }
        // Actualizar posición de los puntos cuando aparezcan
        setTimeout(() => {
          this.updatePointsContainer();
        }, 100);
      }, 50);
    }, 1500); // 1.3s (fade in imagen) + 200ms margen = 1.5s
    
    // Después de que el punto termine su fade-in, mostrar la línea
    // El punto tiene 1.5s de fade in + 1.5s de delay, así que esperamos 3.0s + 300ms
    setTimeout(() => {
      this.showLine = true; // Mostrar la línea (pero seguirá invisible por CSS)
      
      // Usar requestAnimationFrame para asegurar que se renderice correctamente
      requestAnimationFrame(() => {
        // Actualizar posición para asegurar que las variables CSS estén correctas
        this.updatePointsContainer();
        
        // Activar la animación después de que todo esté posicionado
        requestAnimationFrame(() => {
          const unifiedOverlay = document.querySelector('.unified-overlay') as HTMLDivElement;
          if (unifiedOverlay) {
            unifiedOverlay.classList.add('animate-line');
            
            // Después de que el cuadro de texto aparezca completamente, activar la animación inversa
            // El cuadro aparece con delay de 1.2s + 0.5s de duración = 1.7s total
            setTimeout(() => {
              unifiedOverlay.classList.add('reverse-line');
            }, 2200); // 1.7s (cuadro completo) + 0.5s pausa = 2.2s
          }
        });
      });
    }, 3300); // 3.0s (punto completo) + 300ms margen = 3.3s
  }
  
  private syncImageDimensions() {
    // Sincronizar dimensiones programáticamente para forzar el mismo tamaño
    if (this.videoElement) {
      const video = this.videoElement.nativeElement;
      const videoRect = video.getBoundingClientRect();
      
      // Buscar la imagen en el DOM
      const image = document.querySelector('.main-image') as HTMLImageElement;
      if (image) {
        // Aplicar las mismas dimensiones exactas FORZADAS
        image.style.width = `${videoRect.width}px !important`;
        image.style.height = `${videoRect.height}px !important`;
        image.style.left = `${videoRect.left}px !important`;
        image.style.top = `${videoRect.top}px !important`;
        image.style.objectFit = 'cover';
        image.style.objectPosition = 'center';
        
        // Asegurar que no se desborde
        image.style.maxWidth = `${videoRect.width}px`;
        image.style.maxHeight = `${videoRect.height}px`;
        image.style.overflow = 'hidden';
      }
    }
  }
  
  // Método para reiniciar la transición
  public resetTransition() {
    this.showVideo = true;
    this.showImage = false;
    this.showPoint = false; // Reiniciar también el estado del punto
    this.showLine = false; // Reiniciar también el estado de la línea
    
    // Limpiar las clases de animación de la línea
    const unifiedOverlay = document.querySelector('.unified-overlay') as HTMLDivElement;
    if (unifiedOverlay) {
      unifiedOverlay.classList.remove('animate-line', 'reverse-line');
    }
    
    // Limpiar las clases de fade-in (ya no hay contenedores separados)
    const image = document.querySelector('.main-image') as HTMLImageElement;
    if (image) {
      image.classList.remove('fade-in');
    }
    
    // Reiniciar el video
    if (this.videoElement) {
      this.videoElement.nativeElement.currentTime = 0;
      this.videoElement.nativeElement.play();
    }
  }
  
  private updatePointPosition() {
    // Solo ejecutar en el navegador, no en el servidor
    if (isPlatformBrowser(this.platformId)) {
      // Actualizar la posición del punto usando CSS custom properties
      const rootElement = document.documentElement;
      rootElement.style.setProperty('--ojo-izdo-x', `${this.ojoIzquierdoX}%`);
      rootElement.style.setProperty('--ojo-izdo-y', `${this.ojoIzquierdoY}%`);
      rootElement.style.setProperty('--ojo-derecho-x', `${this.ojoDerechoX}%`);
      rootElement.style.setProperty('--ojo-derecho-y', `${this.ojoDerechoY}%`);
    }
  }
  
  // Método para actualizar la posición del contenedor unificado
  private updatePointsContainer() {
    if (!isPlatformBrowser(this.platformId)) return;
    
    // Usar las dimensiones reales de la imagen visible
    const realImageBounds = this.calculateRealImageBounds();
    if (!realImageBounds) return;
    
    const unifiedOverlay = document.querySelector('.unified-overlay') as HTMLElement;
    if (unifiedOverlay) {
      // Posicionar el contenedor unificado exactamente sobre la imagen REAL
      unifiedOverlay.style.position = 'fixed';
      unifiedOverlay.style.left = `${realImageBounds.left}px`;
      unifiedOverlay.style.top = `${realImageBounds.top}px`;
      unifiedOverlay.style.width = `${realImageBounds.width}px`;
      unifiedOverlay.style.height = `${realImageBounds.height}px`;
    }
  }
  
  // Método para mantener la sincronización de forma periódica
  private startSyncInterval() {
    if (!isPlatformBrowser(this.platformId)) return;
    
    // Sincronizar cada 1 segundo cuando la imagen esté visible
    setInterval(() => {
      if (this.showImage && (this.showPoint || this.showLine)) { // Sincronizar cuando esté activo el punto o la línea
        this.updatePointsContainer();
      }
    }, 1000);
  }

  // Método para calcular las dimensiones reales de la imagen visible (no del contenedor)
  private calculateRealImageBounds() {
    if (!isPlatformBrowser(this.platformId)) return null;
    
    const image = document.querySelector('.main-image') as HTMLImageElement;
    if (!image) return null;
    
    // Obtener las dimensiones del contenedor de la imagen
    const containerRect = image.getBoundingClientRect();
    
    // Obtener las dimensiones naturales de la imagen
    const naturalWidth = image.naturalWidth;
    const naturalHeight = image.naturalHeight;
    
    if (naturalWidth === 0 || naturalHeight === 0) return null;
    
    // Calcular el aspect ratio de la imagen
    const imageAspectRatio = naturalWidth / naturalHeight;
    const containerAspectRatio = containerRect.width / containerRect.height;
    
    let realWidth, realHeight, offsetX, offsetY;
    
    // Con object-fit: contain, la imagen se escala para caber manteniendo aspect ratio
    if (imageAspectRatio > containerAspectRatio) {
      // La imagen es más ancha - se ajusta por ancho
      realWidth = containerRect.width;
      realHeight = containerRect.width / imageAspectRatio;
      offsetX = 0;
      offsetY = (containerRect.height - realHeight) / 2;
    } else {
      // La imagen es más alta - se ajusta por alto
      realHeight = containerRect.height;
      realWidth = containerRect.height * imageAspectRatio;
      offsetX = (containerRect.width - realWidth) / 2;
      offsetY = 0;
    }
    
    return {
      left: containerRect.left + offsetX,
      top: containerRect.top + offsetY,
      width: realWidth,
      height: realHeight
    };
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Inicializar las variables CSS para la posición del punto
    this.updatePointPosition();
  }
}
