export class MonObj{
  private libelle : string;
  private valeur : number;

  constructor(){

  }
  get libelle():string{
    return this.libelle;
  }

  set libelle(newLibelle:string){
    this.libelle = newLibelle;
  }

  get valeur():number{
    return this.valeur;
  }

  set valeur(newValeur:number){
    this.valeur = newValeur;
  }

}
