import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    }, 100);
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
    }, 50); // Pequeño delay para que se renderice
  }
  
  private triggerFadeIn() {
    // Forzar el fade in de la imagen principal
    const image = document.querySelector('.main-image') as HTMLImageElement;
    if (image) {
      image.classList.add('fade-in');
    }
    
    // Forzar el fade in de los puntos de referencia DESPUÉS de que la imagen termine
    // La imagen tiene 1.3s de fade in, así que esperamos 1.3s + 100ms de margen
    setTimeout(() => {
      const referencePoints = document.querySelector('.reference-points') as HTMLDivElement;
      if (referencePoints) {
        referencePoints.classList.add('fade-in');
      }
    }, 1400); // 1.3s (fade in imagen) + 100ms margen = 1.4s
    
    // Forzar el fade in de las líneas y cuadros DESPUÉS de que los puntos terminen
    // Los puntos tienen 1.5s de fade in + 1.4s de delay, así que esperamos 2.9s + 200ms
    setTimeout(() => {
      const infoLines = document.querySelector('.info-lines-container') as HTMLDivElement;
      if (infoLines) {
        infoLines.classList.add('fade-in');
      }
    }, 3100); // 2.9s (puntos completos) + 200ms margen = 3.1s
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
    
    // Reiniciar el video
    if (this.videoElement) {
      this.videoElement.nativeElement.currentTime = 0;
      this.videoElement.nativeElement.play();
    }
  }
  
  constructor() {
    // Lógica de inicialización si es necesaria
  }
}
