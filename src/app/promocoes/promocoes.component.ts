import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../home/header/header.component';
import { FooterComponent } from '../home/footer/footer.component';

@Component({
  selector: 'app-promocoes',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.css']
})
export class PromocoesComponent {
  whatsappUrl = 'https://wa.me/5527997332033?text=Olá!%20Gostaria%20de%20agendar%20uma%20promoção.';
  
  promocoes = [
    {
      id: 1,
      titulo: 'Polimento + aplicação de selante de pintura',
      descricao: 'Lavagem simples, descontaminação de pintura, aspiração completa e polimento da comercial com aplicação de selante.',
      precoOriginal: 'R$ 560,00',
      precoPromocional: 'R$ 392,00',
      desconto: '30% OFF',
      imagem: '/assets/service-polish.jpg'
    },
    {
      id: 2,
      titulo: 'Lavagem premium + cera em pasta',
      descricao: 'Lavagem externa detalhada, pretinho nos pneus, limpeza dos vidros, limpeza dos cantos de porta, limpeza dos plásticos internos, Limpeza das caixas de roda, aspiração completa',
      precoOriginal: 'R$ 140,00',
      precoPromocional: 'R$ 112,00',
      desconto: '20% OFF',
      imagem: '/assets/hero-car.jpg'
    },
    {
      id: 3,
      titulo: 'Restauração de Farol',
      descricao: 'Lixamento para remoção do amarelado e aplicação de vitrificador.',
      precoOriginal: 'R$ 350,00',
      precoPromocional: 'R$ 245,00',
      desconto: '30% OFF',
      imagem: '/assets/service-restauracao-farol.png'
    },
    {
      id: 4,
      titulo: 'Cristalização dos vidros',
      descricao: 'Descontaminação e cristalização dos vidros.',
      precoOriginal: 'R$ 150,00',
      precoPromocional: 'R$ 120,00',
      desconto: '20% OFF',
      imagem: '/assets/service-parabrisa.jpg'
    }
  ];

  agendarPromocao(promocao: any): void {
    const mensagem = `Olá! Gostaria de agendar a promoção: ${promocao.titulo} por ${promocao.precoPromocional}.`;
    const url = `${this.whatsappUrl}&text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  }
}
