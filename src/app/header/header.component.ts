import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  headerLinks: HeaderLink[] = [
    { path: '/dictee', text: 'Dictée' },
    { path: '/progression', text: 'Progression' },
    { path: '/grammaire', text: 'Grammaire' },
    { path: '/vocabulaire', text: 'Vocabulaire' },
    { path: '/culturegenerale', text: 'Culture Générale' },
    { path: '/abonnement', text: 'Abonnement' },
    { path: '/connexion', text: 'Connexion' }
  ];

  getCurrentPath(): string {
    return this.location.path();
  }

  constructor(private location: Location) { }

  ngOnInit() { }

}

class HeaderLink {
  path: string;
  text: string;
}
