import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface FooterLink {
  label: string;
  route: string;
  external?: boolean;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  // Links del footer - fácil de configurar y mantener
  footerLinks: FooterLink[] = [
    { label: 'Inicio', route: '/' },
    { label: 'Acerca de', route: '/about' },
    { label: 'Servicios', route: '/services' },
    { label: 'Contacto', route: '/contact' },
    { label: 'Política de Privacidad', route: '/privacy' },
    { label: 'Términos de Uso', route: '/terms' }
  ];
  
  // Método para manejar clicks en enlaces externos
  handleExternalLink(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
