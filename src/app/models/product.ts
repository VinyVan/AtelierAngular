export class Product{
    id:number;
    libelle:string;
    price:number;
    quantity:number=0

    public constructor(id:number,libelle:string,price:number,quantity?:number){
        this.id=id;
        this.libelle=libelle;
        this.price=price
        this.quantity=quantity?quantity:0;
    }
}