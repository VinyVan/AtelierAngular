export class Product{
    id:number;
    libelle:string;
    price:number;
    quantity:number
    isChecked:boolean
    public constructor(id:number,libelle:string,price:number,quantity?:number){
        this.id=id;
        this.libelle=libelle;
        this.price=price
        this.quantity=quantity?quantity:0;
        this.isChecked=false;
    }
}