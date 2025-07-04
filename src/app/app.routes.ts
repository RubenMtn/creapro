import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';

export const routes: Routes = [
  // Ruta principal - Landing Page
  { 
    path: '', 
    component: LandingComponent,
    title: 'Creasia - Inicio'
  },
  
  // Rutas futuras (preparadas para lazy loading)
  // {
  //   path: 'about',
  //   loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
  //   title: 'Creasia - Acerca de'
  // },
  // {
  //   path: 'services',
  //   loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent),
  //   title: 'Creasia - Servicios'
  // },
  // {
  //   path: 'contact',
  //   loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
  //   title: 'Creasia - Contacto'
  // },
  
  // Redirección por defecto
  { 
    path: '**', 
    redirectTo: '', 
    pathMatch: 'full' 
  }
];
