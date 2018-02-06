import { Component, OnInit } from '@angular/core';
import { MonObj } from '../util/MonObj';
import { ActivatedRoute } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-recup',
  templateUrl: './recup.component.html',
  styleUrls: ['./recup.component.css']
})
export class RecupComponent implements OnInit {
  maValeur: any;
  monLibelle: any;
  ObjetFinal: MonObj;
  constructor(private maRoute: ActivatedRoute) { }

  ngOnInit(){
    ObjetFinal = new MonObj();
    this.maValeur = this.maRoute.snapshot.paramMap.get('valeur');
    this.monLibelle = this.maRoute.snapshot.paramMap.get('libelle');
    if(this.maValeur == null){
      console.log("Recup, on initialise à 0.");
      this.maValeur = 0;
      this.monLibelle = "test";
    }
    this.ObjetFinal.valeur = maValeur;
    this.ObjetFinal.libelle = monLibelle;
  }
  console.log(ObjetFinal);
}
