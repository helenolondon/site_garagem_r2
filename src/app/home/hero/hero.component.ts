import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleAnalyticsService } from '../../google-analytics.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  whatsappUrl = 'https://wa.me/5527997332033?text=Olá!%20Gostaria%20de%20agendar%20um%20serviço.';
  stats = [
    {  },
    { n: '3h', l: 'Tempo médio' },
    {  }
  ];

  constructor(private gaService: GoogleAnalyticsService) {}

  agendarWhatsApp(): void {
    this.gaService.trackEvent('conversion', {
      'send_to': 'AW-18241251753/CONVERSION_ID',
      'value': '0',
      'currency': 'BRL'
    });
    window.open(this.whatsappUrl, '_blank');
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
