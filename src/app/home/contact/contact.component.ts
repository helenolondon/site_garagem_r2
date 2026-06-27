import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleAnalyticsService } from '../../google-analytics.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  whatsappUrl = 'https://wa.me/5527997332033?text=Olá!%20Gostaria%20de%20agendar%20um%20serviço.';
  contactItems = [
    { icon: '📍', title: 'Endereço', text: 'Rua Rosa de Prata, 480, Novo México, Vila Velha - ES' },
    { icon: '🕐', title: 'Horário', text: 'Sáb e Dom · 08h às 18h' },
    { icon: '📞', title: 'Telefone', text: '(27) 99733-2033' }
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
}
