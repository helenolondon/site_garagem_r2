import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
}
