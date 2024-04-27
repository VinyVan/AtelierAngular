import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { delay } from 'rxjs';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {


  /* ngOnInit(): void {
    product=new Produc
  } */
  @Output()
  addNewProductEvent:EventEmitter<Product>=new EventEmitter()

  newProduct(id:string,libelle:string,price:string,quantity:string){
    console.log(id,"\n",libelle,"\n",price,"\n",quantity);
   var product:Product=new Product(Number.parseInt(id),libelle,Number.parseFloat(price),Number.parseInt(quantity))
   this.addNewProductEvent.emit(product);
   
  }
}
