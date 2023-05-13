import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { product } from 'src/app/models/types';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'type', 'price','description','quantity'];
  products: product[];

  dataSource = new MatTableDataSource<product>([]);

  constructor(private prodcutService: ProductService) { }

  ngOnInit() {

    // get all product List
    this.getProducts();
  }


  getProducts(){
    this.prodcutService.getProducts().subscribe( {
      next: (data:product[])=>{
        this.products = data;
        this.dataSource = new MatTableDataSource(data);
      },
      error: ()=> this.products = []
     }
     )
  }

}
