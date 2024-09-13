import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  doencas = "Doenças";
  noticias = "Notícias";
  reclamacoes = "Reclamações";
  login = "Login"
}
