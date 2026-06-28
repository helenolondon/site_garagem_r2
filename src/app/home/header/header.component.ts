import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { GoogleAnalyticsService } from '../../google-analytics.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  whatsappUrl = 'https://wa.me/5527997332033?text=Olá!%20Gostaria%20de%20agendar%20um%20serviço.';

  constructor(private router: Router, private gaService: GoogleAnalyticsService) {}

  navigateToPromocoes(): void {
    this.router.navigate(['/promocoes']);
  }

  navigateToDefault(): void {
    this.router.navigate(['/pricing']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  agendarWhatsApp(): void {
    this.gaService.trackEvent('conversion', {
      'send_to': 'AW-18241251753/CONVERSION_ID',
      'value': '0',
      'currency': 'BRL'
    });
    window.open(this.whatsappUrl, '_blank');
  }

  scrollToSection(sectionId: string): void {
    // Se não estiver na home, navega para home primeiro
    if (this.router.url !== '/pricing') {
      this.router.navigate(['/pricing']).then(() => {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      });
    } else {
      // Se já estiver na home, apenas faz o scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
