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
      icon: '💧',
      title: 'Lavagem Detalhada',
      desc: 'Lavagem técnica com shampoo neutro, descontaminação e secagem com microfibra premium.',
      img: 'assets/hero-car.jpg'
    },
    {
      icon: '✨',
      title: 'Micro pintura e pequenos reparos',
      desc: 'Correção de riscos e pequenos danos na pintura. Devolve o aspecto de novo da pintura.',
      img: 'assets/service-micro-pintura.png'
    },
    {
      icon: '🚗',
      title: 'Higienização Interna',
      desc: 'Limpeza profunda de bancos, carpetes, teto e plásticos. Eliminação de odores.',
      img: 'assets/service-interior.jpg'
    },
    {
      icon: '🛡️',
      title: 'Vitrificação',
      desc: 'Proteção cerâmica de longa duração. Repele água, sujeira e protege contra UV.',
      img: 'assets/service-ceramic.jpg'
    }
  ];
}
