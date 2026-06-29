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
      name: 'Lavagem detalhada carro pequeno',
      price: 'R$ 80,00',
      featured: false,
      precoFixo: true,
      items: ['Lavagem externa detalhada', 'Limpeza dos pásticos internos', 'Limpeza dos vidros',
        'Aspiração', 'Pretinho nos pneus']
    },
    {
      name: 'Polimento',
      price: 'R$ 350,00',
      featured: false,
      precoFixo: false,
      items: ['Limpeza externa detalhada', 'Limpeza interna simples', 'Descontaminação de pintura',
        'Remoção de até 80% dos riscos', 'Aplicação de cera em pasta']
    },
    {
      name: 'Revitalização de farol',
      price: 'R$ 200,00',
      featured: false,
      precoFixo: false,
      items: ['Polimento do farol', 'Remoção de amarelado', 'Aplicação de vitrificador', 'Garantia de 1 ano']
    },
    {
      name: 'Restauração de farol',
      price: 'R$ 350,00',
      featured: false,
      precoFixo: false,
      items: ['Polimento do farol', 'Remoção do amarelado', 'Aplicação de proteção definitiva de alta qualidade', 'Garantia de 2 anos']
    },
    {
      name: 'Cristalização de vidros',
      price: 'R$ 150,00',
      featured: false,
      precoFixo: true,
      items: ['Descontaminação dos vidros', 'Aplicação de cristalizador']
    },
    {
      name: 'Higienização interna',
      price: 'R$ 300,00',
      featured: false,
      precoFixo: true,
      items: ['Limpeza interna detalhada', 'Aplicação de hidratante nos plásticos', 'Limpeza dos bancos',
        'Aspiração completa']
    },
  ];

  constructor(private gaService: GoogleAnalyticsService) {}

  agendarPlano(plan: any): void {
    this.gaService.trackEvent('conversion', {
      'send_to': 'AW-18241251753/CONVERSION_ID',
      'value': plan.price.replace('R$ ', ''),
      'currency': 'BRL',
      'transaction_id': `plan_${plan.name}_${Date.now()}`
    });

    const mensagem = plan.precoFixo
      ? `Olá! Gostaria de agendar o serviço: ${plan.name} por ${plan.price}.`
      : `Olá! Gostaria de solicitar um orçamento para: ${plan.name}.`;
    const url = `https://wa.me/5527997332033?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  }
}
