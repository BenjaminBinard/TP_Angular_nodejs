import { Component, OnInit } from '@angular/core';
import { MonObj } from '../util/MonObj.ts';

@Component({
  selector: 'app-col-left',
  templateUrl: './col-left.component.html',
  styleUrls: ['./col-left.component.css']
})
export class ColLeftComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  texte = new MonObj();
  texte.libelle = "Colonne de gauche par classe";
}
