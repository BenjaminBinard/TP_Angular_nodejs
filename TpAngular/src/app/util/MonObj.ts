export class MonObj{
  private _libelle : string;
  private _valeur : number;

  get libelle(): string{
    return this._libelle;
  }

  set libelle(newLibelle:string){
    this._libelle = newLibelle;
  }

  get valeur():number{
    return this._valeur;
  }

  set valeur(newValeur:number){
    this._valeur = newValeur;
  }
}
