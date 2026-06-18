import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    {
      icon: '✨',
      title: 'Polimento',
      desc: 'Correção de riscos e pequenos danos na pintura. Devolve o brilho da pintura.',
      img: 'assets/service-polish.jpg'
    },
    {
      icon: '✨',
      title: 'Micro pintura',
      desc: 'Correção parcial de riscos que atravessaram o verniz. Devolve o aspecto de novo do veículo.',
      img: 'assets/service-micro-pintura.png'
    },
    {
      icon: '✨',
      title: 'Pequenos reparos',
      desc: 'Correção de pequenos danos que acontecem no dia a dia.',
      img: 'assets/service-pequenos-retoques.png'
    },
    {
      icon: '🚗',
      title: 'Higienização Interna',
      desc: 'Limpeza profunda de bancos, carpetes, teto e plásticos. Eliminação de odores.',
      img: 'assets/service-interior.jpg'
    },
    {
      icon: '🚗',
      title: 'Restauração de peças internas',
      desc: 'Restauração de peças internas como painel, portas, etc.',
      img: 'assets/service-pintura-interna.png'
    },
    {
      icon: '🚗',
      title: 'Restauração de farois',
      desc: 'Restauração completa de farois',
      img: 'assets/service-restauracao-farol.png'
    },
    {
      icon: '💧',
      title: 'Lavagem Detalhada',
      desc: 'Lavagem técnica com shampoo neutro, descontaminação e secagem com microfibra premium.',
      img: 'assets/hero-car.jpg'
    },
    {
      icon: '🛡️',
      title: 'Vitrificação',
      desc: 'Proteção cerâmica de longa duração. Repele água, sujeira e protege contra UV.',
      img: 'assets/service-ceramic.jpg'
    }
  ];
}
