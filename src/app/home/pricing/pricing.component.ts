import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleAnalyticsService } from '../../google-analytics.service';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {
  whatsappUrl = 'https://wa.me/5527997332033?text=Olá!%20Gostaria%20de%20agendar%20um%20serviço.';
  plans = [
    {
      name: 'Essencial',
      price: 'R$ 80',
      items: ['Lavagem externa detalhada', 'Pretinho nos pneus', 'Limpeza dos vidros', 'Aspiração simples']
    },
    {
      name: 'Premium',
      price: 'R$ 100',
      featured: true,
      items: ['Tudo do Essencial', 'Limpeza dos cantos de porta', 'Limpeza dos plásticos internos', 'Limpeza das caixas de roda', 'Aspiração completa']
    },
    {
      name: 'Premium Plus',
      price: 'R$ 140',
      featured: false,
      items: ['Tudo do Premium', 'Aplicação de cera em pasta']
    }
  ];

  constructor(private gaService: GoogleAnalyticsService) {}

  agendarPlano(plan: any): void {
    this.gaService.trackEvent('conversion', {
      'send_to': 'AW-18241251753/CONVERSION_ID',
      'value': plan.price.replace('R$ ', ''),
      'currency': 'BRL',
      'transaction_id': `plan_${plan.name}_${Date.now()}`
    });
    window.open(this.whatsappUrl, '_blank');
  }
}
