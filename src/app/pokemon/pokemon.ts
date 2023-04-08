export class Pokemon {
    id:number
    name: string ;
    picture: string ;
    types : string[];
    cp :number;
    created : Date;
    hp : number ;
  constructor(
    name:string ='Entrer  un nom',
    hp:number =0,
    cp:number= 10,
    picture: string = "Entrer une image",
    types: string[]= ['Normal'],
    created: Date =new Date()    
    )
    {  
  
  this.hp = hp;
  this.cp= cp;
  this.name = name;
  this.picture = picture;
  this.types = types;
  this.created= created;
  }
}