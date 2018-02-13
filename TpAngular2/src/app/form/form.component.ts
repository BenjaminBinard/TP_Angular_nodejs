import { Component, OnInit } from '@angular/core';
import { Formulaire }    from '/Formulaire';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  types = ['Homme', 'Femme','Autre','Vegan'];

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log("DONNEES ENREGISTREES");
  }

  constructor() { }

  ngOnInit() {


  }

}
