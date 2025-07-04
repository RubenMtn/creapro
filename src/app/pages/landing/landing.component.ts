import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
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
  
  constructor() {
    // Lógica de inicialización si es necesaria
  }
}
