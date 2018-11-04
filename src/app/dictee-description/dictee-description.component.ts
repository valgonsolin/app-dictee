import { Component, OnInit, Input } from '@angular/core';
import { Dictee } from '../dictee';

@Component({
  selector: 'app-dictee-description',
  templateUrl: './dictee-description.component.html',
  styleUrls: ['./dictee-description.component.css']
})

export class DicteeDescriptionComponent implements OnInit {

  @Input() dictee: Dictee;

  constructor() { }

  ngOnInit() {
  }

}
