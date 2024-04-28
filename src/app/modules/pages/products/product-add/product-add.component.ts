import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Route, RouterLink } from '@angular/router';
import { delay } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/modules/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit{


  constructor(private productService:ProductService){}

  product!:Product;
  ngOnInit(): void {
    this.product=new Product(1,"",0,0);
  }

  

  onSubmit(){
    this.productService.add(this.product).subscribe(
      data=>{console.log("Ok",data)},
      error=>{console.log("Erreur")}
    )
    }
}
