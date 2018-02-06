import { Component, OnInit } from '@angular/core';
import { MonObj } from '../util/MonObj';

@Component({
  selector: 'app-col-left',
  templateUrl: './col-left.component.html',
  styleUrls: ['./col-left.component.css']
})
export class ColLeftComponent implements OnInit {
  TestObjet:MonObj;
  constructor() { }

  ngOnInit() {
    this.TestObjet = new MonObj();
    this.TestObjet.libelle = 'Colonne de gauche par classe';
    this.TestObjet.valeur = 42;
    //console.log(this.TestObjet);
  }
}
