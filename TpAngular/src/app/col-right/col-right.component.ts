import { Component, OnInit, Input } from '@angular/core';
import { MonObj } from '../util/MonObj';

@Component({
  selector: 'app-col-right',
  templateUrl: './col-right.component.html',
  styleUrls: ['./col-right.component.css']
})
export class ColRightComponent implements OnInit {
  TestObjet: MonObj;
  passVar: string;
  constructor() { }

  ngOnInit() {
    this.TestObjet = new MonObj();
    this.TestObjet.libelle = 'Colonne de droite par classe';
    this.TestObjet.valeur = 42;
  }
  @Input() maPropImport: any;
}
