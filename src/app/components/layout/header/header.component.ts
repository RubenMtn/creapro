import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  
  ngOnInit() {
    // Solo ejecutar en el navegador, no en el servidor
    if (isPlatformBrowser(this.platformId)) {
      // Hacer fade in del logo después de un pequeño delay
      setTimeout(() => {
        this.triggerLogoFadeIn();
      }, 100); // 100ms de delay para que se vea más natural
    }
  }
  
  private triggerLogoFadeIn() {
    const logo = document.querySelector('.header__logo') as HTMLImageElement;
    if (logo) {
      logo.classList.add('fade-in');
    }
  }
}
