import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
