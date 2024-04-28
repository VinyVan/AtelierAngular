import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/modules/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements AfterViewInit,OnInit{
   dataSource= new MatTableDataSource([
      {id:1,libelle:"stylo",price:45,quantity:23,isChecked:false},
      {id:2,libelle:"cahier",price:40,quantity:2,isChecked:false},
      {id:3,libelle:"livre",price:87,quantity:3,isChecked:false},
      {id:4,libelle:"gomme",price:98,quantity:14,isChecked:false},
      {id:5,libelle:"crayon",price:8,quantity:64,isChecked:false},
      {id:6,libelle:"feutre",price:38,quantity:4,isChecked:false},
      {id:7,libelle:"chiffon",price:62,quantity:6,isChecked:false},
      {id:8,libelle:"ardoise",price:62,quantity:6,isChecked:false},
    ])
    constructor(private productService:ProductService){
      
    }
    
    ngOnInit(): void {
      /* this.productService.getAll().subscribe(
        data=>{
          console.log(data);
          this.dataSource=new MatTableDataSource(data);
      }
      );
      this.dataSource.sort=this.sort; */
    }
    displayedColumns: string[] = ['id', 'libelle', 'price', 'quantity','check','edit','delete'];

    @ViewChild(MatSort)
    sort!:MatSort

    @ViewChild(MatPaginator)
    paginator!:MatPaginator
    
    ngAfterViewInit(): void {     
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;
  }

  applyFilter(event:Event){
    const value=(event.target as HTMLInputElement).value;
    this.dataSource.filter=value;
  }

  check(element:any){
    element.isChecked=!element.isChecked;
  }

  remove(element:any){
    ;
  }

}
