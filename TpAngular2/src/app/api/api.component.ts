import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})

@Injectable()
export class ApiComponent implements OnInit {
  path=`http://ville.api.isen-ouest.fr/api/list/countries`;
  constructor(private http: Http){}
  valueRetour: any;
  //methode appelée à chaque appel du composant
  ngAfterViewInit(){
    this.doGET();
  }
  // methode réalisant l'appel au web service et insérant la réponse
  // dans une variable définie avant
  doGET() {
    console.log("GET");
    let url = this.path;
    //this.http.get(url).subscribe(res => console.log(res.json()));
    this.http.get(url).subscribe(res => this.valueRetour = res.json());
  }
}
