import { Component, OnInit } from '@angular/core';
import { Dictee } from '../dictee';

@Component({
  selector: 'app-dictee',
  templateUrl: './dictee.component.html',
  styleUrls: ['./dictee.component.css']
})
export class DicteeComponent implements OnInit {

  reponse: string;

  currentDictee: Dictee = {
    titre: 'Bonjour',
    auteur: 'Pietro',
    description: 'Une dictée très basique pour tester',
    texte: 'Bonjour je m\'appelle Pietro. Je suis Italien et j\'ai vingt ans',
    difficulte: 1
  };

  remplaceEspace(texte: string): string {
    if (typeof texte !== 'undefined') {
      return texte.replace(new RegExp(' ', 'g'), ' '); // espace insecable
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
